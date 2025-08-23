/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "pub-36d2b418b9204c179793e36c0e125419.r2.dev", // <-- add your domain here
      "images.unsplash.com", // Allow Unsplash images
    ],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },

  extends: ["next", "next/core-web-vitals"],
  rules: {
    "react/no-unescaped-entities": "off", // disables apostrophe error
    "react-hooks/rules-of-hooks": "error", // KEEP: catches invalid hook usage
    "@next/next/no-img-element": "warn", // you can turn this off too if needed
    "@next/next/no-html-link-for-pages": "warn", // downgrade to warn
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://cbpd-admin.vercel.app/api/:path*", // your backend
      },
    ];
  },
};

export default nextConfig;
