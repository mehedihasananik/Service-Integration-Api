const nextConfig = {
  reactStrictMode: false,
  swcMinify: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["192.168.10.14", "admin.envobyte.com"],
  },
};

export default nextConfig;
