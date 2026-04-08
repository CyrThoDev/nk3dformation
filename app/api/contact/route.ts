import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// ── Rate limiting en mémoire (3 requêtes / minute / IP) ──────────────────────
const rateMap = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const WINDOW = 60_000;
  const MAX = 3;
  const rec = rateMap.get(ip);
  if (!rec || now > rec.resetAt) {
    rateMap.set(ip, { count: 1, resetAt: now + WINDOW });
    return false;
  }
  if (rec.count >= MAX) return true;
  rec.count++;
  return false;
}

// ── Sanitize basique ─────────────────────────────────────────────────────────
function esc(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function isValidEmail(e: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
}

function isValidPhone(p: string): boolean {
  return /^[\d\s\+\-\(\)\.]{7,20}$/.test(p);
}

// ── Template HTML email ───────────────────────────────────────────────────────
function buildEmail(data: {
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  sujet: string;
  message: string;
}): string {
  const { nom, prenom, email, telephone, sujet, message } = data;
  const rows = [
    ["Nom", nom],
    ["Prénom", prenom],
    ["Email", email || "—"],
    ["Téléphone", telephone || "—"],
    ["Objet", sujet],
  ]
    .map(
      ([label, value]) => `
      <tr>
        <td style="padding:10px 16px;background:#F6F8FC;font-family:'Arial',sans-serif;font-size:12px;font-weight:700;color:#4A5568;text-transform:uppercase;letter-spacing:.06em;border-bottom:1px solid #E4EAF3;width:140px;white-space:nowrap;">${esc(label)}</td>
        <td style="padding:10px 16px;background:#FFFFFF;font-family:'Arial',sans-serif;font-size:14px;color:#0D1B2E;border-bottom:1px solid #E4EAF3;">${esc(value)}</td>
      </tr>`
    )
    .join("");

  const messageBlock = message
    ? `
      <div style="margin-top:24px;">
        <p style="font-family:'Arial',sans-serif;font-size:12px;font-weight:700;color:#4A5568;text-transform:uppercase;letter-spacing:.06em;margin:0 0 8px;">Message</p>
        <div style="background:#F6F8FC;border:1px solid #E4EAF3;border-radius:8px;padding:16px;font-family:'Arial',sans-serif;font-size:14px;color:#0D1B2E;line-height:1.7;white-space:pre-wrap;">${esc(message)}</div>
      </div>`
    : "";

  return `<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width,initial-scale=1.0" /></head>
<body style="margin:0;padding:0;background:#F6F8FC;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#F6F8FC;padding:40px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#FFFFFF;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(10,45,92,0.10);">

        <!-- Header -->
        <tr>
          <td style="background:linear-gradient(135deg,#0A2D5C 0%,#1A4F8A 100%);padding:28px 32px;">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td>
                  <span style="font-family:'Arial',sans-serif;font-weight:900;font-size:20px;color:#FFFFFF;letter-spacing:.05em;">NK <span style="color:#E8762A;">3D</span> Formation</span>
                </td>
                <td align="right">
                  <span style="font-family:'Arial',sans-serif;font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:.12em;text-transform:uppercase;">Nouvelle demande</span>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Titre -->
        <tr>
          <td style="padding:28px 32px 20px;">
            <p style="margin:0;font-family:'Arial',sans-serif;font-size:11px;font-weight:700;color:#E8762A;letter-spacing:.16em;text-transform:uppercase;">Contact</p>
            <h1 style="margin:6px 0 0;font-family:'Arial',sans-serif;font-size:22px;font-weight:800;color:#0A2D5C;line-height:1.2;">${esc(sujet)}</h1>
          </td>
        </tr>

        <!-- Champs -->
        <tr>
          <td style="padding:0 32px;">
            <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #E4EAF3;border-radius:8px;overflow:hidden;">
              ${rows}
            </table>
            ${messageBlock}
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="padding:28px 32px;border-top:1px solid #E4EAF3;margin-top:28px;">
            <p style="margin:0;font-family:'Arial',sans-serif;font-size:11px;color:#8A9AB0;text-align:center;">
              Message envoyé depuis le formulaire de contact · <a href="https://nk3dformation.fr" style="color:#E8762A;text-decoration:none;">nk3dformation.fr</a>
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

// ── Handler ───────────────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  // Rate limiting
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Trop de requêtes. Réessayez dans une minute." },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Requête invalide." }, { status: 400 });
  }

  const {
    nom = "",
    prenom = "",
    email = "",
    telephone = "",
    sujet = "",
    message = "",
    _honey = "",
  } = body as Record<string, string>;

  // Honeypot
  if (_honey) {
    return NextResponse.json({ ok: true }); // silently drop
  }

  // Validation
  const errors: string[] = [];
  if (!nom.trim() || nom.trim().length < 2) errors.push("Nom requis.");
  if (!prenom.trim() || prenom.trim().length < 2) errors.push("Prénom requis.");
  if (!email.trim() && !telephone.trim())
    errors.push("Email ou téléphone requis.");
  if (email.trim() && !isValidEmail(email.trim()))
    errors.push("Email invalide.");
  if (telephone.trim() && !isValidPhone(telephone.trim()))
    errors.push("Numéro de téléphone invalide.");
  if (!["Formation", "Consulting"].includes(sujet))
    errors.push("Objet invalide.");
  if (message.length > 2000) errors.push("Message trop long (2000 car. max).");

  if (errors.length) {
    return NextResponse.json({ errors }, { status: 422 });
  }

  const cleanData = {
    nom: nom.trim(),
    prenom: prenom.trim(),
    email: email.trim(),
    telephone: telephone.trim(),
    sujet:
      sujet === "Formation"
        ? "Demande d'information — Formation"
        : "Demande d'information — Consulting",
    message: message.trim(),
  };

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    await resend.emails.send({
      from: "NK3D Formation <contact@nk3dformation.fr>",
      to: process.env.CONTACT_EMAIL ?? "nicolas@nk3dformation.fr",
      replyTo: cleanData.email || undefined,
      subject: `[${cleanData.sujet}] ${cleanData.prenom} ${cleanData.nom}`,
      html: buildEmail(cleanData),
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Resend error:", err);
    return NextResponse.json(
      { error: "Erreur d'envoi. Réessayez plus tard." },
      { status: 500 }
    );
  }
}
