import type { Country, Product } from "../types";
import { southAfrica } from "./south-africa";
import { unitedKingdom } from "./united-kingdom";
import { japan } from "./japan";

/**
 * ADDING A COUNTRY
 * 1. Create ./your-country.ts exporting a `Country` object.
 * 2. Import it and add it to this array.
 * That is the whole job. Routes, nav, sitemap, SEO and structured
 * data all read from here.
 */
export const countries: Country[] = [southAfrica, unitedKingdom, japan];

export const liveCountries = countries.filter((c) => c.status === "live");
export const upcomingCountries = countries.filter(
  (c) => c.status === "coming-soon"
);

export function getCountry(slug: string): Country | undefined {
  return countries.find((c) => c.slug === slug);
}

export function getProduct(
  countrySlug: string,
  productSlug: string
): { country: Country; product: Product } | undefined {
  const country = getCountry(countrySlug);
  const product = country?.products.find((p) => p.slug === productSlug);
  if (!country || !product) return undefined;
  return { country, product };
}

/** Every product with its country attached, used by cart and checkout. */
export function allProducts(): { country: Country; product: Product }[] {
  return countries.flatMap((country) =>
    country.products.map((product) => ({ country, product }))
  );
}

/** Stable cart/line-item id. */
export function productId(countrySlug: string, productSlug: string) {
  return `${countrySlug}/${productSlug}`;
}

export function findByProductId(id: string) {
  const [countrySlug, productSlug] = id.split("/");
  if (!countrySlug || !productSlug) return undefined;
  return getProduct(countrySlug, productSlug);
}
