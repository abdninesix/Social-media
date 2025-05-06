import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
        port: "",
      },
    ],
  },
  experimental: {
    turbo: true,
    serverActions: {
      bodySizeLimit: '50mb',
    },
  },
};

export default nextConfig;
