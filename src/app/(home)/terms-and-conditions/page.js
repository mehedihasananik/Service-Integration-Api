import Global_PageHtml from "@/Components/Utilites/Global_PageHtml/Global_PageHtml";
import JsonLd from "@/Components/Utilites/JsonLd/JsonLd";
import { apiEndpoint } from "@/config/config";
import React from "react";

async function getMetadata() {
  const service = await fetch(`${apiEndpoint}/terms_condition`).then((res) =>
    res.json()
  );

  return service;
}

export async function generateMetadata() {
  const service = await getMetadata();
  // console.log(service?.meta?.seo_meta?.owner);

  return {
    title: `${service?.meta?.seo_meta?.title}`,
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

async function termsContent() {
  const res = await fetch(`${apiEndpoint}/terms_condition`, {
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const Terms = async () => {
  const terms = await termsContent();
  // console.log(terms);

  return (
    <>
      <JsonLd data={terms?.meta?.json_ld} />
      <div className="max-w-[1520px] mx-auto px-[0%] md:px-[4%] xl:px-[8%] 4xl:px-[4%]">
        <div className="bg-gray-100 mt-5 md:px-10 pageHtml">
          <div className="container mx-auto px-4 py-3 md:py-8">
            <Global_PageHtml serviceDetails={terms.page_content} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Terms;
