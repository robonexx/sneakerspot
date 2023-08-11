/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.sneakersnstuff.com',
        port: '',
        pathname: '/images/**',
      },
      {
        protocol: 'https',
        hostname: 'img01.ztat.net',
        port: '',
        pathname: '/article/**',
      },
      {
        protocol: 'https',
        hostname: 'www.elgiganten.se',
        port: '',
        pathname: '/image/**',
      },
    ],
  },
};

module.exports = nextConfig;
