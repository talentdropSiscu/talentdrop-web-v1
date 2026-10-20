import type { NextConfig } from "next";

const nexusPublic = "https://pnexus-web-git-design-b-correcciones-visuales-talent-drop-team.vercel.app";

const nextConfig: NextConfig = {
  // Entrada pública para colaboradores. Redirección reversible y aislada.
  async redirects() {
    return [
      {
        source: "/idi-nexus",
        destination: `${nexusPublic}/es/`,
        permanent: false,
      },
      {
        source: "/idi-nexus/:path*",
        destination: `${nexusPublic}/es/:path*`,
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
