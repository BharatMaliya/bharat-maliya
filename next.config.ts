import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['bharatmaliya.com', 'dev.bharatmaliya.com', 'developer.bharatmaliya.com'],
    formats: ['image/webp', 'image/avif'],
  },
};

export default nextConfig;
