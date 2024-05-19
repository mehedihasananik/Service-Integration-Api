const nextConfig = {
  reactStrictMode: false,
  swcMinify: false,
  // trailingSlash: true,

  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    // format: ["image/avif", "images/webp"],
    domains: [
      "192.168.10.14",
      "admin.envobyte.com",
      "192.168.10.16",
      "envobyte.nyc3.digitaloceanspaces.com",
      "images.pexels.com",
    ],
  },
};

export default nextConfig;
