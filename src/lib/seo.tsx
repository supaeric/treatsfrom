import { site } from "@/content/site";
import type { Country, Faq, Product } from "@/content/types";
import { productId } from "@/content/countries";

/**
 * NOTE ON REVIEW SCHEMA
 * We deliberately emit no AggregateRating or Review markup. Structured data
 * describing reviews that do not exist is a manual-action risk in Google
 * Search, and rich-result eligibility is not worth it. Add it only once real
 * verified reviews are collected and displayed on the page itself.
 */

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "OnlineStore",
    "@id": `${site.url}/#organization`,
    name: site.name,
    url: site.url,
    email: site.email,
    description: site.description,
    currenciesAccepted: "USD",
    paymentAccepted: "Credit Card, Debit Card, Apple Pay, Google Pay",
    areaServed: [
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "Canada" },
    ],
    sameAs: [site.social.instagram, site.social.tiktok],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    name: site.name,
    url: site.url,
    publisher: { "@id": `${site.url}/#organization` },
    inLanguage: "en-US",
  };
}

export function productJsonLd(country: Country, product: Product) {
  const url = `${site.url}/treats-from/${country.slug}/${product.slug}`;
  const destinations = product.shipsTo ?? site.shipsTo;
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${url}#product`,
    name: product.name,
    description: product.description,
    sku: productId(country.slug, product.slug),
    category: `${country.demonym} Snack Box`,
    brand: { "@type": "Brand", name: site.name },
    countryOfOrigin: { "@type": "Country", name: country.name },
    weight: {
      "@type": "QuantitativeValue",
      value: product.weightGrams,
      unitCode: "GRM",
    },
    offers: {
      "@type": "Offer",
      url,
      priceCurrency: "USD",
      price: (product.priceCents / 100).toFixed(2),
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
      seller: { "@id": `${site.url}/#organization` },
      shippingDetails: destinations.map((code) => ({
        "@type": "OfferShippingDetails",
        shippingDestination: {
          "@type": "DefinedRegion",
          addressCountry: code,
        },
        deliveryTime: {
          "@type": "ShippingDeliveryTime",
          businessDays: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "https://schema.org/Monday",
              "https://schema.org/Tuesday",
              "https://schema.org/Wednesday",
              "https://schema.org/Thursday",
              "https://schema.org/Friday",
            ],
          },
          transitTime: {
            "@type": "QuantitativeValue",
            minValue: site.delivery[code]?.min ?? site.delivery.US.min,
            maxValue: site.delivery[code]?.max ?? site.delivery.US.max,
            unitCode: "DAY",
          },
        },
      })),
      hasMerchantReturnPolicy: {
        "@type": "MerchantReturnPolicy",
        applicableCountry: destinations,
        returnPolicyCategory:
          "https://schema.org/MerchantReturnFiniteReturnWindow",
        merchantReturnDays: 14,
        returnMethod: "https://schema.org/ReturnByMail",
        returnFees: "https://schema.org/FreeReturn",
      },
    },
  };
}

/** Collection pages. Helps Google and AI assistants read the range at once. */
export function itemListJsonLd(
  items: { country: Country; product: Product }[],
  listName: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: listName,
    numberOfItems: items.length,
    itemListElement: items.map(({ country, product }, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${site.url}/treats-from/${country.slug}/${product.slug}`,
      name: product.name,
    })),
  };
}

export function collectionPageJsonLd(opts: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: opts.name,
    description: opts.description,
    url: `${site.url}${opts.path}`,
    isPartOf: { "@id": `${site.url}/#website` },
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${site.url}${item.path}`,
    })),
  };
}

export function faqJsonLd(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
