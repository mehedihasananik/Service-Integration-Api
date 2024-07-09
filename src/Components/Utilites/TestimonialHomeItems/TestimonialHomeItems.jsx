"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import { Pagination } from "swiper/modules";

const TestimonialHomeItems = ({ testimonials }) => {
  const [loading, setLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [totalSlides, setTotalSlides] = useState(0);
  const swiperRef = useRef(null);

  useEffect(() => {
    setTotalSlides(testimonials.length);
    setLoading(false);
  }, [testimonials]);

  const handlePrevSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const handleSlideChange = (swiper) => {
    setCurrentSlide(swiper.realIndex);
  };

  const breakpoints = {
    1920: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1336: {
      slidesPerView: 3,
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
    <div id="testimonial" className="overflow-hidden">
      <div className=" max-w-[1680px] mx-auto 4xl:px-[0] 4xl:max-w-[1920px] xl:pl-[8%] 2xl:pl-[13%] 4xl:pl-[14%]">
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
              <div className="flex justify-center items-center lg:justify-start lg:items-start gap-6 py-4">
                <div className="group text-center">
                  <button
                    className=" bg-[#FF9F711A]  group-hover:bg-[#FF693B] px-5 py-5 rounded-lg transition-all duration-300"
                    onClick={handlePrevSlide}
                  >
                    <HiArrowLeft className="text-[#FF693B]  group-hover:text-[#fff] w-[24px] h-[24px]" />
                  </button>
                </div>
                <div className="group">
                  <button
                    className=" bg-[#FF9F711A]  group-hover:bg-[#FF693B] px-5 py-5 rounded-lg transition-all duration-300"
                    onClick={handleNextSlide}
                  >
                    <HiArrowRight className="text-[#FF693B]  group-hover:text-[#fff] w-[24px] h-[24px]" />
                  </button>
                </div>
              </div>
              {/* small device */}
              <div className="text-center lg:text-left md:hidden ">
                <span className="text-[48px] font-Raleway text-[#0A2C8C] font-bold">
                  {currentSlide + 1}
                </span>
                <span className="text-[16px] font-bold text-[#94A3B8] font-Raleway">
                  /{totalSlides}
                </span>
              </div>
              {/* md device */}
              <div className="text-center lg:text-left hidden md:block xxl:hidden">
                <span className="text-[48px] font-Raleway text-[#0A2C8C] font-bold">
                  {currentSlide + 2}
                </span>
                <span className="text-[16px] font-bold text-[#94A3B8] font-Raleway">
                  /{totalSlides}
                </span>
              </div>
              {/* lg device */}
              <div className="text-center lg:text-left hidden xxl:block ">
                <span className="text-[48px] font-Raleway text-[#0A2C8C] font-bold">
                  {currentSlide + 3}
                </span>
                <span className="text-[16px] font-bold text-[#94A3B8] font-Raleway">
                  /{totalSlides}
                </span>
              </div>
            </div>
            <div className="w-full lg:w-[65%]">
              {loading ? (
                <div className="flex flex-wrap justify-center">
                  {[...Array(3)].map((_, index) => (
                    <div
                      key={index}
                      className="max-w-sm p-4 border border-gray-200  rounded shadow animate-pulse md:p-6 dark:border-gray-700 mx-4 my-2"
                    >
                      {/* Placeholder content for loading state */}
                    </div>
                  ))}
                </div>
              ) : (
                <Swiper
                  ref={swiperRef}
                  slidesPerView={3}
                  slidesPerGroup={1}
                  spaceBetween={30}
                  breakpoints={breakpoints}
                  className="mySwiper mx-auto"
                  onSlideChange={handleSlideChange}
                  pagination={true}
                  modules={[Pagination]}
                >
                  {testimonials.map((testimonial) => (
                    <SwiperSlide key={testimonial.id}>
                      <div className="pl-4 mt-10 bg-[#F8FAFC] hover:bg-[#1E293B] group  rounded-md transition-all duration-300 ">
                        <div className="relative">
                          <div className="absolute top-[-25px] left-[140px] md:left-[120px] lg:left-0">
                            <img src={testimonial.image} alt="" />
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
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialHomeItems;
