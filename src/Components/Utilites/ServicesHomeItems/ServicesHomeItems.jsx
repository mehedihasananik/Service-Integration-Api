"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import Link from "next/link";
import Image from "next/image";

const DemoServices = ({ services }) => {
  const [loading, setLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [totalSlides, setTotalSlides] = useState(0);
  const swiperRef = useRef(null);

  useEffect(() => {
    setTotalSlides(services?.length);
    setLoading(false);
  }, [services]);

  const truncateText = (text, maxWords) => {
    const words = text.split(" ");
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(" ") + "...";
    }
    return text;
  };

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
                  Kick Start With Our Services{" "}
                </h3>
              </div>
              <div className="pt-4 lg:w-[380px]">
                <p className="text-[16px] text-[#666666] font-normal">
                  We help businesses to bring their products to life, improve
                  growth and reach ultimate success. We provide all services
                  that you need for your business.
                </p>
              </div>
              <div className="text-center lg:text-left   ">
                <span className="text-[48px] font-Raleway text-[#0A2C8C] font-bold">
                  {currentSlide + 3}
                </span>
                <span className="text-[16px] font-bold text-[#94A3B8] font-Raleway">
                  /{totalSlides}
                </span>
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
              <div className="py-8 lg:py-5 text-center lg:text-left  lg:mt-8">
                <Link
                  href={"/services"}
                  className="bg-[#FF693B] text-white text-[16px]  font-semibold py-4 px-14 rounded-lg border border-[#FF693B]  hover:bg-white hover:text-[#FF693B] transition-all duration-300"
                >
                  View all
                </Link>
              </div>
            </div>
            <div className="w-full lg:w-[65%]">
              {loading ? (
                <div className="flex flex-wrap justify-center">
                  {[...Array(3)].map((_, index) => (
                    <div
                      key={index}
                      className="max-w-sm p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700 mx-4 my-2"
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
                            className={`w-[300px] h-[500px] xl:w-[350px]  xxl:w-[280px] xll:w-[300px] 4xl:w-[330px] group shadow-lg rounded-md border border-[#E2E8F0]   cursor-pointer ${
                              isThirdSlide && "no-margin"
                            } ${isLastSlide ? "" : "no-margin2"}`}
                          >
                            <div className="flex flex-col">
                              <div className="bg-[#E2E8F0] group-hover:bg-[#FF693B] ">
                                {/* slider image */}
                                <div>
                                  <Image
                                    width={700}
                                    height={700}
                                    className="w-full h-[270px]"
                                    src={
                                      service.image || "/assets/service1.jpeg"
                                    }
                                    alt=""
                                  />
                                </div>
                              </div>

                              {/* title & description */}

                              <div className="px-5 h-[155px] group-hover:bg-[#FF693B] group-hover:h-[155px] transition-all duration-300  ">
                                <h3 className="text-[20px] font-bold text-[#1E293B] font-Raleway whitespace-nowrap pt-5   group-hover:text-white transition-all duration-300 ">
                                  {service.title}
                                </h3>
                                <p className="text-[14px] text-[#475569] group-hover:text-white transition-all duration-300">
                                  {truncateText(service.details, 33)}
                                </p>
                              </div>
                              <div className="flex items-center justify-between px-5 py-5 group-hover:bg-[#FF693B] transition-all duration-300 group-hover:rounded-b-md">
                                <div className="font-Raleway">
                                  <span className=" font-bold text-[16px] text-[#1E293B] group-hover:text-[#fff] ">
                                    Start From
                                  </span>
                                </div>
                                {/* price */}
                                <div>
                                  <span className="font-Raleway text-[20px] font-bold text-[#0A2C8C] group-hover:text-[#fff]">
                                    ${service.start_price}
                                  </span>
                                </div>
                                {/* view more button */}
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
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoServices;
