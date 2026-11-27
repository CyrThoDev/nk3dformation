import type { MetadataRoute } from "next";
import { sanityFetch } from "@/sanity/lib/client";
import { FORMATION_SLUGS_QUERY } from "@/sanity/lib/queries";
import { SITE_URL, IS_PRODUCTION } from "@/lib/seo";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Environnement dev/preview : pas de sitemap (le site n'est de toute façon
  // pas indexable, cf. app/robots.ts).
  if (!IS_PRODUCTION) return [];

  const slugs = await sanityFetch<string[]>(FORMATION_SLUGS_QUERY).catch(() => []);

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...(slugs ?? []).map((slug) => ({
      url: `${SITE_URL}/formations/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
