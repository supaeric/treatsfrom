import type { Metadata } from "next";
import CartView from "@/components/CartView";

export const metadata: Metadata = {
  title: "Your cart",
  robots: { index: false, follow: false },
};

export default function CartPage() {
  return (
    <div className="shell py-14">
      <h1 className="display text-4xl sm:text-5xl">Your cart</h1>
      <CartView />
    </div>
  );
}
