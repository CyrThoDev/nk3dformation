import Image from "next/image";
import Link from "next/link";
import { Container } from "../ui/Container";

export function Footer() {
  return (
    <footer className="bg-bg border-t border-border pt-9 pb-6 px-7">
      <Container className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-6 mb-6 sm:flex-row sm:justify-between sm:items-center">
          {/* Logo */}
          <Image
            src="/images/SYMBOLE_FOND_CLAIR.svg"
            alt="NK 3D Formation"
            width={75}
            height={75}
            style={{ width: "75px", height: "auto" }}
          />

          {/* Links */}
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-6">
            <Link href="/mentions-legales" className="font-montserrat text-[13px] text-text-lt no-underline hover:text-navy transition-colors">
              Mentions légales
            </Link>
            <Link href="/politique-confidentialite" className="font-montserrat text-[13px] text-text-lt no-underline hover:text-navy transition-colors">
              Politique de confidentialité
            </Link>
            <Link href="/#contact" className="font-montserrat text-[13px] text-text-lt no-underline hover:text-navy transition-colors">
              Contact
            </Link>
          </div>
        </div>

        <div className="border-t border-border pt-5 text-center">
          <p className="font-montserrat text-[11px] text-text-lt m-0">
            © {new Date().getFullYear()} NK 3D Formation — Nicolas Kreutz · Organisme de formation · Tous droits réservés
          </p>
        </div>
      </Container>
    </footer>
  );
}