import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repo = "readfast.app"; // your repo name exactly

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true }, // important for static hosting
  trailingSlash: true,
  basePath: isProd ? `/${repo}` : "",
  assetPrefix: isProd ? `/${repo}/` : "",
};

export default nextConfig;