import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TalentDrop | Sports Decision Infrastructure",
  description:
    "Infraestructura deportiva para deportistas, clubes y federaciones. Más evidencia. Mejores decisiones.",
  openGraph: {
    title: "TalentDrop | Sports Decision Infrastructure",
    description:
      "Transformamos información deportiva dispersa en evidencia verificable, contexto relevante y decisiones con mayor confianza.",
    url: "https://www.talentdrop.es",
    siteName: "TalentDrop",
    images: [
      {
        url: "https://www.talentdrop.es/img/home-hero.jpg",
        width: 1200,
        height: 630,
        alt: "TalentDrop",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TalentDrop | Sports Decision Infrastructure",
    description: "Más evidencia. Mejores decisiones.",
    images: ["https://www.talentdrop.es/img/home-hero.jpg"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
