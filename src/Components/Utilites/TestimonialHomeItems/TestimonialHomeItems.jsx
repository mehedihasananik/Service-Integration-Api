"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import { Autoplay, Pagination } from "swiper/modules";
import GlobalButtonColored from "../GlobalButton/GlobalButtonColored";
import TestimonialCard from "./TestimonialCard";

const TestimonialHomeItems = ({ testimonials, details }) => {
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
      slidesPerView: 3,
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
    <div id="testimonial" className="overflow-hidden pt-4 md:pt-0">
      <div className=" max-w-[1680px] mx-auto 4xl:px-[0] 4xl:max-w-[1920px] xl:pl-[8%] 2xl:pl-[8%] 3xl:pl-[12.5%] 4xl:pl-[14%]">
        <div className="pb-0 xl:pt-0">
          <div className="flex flex-col xl:flex-row items-start justify-between md:gap-0 xl:gap-12 pt-0 pb-5 md:pt-8 md:pb-0">
            <div className="w-full text-center xl:text-left xl:w-[35%] px-4 md:px-0 md:mt-5">
              <div className="w-full xl:w-[400px]">
                <h2 className="headings line-clamp-2">{details?.heading}</h2>
              </div>
              <div className="pt-2 md:pt-4 xl:w-[380px]">
                <p className=" text-paragraph text-grayish  xl:text-left font-normal px-4 md:px-0 line-clamp-4">
                  {details.text}
                </p>
              </div>
              <div className="flex justify-center items-center xl:justify-start xl:items-start gap-6 py-4">
                <div className="group text-center">
                  <button
                    className=" bg-[#FF9F711A]  group-hover:bg-primary px-5 py-5 rounded-lg transition-all duration-300"
                    onClick={handlePrevSlide}
                  >
                    <HiArrowLeft className="text-primary  group-hover:text-white w-[24px] h-[24px]" />
                  </button>
                </div>
                <div className="group">
                  <button
                    className=" bg-[#FF9F711A]  group-hover:bg-primary px-5 py-5 rounded-lg transition-all duration-300"
                    onClick={handleNextSlide}
                  >
                    <HiArrowRight className="text-primary  group-hover:text-white w-[24px] h-[24px]" />
                  </button>
                </div>
              </div>
              <div className="hidden  xl:block mt-[5%]">
                <GlobalButtonColored
                  path="client-reviews"
                  title="View All"
                  className="btn btn-primary md:w-[50%] text-center px-[10%]"
                  onClick={(e) => smoothScroll(e, "#projectDetails")}
                />
              </div>
            </div>

            <div className="w-full xl:w-[65%]">
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
                  className="mySwiper testimonial_mySwiper mx-auto"
                  onSlideChange={handleSlideChange}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination, Autoplay]}
                  autoplay={{ delay: 2000, disableOnInteraction: false }}
                >
                  {testimonials?.map((testimonial) => (
                    <SwiperSlide key={testimonial.id}>
                      <TestimonialCard testimonial={testimonial} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              )}
              <div className="block  xl:hidden  mt-[5%] text-center my-4 lg:mb-[3%]">
                <GlobalButtonColored
                  path="client-reviews"
                  title="View All"
                  className="btn btn-primary md:w-[50%] text-center px-[10%]"
                  onClick={(e) => smoothScroll(e, "#projectDetails")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialHomeItems;
