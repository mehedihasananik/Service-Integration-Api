import BlogPageContent from "@/Components/BlogPageContent/BlogPageContent";
import UserLoading from "@/Components/Utilites/UserLoading/UserLoading";
import { apiEndpoint } from "@/config/config";
import { Suspense } from "react";

async function fetchData(url) {
  const res = await fetch(url, {
    next: { revalidate: 10 }
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
    fetchData(`${apiEndpoint}/blogs/tags`)
  ]);

  return (
    <>
      <Suspense fallback={<UserLoading />}>
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
}


export default BlogPage;