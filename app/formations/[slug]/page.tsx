import { sanityFetch } from "@/sanity/lib/client";
import { FORMATION_SLUGS_QUERY, FORMATION_BY_SLUG_QUERY, SITE_SETTINGS_QUERY } from "@/sanity/lib/queries";
import { FormationDetail } from "./FormationDetail";
import { notFound } from "next/navigation";
import type { SanitySettings } from "@/types/sanity";
import { SITE_URL, SITE_NAME } from "@/lib/seo";

export async function generateStaticParams() {
  const slugs = await sanityFetch<string[]>(FORMATION_SLUGS_QUERY);
  return (slugs ?? []).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const formation = await sanityFetch<{ titre: string; code: string; description: string } | null>(
    FORMATION_BY_SLUG_QUERY,
    { slug }
  );
  if (!formation) {
    return {
      title: "Formation introuvable — NK 3D Formation",
      robots: { index: false, follow: false },
    };
  }
  const url = `${SITE_URL}/formations/${slug}`;
  return {
    title: `${formation.titre} (${formation.code}) — NK 3D Formation`,
    description: formation.description,
    alternates: { canonical: url },
    openGraph: {
      title: `${formation.titre} — NK 3D Formation`,
      description: formation.description,
      url,
      siteName: SITE_NAME,
      locale: "fr_FR",
      type: "website",
      images: [{ url: "/images/hero.webp", width: 1104, height: 512, alt: formation.titre }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${formation.titre} — NK 3D Formation`,
      description: formation.description,
    },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const [formation, settings] = await Promise.all([
    sanityFetch<Parameters<typeof FormationDetail>[0]["formation"] | null>(FORMATION_BY_SLUG_QUERY, { slug }),
    sanityFetch<SanitySettings>(SITE_SETTINGS_QUERY),
  ]);
  if (!formation) notFound();

  const courseJsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: formation.titre,
    description: formation.description,
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      sameAs: SITE_URL,
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: formation.format,
      courseWorkload: formation.duree ?? undefined,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }}
      />
      <FormationDetail formation={formation!} settings={settings} />
    </>
  );
}
