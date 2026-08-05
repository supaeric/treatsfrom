import Link from "next/link";
import type { Country, Product } from "@/content/types";
import { money } from "@/lib/format";
import BoxImage from "./BoxImage";

export default function ProductCard({
  country,
  product,
  priority = false,
}: {
  country: Country;
  product: Product;
  priority?: boolean;
}) {
  const href = `/treats-from/${country.slug}/${product.slug}`;

  return (
    <article className="group border-2 border-ink bg-panel">
      <Link href={href} className="block">
        <div className="relative aspect-[4/5] overflow-hidden border-b-2 border-ink">
          <BoxImage
            country={country}
            product={product}
            priority={priority}
            sizes="(max-width: 640px) 92vw, (max-width: 1024px) 45vw, 30vw"
          />
          {product.compareAtCents && (
            <span className="label absolute right-3 top-3 bg-post px-2 py-1 text-paper">
              Save {money(product.compareAtCents - product.priceCents)}
            </span>
          )}
        </div>
      </Link>

      <div className="p-5">
        <h3 className="display text-2xl">
          <Link href={href} className="group-hover:text-post">
            {product.name}
          </Link>
        </h3>
        <p className="mt-2 text-sm text-muted">{product.tagline}</p>

        <div className="mt-4 flex items-baseline gap-2">
          <span className="font-stamp text-lg font-bold">
            {money(product.priceCents)}
          </span>
          {product.compareAtCents && (
            <span className="font-stamp text-sm text-muted line-through">
              {money(product.compareAtCents)}
            </span>
          )}
        </div>

        <Link href={href} className="btn btn-ghost mt-5 w-full">
          See what is inside
        </Link>
      </div>
    </article>
  );
}
