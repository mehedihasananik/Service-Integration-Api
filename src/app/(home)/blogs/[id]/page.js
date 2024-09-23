import SingleBlogContent from "@/Components/SingleBlogContent/SingleBlogContent";
import JsonLd from "@/Components/Utilites/JsonLd/JsonLd";
import UserLoading from "@/Components/Utilites/UserLoading/UserLoading";
import { apiEndpoint } from "@/config/config";
import { fetchMultipleData } from "@/config/fetchData";
import { generateCommonMetadata } from "@/config/generateMetadata";
import React, { Suspense } from "react";

async function getPageData(id) {
  try {
    const [singleBlog, categories, recommended, popular, tags] =
      await fetchMultipleData([
        `/blog/${id}`,
        "/blogs/categories",
        "/blogs/recommended",
        "/popular/blogs",
        "/blogs/tags",
      ]);

    return { singleBlog, categories, recommended, popular, tags };
  } catch (error) {
    console.error("Error fetching page data:", error);
    throw error;
  }
}

export async function generateMetadata({ params }, parent) {
  const { singleBlog } = await getPageData(params.id);
  return generateCommonMetadata(singleBlog.data, parent);
}

const SingleBlog = async ({ params }) => {
  try {
    const { singleBlog, categories, recommended, popular, tags } =
      await getPageData(params.id);

    return (
      <div>
        <JsonLd data={singleBlog?.data?.meta?.json_ld} />
        <Suspense fallback={<UserLoading />}>
          <SingleBlogContent
            singleBlog={singleBlog?.data?.formattedBlog}
            categories={categories?.data}
            recommended={recommended?.data}
            popular={popular?.data?.popular_blogs}
            tags={tags?.data}
            params={params}
            comments={singleBlog?.data?.formattedBlog?.comments}
          />
        </Suspense>
      </div>
    );
  } catch (error) {
    console.error("Error rendering single blog page:", error);
    return <div>Error loading blog post. Please try again later.</div>;
  }
};

export default SingleBlog;
