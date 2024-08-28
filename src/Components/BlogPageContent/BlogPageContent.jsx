"use client";

import React, { useState, useEffect } from "react";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Container from "../Container/Container";
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
    // ... (keep the existing filtering logic)
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

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  const cardVariants = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 }
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-gradient-to-b from-gray-100 to-white py-8 mt-5">
        <div className="max-w-[1520px] mx-auto px-[6%] md:px-[4%] xl:px-[4%] 4xl:px-[4%]">
          <motion.h1
            className="text-[30px] md:text-[30px] lg:text-[48px] font-Raleway font-bold text-center pb-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="text-[#133490]">Our</span> <span className="text-[#FF693B]">Blogs</span>
          </motion.h1>

          <div className="flex flex-col-reverse xl:flex-row gap-12">
            <motion.div
              className="w-full xl:w-[73%]"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <AnimatePresence>
                {filteredBlogs.length > 0 ? (
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={cardVariants}
                  >
                    {filteredBlogs.map((item) => (
                      <motion.div key={item.id} variants={cardVariants}>
                        <Link href={`/blogs/${item?.slug}`}>
                          <BlogCard item={item} />
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                ) : (
                  <motion.div
                    className="relative w-full aspect-[742/554]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Image
                      src="/assets/data.gif"
                      layout="fill"
                      objectFit="contain"
                      quality={80}
                      alt="No results found"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
            <motion.div
              className="w-full xl:w-[27%]"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
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
            </motion.div>
          </div>
        </div>
      </div>
      <ElegantSubscribeModal isOpen={openModal} setOpenModal={setOpenModal} />
    </motion.div>
  );
};

export default BlogPageContent;