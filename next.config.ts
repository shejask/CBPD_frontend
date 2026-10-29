import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  // output: "export" is removed for Vercel native support
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://admin.cbpd.co.uk/api/:path*',
      },
    ];
  }
};

export default nextConfig;
