import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us: Independent Snack Importer",
  description:
    "We bring snacks from around the world to the US and Canada, so you can order the things you grew up with without the wait. A bit about how we got here.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="shell max-w-3xl py-16">
      <p className="label text-post">About</p>
      <h1 className="display mt-5 text-5xl">
        We started because a box of rusks cost $80 to post
      </h1>

      <div className="mt-9 space-y-6 text-lg text-muted">
        <p>
          Every international snack shop we tried had the same problem. The
          snacks were real enough, but they were posted from the other side of
          the world. Five weeks in transit, shipping that cost more than the
          food, and a customs charge waiting at the door.
        </p>
        <p className="text-ink">
          So we turned it around and brought the stock here first. Your order
          now ships like any other domestic parcel, and arrives within the
          week rather than the month.
        </p>
        <p>
          We started with South Africa because it&apos;s where we&apos;re from and the
          range we know best. The UK is next, then Japan. After that we&apos;ll go
          wherever enough people ask us to.
        </p>
        <p>
          We&apos;re an independent importer. We aren&apos;t affiliated with any of the
          brands we stock, and all trademarks belong to their owners.
        </p>
      </div>

      <h2 className="display mt-12 text-2xl sm:text-3xl">What we care about</h2>
      <div className="mt-6 space-y-6 text-lg text-muted">
        <p>
          Two things, mostly. That what arrives is the version sold at home
          rather than a recipe adjusted for the American market, because that
          difference is the whole point of ordering in the first place. And
          that it arrives fresh, which is why we will not ship anything with
          under four months of shelf life left.
        </p>
        <p>
          The rest is presentation. Boxes come rigid and padded rather than
          loose in a mailer, notes are handwritten, and receipts stay out of
          gift orders. None of that is complicated. It is just easy to skip,
          and we would rather not.
        </p>
      </div>

      <h2 className="display mt-12 text-2xl sm:text-3xl">What is next</h2>
      <div className="mt-6 space-y-6 text-lg text-muted">
        <p>
          British boxes are closest, aimed squarely at the gap between British
          Cadbury and the American licensed version. Japan follows, built
          around the seasonal ranges that never leave the country.
        </p>
        <p>
          After that we go where demand is. If you want a country we do not
          stock, email us. Enough requests for the same place and we will look
          into it properly.
        </p>
      </div>

      <Link href="/treats-from/south-africa" className="btn btn-primary mt-10">
        See what we stock
      </Link>
    </div>
  );
}
