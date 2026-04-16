import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pub-81e4b3ca714e4c05870968970387b297.r2.dev',
      },
    ],
  },
};

export default nextConfig;
