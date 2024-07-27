import PortfolioDetails from "@/Components/PagesComponents/PortfolioDetails/PortfolioDetails";
import JsonLd from "@/Components/Utilites/JsonLd/JsonLd";

export async function generateMetadata({ params, searchParams }, parent) {
  const id = params.id;

  // Fetch data for generating metadata
  const service = await fetch(
    `http://192.168.10.16:8000/api/portfolio_details/${id}`
  ).then((res) => res.json());

  // Optionally access and extend (rather than replace) metadata
  const previousImages = (await parent).openGraph?.images || [];

  console.log(service.meta.seo_meta.title);

  return {
    title: `${service.meta.seo_meta.title} || Portfolios`,
    description: service.meta.seo_meta.description,
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
  const singlePortfolioItem = await fetch(
    `http://192.168.10.16:8000/api/portfolio_details/${params?.id}`
  ).then((res) => res?.json());

  return (
    <div>
      <JsonLd data={singlePortfolioItem?.meta?.json_ld} />
      <PortfolioDetails singlePortfolioItem={singlePortfolioItem} />
    </div>
  );
};

export default SinglePage;
