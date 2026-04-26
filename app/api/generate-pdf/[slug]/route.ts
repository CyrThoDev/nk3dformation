import { NextRequest, NextResponse } from "next/server";
import { createClient } from "next-sanity";
import { FORMATION_BY_SLUG_QUERY } from "@/sanity/lib/queries";
import { generateFormationPDF } from "@/lib/generatePDF";
import type { SanityFormationDetail } from "@/types/sanity";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset:   process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: "2024-01-01",
  useCdn: false,
});

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  const formation = await client.fetch<SanityFormationDetail | null>(
    FORMATION_BY_SLUG_QUERY,
    { slug }
  );

  if (!formation) {
    return NextResponse.json({ error: "Formation introuvable" }, { status: 404 });
  }

  const data = {
    titre:          formation.titre,
    reference:      formation.code,
    duree:          formation.duree ?? "",
    prix:           "",
    description:    formation.description ?? "",
    objectifs:      formation.objectifs ?? [],
    publicConcerne: formation.publicVise ?? "",
    prerequis:      formation.prerequis  ?? "",
    // Le renderer supporte les objets {jour, titre, contenu}
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    programme:      (formation.programme ?? []) as any,
    niveau:         formation.niveau  ?? "",
    format:         formation.format  ?? "",
    formationsAssociees: (formation.formationsAssociees ?? [])
      .filter(Boolean)
      .map((f) => ({ code: f.code, titre: f.titre, duree: f.duree, niveau: f.niveau })),
  };

  const pdfBytes = await generateFormationPDF(data);

  return new NextResponse(new Uint8Array(pdfBytes), {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${formation.code}.pdf"`,
    },
  });
}
