import type { Metadata } from "next";
import Link from "next/link";
import ClearCart from "@/components/ClearCart";

export const metadata: Metadata = {
  title: "Order confirmed",
  robots: { index: false, follow: false },
};

export default function OrderConfirmedPage() {
  return (
    <div className="shell py-24">
      <ClearCart />
      <p className="customs-mark inline-block text-post">Cleared</p>
      <h1 className="display mt-8 text-5xl sm:text-6xl">Your box is booked</h1>
      <p className="mt-6 max-w-xl text-lg text-muted">
        A confirmation is on its way to your inbox. We pack Monday to Friday
        and email tracking the moment your box leaves the warehouse in Ohio.
      </p>
      <div className="mt-10 flex flex-wrap gap-3">
        <Link href="/" className="btn btn-primary">
          Back to the shop
        </Link>
        <Link href="/shipping" className="btn btn-ghost">
          Delivery times
        </Link>
      </div>
    </div>
  );
}
