import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  images: {
    formats: ['image/webp', 'image/avif'],
  },
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;
