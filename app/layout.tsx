import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "NK 3D Formation — Expert CATIA V5 & 3DEXPERIENCE",
  description:
    "Formations  en CATIA V5, 3DEXPERIENCE et COMPOSER. Présentiel, finançables OPCO, conçues pour les ingénieurs et techniciens de l'industrie. ",
  icons: {
    icon: "/favicon.ico",
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
  <div className=" min-h-full  bg-white">
    {children}
  </div>
</body>
    </html>
  );
}
