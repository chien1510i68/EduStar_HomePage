/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["192.168.1.29", "sununi.edu.vn", "storage.googleapis.com"],
    unoptimized: true,
  },
  output: "standalone",
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
};

module.exports = nextConfig;
