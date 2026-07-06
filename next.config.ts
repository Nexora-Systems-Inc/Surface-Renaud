import type { NextConfig } from "next";
import path from "node:path";
import { fileURLToPath } from "node:url";

const currentDir = path.dirname(fileURLToPath(import.meta.url));
const workspaceRoot = path.join(currentDir, "../../..");

const nextConfig: NextConfig = {
  outputFileTracingRoot: workspaceRoot,
  transpilePackages: [
    "@nexora/planner-core",
    "@nexora/planner-adapters",
    "@nexora/planner-ui",
  ],
  turbopack: {
    root: workspaceRoot,
  },
};

export default nextConfig;
