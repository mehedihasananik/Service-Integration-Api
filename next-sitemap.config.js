const axios = require("axios");
const xml2js = require("xml2js");

module.exports = {
  siteUrl: process.env.SITE_URL || "http://localhost:3000",
  generateRobotsTxt: true,
  additionalPaths: async (config) => {
    const result = [];

    try {
      const response = await axios.get("http://192.168.10.16:8000/sitemap.xml");
      const xmlData = response.data;

      const parser = new xml2js.Parser({
        explicitArray: false,
        mergeAttrs: true,
      });
      const parsedData = await parser.parseStringPromise(xmlData);

      if (parsedData.urlset && parsedData.urlset.url) {
        const urls = Array.isArray(parsedData.urlset.url)
          ? parsedData.urlset.url
          : [parsedData.urlset.url];

        for (const url of urls) {
          const urlObj = {
            loc: url.loc,
            changefreq: url.changefreq || "daily",
            priority: url.priority || 0.7,
          };

          if (url["xhtml:link"]) {
            urlObj.alternateRefs = Array.isArray(url["xhtml:link"])
              ? url["xhtml:link"]
              : [url["xhtml:link"]];
          }

          if (url.lastmod) {
            urlObj.lastmod = url.lastmod;
          }

          if (url["image:image"]) {
            urlObj.images = [
              {
                loc: url["image:image"]["image:loc"],
                caption: url["image:image"]["image:caption"],
              },
            ];
          }

          if (url["mobile:mobile"] !== undefined) {
            urlObj.mobile = true;
          }

          result.push(urlObj);
        }
      }
    } catch (error) {
      console.error("Error fetching sitemap data:", error);
    }

    return result;
  },
  formatFunc: (url) => {
    // Custom format function to include image and mobile information
    let xmlString = `<url>
      <loc>${url.loc}</loc>
      <lastmod>${url.lastmod || new Date().toISOString()}</lastmod>
      <changefreq>${url.changefreq}</changefreq>
      <priority>${url.priority}</priority>`;

    if (url.alternateRefs) {
      url.alternateRefs.forEach((ref) => {
        xmlString += `<xhtml:link rel="alternate" hreflang="${ref.hreflang}" href="${ref.href}"/>`;
      });
    }

    if (url.images) {
      url.images.forEach((image) => {
        xmlString += `<image:image>
          <image:loc>${image.loc}</image:loc>
          <image:caption>${image.caption}</image:caption>
        </image:image>`;
      });
    }

    if (url.mobile) {
      xmlString += `<mobile:mobile/>`;
    }

    xmlString += `</url>`;
    return xmlString;
  },
};
