"use client";
import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import SlideCounter from "../SlideCounter/SlideCounter";
import NavigationButtons from "../NavigationButtons/NavigationButtons";

import ServiceCard from "../ServiceCard/ServiceCard";
import ViewAllButton from "../ViewAllButton/ViewAllButton";
import GlobalButtonColored from "../GlobalButton/GlobalButtonColored";

const ServicesHomeItems = ({ services, details }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const swiperRef = useRef(null);

  const handlePrevSlide = () => {
    swiperRef.current?.swiper.slidePrev();
  };

  const handleNextSlide = () => {
    swiperRef.current?.swiper.slideNext();
  };

  const breakpoints = {
    320: { slidesPerView: 1, spaceBetween: 10 },
    768: { slidesPerView: 2, spaceBetween: 20 },
    1024: { slidesPerView: 3, spaceBetween: 30 },
    1280: { slidesPerView: 2, spaceBetween: 10 },
    1336: { slidesPerView: 2, spaceBetween: 50 },
    1920: { slidesPerView: 3, spaceBetween: 30 },
  };

  return (
    <div id="serviceSlider" className="serviceSlider md:px-5  xl:px-0">
      <div className="max-w-[1680px] mx-auto 4xl:px-[0] 4xl:max-w-[1920px] xl:pl-[8%] 2xl:pl-[13%] 4xl:pl-[14%]">
        <div className="md:py-5 xl:pt-10">
          <div className="flex flex-col xl:flex-row items-center justify-center xl:justify-between md:gap-0 lg:gap-4 xl:gap-12 xl:pt-8 xl:pb-3 ">
            <div className="w-full flex flex-col items-center text-center xl:block  xl:text-left xl:w-[35%]">
              <h2 className="text-center md:text-left text-[20px] md:text-[42px] lg:text-[48px] font-bold font-Raleway text-[#0F172A] xl:w-[400px]">
                {details?.title}
              </h2>
              <p className="pt-4  text-center md:text-left text-[16px] text-[#666666] font-normal w-[100%] px-4 md:px-0 md:w-[700px] xl:w-[380px] 4xl:w-[500px]">
                {details?.details}
              </p>
              <SlideCounter
                currentSlide={currentSlide}
                totalSlides={services.length}
              />
              <NavigationButtons
                onPrev={handlePrevSlide}
                onNext={handleNextSlide}
              />
              <div className="hidden md:block my-5 mb-7  md:mt-10 md:mb-10 md:my-0">
                <GlobalButtonColored
                  path={"/services"}
                  title={"View All"}
                  className="btn btn-primary px-12"
                />
              </div>
            </div>
            <div className="w-full md:flex justify-center xl:w-[65%]">
              <Swiper
                ref={swiperRef}
                breakpoints={breakpoints}
                className="mySwiper mySwiper_serviceSlider"
                onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
                pagination={true}
                modules={[Pagination]}
              >
                {services.map((service) => (
                  <SwiperSlide key={service.id}>
                    <ServiceCard service={service} />
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="py-0 lg:py-2 text-center lg:text-left lg:mt-8 md:hidden mt-5 md:mt-10">
                <ViewAllButton />
              </div>
              <div className=" md:hidden my-5 mb-10 md:mt-10 md:mb-0 md:my-0 text-center ">
                <GlobalButtonColored
                  path={"/services"}
                  title={"View All"}
                  className="btn btn-primary px-12"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesHomeItems;
