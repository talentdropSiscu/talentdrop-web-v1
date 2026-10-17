import type { NextConfig } from "next";

/**
 * Preparación de la ruta corporativa IDI NEXUS (solo rama de revisión).
 * El destino se define mediante IDI_NEXUS_ORIGIN en Vercel, no se publica
 * hasta verificar que el origen sirve la versión autorizada y sus recursos.
 */
const nextConfig: NextConfig = {
  async rewrites() {
    const origin = process.env.IDI_NEXUS_ORIGIN?.replace(/\/$/, "");
    if (!origin) return [];
    if (!/^https:\/\/[^/]+$/.test(origin)) {
      throw new Error("IDI_NEXUS_ORIGIN debe ser un origen HTTPS sin ruta");
    }
    return [
      { source: "/idi-nexus", destination: `${origin}/es/` },
      { source: "/idi-nexus/", destination: `${origin}/es/` },
      { source: "/idi-nexus/:path*", destination: `${origin}/:path*` },
    ];
  },
};

export default nextConfig;
