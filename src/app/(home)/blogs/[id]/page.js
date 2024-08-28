import SingleBlogContent from "@/Components/SingleBlogContent/SingleBlogContent";
import React from "react";

const API_BASE_URL = "https://v2admin.envobyte.com/api";

async function fetchData(url, options = {}) {
  const res = await fetch(url, {
    next: { revalidate: 10 }, // Revalidate every 10 seconds
    ...options,
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch data from ${url}`);
  }

  return res.json();
}

const SingleBlog = async ({ params }) => {
  try {
    const [singleBlog, categories, recommended, popular, tags] = await Promise.all([
      fetchData(`${API_BASE_URL}/blog/${params?.id}`),
      fetchData(`${API_BASE_URL}/blogs/categories`),
      fetchData(`${API_BASE_URL}/blogs/recommended`),
      fetchData(`${API_BASE_URL}/popular/blogs`),
      fetchData(`${API_BASE_URL}/blogs/tags`)
    ]);




    return (
      <div>
        <SingleBlogContent
          singleBlog={singleBlog?.data?.formattedBlog}
          categories={categories?.data}
          recommended={recommended?.data}
          popular={popular?.data?.popular_blogs}
          tags={tags?.data}
        />
      </div>
    );
  } catch (error) {
    console.error("Error fetching single blog data:", error);
    return <div>Error loading blog content. Please try again later.</div>;
  }
};

export default SingleBlog;