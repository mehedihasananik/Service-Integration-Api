import ServicesPageContent from "@/Components/PagesComponents/ServicesPageContent/ServicesPageContent";
import JsonLd from "@/Components/Utilites/JsonLd/JsonLd";
import UserLoading from "@/Components/Utilites/UserLoading/UserLoading";
import { allsServiceItemsApi, serviceListApi } from "@/config/apis";
import React, { Suspense } from "react";

async function getMetadata() {
  const service = await fetch(
    `http://192.168.10.16:8000/api/sevice_items`
  ).then((res) => res.json());

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

async function getServices() {
  try {
    const [res1, res2] = await Promise.all([
      fetch(`${serviceListApi}`, { cache: "no-store" }),
      fetch(`${allsServiceItemsApi}`, { cache: "no-store" }),
    ]);

    if (!res1?.ok || !res2?.ok) {
      throw new Error("Failed to fetch data");
    }

    const serviceCategories = await res1.json();
    const services = await res2.json();

    return { serviceCategories, services };
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export default async function ServicesPage() {
  const { serviceCategories, services } = await getServices();

  return (
    <>
      <JsonLd data={services?.meta?.json_ld} />
      <Suspense fallback={<UserLoading />}>
        <ServicesPageContent
          serviceCategories={serviceCategories}
          services={services.ServiceItemsArray}
          serviceDetails={services?.page_content}
        />
      </Suspense>
    </>
  );
}
