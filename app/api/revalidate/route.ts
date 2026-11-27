import { isValidSignature, SIGNATURE_HEADER_NAME } from "@sanity/webhook";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

// Webhook Sanity : déclenché à chaque publication/modification/suppression
// dans le Studio (configuré sur sanity.io/manage > API > Webhooks).
// Projection attendue : { "_type": _type, "slug": slug.current }
export async function POST(req: Request) {
  const secret = process.env.SANITY_REVALIDATE_SECRET;
  if (!secret) {
    return NextResponse.json({ message: "SANITY_REVALIDATE_SECRET manquant" }, { status: 500 });
  }

  const body = await req.text();
  const signature = req.headers.get(SIGNATURE_HEADER_NAME);

  if (!signature || !(await isValidSignature(body, signature, secret))) {
    return NextResponse.json({ message: "Signature invalide" }, { status: 401 });
  }

  const payload = JSON.parse(body) as { _type?: string; slug?: string };

  revalidatePath("/");
  if (payload._type === "formation" && payload.slug) {
    revalidatePath(`/formations/${payload.slug}`);
  }

  return NextResponse.json({ revalidated: true, now: Date.now() });
}
