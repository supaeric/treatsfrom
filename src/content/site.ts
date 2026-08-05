export const site = {
  name: "Treats From",
  domain: "treatsfrom.com",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://treatsfrom.com",
  tagline: "The snacks you grew up with, shipped from Ohio.",
  description:
    "Authentic imported snack boxes from South Africa and beyond, warehoused and shipped inside North America. No customs, no duties, no six-week wait.",
  email: "hello@treatsfrom.com",
  /** Free shipping threshold in cents, by destination. */
  freeShipping: { US: 3000, CA: 7500 } as Record<string, number>,
  shipping: {
    US: { label: "US Standard (2-4 business days)", cents: 695 },
    CA: { label: "Canada Standard (4-8 business days)", cents: 1495 },
  } as Record<string, { label: string; cents: number }>,
  /** ISO codes we ship to. Add "MX" here and in shipping/freeShipping to open Mexico. */
  shipsTo: ["US", "CA"],
  social: {
    instagram: "https://instagram.com/treatsfrom",
    tiktok: "https://tiktok.com/@treatsfrom",
  },
};
