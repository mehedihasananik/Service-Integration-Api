import BlogPageContent from "@/Components/BlogPageContent/BlogPageContent";
import JsonLd from "@/Components/Utilites/JsonLd/JsonLd";
import Loading from "@/Components/Utilites/Loading/Loading";
import { fetchMultipleData } from "@/config/fetchData";
import { generateCommonMetadata } from "@/config/generateMetadata";
import { Suspense } from "react";

async function getPageData() {
  try {
    const [blogs, categories, recommended, popular, tags] =
      await fetchMultipleData([
        "/blogs",
        "/blogs/categories",
        "/blogs/recommended",
        "/popular/blogs",
        "/blogs/tags",
      ]);

    return { blogs, categories, recommended, popular, tags };
  } catch (error) {
    console.error("Error fetching page data:", error);
    throw error;
  }
}

export async function generateMetadata(parent) {
  const { blogs } = await getPageData();
  return generateCommonMetadata(blogs.data, parent);
}

const BlogPage = async () => {
  try {
    const { blogs, categories, recommended, popular, tags } =
      await getPageData();

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
  } catch (error) {
    console.error("Error rendering blog page:", error);
    return <div></div>;
  }
};

export default BlogPage;
