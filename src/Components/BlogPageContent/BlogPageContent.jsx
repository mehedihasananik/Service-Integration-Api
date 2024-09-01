"use client";
import React, { useState, useEffect } from "react";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import BlogSideBar from "../Utilites/BlogSection/BlogSideBar/BlogSideBar";
import BlogCard from "../Utilites/BlogSection/BlogCard/BlogCard";
import ElegantSubscribeModal from "../Utilites/BlogSection/ElegantSubscribeModal/ElegantSubscribeModal";

const BlogPageContent = ({ blogs, categories, recommended, popular, tags }) => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedTag, setSelectedTag] = useState(null);
  const [filteredBlogs, setFilteredBlogs] = useState(blogs);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 2;

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpenModal(true);
    }, 12000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const filterBlogs = () => {
      let filtered = blogs;

      if (selectedCategory) {
        filtered = filtered.filter(blog => blog.category.id === selectedCategory.id);
      }

      if (selectedTag) {
        filtered = filtered.filter(blog => {
          const blogTags = Object.values(blog.tags);
          return blogTags.includes(selectedTag.name);
        });
      }

      if (searchTerm.trim() !== "") {
        const lowercasedSearchTerm = searchTerm.toLowerCase();
        filtered = filtered.filter(blog =>
          blog.title.toLowerCase().includes(lowercasedSearchTerm) ||
          blog.content.toLowerCase().includes(lowercasedSearchTerm)
        );
      }

      setFilteredBlogs(filtered);
      setCurrentPage(1); // Reset to first page when filters change
    };

    const debounceTimer = setTimeout(filterBlogs, 300);

    return () => clearTimeout(debounceTimer);
  }, [selectedCategory, selectedTag, blogs, searchTerm]);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setSelectedTag(null);
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

  const PaginationControls = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }

    return (
      <div className="flex justify-center items-center space-x-2 mt-8">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 rounded-full bg-gray-100 text-gray-500 disabled:opacity-50 hover:bg-gray-200 transition-all duration-300"
        >
          <ChevronLeft size={20} />
        </button>
        {pageNumbers.map((number) => (
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
  };

  return (
    <div>
      <div className="bg-gradient-to-b from-gray-100 to-white py-5 lg:py-8 md:mt-5">
        <div className="max-w-[1520px] mx-auto px-[6%] md:px-[4%] xl:px-[4%] 4xl:px-[4%]">
          <h1 className="text-[30px] md:text-[30px] lg:text-[48px] font-Raleway font-bold text-center pb-4 lg:pb-10">
            <span className="text-[#133490]">Our</span> <span className="text-[#FF693B]">Blogs</span>
          </h1>

          {/* search for small device */}
          <div className="block lg:hidden">
            {/* search */}
            {handleSearch && <div className="mb-5 bg-white rounded-lg shadow-lg p-4">
              <div className="w-full md:w-[100%] lg:w-[100%]">
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
            </div>}
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
                    alt="banner image"
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