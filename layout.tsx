import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TalentDrop | Sports Decision Infrastructure",
  description:
    "La infraestructura del dato para mejores decisiones en el deporte. TalentDrop conecta información, evidencias y personas mediante Data Trust y Digital Athlete Identity.",
  metadataBase: new URL("https://www.talentdrop.es"),
  openGraph: {
    title: "TalentDrop | Sports Decision Infrastructure",
    description:
      "La infraestructura del dato para mejores decisiones en el deporte.",
    url: "https://www.talentdrop.es",
    siteName: "TalentDrop SportsTech",
    locale: "es_ES",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
