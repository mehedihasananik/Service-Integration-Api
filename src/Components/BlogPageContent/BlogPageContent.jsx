"use client";
import React, { useState, useEffect } from "react";
import { Search } from "lucide-react";
import Image from "next/image";
import Container from "../Container/Container";
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

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpenModal(true);
    }, 5000);

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

  return (
    <div>
      <div className="bg-gradient-to-b from-gray-100 to-white py-8 mt-5">
        <Container>
          <h1 className="text-[30px] md:text-[30px] lg:text-[48px] font-Raleway font-bold text-center pb-10">
            <span className="text-[#133490]">Our</span> <span className="text-[#FF693B]">Blogs</span>
          </h1>

          <div className="flex flex-col xl:flex-row gap-12">
            <div className="w-full xl:w-[73%]">
              {filteredBlogs.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {filteredBlogs.map((item) => (
                    <Link href={`/blogs/${item?.slug}`} key={item.id}>
                      <BlogCard item={item} />
                    </Link>
                  ))}
                </div>
              ) : (

                <div className="relative w-full  aspect-[742/554]">
                  <Image
                    src="/assets/data.gif"
                    layout="fill"
                    objectFit="contain"
                    quality={80}
                    alt="banner image"
                  />
                </div>

              )}
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
        </Container>
      </div>
      <ElegantSubscribeModal isOpen={openModal} setOpenModal={setOpenModal} />
    </div>
  );
};

export default BlogPageContent;