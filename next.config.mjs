import bundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = withBundleAnalyzer({
  reactStrictMode: false,
  swcMinify: false,
  trailingSlash: true,

  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: [
      "192.168.10.14",
      "admin.envobyte.com",
      "192.168.10.16",
      "envobyte.nyc3.digitaloceanspaces.com",
      "images.pexels.com",
      "admin.softpixe.com",
      "192.168.10.15",
      "lh3.googleusercontent.com",
      "envobyte.com",
      "i.ibb.co",
      "admin.envobyte.shop",
      "v2admin.envobyte.com",
      "192.168.10.222",
      "admin.envobyte.com",
      "site.sociolib.com",
    ],
  },
});

export default nextConfig;
