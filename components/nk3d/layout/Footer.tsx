import { Container } from "../ui/Container";

export function Footer() {
  return (
    <footer className="bg-bg border-t border-border pt-9 pb-6 px-7">
      <Container>
        <div className="flex justify-between items-center mb-6">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-md bg-navy flex items-center justify-center">
              <span className="font-montserrat font-black text-[10px] text-white">NK</span>
            </div>
            <span className="font-montserrat font-bold text-[13px] text-navy">
              NK <span className="text-orange">3D</span> Formation
            </span>
          </div>

          {/* Links */}
          <div className="flex gap-8">
            {["Mentions légales", "Politique qualité", "CGV", "Contact"].map((l) => (
              <a
                key={l}
                href="#"
                className="font-montserrat text-[12px] text-text-lt no-underline hover:text-navy transition-colors"
              >
                {l}
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-border pt-5 text-center">
          <p className="font-montserrat text-[11px] text-text-lt m-0">
            © {new Date().getFullYear()} NK 3D Formation — Nicolas Kreutz · Organisme de formation certifié Qualiopi · Tous droits réservés
          </p>
        </div>
      </Container>
    </footer>
  );
}