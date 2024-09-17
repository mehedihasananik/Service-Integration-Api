import ServiceDetails from "@/Components/PagesComponents/ServiceDetails/ServiceDetails";
import JsonLd from "@/Components/Utilites/JsonLd/JsonLd";

import {
  singeServiceDetails,
  singleService_package,
  singleSliderPageDetails,
} from "@/config/apis";
import { Suspense } from "react";
import Loading from "./loading";

export async function generateMetadata({ params, searchParams }, parent) {
  const id = params.id;

  // Fetch data for generating metadata
  const service = await fetch(`${singeServiceDetails}/${id}`, {
    cache: "no-store",
  }).then((res) => res.json());

  // Optionally access and extend (rather than replace) metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: `${service?.meta.seo_meta?.title}`,
    description: `${service?.meta.seo_meta?.description}`,
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
      title:
        service?.meta?.og?.title ||
        `${service.service_details[0].sevice_items_name} || Services`,
      description: service?.meta?.og?.description || service.description,
      type: service?.meta?.og?.type,
      siteName: service?.meta?.og?.site_name,
      url: service?.meta?.og?.url,
      images: [
        "/some-specific-page-image.jpg",
        ...previousImages,
        ...(service?.meta?.og?.image
          ? [
              {
                url: service.meta.og.image,
                width: 800,
                height: 600,
                alt: service.meta.og.title,
              },
            ]
          : []),
      ],
    },
    twitter: {
      card: service?.meta?.twitter?.card,
      site: service?.meta?.twitter?.site,
      title:
        service?.meta?.twitter?.title ||
        `${service.service_details[0].sevice_items_name} || Services`,
      description: service?.meta?.twitter?.description || service.description,
      images: service?.meta?.twitter?.image
        ? [service.meta.twitter.image]
        : undefined,
    },
    alternates: {
      canonical: service?.meta?.seo_meta?.canonical,
    },
  };
}

const SinglePage = async ({ params }) => {
  try {
    const [serviceRes, slidersRes, packagesRes] = await Promise.all([
      fetch(`${singeServiceDetails}/${params?.id}`, { cache: "no-store" }),
      fetch(`${singleSliderPageDetails}/${params?.id}`, { cache: "no-store" }),
      fetch(`${singleService_package}/${params?.id}`, { cache: "no-store" }),
    ]);

    if (!serviceRes.ok || !slidersRes.ok || !packagesRes.ok) {
      throw new Error("Failed to fetch data");
    }

    const service = await serviceRes.json();
    const sliders = await slidersRes.json();
    const packages = await packagesRes.json();

    return (
      <>
        <JsonLd data={service?.meta?.json_ld} />
        <Suspense fallback={<Loading />}>
          <ServiceDetails
            service={service}
            sliders={sliders}
            packages={packages}
          />
        </Suspense>
      </>
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Error loading page. Please try again later.</div>;
  }
};

export default SinglePage;
