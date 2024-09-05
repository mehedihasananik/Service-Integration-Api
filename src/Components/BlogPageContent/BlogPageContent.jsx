"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import BlogSideBar from "../Utilites/BlogSection/BlogSideBar/BlogSideBar";
import ElegantSubscribeModal from "../Utilites/BlogSection/ElegantSubscribeModal/ElegantSubscribeModal";
import BlogCard from "../Utilites/BlogSection/BlogCard/BlogCard";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { TbCategoryPlus } from "react-icons/tb";

const BlogPageContent = ({ blogs, categories, recommended, popular, tags }) => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedTag, setSelectedTag] = useState(null);
  const [filteredBlogs, setFilteredBlogs] = useState(blogs);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 2;

  const router = useRouter();
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");

  useEffect(() => {
    if (categoryParam) {
      const selectedCategory = categories.find(
        (cat) => cat.slug === categoryParam
      );
      setSelectedCategory(selectedCategory || null);
      setSelectedTag(null);
    }
  }, [categoryParam, categories]);

  useEffect(() => {
    const lowercasedSearchTerm = searchTerm.trim().toLowerCase();
    const filtered = blogs.filter((blog) => {
      const matchesCategory =
        !selectedCategory || blog.category.slug === selectedCategory.slug;
      const matchesTag =
        !selectedTag ||
        Object.values(blog.tags).some((tag) => tag === selectedTag.name);
      const matchesSearch =
        !lowercasedSearchTerm ||
        blog.title.toLowerCase().includes(lowercasedSearchTerm) ||
        blog.content.toLowerCase().includes(lowercasedSearchTerm);
      return matchesCategory && matchesTag && matchesSearch;
    });

    setFilteredBlogs(filtered);
    setCurrentPage(1); // Reset to first page when filters change
  }, [selectedCategory, selectedTag, blogs, searchTerm]);

  const handleCategorySelect = (category) => {
    if (category) {
      router.push(`/blogs?category=${category.slug}`);
    } else {
      setSelectedCategory(null);
      router.push("/blogs"); // Remove the category slug from the URL
    }
  };

  const handleTagSelect = (tag) => {
    setSelectedTag(tag);
    setSelectedCategory(null);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Pagination logic
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const PaginationControls = () => (
    <div className="flex justify-center items-center space-x-2 mt-8">
      <button
        onClick={() => paginate(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 rounded-full bg-gray-100 text-gray-500 disabled:opacity-50 hover:bg-gray-200 transition-all duration-300"
      >
        <ChevronLeft size={20} />
      </button>
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
        <button
          key={number}
          onClick={() => paginate(number)}
          className={`px-4 py-2 rounded-full transition-all duration-300 ${currentPage === number
            ? "bg-gradient-to-r from-[#FF693B] to-[#FF9A6B] text-white shadow-lg"
            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
        >
          {number}
        </button>
      ))}
      <button
        onClick={() => paginate(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 rounded-full bg-gray-100 text-gray-500 disabled:opacity-50 hover:bg-gray-200 transition-all duration-300"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );

  return (
    <div>
      <div className="bg-gradient-to-b from-gray-100 to-white py-5 lg:py-8 md:mt-5">
        <div className="max-w-[1520px] mx-auto px-[6%] md:px-[4%] xl:px-[4%] 4xl:px-[4%]">
          <h1 className="text-[30px] md:text-[30px] lg:text-[48px] font-Raleway font-bold text-center pb-4 lg:pb-4">
            <span className="text-[#133490]">Our</span>{" "}
            <span className="text-[#FF693B]">Blogs</span>
          </h1>

          {categoryParam && (
            <div className="flex items-center justify-start rounded-md px-2 py-2 mb-6">
              <TbCategoryPlus className="w-5 h-5 text-indigo-500 mr-2" />
              <span className="font-medium text-gray-700">Category:</span>
              <span className="ml-2 text-indigo-600 font-semibold tracking-wide">
                {categoryParam}
              </span>
            </div>
          )}

          {/* Search for small devices */}
          <div className="block lg:hidden">
            <div className="mb-5 bg-white rounded-lg shadow-lg p-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search blogs..."
                  className="w-full py-4 text-gray-800 bg-gray-100 border border-gray-300 rounded-lg focus:border-gray-300 focus:outline-none transition-all duration-300"
                  value={searchTerm}
                  onChange={handleSearch}
                />
                <button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#FF693B] p-2 rounded-md shadow-md hover:bg-[#e55931] transition-colors duration-300">
                  <Search size={20} className="text-white" />
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col xl:flex-row gap-12">
            <div className="w-full xl:w-[73%]">
              {currentBlogs.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {currentBlogs.map((item) => (
                    <Link href={`/blogs/${item?.slug}`} key={item.id}>
                      <BlogCard item={item} />
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="relative w-full aspect-[742/554]">
                  <Image
                    src="/assets/data.gif"
                    layout="fill"
                    objectFit="contain"
                    quality={80}
                    alt="No blogs found"
                  />
                </div>
              )}
              <div className="lg:pt-10">
                <PaginationControls />
              </div>
            </div>
            <div className="w-full xl:w-[27%]">
              <BlogSideBar
                categories={categories}
                recommended={recommended}
                popular={popular}
                tags={tags}
                selectedCategory={selectedCategory}
                selectedTag={selectedTag}
                onCategorySelect={handleCategorySelect}
                onTagSelect={handleTagSelect}
                searchTerm={searchTerm}
                handleSearch={handleSearch}
              />
            </div>
          </div>
        </div>
      </div>
      <ElegantSubscribeModal isOpen={openModal} setOpenModal={setOpenModal} />
    </div>
  );
};

export default BlogPageContent;
