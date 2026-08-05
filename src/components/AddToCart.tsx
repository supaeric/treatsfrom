"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/lib/cart";
import { productId } from "@/content/countries";

export default function AddToCart({
  countrySlug,
  productSlug,
  label = "Add to box",
}: {
  countrySlug: string;
  productSlug: string;
  label?: string;
}) {
  const { add } = useCart();
  const [added, setAdded] = useState(false);

  function handleAdd() {
    add(productId(countrySlug, productSlug));
    setAdded(true);
    window.setTimeout(() => setAdded(false), 2600);
  }

  return (
    <div className="flex flex-wrap items-center gap-3">
      <button type="button" onClick={handleAdd} className="btn btn-primary">
        {label}
      </button>
      {added && (
        <Link href="/cart" className="label underline underline-offset-4">
          Added, view cart
        </Link>
      )}
    </div>
  );
}
