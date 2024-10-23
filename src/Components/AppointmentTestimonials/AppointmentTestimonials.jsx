"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import GlobalButtonColored from "../Utilites/GlobalButton/GlobalButtonColored";
import TestimonialCard from "../Utilites/TestimonialHomeItems/TestimonialCard";

const AppointmentTestimonials = ({ testimonials, details }) => {
  const [loading, setLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [totalSlides, setTotalSlides] = useState(0);
  const swiperRef = useRef(null);

  useEffect(() => {
    setTotalSlides(testimonials?.length || 0);
    setLoading(false);
  }, [testimonials]);

  const handleSlideChange = (swiper) => {
    setCurrentSlide(swiper.realIndex);
  };

  const breakpoints = {
    1920: {
      slidesPerView: 4,
      spaceBetween: 30,
    },

    1536: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    1280: {
      slidesPerView: 3,
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
    <div id="testimonial" className="overflow-hidden pt-4 md:pt-10">
      <div className="max-w-[1520px] mx-auto px-[6%] md:px-[4%] xl:px-[8%] 4xl:px-[4%]">
        <div className="relative pb-0 pt-5 xl:pt-0">
          {loading ? (
            <div className="flex flex-wrap justify-center">
              {[...Array(3)].map((_, index) => (
                <div
                  key={index}
                  className="max-w-sm p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700 mx-4 my-2"
                />
              ))}
            </div>
          ) : (
            <div className="relative">
              <button
                onClick={() => swiperRef.current?.swiper.slidePrev()}
                className="absolute -left-2 lg:-left-10 top-1/2 -translate-y-1/2 z-10 transform text-primary
                  w-12 h-12 flex items-center justify-center rounded-full
                 lg:bg-primary lg:text-white  lg:shadow-md  lg:hover:bg-secondary lg:hover:text-white
                  transition-all duration-300 -translate-x-1/2
                  opacity-100"
                aria-label="Previous slide"
              >
                <svg
                  className="w-8 h-6 md:w-10 md:h-10 lg:w-8 lg:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                onClick={() => swiperRef.current?.swiper.slideNext()}
                className="absolute -right-2 lg:-right-10 top-1/2 -translate-y-1/2 z-10 transform text-primary
                  w-12 h-12 flex items-center justify-center rounded-full
                  lg:bg-primary lg:text-white  lg:shadow-md lg:hover:bg-secondary lg:hover:text-white
                  transition-all duration-300 translate-x-1/2
                  opacity-100"
                aria-label="Next slide"
              >
                <svg
                  className="w-8 h-6 md:w-10 md:h-10 lg:w-8 lg:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>

              <Swiper
                ref={swiperRef}
                slidesPerView={3}
                slidesPerGroup={1}
                spaceBetween={30}
                breakpoints={breakpoints}
                className="mySwiper testimonial_mySwiper mx-auto"
                onSlideChange={handleSlideChange}
                modules={[Autoplay, Pagination, Navigation]}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
              >
                {testimonials?.map((testimonial) => (
                  <SwiperSlide
                    key={testimonial.id}
                    className="swiper-slide-card"
                  >
                    <div className="transform transition-all duration-300 hover:scale-105 hover:bg-white hover:shadow-xl rounded-lg">
                      <TestimonialCard testimonial={testimonial} />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          )}
        </div>
      </div>

      {/* Add these styles to your global CSS or style tag */}
    </div>
  );
};

export default AppointmentTestimonials;
