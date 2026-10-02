import type { NextConfig } from "next";

// Built as plain static files (out/), like the hand-written page it replaced.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
