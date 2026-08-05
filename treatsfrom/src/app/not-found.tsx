import Link from "next/link";

export default function NotFound() {
  return (
    <div className="shell py-28">
      <p className="customs-mark inline-block text-post">Undeliverable</p>
      <h1 className="display mt-8 text-5xl sm:text-6xl">
        No such address
      </h1>
      <p className="mt-6 max-w-lg text-lg text-muted">
        This page does not exist, or the box moved. Try the shop instead.
      </p>
      <Link href="/" className="btn btn-primary mt-9">
        Back to the shop
      </Link>
    </div>
  );
}
