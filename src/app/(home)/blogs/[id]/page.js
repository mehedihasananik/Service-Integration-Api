
import SingleBlogContent from "@/Components/SingleBlogContent/SingleBlogContent";
import JsonLd from "@/Components/Utilites/JsonLd/JsonLd";
import { apiEndpoint } from "@/config/config";
import React from "react";




export async function generateMetadata({ params, searchParams }, parent) {
  const id = params.id;

  // Fetch data for generating metadata
  const services = await fetch(`${apiEndpoint}/blog/${id}`).then((res) =>
    res.json()
  );
  const service = services.data.meta;

  // Optionally access and extend (rather than replace) metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: `${service.seo_meta.title} || Services`,
    description: service.seo_meta.description,
    keywords: service?.seo_meta?.keywords.join(", "), // Join keywords array into a string
    authors: [{ name: service?.seo_meta?.author }],
    robots: service?.seo_meta?.robots,
    other: {
      googlebot: service.seo_meta?.googlebot,
      language: service.seo_meta?.language,
      copyright: service.seo_meta?.copyright,
      distribution: service.seo_meta?.distribution,
      coverage: service.seo_meta?.coverage,
      rating: service.seo_meta?.rating,
      owner: service.seo_meta?.owner,
      "google-site-verification": service.seo_meta?.["google-site-verification"],
      "msvalidate.01": service.seo_meta?.["msvalidate.01"],
      alexaVerifyID: service.seo_meta?.alexaVerifyID,
      pinterest: service.seo_meta?.pinterest,
      "yandex-verification": service.seo_meta?.["yandex-verification"],
      baidu: service.seo_meta?.baidu,
      facebook: service.seo_meta?.facebook,
      "article:published_time": service.seo_meta?.["article:published_time"],
    },
    openGraph: {
      title: service.og?.title || `${service.seo_meta.title} || Services`,
      description: service.og?.description || service.seo_meta.description,
      type: service.og?.type,
      siteName: service.og?.site_name,
      url: service.og?.url,
      images: [
        ...previousImages,
        ...(service.og?.image
          ? [
            {
              url: service.og.image,
              width: 800,
              height: 600,
              alt: service.og.title,
            },
          ]
          : []),
      ],
    },
    twitter: {
      card: service.twitter?.card,
      site: service.twitter?.site,
      title: service.twitter?.title || `${service.seo_meta.title} || Services`,
      description: service.twitter?.description || service.seo_meta.description,
      images: service.twitter?.image
        ? [service.twitter.image]
        : undefined,
    },
    alternates: {
      canonical: service.seo_meta?.canonical,
    },
  };
}










async function fetchData(url) {
  const res = await fetch(url, {
    next: { revalidate: 10 }
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch data from ${url}`);
  }

  return res.json();
}

const SingleBlog = async ({ params }) => {
  const [singleBlog, categories, recommended, popular, tags] = await Promise.all([
    fetchData(`${apiEndpoint}/blog/${params?.id}`),
    fetchData(`${apiEndpoint}/blogs/categories`),
    fetchData(`${apiEndpoint}/blogs/recommended`),
    fetchData(`${apiEndpoint}/popular/blogs`),
    fetchData(`${apiEndpoint}/blogs/tags`)
  ]);
  // console.log()

  return (
    <div>
      <JsonLd data={singleBlog?.data?.meta?.json_ld} />
      <SingleBlogContent
        singleBlog={singleBlog?.data?.formattedBlog}
        categories={categories?.data}
        recommended={recommended?.data}
        popular={popular?.data?.popular_blogs}
        tags={tags?.data}
        params={params}
        comments={singleBlog?.data?.formattedBlog?.comments}
      />
    </div>
  );
}


export default SingleBlog;