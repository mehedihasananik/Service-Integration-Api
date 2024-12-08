"use client";

import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import ComboPortfolioCard from "./ComboPortfolioCard";
import ComboNavigationBtn from "@/Components/Utilites/NavigationButtons/ComboNavigationBtn";

const breakpoints = {
  320: { slidesPerView: 1, spaceBetween: 10 },
  600: { slidesPerView: 1.5, spaceBetween: 10 },
  700: { slidesPerView: 1.8, spaceBetween: 10 },
  768: { slidesPerView: 2.2, spaceBetween: 20 },
  900: { slidesPerView: 2.6, spaceBetween: 20 },
  1024: { slidesPerView: 3, spaceBetween: 30 },
  1280: { slidesPerView: 3, spaceBetween: 30 },
  1336: { slidesPerView: 3.2, spaceBetween: 30 },
  1440: { slidesPerView: 3.3, spaceBetween: 30 },
  1536: { slidesPerView: 3.5, spaceBetween: 30 },
  1680: { slidesPerView: 4.3, spaceBetween: 30 },
  1700: { slidesPerView: 4.5, spaceBetween: 30 },
  1920: { slidesPerView: 5, spaceBetween: 30 },
};

const ComboPortfolioSlider = ({ services }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [previousSlide, setPreviousSlide] = useState(null);
  const swiperRef = useRef(null);

  // Filter services to only include those with "featured": "1"

  const handlePrevSlide = () => {
    swiperRef.current?.swiper.slidePrev();
    setPreviousSlide(currentSlide);
  };

  const handleNextSlide = () => {
    swiperRef.current?.swiper.slideNext();
    setPreviousSlide(currentSlide);
  };

  return (
    <div id="serviceSlider" className="serviceSlider px-3">
      <div className="w-full md:flex justify-center pt-10 ">
        <Swiper
          ref={swiperRef}
          breakpoints={breakpoints}
          className="mySwiper combo_portSwiper"
          onSlideChange={(swiper) => {
            setCurrentSlide(swiper.realIndex);
            setPreviousSlide(swiper.previousIndex);
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay]}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
        >
          {services.map((service, index) => {
            return (
              <SwiperSlide key={service.id}>
                <ComboPortfolioCard service={service} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="flex justify-center">
        <ComboNavigationBtn onPrev={handlePrevSlide} onNext={handleNextSlide} />
      </div>
    </div>
  );
};

export default ComboPortfolioSlider;
