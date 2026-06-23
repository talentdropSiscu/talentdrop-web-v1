import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TalentDrop | Sports Decision Infrastructure",
  description:
    "Infraestructura deportiva para deportistas, clubes y federaciones. Más evidencia. Mejores decisiones.",
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
