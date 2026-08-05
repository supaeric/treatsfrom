import Stripe from "stripe";

let cached: Stripe | null = null;

export function getStripe(): Stripe {
  if (cached) return cached;
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) {
    throw new Error(
      "STRIPE_SECRET_KEY is not set. Add it in Vercel under Settings > Environment Variables."
    );
  }
  // No apiVersion pin: the SDK uses the version your account is set to.
  cached = new Stripe(key);
  return cached;
}
