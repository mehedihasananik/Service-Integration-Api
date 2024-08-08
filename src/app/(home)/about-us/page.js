import AboutUsContent from "@/Components/PagesComponents/AboutUsContent/AboutUsContent";
import JsonLd from "@/Components/Utilites/JsonLd/JsonLd";

import { aboutUsApi, aboutUsItemApi } from "@/config/apis";
import { apiEndpoint } from "@/config/config";
import React from "react";

async function getMetadata() {
  const service = await fetch(`${apiEndpoint}/aboutus_page`).then((res) =>
    res.json()
  );

  return service;
}

export async function generateMetadata() {
  const service = await getMetadata();
  // console.log(service?.meta?.seo_meta?.owner);

  return {
    title: `${
      service?.meta?.seo_meta?.title || service.basic.title
    } || Envobyte`,
    description: service?.meta?.seo_meta?.description,
    keywords: service?.meta?.seo_meta?.keywords,
    authors: [{ name: service?.meta?.seo_meta?.author }],
    robots: service?.meta?.seo_meta?.robots,
    other: {
      googlebot: service?.meta?.seo_meta?.googlebot,
      language: service?.meta?.seo_meta?.language,
      copyright: service?.meta?.seo_meta?.copyright,
      distribution: service?.meta?.seo_meta?.distribution,
      coverage: service?.meta?.seo_meta?.coverage,
      rating: service?.meta?.seo_meta?.rating,
      owner: service?.meta?.seo_meta?.owner,
      "google-site-verification":
        service?.meta?.seo_meta?.["google-site-verification"],
      "msvalidate.01": service?.meta?.seo_meta?.["msvalidate.01"],
      alexaVerifyID: service?.meta?.seo_meta?.alexaVerifyID,
      pinterest: service?.meta?.seo_meta?.pinterest,
      "yandex-verification": service?.meta?.seo_meta?.["yandex-verification"],
      baidu: service?.meta?.seo_meta?.baidu,
      facebook: service?.meta?.seo_meta?.facebook,
      "article:published_time":
        service?.meta?.seo_meta?.["article:published_time"],
    },
    openGraph: {
      title: service?.meta?.og?.title,
      description: service?.meta?.og?.description,
      type: service?.meta?.og?.type,
      siteName: service?.meta?.og?.site_name,
      url: service?.meta?.og?.url,
      images: [
        {
          url: service?.meta?.og?.image,
          width: 800,
          height: 600,
          alt: service?.meta?.og?.title,
        },
      ],
    },
    twitter: {
      card: service?.meta?.twitter?.card,
      site: service?.meta?.twitter?.site,
      title: service?.meta?.twitter?.title,
      description: service?.meta?.twitter?.description,
      images: [service?.meta?.twitter?.image],
    },
    alternates: {
      canonical: service?.meta?.seo_meta?.canonical,
    },
  };
}

async function getAboutPage() {
  const res = await fetch(`${aboutUsApi}`, {
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

async function getAbout_item() {
  const res = await fetch(`${aboutUsItemApi}`, {
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const AboutUsPage = async () => {
  const aboutDetails = await getAboutPage();
  const singleAboutDetails = await getAbout_item();
  // console.log(aboutDetails.aboutUs);

  return (
    <>
      <JsonLd data={aboutDetails?.meta?.json_ld} />
      <AboutUsContent
        aboutDetails={aboutDetails.aboutUs}
        singleAboutDetails={singleAboutDetails}
      />
    </>
  );
};

export default AboutUsPage;
