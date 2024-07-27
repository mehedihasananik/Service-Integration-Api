export default function robots() {
  const baseUrl = process.env.SITE_URL || "https://envobyte.com";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: process.env.NODE_ENV === "production" ? "/admin/" : "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
