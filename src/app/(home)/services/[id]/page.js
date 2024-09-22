import ServiceDetails from "@/Components/PagesComponents/ServiceDetails/ServiceDetails";
import JsonLd from "@/Components/Utilites/JsonLd/JsonLd";
import UserLoading from "@/Components/Utilites/UserLoading/UserLoading";
import {
  singeServiceDetails,
  singleService_package,
  singleSliderPageDetails,
} from "@/config/apis";
import { Suspense } from "react";

export async function generateMetadata({ params, searchParams }, parent) {
  const id = params.id;

  // Fetch data for generating metadata
  const service = await fetch(`${singeServiceDetails}/${id}`).then((res) =>
    res.json()
  );

  // Optionally access and extend (rather than replace) metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: service?.meta.seo_meta?.title,
    description: service?.meta.seo_meta?.description,
    keywords: service?.meta?.seo_meta?.keywords,
    authors: [{ name: service?.meta?.seo_meta?.pagename }],
    robots: service?.meta?.seo_meta?.robots,
    viewport: "width=device-width, initial-scale=1.0, shrink-to-fit=no",
    charSet: "UTF-8",
    other: {
      revised: service?.meta?.seo_meta?.revised,
      pagename: service?.meta?.seo_meta?.pagename,
      "twitter:widgets:csp": service?.meta?.seo_meta?.["twitter:widgets:csp"],
      "envobytemeta:currency":
        service?.meta?.seo_meta?.["envobytemeta:currency"],
      "envobytemeta:locale": service?.meta?.seo_meta?.["envobytemeta:locale"],
      app_environment: service?.meta?.seo_meta?.app_environment,
      es6_browser: service?.meta?.seo_meta?.es6_browser,
      "geo.position": service?.meta?.seo_meta?.["geo.position"],
      "geo.placename": service?.meta?.seo_meta?.["geo.placename"],
      "geo.region": service?.meta?.seo_meta?.["geo.region"],
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
      googlebot: "index, follow",
      bingbot: "index, follow",
      yandex: "index, follow",
      baiduspider: "index, follow",
      slurp: "index, follow",
      rating: "General",
      distribution: "Global",
      coverage: "Worldwide",
      copyright: "Copyright © 2024 Envobyte Ltd. All rights reserved.",
      "theme-color": "#ffffff",
    },
    openGraph: {
      title: service?.meta?.og?.title,
      description: service?.meta?.og?.description,
      type: service?.meta?.og?.type,
      locale: service?.meta?.og?.locale,
      "image:width": service?.meta?.og?.["image:width"],
      "image:height": service?.meta?.og?.["image:height"],
      siteName: service?.meta?.og?.site_name,
      url: service?.meta?.og?.url,
      images: [
        "/some-specific-page-image.jpg",
        ...previousImages,
        {
          url: service?.meta?.og?.image,
          width: parseInt(service?.meta?.og?.["image:width"]) || 1200,
          height: parseInt(service?.meta?.og?.["image:height"]) || 630,
          alt: service?.meta?.og?.title,
        },
      ],
    },
    twitter: {
      card: service?.meta?.twitter?.card,
      site: service?.meta?.twitter?.site,
      title: service?.meta?.twitter?.title,
      description: service?.meta?.twitter?.description,
      creator: service?.meta?.twitter?.creator,
      images: service?.meta?.twitter?.images0
        ? [service?.meta?.twitter?.images0]
        : undefined,
    },
    alternates: {
      canonical: `https://www.envobyte.com/services/${service?.meta?.seo_meta?.canonical}`,
    },
  };
}

const SinglePage = async ({ params }) => {
  // Fetch data for the page
  const service = await fetch(`${singeServiceDetails}/${params?.id}`).then(
    (res) => res?.json()
  );
  const sliders = await fetch(`${singleSliderPageDetails}/${params?.id}`).then(
    (res) => res?.json()
  );
  const packages = await fetch(`${singleService_package}/${params?.id}`).then(
    (res) => res?.json()
  );

  return (
    <>
      <JsonLd data={service?.meta?.json_ld} />
      <Suspense fallback={<UserLoading />}>
        <ServiceDetails
          service={service}
          sliders={sliders}
          packages={packages}
        />
      </Suspense>
    </>
  );
};

export default SinglePage;
