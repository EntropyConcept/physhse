/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa");


module.exports = withPWA({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === "development",
  },
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/main',
        permanent: true,
      },
    ]
  },
  experimental: { images: { layoutRaw: true } }
});
