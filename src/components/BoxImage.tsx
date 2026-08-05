import Image from "next/image";
import type { Country, Product } from "@/content/types";

/**
 * Renders real product photography when `product.image` is set, and a
 * designed placeholder panel when it is not, so the site never shows a
 * broken image while you are still shooting product.
 *
 * To swap in a real photo: drop the file in /public/media and set
 * `image` + `imageAlt` on the product in the content layer. Nothing else.
 */
export default function BoxImage({
  country,
  product,
  priority = false,
  sizes = "(max-width: 768px) 100vw, 33vw",
}: {
  country: Country;
  product: Product;
  priority?: boolean;
  sizes?: string;
}) {
  if (product.image) {
    return (
      <Image
        src={product.image}
        alt={product.imageAlt ?? `${product.name}, a ${country.demonym} snack box`}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
      />
    );
  }

  return (
    <div
      aria-hidden
      className="absolute inset-0 flex flex-col justify-between p-5"
      style={{
        background: `linear-gradient(150deg, ${country.accent} 0%, ${country.accent}cc 55%, #C9A227 100%)`,
      }}
    >
      <div className="flex items-start justify-between">
        <span
          className="label"
          style={{ color: country.accentInk, opacity: 0.7 }}
        >
          {country.code} · Origin
        </span>
        <span
          className="customs-mark text-[9px]"
          style={{ color: country.accentInk }}
        >
          Air Freight
        </span>
      </div>
      <div>
        <p
          className="display text-3xl leading-none"
          style={{ color: country.accentInk }}
        >
          {product.name}
        </p>
        <p
          className="label mt-2"
          style={{ color: country.accentInk, opacity: 0.65 }}
        >
          {product.itemCount} items
        </p>
      </div>
    </div>
  );
}
