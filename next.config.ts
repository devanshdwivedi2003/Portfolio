import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // A stray lockfile in the parent folder otherwise confuses root detection
  turbopack: {
    root: __dirname,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
