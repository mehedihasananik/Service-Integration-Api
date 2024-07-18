import { MetadataRoute } from "next";

export default function sitemap() {
  const links = [
    {
      url: "https://envobyte.com", // Replace with your homepage
      lastModified: new Date(),
    },
  ];

  return links;
}

export const config = {
  siteUrl: "https://envobyte.com",
  generateRobotsTxt: true,
  exclude: ["/server-sitemap-index.xml"],
  robotsTxtOptions: {
    additionalSitemaps: ["https://envobyte.com/server-sitemap-index.xml"],
  },
};
