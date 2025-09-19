import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Production optimizations */
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  images: {
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 31536000, // 1 year
  },
  compress: true,
  poweredByHeader: false,
};

export default nextConfig;
