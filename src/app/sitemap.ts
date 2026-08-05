import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { countries } from "@/content/countries";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    { path: "", priority: 1 },
    { path: "/treats-from", priority: 0.9 },
    { path: "/how-it-works", priority: 0.7 },
    { path: "/shipping", priority: 0.6 },
    { path: "/faq", priority: 0.6 },
    { path: "/about", priority: 0.5 },
    { path: "/privacy-policy", priority: 0.3 },
    { path: "/terms", priority: 0.3 },
    { path: "/accessibility", priority: 0.3 },
  ].map((r) => ({
    url: `${site.url}${r.path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: r.priority,
  }));

  const countryRoutes = countries.map((c) => ({
    url: `${site.url}/treats-from/${c.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: c.status === "live" ? 0.9 : 0.4,
  }));

  const productRoutes = countries.flatMap((c) =>
    c.products.map((p) => ({
      url: `${site.url}/treats-from/${c.slug}/${p.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    }))
  );

  return [...staticRoutes, ...countryRoutes, ...productRoutes];
}
