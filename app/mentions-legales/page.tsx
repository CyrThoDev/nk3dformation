import { Nav } from "@/components/nk3d/layout/Nav";
import { Footer } from "@/components/nk3d/layout/Footer";
import { Container } from "@/components/nk3d/ui/Container";

export const metadata = {
  title: "Mentions légales — NK 3D Formation",
  description: "Mentions légales du site NK 3D Formation — Nicolas Kreutz, formateur indépendant CATIA V5 & 3DEXPERIENCE.",
  robots: { index: false },
};

export default function MentionsLegales() {
  return (
    <>
      <Nav />
      <main className="bg-white py-16 md:py-24">
        <Container className="max-w-7xl mx-auto px-4 lg:px-6">
          <h1 className="font-montserrat font-black text-[clamp(24px,3vw,36px)] text-navy mb-10">
            Mentions légales
          </h1>

          <Section title="Éditeur du site">
            <Row label="Raison sociale" value="Nicolas Kreutz EI" />
            <Row label="Statut juridique" value="Entrepreneur individuel" />
            <Row label="SIRET" value="10162330400017" />
            <Row label="Numéro de déclaration d'activité (NDA)" value="[xx xx xxxxx xx]" />
            <Row label="Adresse" value="4 rue des chalets, 31390 Lacaugne" />
            <Row label="Email" value="nicolas@nk3dformation.fr" />
            <Row label="Site web" value="https://nk3dformation.fr" />
          </Section>

          <Section title="Directeur de la publication">
            <p className="font-montserrat text-[15px] text-text-md leading-[1.7]">
              Nicolas Kreutz
            </p>
          </Section>

          <Section title="Hébergement">
            <Row label="Hébergeur" value="Vercel Inc." />
            <Row label="Adresse" value="340 Pine Street, Suite 801, San Francisco, CA 94104, États-Unis" />
            <Row label="Site web" value="https://vercel.com" />
          </Section>

          <Section title="Propriété intellectuelle">
            <p className="font-montserrat text-[15px] text-text-md leading-[1.7]">
              L'ensemble du contenu de ce site (textes, images, logos, documents) est la propriété exclusive de NK 3D Formation, sauf mentions contraires. Toute reproduction, distribution ou utilisation sans autorisation écrite préalable est interdite.
            </p>
          </Section>

          <Section title="Responsabilité">
            <p className="font-montserrat text-[15px] text-text-md leading-[1.7]">
              NK 3D Formation s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site. Toutefois, NK 3D Formation ne peut garantir l'exactitude, la complétude ou l'actualité des informations. En conséquence, l'utilisateur reconnaît utiliser ces informations sous sa responsabilité exclusive.
            </p>
          </Section>

          <Section title="Liens hypertextes">
            <p className="font-montserrat text-[15px] text-text-md leading-[1.7]">
              Ce site peut contenir des liens vers des sites externes. NK 3D Formation n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.
            </p>
          </Section>

          <Section title="Droit applicable">
            <p className="font-montserrat text-[15px] text-text-md leading-[1.7]">
              Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux français seront seuls compétents.
            </p>
          </Section>
        </Container>
      </main>
      <Footer />
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2 className="font-montserrat font-bold text-[17px] text-navy mb-4 pb-2 border-b border-border">
        {title}
      </h2>
      {children}
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex gap-4 py-2 border-b border-border/50 last:border-0">
      <span className="font-montserrat text-[12px] font-semibold uppercase tracking-[0.06em] text-text-lt w-64 shrink-0 pt-0.5">
        {label}
      </span>
      <span className="font-montserrat text-[14px] text-text-md">{value}</span>
    </div>
  );
}
