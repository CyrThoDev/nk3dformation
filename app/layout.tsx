import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { SITE_URL, SITE_NAME, IS_PRODUCTION } from "@/lib/seo";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat-nk",
  display: "swap",
  style: ["normal", "italic"],
});

const eurostile = localFont({
  src: [
    {
      path: "../public/fonts/eurostile/EuroStyleNormal.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/eurostile/EurostileBold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/eurostile/Eurostile-Oblique.woff2",
      weight: "400",
      style: "oblique",
    },
  ],
  variable: "--font-eurostile-nk",
  display: "swap",
});

const eurostileExtended = localFont({
  src: "../public/fonts/eurostile/EurostileExtended-Roman.woff2",
  variable: "--font-eurostile-ext-nk",
  display: "swap",
});

const description =
  "Formations en CATIA V5, 3DEXPERIENCE et COMPOSER. Présentiel ou distanciel, finançables OPCO, conçues pour les ingénieurs et techniciens de l'industrie.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "NK 3D Formation — Formateur certifié CATIA V5 & 3DEXPERIENCE",
  description,
  icons: {
    icon: "/favicon.ico",
  },
  // Environnement dev/preview (dev.nk3dformation.fr…) : jamais indexé.
  // Les pages peuvent toujours surcharger ce champ (ex. mentions légales).
  robots: IS_PRODUCTION
    ? { index: true, follow: true }
    : { index: false, follow: false, nocache: true },
  openGraph: {
    siteName: SITE_NAME,
    locale: "fr_FR",
    type: "website",
    images: [{ url: "/images/hero.webp", width: 1104, height: 512, alt: SITE_NAME }],
  },
  twitter: {
    card: "summary_large_image",
    title: "NK 3D Formation — Formateur certifié CATIA V5 & 3DEXPERIENCE",
    description,
    images: ["/images/hero.webp"],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/images/LOGOTYPE_FOND_CLAIR.png`,
  description,
  founder: { "@type": "Person", name: "Nicolas Kreutz" },
  address: {
    "@type": "PostalAddress",
    streetAddress: "4 rue des chalets",
    postalCode: "31390",
    addressLocality: "Lacaugne",
    addressCountry: "FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`h-full antialiased ${montserrat.variable} ${eurostile.variable} ${eurostileExtended.variable}`}
    >
      <body className="min-h-full ">
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
  />
  <div className=" min-h-full  bg-white">
    {children}
  </div>
</body>
    </html>
  );
}
