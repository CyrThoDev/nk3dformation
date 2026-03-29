import type { Metadata } from "next";
import { Montserrat, Barlow_Condensed } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NK 3D Formation — Expert CATIA V5 & 3DEXPERIENCE",
  description:
    "Formations certifiantes en CATIA V5, 3DEXPERIENCE et COMPOSER. Présentiel, finançables OPCO, conçues pour les ingénieurs et techniciens de l'industrie. Organisme certifié Qualiopi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${montserrat.variable} ${barlowCondensed.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
