import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    // Pin the workspace root to this project so Next doesn't pick up
    // the stray package-lock.json one directory up.
    root: path.join(__dirname),
  },
};

export default nextConfig;
