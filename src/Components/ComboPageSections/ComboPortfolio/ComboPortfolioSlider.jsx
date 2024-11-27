"use client";

import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import SlideCounter from "@/Components/Utilites/SlideCounter/SlideCounter";
import NavigationButtons from "@/Components/Utilites/NavigationButtons/NavigationButtons";
import GlobalButtonColored from "@/Components/Utilites/GlobalButton/GlobalButtonColored";
import ViewAllButton from "@/Components/Utilites/ViewAllButton/ViewAllButton";
import ServiceCard from "@/Components/Utilites/ServiceCard/ServiceCard";
import ComboPortfolioCard from "./ComboPortfolioCard";

const breakpoints = {
  320: { slidesPerView: 1, spaceBetween: 10 },
  768: { slidesPerView: 2.2, spaceBetween: 20 },
  1024: { slidesPerView: 3, spaceBetween: 30 },
  1280: { slidesPerView: 2.3, spaceBetween: 30 },
  1336: { slidesPerView: 2.5, spaceBetween: 30 },
  1440: { slidesPerView: 2.6, spaceBetween: 30 },
  1536: { slidesPerView: 2.8, spaceBetween: 30 },
  1680: { slidesPerView: 2.8, spaceBetween: 30 },
  1700: { slidesPerView: 2.8, spaceBetween: 30 },
  1920: { slidesPerView: 3.5, spaceBetween: 30 },
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
    <div id="serviceSlider" className="serviceSlider">
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
        <NavigationButtons onPrev={handlePrevSlide} onNext={handleNextSlide} />
      </div>
    </div>
  );
};

export default ComboPortfolioSlider;
