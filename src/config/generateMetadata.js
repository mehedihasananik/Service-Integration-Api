export async function generateCommonMetadata(pageData, parent) {
  const previousImages = (await parent)?.openGraph?.images || [];

  return {
    title: pageData?.meta?.seo_meta?.title,
    description: pageData?.meta?.seo_meta?.description,
    keywords: pageData?.meta?.seo_meta?.keywords,
    authors: [
      {
        name:
          pageData?.meta?.seo_meta?.pagename ||
          pageData?.meta?.seo_meta?.author,
      },
    ],
    robots: pageData?.meta?.seo_meta?.robots,
    // viewport: "width=device-width, initial-scale=1.0, shrink-to-fit=no",
    // charSet: "UTF-8",
    other: {
      revised: pageData?.meta?.seo_meta?.revised,
      pagename: pageData?.meta?.seo_meta?.pagename,
      "twitter:widgets:csp": pageData?.meta?.seo_meta?.["twitter:widgets:csp"],
      "envobytemeta:currency":
        pageData?.meta?.seo_meta?.["envobytemeta:currency"],
      "envobytemeta:locale": pageData?.meta?.seo_meta?.["envobytemeta:locale"],
      app_environment: pageData?.meta?.seo_meta?.app_environment,
      es6_browser: pageData?.meta?.seo_meta?.es6_browser,
      "geo.position": pageData?.meta?.seo_meta?.["geo.position"],
      "geo.placename": pageData?.meta?.seo_meta?.["geo.placename"],
      "geo.region": pageData?.meta?.seo_meta?.["geo.region"],
      "X-UA-Compatible": "IE=edge",
      "Content-Type": "text/html; charset=utf-8",
      "x-dns-prefetch-control": "on",
      "Content-Security-Policy": "default-src 'self'",
      referrer: "no-referrer-when-downgrade",
      HandheldFriendly: "true",
      MobileOptimized: "320",
      "apple-mobile-web-app-capable": "yes",
      "apple-mobile-web-app-status-bar-style": "black",
      author: "Envobyte Ltd",
      googlebot: pageData?.meta?.seo_meta?.googlebot || "index, follow",
      bingbot: "index, follow",
      yandex: "index, follow",
      baiduspider: "index, follow",
      slurp: "index, follow",
      rating: pageData?.meta?.seo_meta?.rating || "General",
      distribution: pageData?.meta?.seo_meta?.distribution || "Global",
      coverage: pageData?.meta?.seo_meta?.coverage || "Worldwide",
      copyright:
        pageData?.meta?.seo_meta?.copyright ||
        "Copyright © 2024 Envobyte Ltd. All rights reserved.",
      "theme-color": "#ffffff",
      language: pageData?.meta?.seo_meta?.language,
      owner: pageData?.meta?.seo_meta?.owner,
      "google-site-verification":
        pageData?.meta?.seo_meta?.["google-site-verification"],
      "msvalidate.01": pageData?.meta?.seo_meta?.["msvalidate.01"],
      facebook: 216678091242743,
      "article:published_time":
        pageData?.meta?.seo_meta?.["article:published_time"],
    },
    openGraph: {
      title: pageData?.meta?.og?.title,
      description: pageData?.meta?.og?.description,
      type: pageData?.meta?.og?.type,
      locale: pageData?.meta?.og?.locale,
      "image:width": pageData?.meta?.og?.["image:width"],
      "image:height": pageData?.meta?.og?.["image:height"],
      siteName: pageData?.meta?.og?.site_name,
      url: pageData?.meta?.og?.url,
      images: pageData?.meta?.og?.image,
    },
    twitter: {
      card: pageData?.meta?.twitter?.card,
      site: pageData?.meta?.twitter?.site,
      title: pageData?.meta?.twitter?.title,
      description: pageData?.meta?.twitter?.description,
      creator: pageData?.meta?.twitter?.creator,
      images: pageData?.meta?.twitter?.images0
        ? [pageData?.meta?.twitter?.images0]
        : pageData?.meta?.twitter?.image
        ? [pageData?.meta?.twitter?.image]
        : undefined,
    },
    alternates: {
      canonical: `https://www.envobyte.com/${pageData?.meta?.seo_meta?.canonical}`,
    },
  };
}
