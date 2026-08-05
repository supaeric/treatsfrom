"use client";

import { useEffect } from "react";
import { useCart } from "@/lib/cart";

/** Empties the cart once payment has gone through. */
export default function ClearCart() {
  const { clear, ready } = useCart();
  useEffect(() => {
    if (ready) clear();
  }, [ready, clear]);
  return null;
}
