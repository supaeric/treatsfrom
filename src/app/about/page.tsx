import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us — Independent Snack Importer",
  description:
    "We import authentic snacks from around the world in bulk, warehouse them in Ohio and ship across the US and Canada. Meet the team behind Treats From.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="shell max-w-3xl py-16">
      <p className="label text-post">About</p>
      <h1 className="display mt-5 text-5xl">
        Started because a box of rusks cost $80 to post
      </h1>

      <div className="mt-9 space-y-6 text-lg text-muted">
        <p>
          Every international snack shop we tried had the same problem. The
          snacks were real, but they were posted from the other side of the
          world — five weeks in transit, freight that cost more than the food,
          and a customs charge waiting at the door.
        </p>
        <p className="text-ink">
          So we flipped it. We import by the pallet, clear it once at the
          border, and warehouse everything in Ohio. Your order ships the way
          any domestic parcel does, because that is what it is.
        </p>
        <p>
          We started with South Africa because that is where we are from and
          because it is the range we know best. Australia and the UK are next,
          and after that we go wherever people ask us to go.
        </p>
        <p>
          We are an independent importer. We are not affiliated with any of the
          brands we stock, and all trademarks belong to their owners.
        </p>
      </div>

      <Link href="/treats-from/south-africa" className="btn btn-primary mt-10">
        See what we stock
      </Link>
    </div>
  );
}
