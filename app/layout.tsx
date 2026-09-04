import type { Metadata } from "next";
import "./globals.css";
import "./v22.css";
import { Inter, Space_Grotesk } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TalentDrop | Sports Decision Infrastructure",
  description:
    "TalentDrop ayuda a clubes y federaciones a organizar información, evidencia, protocolos y personas alrededor de sus decisiones deportivas.",
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

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${spaceGrotesk.variable}`}>{children}</body>
    </html>
  );
}
