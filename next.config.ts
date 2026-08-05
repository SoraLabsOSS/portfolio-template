import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    turbopackRustReactCompiler: true,
  },
  /* config options here */
  reactCompiler: true,
};

export default nextConfig;

import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

