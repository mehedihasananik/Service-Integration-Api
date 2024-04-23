"use client";

import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { HiArrowLeft } from "react-icons/hi";
import { HiArrowRight } from "react-icons/hi";
import Image from "next/image";
import ServiceLoading from "@/Components/Utilites/Loading/ServiceLoading";
import Link from "next/link";
import "../../../app/globals.css";
import { Autoplay } from "swiper/modules";

const ServicesHomeItems = ({ services: initialServices }) => {
  // states
  const [loading, setLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [totalSlides, setTotalSlides] = useState(0);
  const [spaceBetween, setSpaceBetween] = useState(100); // Initial value for spaceBetween
  const [services, setServices] = useState(initialServices);

  useEffect(() => {
    setLoading(false); // Set loading to false after data is passed via props
    setTotalSlides(initialServices.length);
  }, [initialServices]);

  const swiperRef = useRef(null);

  // next function
  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
      setCurrentSlide((prevSlide) => Math.min(prevSlide + 1, totalSlides - 3));
      if (currentSlide === 0) {
        setSpaceBetween(50);
      } else if (currentSlide === 3) {
        setSpaceBetween(10);
      }
    }
  };

  // prev function
  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
      setCurrentSlide((prevSlide) => Math.max(prevSlide - 1, 0));
    }
  };
  useEffect(() => {
    // Log spaceBetween
  }, [spaceBetween]);

  // slider breakpoints
  const breakpoints = {
    2500: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
    1920: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
    1336: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
    1280: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 10,
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
    <div className="overflow-hidden">
      <div className="max-w-[1680px] mx-auto px-[4%] md:px[8%] 4xl:px-[0] 4xl:max-w-[1920px] 3xl:pl-[14%] 4xl:pl-[14%] 6xl:pl-[12%]">
        {/* services */}
        <div className="py-6 xl:pt-10 ">
          <div className="flex flex-col lg:flex-row items-center justify-between lg:gap-20 xl:gap-12 lg:py-8">
            {/* left heading & description starts*/}
            <div className="w-full lg:w-[30%]">
              <div className="w-full lg:w-[400px]">
                <h3 className="text-center lg:text-left text-[30px] md:text-[48px] font-bold font-Raleway text-[#0F172A]">
                  Kick Start With Our Services{" "}
                </h3>
              </div>
              <div className="pt-4 w-full text-center lg:text-left lg:w-[380px] ">
                <p className="text-[16px] text-[#666666] font-normal">
                  We help businesses to bring their products to life, improve
                  growth and reach ultimate success. We provide all services
                  that you need for your business.
                </p>
              </div>
              <div className="text-center lg:text-left">
                <span className="text-[48px] font-Raleway text-[#0A2C8C] font-bold">
                  {currentSlide === totalSlides
                    ? totalSlides
                    : currentSlide + 3}
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
              <div className="py-8 lg:py-5 text-center lg:text-left  lg:mt-8">
                <Link
                  href={"/services"}
                  className="bg-[#FF693B] text-white text-[16px]  font-semibold py-4 px-14 rounded-lg border border-[#FF693B]  hover:bg-white hover:text-[#FF693B] transition-all duration-300"
                >
                  View all
                </Link>
              </div>
            </div>
            {/* right swiper */}

            {loading ? (
              <>
                <ServiceLoading />
                <ServiceLoading />
                <ServiceLoading />
              </>
            ) : (
              <div className="w-full flex justify-center items-center  lg:w-[70%]  ">
                {/* cards */}
                <Swiper
                  ref={swiperRef}
                  slidesPerView={3}
                  slidesPerGroup={3}
                  spaceBetween={200}
                  breakpoints={breakpoints}
                  className="mySwiper space-x-4"
                  onSlideChange={(swiper) =>
                    setCurrentSlide(swiper.activeIndex)
                  }
                >
                  {services.map((service, index) => {
                    const isLastSlide = index === services.length - 1;
                    const isThirdSlide = index === 1;

                    return (
                      <SwiperSlide key={service.id}>
                        <Link
                          href={`/services/${service.slug.replace(/\s+/g, "")}`}
                        >
                          <div
                            className={`w-[300px] xl:w-[350px]  xxl:w-[280px] xll:w-[300px] 4xl:w-[330px] group shadow-lg rounded-md border border-[#E2E8F0]   cursor-pointer ${
                              isThirdSlide && "no-margin"
                            } ${isLastSlide ? "" : "no-margin2"}`}
                          >
                            <div className="flex flex-col">
                              <div className="bg-[#E2E8F0] group-hover:bg-[#FF693B]">
                                <div>
                                  <Image
                                    width={700}
                                    height={700}
                                    className="w-full h-[270px]"
                                    src={
                                      service.image || "/assets/service1.jpeg"
                                    }
                                    alt=""
                                    onContextMenu={(e) => e.preventDefault()}
                                  />
                                </div>
                              </div>

                              {/* title & description */}

                              <div className="px-5 group-hover:bg-[#FF693B] transition-all duration-300 ">
                                <h3 className="  text-[24px] font-bold text-[#1E293B] font-Raleway pt-5   group-hover:text-white transition-all duration-300 ">
                                  {service.title}
                                </h3>
                                <p className="text-[14px] text-[#475569] group-hover:text-white transition-all duration-300">
                                  {service.details}
                                </p>
                              </div>
                              <div className="flex items-center justify-between px-5 py-5 group-hover:bg-[#FF693B] transition-all duration-300">
                                <div className="font-Raleway">
                                  <span className=" font-bold text-[16px] text-[#1E293B] group-hover:text-[#fff] ">
                                    Start From
                                  </span>
                                </div>
                                <div>
                                  <span className="font-Raleway text-[20px] font-bold text-[#0A2C8C] group-hover:text-[#fff]">
                                    {service.start_price}
                                  </span>
                                </div>
                                <div>
                                  <button className="text-[14px] bg-[#FF693B] rounded-md px-8 py-[5px] text-white border border-[#ff693B]  group-hover:bg-white group-hover:text-[#FF693B] transition-all duration-300">
                                    View
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesHomeItems;
