import { NextResponse, type NextRequest } from 'next/server';
import { createSupabaseAdminClient, createSupabaseServerClient } from '@/lib/supabase/server';
import { stripe, getPriceIdForCourse } from '@/lib/stripe';
import { ALL_COURSES } from '@/data/academy-courses';

export const dynamic = 'force-dynamic';

type Body = { courseSlug?: string; mode?: 'payment' | 'subscription' };

export async function POST(request: NextRequest) {
  const body = (await request.json().catch(() => ({}))) as Body;
  const courseSlug = body.courseSlug;
  const mode = body.mode ?? 'payment';

  if (!courseSlug) {
    return NextResponse.json({ error: 'missing courseSlug' }, { status: 400 });
  }

  // For per-course purchase, verify the slug exists and is premium
  if (courseSlug !== 'academy-pass') {
    const course = ALL_COURSES.find((c) => c.id === courseSlug);
    if (!course || course.tone !== 'premium') {
      return NextResponse.json({ error: 'invalid course' }, { status: 400 });
    }
  }

  const priceId = getPriceIdForCourse(courseSlug);
  if (!priceId) {
    return NextResponse.json({ error: 'price not configured for this course' }, { status: 500 });
  }

  const supabase = createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: 'sign in required' }, { status: 401 });
  }

  // Fetch / create Stripe customer
  const admin = createSupabaseAdminClient();
  const { data: profile } = await admin
    .from('profiles')
    .select('stripe_customer_id')
    .eq('id', user.id)
    .maybeSingle();

  let customerId = profile?.stripe_customer_id ?? null;
  if (!customerId) {
    const customer = await stripe.customers.create({
      email: user.email ?? undefined,
      metadata: { supabase_user_id: user.id },
    });
    customerId = customer.id;
    await admin.from('profiles').update({ stripe_customer_id: customerId }).eq('id', user.id);
  }

  const origin = new URL(request.url).origin;
  const session = await stripe.checkout.sessions.create({
    mode,
    customer: customerId,
    line_items: [{ price: priceId, quantity: 1 }],
    allow_promotion_codes: true,
    success_url: `${origin}/academy/${courseSlug === 'academy-pass' ? '' : courseSlug}?purchase=success`,
    cancel_url: `${origin}/academy/${courseSlug === 'academy-pass' ? '' : courseSlug}?purchase=cancel`,
    metadata: {
      supabase_user_id: user.id,
      course_slug: courseSlug,
    },
    ...(mode === 'subscription'
      ? {
          subscription_data: {
            metadata: {
              supabase_user_id: user.id,
              course_slug: courseSlug,
            },
          },
        }
      : {}),
  });

  return NextResponse.json({ url: session.url });
}
