// TestimonialHomeItems.js
"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";

const TestimonialHomeItemsMd = ({ testimonials }) => {
  const [loading, setLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [totalSlides, setTotalSlides] = useState(0);

  useEffect(() => {
    setTotalSlides(testimonials.length);
    setLoading(false);
  }, [testimonials]);

  const swiperRef = useRef(null);

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      let newSlide = currentSlide + 2; // Increment by 2
      if (newSlide >= totalSlides - 1) {
        newSlide = totalSlides - 2; // Set it to the last slide index
      } else {
        swiperRef.current.swiper.slideTo(newSlide);
      }
      setCurrentSlide(newSlide);
      if (newSlide === 0) {
        setSpaceBetween(50);
      } else if (newSlide === 3) {
        setSpaceBetween(10);
      }
    }
  };

  const goPrev = () => {
    let newSlide = currentSlide - 2; // Decrease by 2
    if (newSlide < 0) {
      newSlide = 0; // Ensure it doesn't go below 0
    }
    swiperRef.current.swiper.slideTo(newSlide); // Navigate to the new slide
    setCurrentSlide(newSlide); // Update the current slide state
  };

  const breakpoints = {
    1920: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1336: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1280: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  };

  return (
    <div id="testimonial" className="overflow-hidden px-[8%]">
      <div className="hidden md:block xxl:hidden max-w-[1680px] mx-auto ">
        <div className="py-5 xl:pt-10">
          <div className="flex flex-col lg:flex-row items-center justify-between lg:gap-20 xl:gap-12 py-8">
            <div className="w-full text-center lg:text-left lg:w-[35%]">
              <div className="lg:w-[400px]">
                <h3 className="text-[30px] md:text-[42px] lg:text-[48px] font-bold font-Raleway text-[#0F172A]">
                  What Are People Saying About Us
                </h3>
              </div>
              <div className="pt-4 lg:w-[380px]">
                <p className="text-[16px] text-[#666666] font-normal">
                  We aim to provide top-notch quality service and client
                  satisfaction. We are happy to help a lot of companies.
                </p>
              </div>
              <div className="text-center lg:text-left">
                <span className="text-[48px] font-Raleway text-[#0A2C8C] font-bold">
                  {Math.min(currentSlide + 2, totalSlides)}
                </span>
                <span className="text-[16px] font-bold text-[#94A3B8] font-Raleway">
                  /{totalSlides}
                </span>
              </div>
              <div className="flex justify-center items-center lg:justify-start lg:items-start gap-6 py-4 ">
                <div className="group text-center" onClick={() => goPrev()}>
                  <button className=" bg-[#FF9F711A]  group-hover:bg-[#FF693B] px-5 py-5 rounded-lg transition-all duration-300">
                    <HiArrowLeft className="text-[#FF693B]  group-hover:text-[#fff] w-[24px] h-[24px]" />
                  </button>
                </div>
                <div className="group" onClick={() => goNext()}>
                  <button className=" bg-[#FF9F711A]  group-hover:bg-[#FF693B] px-5 py-5 rounded-lg transition-all duration-300">
                    <HiArrowRight className="text-[#FF693B]  group-hover:text-[#fff] w-[24px] h-[24px]" />
                  </button>
                </div>
              </div>
            </div>
            {loading ? (
              // Loading state
              <div className="flex flex-wrap justify-center">
                {[...Array(3)].map((_, index) => (
                  <div
                    key={index}
                    className="max-w-sm p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700 mx-4 my-2"
                  >
                    <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
                      <svg
                        className="w-10 h-10 text-gray-200 dark:text-gray-600"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 16 20"
                      >
                        <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                        <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                      </svg>
                    </div>
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                    <div className="flex items-center mt-4">
                      <svg
                        className="w-10 h-10 me-3 text-gray-200 dark:text-gray-700"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                      </svg>
                      <div>
                        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
                        <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                      </div>
                    </div>
                    <span className="sr-only">Loading...</span>
                  </div>
                ))}
              </div>
            ) : (
              // Loaded state
              <div className="w-full lg:w-[65%]">
                <Swiper
                  ref={swiperRef}
                  slidesPerView={2}
                  slidesPerGroup={2}
                  spaceBetween={30}
                  breakpoints={breakpoints}
                  className="mySwiper mx-auto"
                  onSlideChange={(swiper) =>
                    setCurrentSlide(swiper.activeIndex)
                  }
                >
                  {testimonials.map((testimonial) => (
                    <SwiperSlide key={testimonial.id}>
                      <div className="pl-4 mt-10 bg-[#F8FAFC] hover:bg-[#1E293B] group  rounded-md transition-all duration-300 ">
                        <div className="relative">
                          <div className="absolute top-[-25px] left-[140px] md:left-[120px] lg:left-0">
                            <img
                              onContextMenu={(e) => e.preventDefault()}
                              src={testimonial.image}
                              alt=""
                            />
                          </div>
                          <div className="pt-14 pb-4">
                            <h2 className="text-[24px] text-[#333333] group-hover:text-[#fff] font-Raleway font-bold">
                              {testimonial.name}
                            </h2>
                            <p className="text-[14px] text-[#999999] pt-3 group-hover:text-[#fff]">
                              {testimonial.designation}
                            </p>
                          </div>
                          <div>
                            <p className="w-full lg:w-[260px] text-[16px] text-[#666666] pt-1 pb-12 group-hover:text-[#fff]">
                              {testimonial.message}
                            </p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialHomeItemsMd;
