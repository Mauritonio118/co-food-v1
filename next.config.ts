import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ['static.usernames.app-backend.toolsforhumanity.com'],
  },
  allowedDevOrigins: [(process.env.AUTH_URL ?? '').slice(8)], // Add your dev origin here
  reactStrictMode: false,
};

export default nextConfig;
