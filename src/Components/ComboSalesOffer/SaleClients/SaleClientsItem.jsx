"use client";
import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SaleClientsItem = ({ content }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const desktopSwiperRef = useRef(null);
  const mobileSwiperRef = useRef(null);

  // Split content into groups of 6 for desktop view
  const desktopSlideGroups = [];
  for (let i = 0; i < content.length; i += 6) {
    desktopSlideGroups.push(content.slice(i, i + 6));
  }

  const TestimonialCard = ({
    logoSrc,
    testimonialText,
    authorImage,
    authorName,
    authorRole,
  }) => (
    <div className="flex  flex-col px-6 pt-6 pb-7 rounded-lg border border-white border-solid bg-white bg-opacity-80 w-full lg:max-w-[313px] shadow-[-2px_2px_17px_rgba(0,0,0,0.06)]">
      <div className="flex flex-col items-start w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/e7a246693dbe47b68ba0a6f099060cf8/8f6ba71be2e98ac5210fa4aeeb4fdea74ea88007916d5b544a652af9e34e8bef?apiKey=5dfe0fed099d4e7fb78a3e68f506b2af&"
          alt="Company logo"
          className="object-contain max-w-full aspect-[5] w-[120px]"
        />
        <div className="self-stretch mt-4 text-sm leading-6 text-neutral-700 line-clamp-4">
          {testimonialText}
        </div>
        <div className="flex gap-2 items-center mt-4">
          <img
            loading="lazy"
            src={authorImage}
            alt={`${authorName} profile picture`}
            className="object-contain shrink-0 self-stretch my-auto w-12 rounded-full aspect-square"
          />
          <div className="flex flex-col self-stretch my-auto">
            <div className="text-base font-semibold leading-none text-sky-950">
              {authorName}
            </div>
            <div className="mt-4 text-sm leading-none text-sky-950 text-opacity-30">
              {authorRole}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="SaleClients_Section w-full">
      <div
        style={{
          borderRadius: "2px",
          border: "1px solid #FFF",
          background: "rgba(255, 255, 255, 0.60)",
          backdropFilter: "blur(36px)",
        }}
        className="flex flex-col items-center justify-center py-[3%]  w-full xl:w-[1240px] mx-auto px-4 lg:px-0"
      >
        <div className="text-center mb-10">
          <h3 className="text-[16px] md:text-[16px] lg:text-[18px] font-normal leading-[24px] text-[#FF693B] font-Jua pb-4">
            Client Reviews
          </h3>
          <h2 className="text-[#001246] text-[30px] lg:text-[48px] font-bold leading-[24px] tracking-[0.96px]">
            Our Proud Clients
          </h2>
        </div>

        <div className="w-full max-w-[1200px] relative">
          {/* Desktop View (2 rows x 3 columns) */}
          <div className="hidden lg:block">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={32}
              slidesPerView={1}
              speed={500}
              loop={true} // Enable infinite loop
              onSwiper={(swiper) => (desktopSwiperRef.current = swiper)}
              onSlideChange={(swiper) => {
                setCurrentPage(swiper.realIndex);
              }}
              className="client_mySwiper "
            >
              {/* Duplicate the groups for seamless looping */}
              {[...desktopSlideGroups, ...desktopSlideGroups].map(
                (group, groupIndex) => (
                  <SwiperSlide key={groupIndex}>
                    <div className="grid grid-cols-3 gap-8 grid-rows-2 pl-10">
                      {group.map((item, index) => (
                        <TestimonialCard
                          key={`desktop-${groupIndex}-${index}`}
                          logoSrc={item.image}
                          testimonialText={item.message}
                          authorImage={item.image}
                          authorName={item.name}
                          authorRole={item.designation}
                        />
                      ))}
                    </div>
                  </SwiperSlide>
                )
              )}
            </Swiper>
          </div>

          {/* Mobile/Tablet View (Single column) */}
          <div className="block lg:hidden relative">
            <Swiper
              modules={[Navigation]}
              spaceBetween={20}
              slidesPerView={1}
              speed={500}
              loop={true} // Enable infinite loop
              onSwiper={(swiper) => (mobileSwiperRef.current = swiper)}
              onSlideChange={(swiper) => {
                setCurrentPage(swiper.realIndex);
              }}
              className="client_mySwiper"
            >
              {/* Duplicate the content for seamless looping */}
              {[...content, ...content].map((item, index) => (
                <SwiperSlide key={`mobile-${index}`}>
                  <div className="px-4 md:px-8">
                    <TestimonialCard
                      logoSrc={item.image}
                      testimonialText={item.message}
                      authorImage={item.image}
                      authorName={item.name}
                      authorRole={item.designation}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-x-3 mt-[4%]">
            <button
              onClick={() => {
                if (window.innerWidth >= 1024) {
                  desktopSwiperRef.current?.slidePrev();
                } else {
                  mobileSwiperRef.current?.slidePrev();
                }
              }}
              className="h-[34px] w-[34px] flex justify-center items-center rounded-[6px] bg-white border border-[#4580FF] transition-all duration-300 hover:bg-gray-50"
            >
              <GrFormPrevious className="text-[25px] font-normal text-[#4580FF]" />
            </button>
            <button
              onClick={() => {
                if (window.innerWidth >= 1024) {
                  desktopSwiperRef.current?.slideNext();
                } else {
                  mobileSwiperRef.current?.slideNext();
                }
              }}
              className="h-[34px] w-[34px] font-normal flex justify-center items-center rounded-[6px] bg-[#0C89FF] border border-[#4580FF] text-white transition-all duration-300 hover:bg-[#0972d3]"
            >
              <GrFormNext
                className="text-white text-[25px]"
                style={{ color: "white" }}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaleClientsItem;
