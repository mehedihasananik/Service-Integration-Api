import SingleBlogContent from "@/Components/SingleBlogContent/SingleBlogContent";
import { apiEndpoint } from "@/config/config";
import React from "react";

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