import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { allProducts, getProduct } from "@/content/countries";
import { money, weight } from "@/lib/format";
import { site, deliveryLabel } from "@/content/site";
import AddToCart from "@/components/AddToCart";
import BoxImage from "@/components/BoxImage";
import ProductCard from "@/components/ProductCard";
import { JsonLd, breadcrumbJsonLd, productJsonLd } from "@/lib/seo";

type Params = { params: Promise<{ country: string; product: string }> };

export function generateStaticParams() {
  return allProducts().map(({ country, product }) => ({
    country: country.slug,
    product: product.slug,
  }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { country: cSlug, product: pSlug } = await params;
  const hit = getProduct(cSlug, pSlug);
  if (!hit) return {};
  const { country, product } = hit;
  const title = `${product.name} | ${product.itemCount} ${country.demonym} Snacks Delivered in the USA`;
  const description = `${product.tagline} ${product.itemCount} ${country.demonym} snacks shipped from within the US in 7-10 days. No customs form, no import duty.`;
  return {
    title,
    description,
    alternates: {
      canonical: `/treats-from/${country.slug}/${product.slug}`,
    },
    openGraph: {
      type: "website",
      title,
      description,
      url: `/treats-from/${country.slug}/${product.slug}`,
    },
  };
}

export default async function ProductPage({ params }: Params) {
  const { country: cSlug, product: pSlug } = await params;
  const hit = getProduct(cSlug, pSlug);
  if (!hit) notFound();
  const { country, product } = hit;

  const related = country.products.filter((p) => p.slug !== product.slug);
  const destinations = product.shipsTo ?? site.shipsTo;

  return (
    <>
      <JsonLd data={productJsonLd(country, product)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Shop all", path: "/treats-from" },
          { name: country.name, path: `/treats-from/${country.slug}` },
          {
            name: product.name,
            path: `/treats-from/${country.slug}/${product.slug}`,
          },
        ])}
      />

      <div className="shell py-8">
        <nav aria-label="Breadcrumb" className="label text-muted">
          <Link href="/" className="hover:text-post">
            Home
          </Link>
          <span aria-hidden> / </span>
          <Link href={`/treats-from/${country.slug}`} className="hover:text-post">
            {country.name}
          </Link>
          <span aria-hidden> / </span>
          <span aria-current="page">{product.name}</span>
        </nav>
      </div>

      <div className="shell grid gap-10 pb-16 lg:grid-cols-2 lg:gap-16">
        <div className="relative aspect-[4/5] overflow-hidden border-2 border-ink">
          <BoxImage
            country={country}
            product={product}
            priority
            sizes="(max-width: 1024px) 96vw, 46vw"
          />
        </div>

        <div>
          <p className="label text-post">
            {country.code} · {country.demonym}
          </p>
          <h1 className="display mt-3 text-4xl sm:text-5xl">{product.name}</h1>
          <p className="mt-3 text-lg text-muted">{product.tagline}</p>

          <div className="mt-6 flex items-baseline gap-3">
            <span className="font-stamp text-3xl font-bold">
              {money(product.priceCents)}
            </span>
            {product.compareAtCents && (
              <span className="font-stamp text-lg text-muted line-through">
                {money(product.compareAtCents)}
              </span>
            )}
          </div>

          <p className="label mt-2 text-muted">
            {product.priceCents >= site.freeShipping.US
              ? "Ships free in the US"
              : `${money(site.freeShipping.US - product.priceCents)} more for free US shipping`}
          </p>

          <div className="mt-7">
            <AddToCart countrySlug={country.slug} productSlug={product.slug} />
          </div>

          <ul className="mt-9 space-y-3 border-t-2 border-ink pt-7">
            {product.highlights.map((h) => (
              <li key={h} className="flex gap-3">
                <span aria-hidden className="text-post">
                  &#9679;
                </span>
                <span>{h}</span>
              </li>
            ))}
          </ul>

          <p className="mt-8 text-muted">{product.description}</p>
          {product.detail && (
            <p className="mt-4 text-muted">{product.detail}</p>
          )}

          {product.bestFor && product.bestFor.length > 0 && (
            <>
              <h2 className="display mt-8 text-xl">Who this box suits</h2>
              <ul className="mt-3 space-y-2 text-muted">
                {product.bestFor.map((b) => (
                  <li key={b} className="flex gap-3">
                    <span aria-hidden className="text-post">
                      &#9679;
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </>
          )}

          <dl className="mt-8 grid grid-cols-2 gap-4 border-t-2 border-ink pt-6">
            <div>
              <dt className="label text-muted">Items</dt>
              <dd className="font-stamp mt-1">{product.itemCount}</dd>
            </div>
            <div>
              <dt className="label text-muted">Shipped weight</dt>
              <dd className="font-stamp mt-1">{weight(product.weightGrams)}</dd>
            </div>
            <div>
              <dt className="label text-muted">Ships to</dt>
              <dd className="font-stamp mt-1">{destinations.join(", ")}</dd>
            </div>
            <div>
              <dt className="label text-muted">Origin</dt>
              <dd className="font-stamp mt-1">{country.name}</dd>
            </div>
          </dl>
        </div>
      </div>

      <section className="bg-panel py-16">
        <div className="shell grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="display text-3xl">What is in the box</h2>
            <ul className="mt-6 divide-y divide-ink/15 border-y border-ink/15">
              {product.contents.map((item) => (
                <li key={item} className="py-3">
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-muted">
              Contents vary a little with stock. If something&apos;s out we swap in
              a similar favourite of the same value.
            </p>
          </div>

          <div>
            <h2 className="display text-3xl">Allergens</h2>
            <p className="mt-6 text-muted">{product.allergens}</p>
            <h2 className="display mt-10 text-3xl">Delivery to the USA and Canada</h2>
            <p className="mt-6 text-muted">
              Packed to order and shipped from within the US. US orders arrive
              in {deliveryLabel("US")} and Canadian orders in{" "}
              {deliveryLabel("CA")}. We email tracking as soon as your box is
              on its way. Full rates and our returns policy
              are on the{" "}
              <Link href="/shipping" className="underline underline-offset-4">
                shipping page
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="shell py-16">
          <h2 className="display text-3xl">More from {country.name}</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <ProductCard key={p.slug} country={country} product={p} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
