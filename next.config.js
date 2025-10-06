/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Using only local images in /public; unoptimized for static export hosts like Namecheap
    remotePatterns: [],
    unoptimized: true,
  },
  output: process.env.NEXT_EXPORT ? 'export' : undefined,
};

module.exports = nextConfig;

