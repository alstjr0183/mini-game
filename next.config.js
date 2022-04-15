/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.pixabay.com', 'image.tmdb.org'],
  },
};

module.exports = nextConfig;
