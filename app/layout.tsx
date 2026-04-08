import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NK 3D Formation — Expert CATIA V5 & 3DEXPERIENCE",
  description:
    "Formations certifiantes en CATIA V5, 3DEXPERIENCE et COMPOSER. Présentiel, finançables OPCO, conçues pour les ingénieurs et techniciens de l'industrie. Organisme certifié Qualiopi.",
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
      className="h-full antialiased"
    >
      <body className="min-h-full ">
  <div className=" min-h-full  bg-white">
    {children}
  </div>
</body>
    </html>
  );
}