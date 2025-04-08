import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/photography",
  images: { unoptimized: true },
};

export default nextConfig;
