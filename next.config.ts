import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: "export" is removed for Vercel native support
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://admin.cbpd.co.uk/api/:path*',
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/Verifications',
        destination: '/verifications',
        permanent: true,
      },
      {
        source: '/Verifications/:path*',
        destination: '/verifications/:path*',
        permanent: true,
      }
    ];
  },
};

export default nextConfig;
