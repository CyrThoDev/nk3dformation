import { Nav } from "@/components/nk3d/layout/Nav";
import { Footer } from "@/components/nk3d/layout/Footer";
import { Container } from "@/components/nk3d/ui/Container";

export const metadata = {
  title: "Politique de confidentialité — NK 3D Formation",
  description: "Politique de confidentialité et traitement des données personnelles du site NK 3D Formation.",
  robots: { index: false },
};

export default function PolitiqueConfidentialite() {
  return (
    <>
      <Nav />
      <main className="bg-white py-16 md:py-24">
        <Container className="max-w-7xl mx-auto px-4 lg:px-6">
          <h1 className="font-montserrat font-black text-[clamp(24px,3vw,36px)] text-navy mb-2">
            Politique de confidentialité
          </h1>
          <p className="font-montserrat text-[13px] text-text-lt mb-10">
            Dernière mise à jour : avril 2026
          </p>

          <Section title="Responsable du traitement">
            <p className="font-montserrat text-[15px] text-text-md leading-[1.7]">
              [Nom complet — ex: Nicolas Kreutz EI]<br />
              [Adresse complète]<br />
              Email : nicolas@nk3dformation.fr
            </p>
          </Section>

          <Section title="Données collectées">
            <p className="font-montserrat text-[15px] text-text-md leading-[1.7] mb-3">
              Via le formulaire de contact, les données suivantes peuvent être collectées :
            </p>
            <ul className="font-montserrat text-[15px] text-text-md leading-[1.8] list-none space-y-1 pl-0">
              {["Nom et prénom", "Adresse email professionnelle", "Numéro de téléphone", "Objet de la demande (formation ou consulting)", "Message libre"].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-orange shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </Section>

          <Section title="Finalités et base légale">
            <p className="font-montserrat text-[15px] text-text-md leading-[1.7]">
              Les données collectées sont utilisées exclusivement pour répondre aux demandes d'information et de devis. La base légale du traitement est l'intérêt légitime de NK 3D Formation à traiter les demandes de contact (article 6.1.f du RGPD).
            </p>
          </Section>

          <Section title="Durée de conservation">
            <p className="font-montserrat text-[15px] text-text-md leading-[1.7]">
              Les données sont conservées pendant 3 ans à compter du dernier contact, conformément aux recommandations de la CNIL pour les données de prospection commerciale.
            </p>
          </Section>

          <Section title="Destinataires des données">
            <p className="font-montserrat text-[15px] text-text-md leading-[1.7]">
              Les données ne sont pas transmises à des tiers. Elles sont acheminées via le service <strong>Resend</strong> (Resend Inc., USA) pour l'envoi des emails de notification, dans le respect du RGPD (clauses contractuelles types).
            </p>
          </Section>

          <Section title="Vos droits">
            <p className="font-montserrat text-[15px] text-text-md leading-[1.7] mb-3">
              Conformément au RGPD et à la loi Informatique et Libertés, vous disposez des droits suivants sur vos données :
            </p>
            <ul className="font-montserrat text-[15px] text-text-md leading-[1.8] list-none space-y-1 pl-0 mb-3">
              {[
                "Droit d'accès",
                "Droit de rectification",
                "Droit à l'effacement",
                "Droit à la limitation du traitement",
                "Droit d'opposition",
                "Droit à la portabilité",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-orange shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="font-montserrat text-[15px] text-text-md leading-[1.7]">
              Pour exercer ces droits, contactez : <a href="mailto:nicolas@nk3dformation.fr" className="text-orange underline">nicolas@nk3dformation.fr</a>. Vous pouvez également introduire une réclamation auprès de la <strong>CNIL</strong> (www.cnil.fr).
            </p>
          </Section>

          <Section title="Cookies">
            <p className="font-montserrat text-[15px] text-text-md leading-[1.7]">
              Ce site n'utilise pas de cookies de tracking ni de mesure d'audience. Aucun cookie tiers n'est déposé sur votre navigateur.
            </p>
          </Section>

          <Section title="Sécurité">
            <p className="font-montserrat text-[15px] text-text-md leading-[1.7]">
              Les données transmises via le formulaire de contact sont acheminées en HTTPS. Des mesures techniques sont mises en place pour limiter les envois abusifs (rate limiting, protection anti-bot).
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
