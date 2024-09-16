import BlogPageContent from "@/Components/BlogPageContent/BlogPageContent";
import JsonLd from "@/Components/Utilites/JsonLd/JsonLd";
import { apiEndpoint } from "@/config/config";
import { Suspense } from "react";
import Loading from "./loading";

async function getMetadata() {
  const service = await fetch(`${apiEndpoint}/blogs`).then((res) => res.json());
  return service?.data;
}

export async function generateMetadata() {
  const service = await getMetadata();

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

async function fetchData(url) {
  const res = await fetch(url, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error(`Failed to fetch data from ${url}`);
  }
  return res.json();
}

const BlogPage = async () => {
  const [blogs, categories, recommended, popular, tags] = await Promise.all([
    fetchData(`${apiEndpoint}/blogs`),
    fetchData(`${apiEndpoint}/blogs/categories`),
    fetchData(`${apiEndpoint}/blogs/recommended`),
    fetchData(`${apiEndpoint}/popular/blogs`),
    fetchData(`${apiEndpoint}/blogs/tags`),
  ]);

  return (
    <>
      <JsonLd data={blogs?.data?.meta?.json_ld} />
      <Suspense fallback={<Loading />}>
        <BlogPageContent
          blogs={blogs?.data?.formattedBlogs}
          categories={categories?.data}
          recommended={recommended?.data}
          popular={popular?.data?.popular_blogs}
          tags={tags.data}
        />
      </Suspense>
    </>
  );
};

export default BlogPage;
