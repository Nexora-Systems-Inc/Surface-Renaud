import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: [
    "@nexora/planner-core",
    "@nexora/planner-adapters",
    "@nexora/planner-ui",
  ],
};

export default nextConfig;
