import { NextRequest, NextResponse } from "next/server";
import mammoth from "mammoth";
import { parseFormationData } from "@/lib/parseFormation";
import { generateFormationPDF } from "@/lib/generatePDF";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "Fichier manquant" }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());

    // Extraire le texte brut du .docx
    const { value: rawText } = await mammoth.extractRawText({ buffer });

    // Parser les champs structurés
    const formation = parseFormationData(rawText);

    // Générer le PDF en bytes
    const pdfBytes = await generateFormationPDF(formation);

    return new NextResponse(pdfBytes, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${formation.reference || "formation"}.pdf"`,
      },
    });
  } catch (err) {
    console.error("Erreur génération PDF:", err);
    return NextResponse.json(
      { error: "Erreur lors de la génération du PDF" },
      { status: 500 }
    );
  }
}