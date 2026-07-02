import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    deviceSizes: [384, 420, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [32, 48, 64, 96, 128, 256],
    qualities: [65, 75],
  },
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
