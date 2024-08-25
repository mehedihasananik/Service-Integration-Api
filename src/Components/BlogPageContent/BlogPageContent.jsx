"use client";
import React, { useState, useEffect } from "react";
import { Search } from "lucide-react";
import Container from "../Container/Container";
import Link from "next/link";
import BlogSideBar from "../Utilites/BlogSection/BlogSideBar/BlogSideBar";
import ElegantSubscribeModal from "../Utilites/BlogSection/ElegantSubscribeModal/ElegantSubscribeModal";
import BlogCard from "../Utilites/BlogSection/BlogCard/BlogCard";

const BlogPageContent = () => {
  const [openModal, setOpenModal] = useState(false);

  const guides = [
    {
      title: "Vidyard's Ultimate Video Marketing Guide",
      description: "This guide provides comprehensive insights into video marketing strategies for 2023.",
      date: "Jul 14, 2023",
      category: "Marketing",
      image: "/assets/marketing-guide-1024x576.webp",
    },
    {
      title: "The Ultimate Guide to Using Video for Sales in 2024",
      description: "Learn how to leverage video content to boost your sales efforts in 2024.",
      date: "Jan 28, 2024",
      category: "Sales",
      image: "/assets/marketing-guide-1024x576.webp",
    },
    {
      title: "The Complete Guide to Video Production",
      description: "A detailed guide on video production techniques, perfect for beginners and pros alike.",
      date: "Nov 6, 2023",
      category: "Video Tips",
      image: "/assets/marketing-guide-1024x576.webp",
    },

  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpenModal(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <div className="bg-gradient-to-b from-gray-100 to-white pt-4 pb-10 mt-4">
        <Container>
          <h1 className="text-[30px] md:text-[30px] lg:text-[48px] font-Raleway font-bold text-center pb-4">
            Our <span className="text-[#FF693B]">Blogs</span>
          </h1>

          <div className="mb-12">
            <div className="w-full md:w-[70%] lg:w-[40%] mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  className={`w-full p-4 pr-12 text-gray-700 bg-white border-2 rounded-lg transition-all duration-300 `}
                />
                <button className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <Search
                    size={24}
                    className="text-gray-400 hover:text-[#FF693B] transition-colors"
                  />
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            <div className="w-[75%]">
              <Link href={"/blogs/1"}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {guides.map((guide, index) => (
                    <BlogCard key={index} {...guide} />
                  ))}
                </div>
              </Link>
            </div>

            <div className="w-[30%]">
              <BlogSideBar />
            </div>
          </div>
        </Container>
      </div>
      {/* <ElegantSubscribeModal isOpen={openModal} setOpenModal={setOpenModal} /> */}
    </div>
  );
};

export default BlogPageContent;