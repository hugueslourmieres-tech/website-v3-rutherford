import Stripe from 'stripe';

let cached: Stripe | null = null;

/**
 * Lazy-instantiated Stripe client.
 * Don't call this at module-load — it throws if STRIPE_SECRET_KEY is missing.
 * Use only inside API route handlers (which run with env vars resolved).
 */
export function getStripe(): Stripe {
  if (cached) return cached;
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) {
    throw new Error('STRIPE_SECRET_KEY is not set');
  }
  cached = new Stripe(key, {
    apiVersion: '2026-04-22.dahlia',
    typescript: true,
  });
  return cached;
}

/**
 * Mapping from academy course slug → Stripe Price ID.
 * Fill these in via env vars once products are created in your Stripe dashboard.
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
