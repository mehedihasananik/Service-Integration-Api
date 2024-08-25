"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Search, Calendar, ChevronRight, ArrowRight, X } from "lucide-react";
import Container from "../Container/Container";
import { motion, AnimatePresence } from "framer-motion";

import { Button, Modal } from "flowbite-react";
import ElegantSubscribeModal from "../Utilites/BlogSection/ElegantSubscribeModal/ElegantSubscribeModal";
import Link from "next/link";

const GuideCard = ({ title, date, category, image, description, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ y: -10 }}
    className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl"
  >
    <div className="relative h-48 overflow-hidden">
      <Image
        src={image}
        alt={title}
        layout="fill"
        objectFit="cover"
        className="transition-transform duration-300 transform hover:scale-110"
      />
      <motion.span
        whileHover={{ scale: 1.1 }}
        className="absolute top-4 left-4 bg-[#FF693B] text-white px-3 py-1 rounded-full text-xs font-semibold"
      >
        {category}
      </motion.span>
    </div>
    <div className="p-6">
      <div className="flex items-center text-gray-500 mb-2">
        <Calendar size={16} className="mr-2" />
        <span className="text-sm">{date}</span>
      </div>
      <h3 className="text-xl font-bold mb-2 text-gray-800 line-clamp-2 hover:text-[#FF693B] transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 line-clamp-3">{description}</p>
      <motion.button
        whileHover={{ x: 5, color: "#FF693B" }}
        className="mt-4 text-gray-800 font-semibold flex items-center transition-colors"
      >
        Read More <ArrowRight size={16} className="ml-1" />
      </motion.button>
    </div>
  </motion.div>
);

const RecommendedPosts = ({ posts }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="mb-12 bg-white rounded-lg shadow-lg p-6"
  >
    <h3 className="text-2xl font-bold mb-6 text-gray-800 border-b-2 border-[#FF693B] pb-2">
      Recommended Posts
    </h3>
    <ul className="space-y-6">
      {posts.map((post, index) => (
        <motion.li
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          whileHover={{ scale: 1.03 }}
          className="flex items-center cursor-pointer group bg-gray-50 rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl"
        >
          <div className="relative w-24 h-24 mr-4 overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 transform group-hover:scale-110"
            />
          </div>
          <div className="flex-grow p-4">
            <div className="flex items-center text-sm text-gray-500 mb-1">
              <Calendar size={14} className="mr-1" />
              <p>{post.date}</p>
            </div>
            <p className="font-semibold text-gray-800 group-hover:text-[#FF693B] transition-colors line-clamp-2">
              {post.title}
            </p>
          </div>
          <motion.div
            whileHover={{ x: 5 }}
            className="p-4 text-gray-400 group-hover:text-[#FF693B]"
          >
            <ArrowRight size={20} />
          </motion.div>
        </motion.li>
      ))}
    </ul>
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="mt-6 w-full bg-[#FF693B] text-white py-2 rounded-lg font-semibold transition-colors duration-300 hover:bg-[#FF8C5A]"
    >
      View All Recommended Posts
    </motion.button>
  </motion.div>
);

const SingleBlogContent = () => {
  const [searchFocus, setSearchFocus] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const guides = [
    {
      title: "Vidyard's Ultimate Video Marketing Guide",
      description:
        "This guide provides comprehensive insights into video marketing strategies for 2023.",
      date: "Jul 14, 2023",
      category: "Marketing",
      image: "/assets/marketing-guide-1024x576.webp",
    },
    {
      title: "The Ultimate Guide to Using Video for Sales in 2024",
      description:
        "Learn how to leverage video content to boost your sales efforts in 2024.",
      date: "Jan 28, 2024",
      category: "Sales",
      image: "/assets/marketing-guide-1024x576.webp",
    },
    {
      title: "The Complete Guide to Video Production",
      description:
        "A detailed guide on video production techniques, perfect for beginners and pros alike.",
      date: "Nov 6, 2023",
      category: "Video Tips",
      image: "/assets/marketing-guide-1024x576.webp",
    },
    {
      title: "The Complete Guide to Video Production",
      description:
        "A detailed guide on video production techniques, perfect for beginners and pros alike.",
      date: "Nov 6, 2023",
      category: "Video Tips",
      image: "/assets/marketing-guide-1024x576.webp",
    },
    {
      title: "The Complete Guide to Video Production",
      description:
        "A detailed guide on video production techniques, perfect for beginners and pros alike.",
      date: "Nov 6, 2023",
      category: "Video Tips",
      image: "/assets/marketing-guide-1024x576.webp",
    },
    {
      title: "The Complete Guide to Video Production",
      description:
        "A detailed guide on video production techniques, perfect for beginners and pros alike.",
      date: "Nov 6, 2023",
      category: "Video Tips",
      image: "/assets/marketing-guide-1024x576.webp",
    },
  ];

  const recentPosts = [
    {
      title: "Trends And Innovations Of Future",
      date: "22 May 2024",
      image: "/assets/Blog-Image-01.webp",
    },
    {
      title: "The Art Of Cleaning Glass Windows",
      date: "22 May 2024",
      image: "/assets/Blog-Image-01.webp",
    },
    {
      title: "Traditional To Contemporary...",
      date: "22 May 2024",
      image: "/assets/Blog-Image-01.webp",
    },
    {
      title: "Glass Door Safety And Maintenance",
      date: "22 May 2024",
      image: "/assets/Blog-Image-01.webp",
    },
    {
      title: "Glass Door Safety And Maintenance",
      date: "22 May 2024",
      image: "/assets/Blog-Image-01.webp",
    },
  ];
  const filteredGuides = selectedCategory
    ? guides.filter((guide) => guide.category === selectedCategory)
    : guides;

  return (
    <div>
      <div className="bg-gradient-to-b from-gray-100 to-white pt-4 pb-10 mt-4">
        <Container>
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <div className=" w-[70%]">
              {/* Header Section */}
              <header className="mb-8">
                <h1 className="text-4xl font-bold mb-2">
                  Why I&apos;m Returning to Old-School Blogging
                </h1>
                <p className="text-xl text-gray-600">
                  And yes, Google made me do it.
                </p>
              </header>

              {/* Author Section */}
              <section className="flex items-center mb-8">
                <Image
                  src="/assets/person.png" // Replace with actual image path
                  alt="Author Avatar"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div className="ml-4">
                  <p className="font-semibold">Carmellita</p>
                  <p className="text-gray-500">
                    Published in The Pub • 6 min read • May 2, 2024
                  </p>
                </div>
              </section>
            </div>
            {/* Sidebar */}
            <div className="bg-white rounded-lg shadow-md p-6 w-[30%]">
              {/* Categories */}

              {/* Recommended Posts */}
              <RecommendedPosts posts={recentPosts.slice(0, 4)} />

              {/* Recent Posts */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  Recent Posts
                </h3>
                <ul className="space-y-4">
                  {recentPosts.map((post, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      whileHover={{ x: 5 }}
                      className="flex items-center cursor-pointer"
                    >
                      <div className="relative w-16 h-16 mr-4 overflow-hidden rounded-md">
                        <Image
                          src={post.image}
                          alt={post.title}
                          layout="fill"
                          objectFit="cover"
                          className="transition-transform duration-300 transform hover:scale-110"
                        />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">{post.date}</p>
                        <p className="font-semibold text-gray-800 hover:text-[#FF693B] transition-colors">
                          {post.title}
                        </p>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default SingleBlogContent;
