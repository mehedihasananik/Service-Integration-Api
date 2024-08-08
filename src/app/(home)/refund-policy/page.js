import Container from "@/Components/Container/Container";
import Global_PageHtml from "@/Components/Utilites/Global_PageHtml/Global_PageHtml";
import JsonLd from "@/Components/Utilites/JsonLd/JsonLd";
import { apiEndpoint } from "@/config/config";
import React from "react";

async function getMetadata() {
  const service = await fetch(`${apiEndpoint}/refund_policy`).then((res) =>
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

async function refundContent() {
  const res = await fetch(`${apiEndpoint}/refund_policy`, {
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const RefundPolicy = async () => {
  const refunds = await refundContent();
  // console.log(refunds.meta);

  return (
    <>
      <JsonLd data={refunds?.meta?.json_ld} />
      <Container>
        <div className="bg-gray-100  px-8 mt-5 pb-8 pt-5 pageHtml">
          <Global_PageHtml serviceDetails={refunds.page_content} />
        </div>
      </Container>
    </>
  );
};

export default RefundPolicy;
