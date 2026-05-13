import { NextResponse, type NextRequest } from 'next/server';
import type Stripe from 'stripe';
import { getStripe } from '@/lib/stripe';
import { createSupabaseAdminClient } from '@/lib/supabase/server';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

const WEBHOOK_SECRET = process.env.STRIPE_WEBHOOK_SECRET ?? '';

export async function POST(request: NextRequest) {
  const signature = request.headers.get('stripe-signature');
  if (!signature || !WEBHOOK_SECRET) {
    return NextResponse.json({ error: 'missing signature' }, { status: 400 });
  }

  const rawBody = await request.text();

  let event: Stripe.Event;
  try {
    event = getStripe().webhooks.constructEvent(rawBody, signature, WEBHOOK_SECRET);
  } catch (err) {
    const message = err instanceof Error ? err.message : 'invalid signature';
    return NextResponse.json({ error: message }, { status: 400 });
  }

  const admin = createSupabaseAdminClient();

  try {
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session;
        const userId = session.metadata?.supabase_user_id;
        const courseSlug = session.metadata?.course_slug;
        const customerId = typeof session.customer === 'string' ? session.customer : null;
        if (!userId || !courseSlug) break;

        if (session.mode === 'payment') {
          // One-time purchase of a single course (or lifetime pass)
          await admin.from('enrollments').upsert(
            {
              user_id: userId,
              course_slug: courseSlug === 'academy-pass' ? 'closed-loop-flagship' : courseSlug,
              source: 'purchase',
              stripe_session_id: session.id,
            },
            { onConflict: 'user_id,course_slug' }
          );

          // If the purchase was the Academy Pass (one-time lifetime), grant all 6 premium courses
          if (courseSlug === 'academy-pass') {
            const premiumSlugs = [
              'closed-loop-flagship',
              'measurecolor-production',
              'measurecolor-reports',
              'intellitrax2',
              'colorloop-ai',
              'offset360',
            ];
            for (const slug of premiumSlugs) {
              await admin.from('enrollments').upsert(
                {
                  user_id: userId,
                  course_slug: slug,
                  source: 'pass',
                  stripe_session_id: session.id,
                },
                { onConflict: 'user_id,course_slug' }
              );
            }
          }
        }

        if (customerId) {
          await admin.from('profiles').update({ stripe_customer_id: customerId }).eq('id', userId);
        }
        break;
      }

      case 'customer.subscription.created':
      case 'customer.subscription.updated': {
        const sub = event.data.object as Stripe.Subscription;
        const userId = sub.metadata?.supabase_user_id;
        const customerId = typeof sub.customer === 'string' ? sub.customer : null;
        if (!userId) break;

        // In the 2026-04-22 API, period end lives on subscription items
        const itemEnd = sub.items?.data?.[0]?.current_period_end;
        const periodEnd = typeof itemEnd === 'number' ? new Date(itemEnd * 1000).toISOString() : null;
        await admin.from('pass_subscriptions').upsert(
          {
            user_id: userId,
            stripe_subscription_id: sub.id,
            stripe_customer_id: customerId,
            status: sub.status,
            current_period_end: periodEnd,
            cancel_at: sub.cancel_at ? new Date(sub.cancel_at * 1000).toISOString() : null,
            updated_at: new Date().toISOString(),
          },
          { onConflict: 'stripe_subscription_id' }
        );
        break;
      }

      case 'customer.subscription.deleted': {
        const sub = event.data.object as Stripe.Subscription;
        await admin
          .from('pass_subscriptions')
          .update({ status: 'canceled', updated_at: new Date().toISOString() })
          .eq('stripe_subscription_id', sub.id);
        break;
      }

      default:
        // ignore other events
        break;
    }
  } catch (err) {
    const message = err instanceof Error ? err.message : 'webhook handler error';
    return NextResponse.json({ error: message }, { status: 500 });
  }

  return NextResponse.json({ received: true });
}
