const nextConfig = {
  reactStrictMode: false,
  swcMinify: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: [
      "192.168.10.14",
      "admin.envobyte.com",
      "192.168.10.16",
      "envobyte.nyc3.digitaloceanspaces.com",
    ],
  },
};

export default nextConfig;
