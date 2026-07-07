import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: [
    "@nexora-systems-inc/planner-core",
    "@nexora-systems-inc/planner-adapters",
    "@nexora-systems-inc/planner-ui",
  ],
};

export default nextConfig;
