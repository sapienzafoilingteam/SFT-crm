import type { NextConfig } from "next";
const config: NextConfig = {
  devIndicators: false,
  distDir: process.env.CRM_BUILD_DIR || ".next",
  async headers() {
    return [{
      source: "/sw.js",
      headers: [
        { key: "Cache-Control", value: "no-cache, no-store, must-revalidate" },
        { key: "Content-Type", value: "application/javascript; charset=utf-8" },
      ],
    }];
  },
};
export default config;
