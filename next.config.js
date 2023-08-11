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
          protocol: "https",
          hostname: "picsum.photos",
          port: "",
          pathname: "/id/**",
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