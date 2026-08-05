export default function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <div className="shell max-w-3xl py-16">
      <p className="label text-post">Legal</p>
      <h1 className="display mt-5 text-4xl sm:text-5xl">{title}</h1>
      <p className="label mt-4 text-muted">Last updated {updated}</p>
      <div className="mt-12 space-y-8 [&_a]:underline [&_a]:underline-offset-4 [&_h2]:display [&_h2]:text-2xl [&_li]:text-muted [&_p]:text-muted [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
        {children}
      </div>
    </div>
  );
}
