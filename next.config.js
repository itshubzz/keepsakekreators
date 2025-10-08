/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Using only local images in /public; unoptimized for static export hosts like Namecheap
    remotePatterns: [],
    unoptimized: true,
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  output: process.env.NEXT_EXPORT ? 'export' : undefined,
  experimental: {
    optimizeCss: true,
  },
};

module.exports = nextConfig;

