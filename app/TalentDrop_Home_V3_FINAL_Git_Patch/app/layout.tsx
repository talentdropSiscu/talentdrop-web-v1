import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TalentDrop | Sports Decision Infrastructure",
  description:
    "TalentDrop conecta información, evidencias, protocolos, responsabilidades y conocimiento para que organizaciones deportivas estén preparadas para decidir.",
  openGraph: {
    title: "TalentDrop | Sports Decision Infrastructure",
    description:
      "La infraestructura sobre la que se preparan las decisiones del deporte.",
    url: "https://www.talentdrop.es",
    siteName: "TalentDrop",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TalentDrop | Sports Decision Infrastructure",
    description:
      "La infraestructura sobre la que se preparan las decisiones del deporte.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
