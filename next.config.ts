import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true, // Disables ESLint during builds
  },
  images: {
    domains: [
      "d10rvdv6rxomuk.cloudfront.net",
      "res.cloudinary.com",
      "www.zatiq.com",
    ],
    unoptimized: false,
  },
  swcMinify: true,

  redirects: async () => [
    {
      source: "/shop/:path*",
      destination: `${process.env.NEXT_PUBLIC_REDIRECT_URL}/merchant/:path*`,
      permanent: true,
    },
    {
      source: "/receipt/:path*",
      destination: `${process.env.NEXT_PUBLIC_REDIRECT_URL}/receipt/:path*`,
      permanent: true,
    },
  ],
  env: {
    API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
};

export default nextConfig;
