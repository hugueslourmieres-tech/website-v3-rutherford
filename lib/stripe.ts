import Stripe from 'stripe';

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? '', {
  apiVersion: '2026-04-22.dahlia',
  typescript: true,
});

/**
 * Mapping from academy course slug → Stripe Price ID.
 * Fill these in via env vars once products are created in your Stripe dashboard.
 * Each premium course has a one-time price; the Pass has a one-time price (lifetime)
 * or a recurring price (subscription) — pick one model in your Stripe setup.
 */
export const STRIPE_PRICE_IDS: Record<string, string | undefined> = {
  'closed-loop-flagship': process.env.STRIPE_PRICE_CLOSED_LOOP,
  'measurecolor-production': process.env.STRIPE_PRICE_MEASURECOLOR_PRODUCTION,
  'measurecolor-reports': process.env.STRIPE_PRICE_MEASURECOLOR_REPORTS,
  'intellitrax2': process.env.STRIPE_PRICE_INTELLITRAX2,
  'colorloop-ai': process.env.STRIPE_PRICE_COLORLOOP_AI,
  'offset360': process.env.STRIPE_PRICE_OFFSET360,
  'academy-pass': process.env.STRIPE_PRICE_ACADEMY_PASS,
};

export function getPriceIdForCourse(slug: string): string | undefined {
  return STRIPE_PRICE_IDS[slug];
}
