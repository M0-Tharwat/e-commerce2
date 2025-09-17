import type { NextConfig } from 'next'

// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // تجاهل كل أخطاء ESLint أثناء الـ build على Vercel
    ignoreDuringBuilds: true,
  },
  typescript: {
    // تجاهل كل أخطاء TypeScript أثناء الـ build على Vercel
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;

 
const config: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ecommerce.routemisr.com',
        port: '',
        pathname: '/Route-Academy-products/**',
        search: '',
      },
    ],
  },
}
 
export default config