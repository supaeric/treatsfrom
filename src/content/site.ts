export const site = {
  name: "Treats From",
  domain: "treatsfrom.com",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://treatsfrom.com",
  tagline: "The snacks you actually miss, delivered across the US.",
  description:
    "Buy South African snacks online in the USA. Ouma Rusks, Peppermint Crisp, Simba and biltong, shipped from within the United States with nothing to declare and no duty to pay.",
  email: "hello@treatsfrom.com",

  /**
   * SINGLE SOURCE OF TRUTH FOR DELIVERY PROMISES.
   * Copy, Stripe checkout estimates and Product schema all read from here,
   * so a change updates everywhere at once. Keep these conservative: it is
   * far better to arrive early than to miss a stated window.
   */
  delivery: {
    US: { min: 7, max: 10, label: "7-10 business days" },
    CA: { min: 10, max: 14, label: "10-14 business days" },
  } as Record<string, { min: number; max: number; label: string }>,

  /** Free shipping threshold in cents, by destination. */
  freeShipping: { US: 3000, CA: 7500 } as Record<string, number>,

  shipping: {
    US: { label: "US Standard", cents: 695 },
    CA: { label: "Canada Standard", cents: 1495 },
  } as Record<string, { label: string; cents: number }>,

  /** ISO codes we ship to. Add "MX" here and above to open Mexico. */
  shipsTo: ["US", "CA"],

  social: {
    instagram: "https://instagram.com/treatsfrom",
    tiktok: "https://tiktok.com/@treatsfrom",
  },
};

/** "7-10 business days" for the given destination. */
export function deliveryLabel(code = "US") {
  return site.delivery[code]?.label ?? site.delivery.US.label;
}
