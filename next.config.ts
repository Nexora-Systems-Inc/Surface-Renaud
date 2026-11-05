import type { NextConfig } from "next";

// Private @nexora-systems-inc/planner-* packages are disconnected so production
// installs without NPM_TOKEN. Restore transpilePackages for those packages
// when they are dependencies again.
const nextConfig: NextConfig = {};

export default nextConfig;
