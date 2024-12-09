"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import { Autoplay, Pagination } from "swiper/modules";
import ComboSliderCard from "./ComboSliderCard";
import ComboNavigationBtn from "@/Components/Utilites/NavigationButtons/ComboNavigationBtn";
import { BookAppointmentButton } from "../ComboGroupBtn/ComboGroupBtn";

const ComboClientSlider = ({ testimonials, details }) => {
  // const [currentSlide, setCurrentSlide] = useState(0);
  // const [previousSlide, setPreviousSlide] = useState(null);
  // const swiperRef = useRef(null);

  // Filter services to only include those with "featured": "1"

  // const handlePrevSlide = () => {
  //   swiperRef.current?.swiper.slidePrev();
  //   setPreviousSlide(currentSlide);
  // };

  // const handleNextSlide = () => {
  //   swiperRef.current?.swiper.slideNext();
  //   setPreviousSlide(currentSlide);
  // };

  const breakpoints = {
    1920: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    1336: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    1280: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  };

  return (
    <div className="lg:overflow-hidden pt-4 md:pt-5">
      <div className="w-full flex xl:px-[6.3%] ">
        <Swiper
          breakpoints={breakpoints}
          className="mySwiper combo_ServiceSwiper"
          // onSlideChange={(swiper) => {
          //   setCurrentSlide(swiper.realIndex);
          //   setPreviousSlide(swiper.previousIndex);
          // }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
        >
          {testimonials?.map((testimonial) => {
            return (
              <SwiperSlide key={testimonial.id}>
                <ComboSliderCard testimonial={testimonial} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      {/* <div className="flex justify-center">
        <ComboNavigationBtn onPrev={handlePrevSlide} onNext={handleNextSlide} />
      </div> */}
      <div className="flex justify-center pt-[2%]">
        <BookAppointmentButton />
      </div>
    </div>
  );
};

export default ComboClientSlider;
