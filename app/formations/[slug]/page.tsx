import { sanityFetch } from "@/sanity/lib/client";
import { FORMATION_SLUGS_QUERY, FORMATION_BY_SLUG_QUERY } from "@/sanity/lib/queries";
import { FormationDetail } from "./FormationDetail";
import { notFound } from "next/navigation";

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
  if (!formation) return { title: "Formation introuvable — NK 3D Formation" };
  return {
    title: `${formation.titre} (${formation.code}) — NK 3D Formation`,
    description: formation.description,
    openGraph: {
      title: `${formation.titre} — NK 3D Formation`,
      description: formation.description,
      type: "website",
    },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  // TODO: page en construction — désactivée avant le lancement
  notFound();

  const { slug } = await params;
  const formation = await sanityFetch<Parameters<typeof FormationDetail>[0]["formation"] | null>(
    FORMATION_BY_SLUG_QUERY,
    { slug }
  );
  if (!formation) notFound();
  return <FormationDetail formation={formation!} />;
}
