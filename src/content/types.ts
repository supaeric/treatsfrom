export type Product = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  /** Second body paragraph. Adds depth and keyword coverage on product pages. */
  detail?: string;
  itemCount: number;
  weightGrams: number;
  priceCents: number;
  compareAtCents?: number;
  highlights: string[];
  contents: string[];
  allergens: string;
  featured?: boolean;
  /** Restrict to certain destinations, e.g. ["US"] for meat products. */
  shipsTo?: string[];
  /** Who this box suits. Rendered as a list and used for long-tail intent. */
  bestFor?: string[];
  /** Path under /public. Omit to render the built-in placeholder panel. */
  image?: string;
  imageAlt?: string;
};

export type Faq = { q: string; a: string };

export type Country = {
  slug: string;
  name: string;
  /** "South African". Used throughout copy and SEO. */
  demonym: string;
  /** Two-letter ISO code, used for the origin stamp. */
  code: string;
  status: "live" | "coming-soon";
  /** Accent colour that fills this country's blank in the wordmark. */
  accent: string;
  /** Text colour that sits legibly on the accent. */
  accentInk: string;
  blurb: string;
  story: string;
  /** Long-form body paragraphs for the country page. Each is one <p>. */
  intro: string[];
  /** Named products people search for. Drives long-tail and internal relevance. */
  brands: { name: string; note: string }[];
  seoTitle: string;
  seoDescription: string;
  heroVideo?: string;
  heroPoster?: string;
  products: Product[];
  faqs: Faq[];
};
