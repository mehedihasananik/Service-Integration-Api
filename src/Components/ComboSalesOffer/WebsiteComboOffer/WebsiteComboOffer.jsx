"use client";
import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const WebsiteComboOffer = () => {
  const [isEnd, setIsEnd] = useState(false);
  const [isBeginning, setIsBeginning] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);

  // Add refs for both swipers
  const desktopSwiperRef = useRef(null);
  const mobileSwiperRef = useRef(null);

  const firstSlideData = [
    // First Slide - First Row
    {
      imageSrc: "/assets/websiteLogo1.svg",
      imageAlt: "WordPress Website",
      title: "WordPress Website",
      subtitle: "Design & Development",
      buttonText: "Included",
    },
    {
      imageSrc: "/assets/websiteLogo2.svg",
      imageAlt: "Content Writing",
      title: "Content Writing",
      subtitle: "For entire project",
      buttonText: "Included",
    },
    {
      imageSrc: "/assets/websiteLogo3.svg",
      imageAlt: "Professional Logo",
      title: "Professional Logo",
      subtitle: "Create brand identity",
      buttonText: "Included",
    },
    // First Slide - Second Row
    {
      imageSrc: "/assets/websiteLogo6.svg",
      imageAlt: "Monthly SEO",
      title: "Monthly SEO",
      subtitle: "Rank #1 on google",
      buttonText: "Included",
    },
    {
      imageSrc: "/assets/websiteLogo7.svg",
      imageAlt: "Brand Marketing",
      title: "Brand Marketing",
      subtitle: "From start to end",
      buttonText: "Included",
    },
    {
      imageSrc: "/assets/websiteLogo8.svg",
      imageAlt: "Social Media Post",
      title: "Social Media Post",
      subtitle: "Full Social kit",
      buttonText: "Included",
    },
  ];

  const secondSlideData = [
    // Second Slide - First Row
    {
      imageSrc: "/assets/websiteLogo4.svg",
      imageAlt: "Custom Graphics",
      title: "Custom Graphics",
      subtitle: "According to your business",
      buttonText: "Included",
      row: 1,
      col: 1,
    },
    {
      imageSrc: "/assets/websiteLogo5.svg",
      imageAlt: "Website Maintenance",
      title: "Website Maintenance",
      subtitle: "Zero Hassle Business",
      buttonText: "Included",
      row: 1,
      col: 2,
    },
    {
      imageSrc: "/assets/websiteLogo9.svg",
      imageAlt: "Animated Video",
      title: "Animated Video",
      subtitle: "Explain Your Business",
      buttonText: "Included",
      row: 2,
      col: 1,
    },
  ];

  // Modified slide groups
  const slideGroups = [firstSlideData, secondSlideData];

  const ServiceCard = ({ item }) => (
    <div className="h-[358px] flex flex-col justify-center items-center px-6 py-8 text-center text-white rounded-[4px] border border-white/20 bg-blue-700/20 backdrop-blur-lg">
      <div className="flex flex-col justify-center items-center w-full max-w-[228px]">
        <img loading="lazy" src={item.imageSrc} alt={item.imageAlt} />
        <div className="flex flex-col w-full mt-4">
          <h3 className="font-Inter text-[24px] font-semibold leading-[42px] whitespace-nowrap">
            {item.title}
          </h3>
          <p className="font-Inter text-[16px] font-light">{item.subtitle}</p>
        </div>
        <button className="w-[180px] py-2.5 mt-4 text-[14px] font-normal text-white bg-[#0C89FF] rounded-[30px] hover:bg-blue-600 transition-colors">
          {item.buttonText}
        </button>
      </div>
    </div>
  );

  // Combine all items for mobile view
  const allItems = [...firstSlideData, ...secondSlideData];

  return (
    <div className="w-full px-[3%] py-8">
      <div className="text-center text-white mb-12">
        <p className="text-[16px] md:text-[16px] lg:text-[16px] font-normal leading-[24px] text-[#fff] font-Jua pb-4">
          Check what's included
        </p>
        <h2 className="text-3xl lg:text-5xl font-bold">Website Combo Offer</h2>
      </div>

      <div className="relative">
        {/* Desktop View (2 rows x 3 columns) */}
        <div className="hidden lg:block">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={32}
            slidesPerView={1}
            speed={500}
            onSwiper={(swiper) => (desktopSwiperRef.current = swiper)}
            onSlideChange={(swiper) => {
              setIsEnd(swiper.isEnd);
              setIsBeginning(swiper.isBeginning);
              setCurrentPage(swiper.activeIndex);
            }}
            className="mySwiper"
          >
            {slideGroups.map((group, groupIndex) => (
              <SwiperSlide key={groupIndex}>
                <div className="grid grid-cols-3 gap-8 grid-rows-2">
                  {group.map((item, index) => (
                    <div
                      key={`desktop-${groupIndex}-${index}`}
                      className={`${
                        groupIndex === 1 && index === 2
                          ? "col-start-1 col-span-1"
                          : ""
                      }`}
                    >
                      <ServiceCard item={item} />
                    </div>
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Mobile/Tablet View (Single column) */}
        <div className="block lg:hidden relative">
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            speed={500}
            pagination={{
              clickable: true,
            }}
            onSwiper={(swiper) => (mobileSwiperRef.current = swiper)}
            onSlideChange={(swiper) => {
              setIsEnd(swiper.isEnd);
              setIsBeginning(swiper.isBeginning);
              setCurrentPage(swiper.activeIndex);
            }}
            className="mySwiper"
          >
            {allItems.map((item, index) => (
              <SwiperSlide key={`mobile-${index}`}>
                <div className="px-4 md:px-8">
                  <ServiceCard item={item} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Mobile Navigation Buttons */}
          <button
            className={`absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-[#001246]/80 p-3 rounded-r-lg ${
              isBeginning
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-[#001246]"
            }`}
            onClick={() => mobileSwiperRef.current?.slidePrev()}
            disabled={isBeginning}
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <button
            className={`absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-[#001246]/80 p-3 rounded-l-lg ${
              isEnd ? "opacity-50 cursor-not-allowed" : "hover:bg-[#001246]"
            }`}
            onClick={() => mobileSwiperRef.current?.slideNext()}
            disabled={isEnd}
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Desktop Navigation Buttons */}
        <div className="hidden lg:flex justify-center items-center mt-10">
          <div className="bg-[#001246] w-[8%] rounded-[30px] py-1">
            <div className="flex justify-center items-center gap-4 h-[30px]">
              <button
                className={`p-2 rounded-full transition-colors ${
                  isBeginning
                    ? "text-gray-500"
                    : "text-white hover:text-blue-400"
                }`}
                onClick={() => desktopSwiperRef.current?.slidePrev()}
                disabled={isBeginning}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <span className="text-white font-Inter text-[12px] font-normal leading-[42px]">
                {currentPage === 0 ? "6/9" : "9/9"}
              </span>
              <button
                className={`p-2 rounded-full transition-colors ${
                  isEnd ? "text-gray-500" : "text-[#fff] hover:text-blue-400"
                }`}
                onClick={() => desktopSwiperRef.current?.slideNext()}
                disabled={isEnd}
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsiteComboOffer;
