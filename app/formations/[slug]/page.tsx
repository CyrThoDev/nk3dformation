// app/formations/[slug]/page.tsx
import { getAllSlugs, getFormationBySlug } from "@/data/formations";
import { FormationDetail } from "./FormationDetail";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const formation = getFormationBySlug(slug);
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
  const { slug } = await params;
  const formation = getFormationBySlug(slug);
  if (!formation) notFound();
  return <FormationDetail formation={formation!} />;
}