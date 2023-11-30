/** @type {import('next').NextConfig} */
const ONE_YEAR = 60 * 60 * 24 * 365;

const nextConfig = {
  images: {
    domains: ['utfs.io'],
    minimumCacheTTL: ONE_YEAR,
    formats: ['image/webp'],
  },
};

module.exports = nextConfig;
