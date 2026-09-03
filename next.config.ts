import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: "",
  },
  // Same-origin proxy so localhost can POST without CORS.
  // Ignored by the static GitHub Pages export (NODE_ENV=production).
  ...(process.env.NODE_ENV === "development"
    ? {
        rewrites: async () => [
          {
            source: "/ingest/audit-events",
            destination: "https://quizbanao.com/api/v1/audit-events",
          },
          {
            source: "/ingest/audit-events/",
            destination: "https://quizbanao.com/api/v1/audit-events",
          },
        ],
      }
    : {}),
};

export default nextConfig;
