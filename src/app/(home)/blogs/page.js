import BlogPageContent from "@/Components/BlogPageContent/BlogPageContent";

const API_BASE_URL = "http://192.168.10.16:8000/api";

async function fetchData(url, options = {}) {
  const res = await fetch(url, {
    next: { revalidate: 10 }, // Revalidate every hour
    ...options,
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch data from ${url}`);
  }

  return res.json();
}

const BlogPage = async () => {
  try {
    const [blogs, categories, recommended, popular, tags] = await Promise.all([
      fetchData(`${API_BASE_URL}/blogs`),
      fetchData(`${API_BASE_URL}/blogs/categories`),
      fetchData(`${API_BASE_URL}/blogs/recommended`),
      fetchData(`${API_BASE_URL}/popular/blogs`),
      fetchData(`${API_BASE_URL}/blogs/tags`)
    ]);

    return (
      <BlogPageContent
        blogs={blogs.data.formattedBlogs}
        categories={categories.data}
        recommended={recommended.data}
        popular={popular?.data?.popular_blogs}
        tags={tags.data}
      />
    );
  } catch (error) {
    console.error("Error fetching blog data:", error);
    return <div>Error loading blog content. Please try again later.</div>;
  }
};

export default BlogPage;