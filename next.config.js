/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  compiler: {
    styledComponents: {
      displayName: false,
      ssr: true,
    },
  },
};

module.exports = nextConfig;
