"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import { Autoplay, Pagination } from "swiper/modules";
import ComboSliderCard from "./ComboSliderCard";

const ComboClientSlider = ({ testimonials, details }) => {
  const swiperRef = useRef(null);

  const breakpoints = {
    1920: {
      slidesPerView: 1,
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
    <div className="overflow-hidden pt-4 md:pt-5">
      <div className="w-full flex px-[12%] ">
        <Swiper
          ref={swiperRef}
          slidesPerView={1}
          slidesPerGroup={1}
          spaceBetween={30}
          breakpoints={breakpoints}
          className=" mySwiper combo_mySwiper"
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          //   autoplay={{ delay: 2000, disableOnInteraction: false }}
        >
          {testimonials?.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <ComboSliderCard testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ComboClientSlider;
