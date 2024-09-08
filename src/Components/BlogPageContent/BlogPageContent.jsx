"use client"
import React, { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import BlogCard from '../Utilites/BlogSection/BlogCard/BlogCard';
import BlogSideBar from '../Utilites/BlogSection/BlogSideBar/BlogSideBar';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const BlogPageContent = ({ blogs, categories, recommended, popular, tags }) => {
  const [filteredBlogs, setFilteredBlogs] = useState(blogs);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedTag, setSelectedTag] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const blogsPerPage = 2;

  const router = useRouter();
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category');

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
    setIsLoading(true);
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
    setCurrentPage(1);

    // Simulate loading delay
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, [selectedCategory, selectedTag, blogs, searchTerm]);

  const handleCategorySelect = (category) => {
    if (category) {
      router.push(`/blogs?category=${category.slug}`);
    } else {
      setSelectedCategory(null);
      router.push('/blogs');
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

  const BlogCardSkeleton = () => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden animate-pulse">
      <div className="relative w-full aspect-[3/2] bg-gray-300">
        <div className="absolute top-4 left-4 bg-gray-400 w-16 h-6 rounded-full"></div>
      </div>
      <div className="p-6 h-[250px]">
        <div className="flex items-center mb-2 gap-x-5">
          <div className="flex items-center">
            <div className="w-4 h-4 mr-2 bg-gray-400 rounded"></div>
            <div className="w-20 h-4 bg-gray-400 rounded"></div>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 mr-1 bg-gray-400 rounded"></div>
            <div className="w-16 h-4 bg-gray-400 rounded"></div>
          </div>
        </div>
        <div className="w-3/4 h-6 bg-gray-400 rounded mb-2"></div>
        <div className="w-full h-4 bg-gray-400 rounded mb-2"></div>
        <div className="w-full h-4 bg-gray-400 rounded mb-2"></div>
        <div className="w-3/4 h-4 bg-gray-400 rounded mb-2"></div>
        <div className="mt-4 flex items-center">
          <div className="w-24 h-6 bg-gray-400 rounded mr-2"></div>
          <div className="w-4 h-4 bg-gray-400 rounded"></div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-gradient-to-b from-gray-100 to-white py-5 lg:py-8 md:mt-5">
      <div className="max-w-[1520px] mx-auto px-[6%] md:px-[4%] xl:px-[4%] 4xl:px-[4%]">
        <h1 className="text-[30px] md:text-[30px] lg:text-[48px] font-Raleway font-bold text-center pb-4 lg:pb-4">
          <span className="text-[#133490]">Our</span>{" "}
          <span className="text-[#FF693B]">Blogs</span>
        </h1>

        <div className="flex flex-col xl:flex-row gap-12">
          <div className="w-full xl:w-[73%]">
            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[...Array(Math.min(filteredBlogs.length, blogsPerPage))].map((_, index) => (
                  <BlogCardSkeleton key={index} />
                ))}
              </div>
            ) : currentBlogs.length > 0 ? (
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
            {/* Pagination controls */}
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
  );
};

export default BlogPageContent;