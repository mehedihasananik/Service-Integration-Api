"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import Link from "next/link";
import Image from "next/image";
import UserLoading from "../UserLoading/UserLoading";
import { Pagination } from "swiper/modules";

const DemoServices = ({ services, details }) => {
  const [loading, setLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [totalSlides, setTotalSlides] = useState(0);
  const swiperRef = useRef(null);

  useEffect(() => {
    setTotalSlides(services?.length);
    setLoading(false);
  }, [services]);

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
      slidesPerView: 2,
      spaceBetween: 50,
    },
    1280: {
      slidesPerView: 2,
      spaceBetween: 10,
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
    <div id="serviceSlider" className="serviceSlider md:px-5 xl:px-0">
      <div className=" max-w-[1680px] mx-auto 4xl:px-[0] 4xl:max-w-[1920px] xl:pl-[8%] 2xl:pl-[13%] 4xl:pl-[14%]">
        <div className="py-5 xl:pt-10">
          <div className="flex flex-col  lg:flex-row items-center justify-between lg:gap-20 xl:gap-12 py-8">
            <div className="w-full text-center lg:text-left lg:w-[35%]">
              <div className="lg:w-[400px]">
                <h3 className="text-[30px] md:text-[42px] lg:text-[48px] font-bold font-Raleway text-[#0F172A]">
                  {details.title}
                </h3>
              </div>
              <div className="pt-4  flex justify-center xl:block">
                <p className="text-justify  text-[16px] text-[#666666] font-normal w-[300px] md:w-[700px] xl:w-[380px] 4xl:w-[500px]">
                  {details.details}
                </p>
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
              <div className="text-center lg:text-left hidden md:block 4xl:hidden">
                <span className="text-[48px] font-Raleway text-[#0A2C8C] font-bold">
                  {currentSlide + 2}
                </span>
                <span className="text-[16px] font-bold text-[#94A3B8] font-Raleway">
                  /{totalSlides}
                </span>
              </div>
              {/* lg device */}
              <div className="text-center lg:text-left hidden 4xl:block ">
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
              <div className="py-8 lg:py-5 text-center lg:text-left  lg:mt-3 hidden md:block">
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
                  <UserLoading />
                </div>
              ) : (
                <Swiper
                  ref={swiperRef}
                  slidesPerView={3}
                  slidesPerGroup={1}
                  spaceBetween={30}
                  breakpoints={breakpoints}
                  className="mySwiper  mySwiper_serviceSlider"
                  onSlideChange={handleSlideChange}
                  pagination={true}
                  modules={[Pagination]}
                >
                  {services.map((service, index) => {
                    const isLastSlide = index === services.length - 1;
                    const isThirdSlide = index === 1;

                    return (
                      <SwiperSlide className="" key={service.id}>
                        <Link href={`/services/${service.slug}`}>
                          <div
                            className={` w-[330px] h-[550px] xl:w-[330px] xxl:w-[330px] xll:w-[350px] 4xl:w-[330px] group shadow-lg rounded-md border border-[#E2E8F0] cursor-pointer ${
                              isThirdSlide && "no-margin"
                            } ${
                              isLastSlide ? "" : "no-margin2"
                            } hover:bg-[#FF693B] hover:text-white`}
                          >
                            <div className="flex flex-col h-full">
                              <div className="bg-[#E2E8F0] ] transition-all duration-300">
                                <div>
                                  <Image
                                    width={700}
                                    height={700}
                                    className="w-full h-[304px] overflow-hidden rounded-t-md"
                                    src={service?.image}
                                    alt=""
                                  />
                                </div>
                              </div>

                              <div className="px-5 h-[155px] group-hover:bg-[#FF693B] group-hover:h-[155px] transition-all duration-300 flex-grow">
                                <h3 className="text-[20px] font-bold text-[#1E293B] font-Raleway whitespace-nowrap pt-5 group-hover:text-white transition-all duration-300">
                                  {service.title}
                                </h3>
                                <p className="text-[14px] text-[#475569] group-hover:text-white transition-all duration-300">
                                  {service?.details.slice(0, 195)}..
                                </p>
                              </div>

                              <div className="flex items-center justify-between px-5 py-5 group-hover:bg-[#FF693B] transition-all duration-300 group-hover:rounded-b-md">
                                <div className="font-Raleway">
                                  <span className="font-bold text-[16px] text-[#1E293B] group-hover:text-white">
                                    Start From
                                  </span>
                                </div>

                                <div>
                                  <h3 className="flex items-center space-x-[1px] font-Raleway text-[20px] font-bold text-[#0A2C8C] group-hover:text-white transition-all duration-200">
                                    <span>$</span>
                                    <span>{service.start_price}</span>
                                  </h3>
                                </div>

                                <div>
                                  <button className="text-[14px] bg-[#FF693B] rounded-md px-8 py-[5px] text-white border border-[#ff693B] group-hover:bg-white group-hover:text-[#FF693B] transition-all duration-300">
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
              <div className="py-0 lg:py-2 text-center lg:text-left  lg:mt-8  md:hidden mt-5  md:mt-10">
                <Link
                  href={"/services"}
                  className="bg-[#FF693B] text-white text-[16px]  font-semibold py-2.5 px-14 rounded-lg border border-[#FF693B]  hover:bg-white hover:text-[#FF693B] transition-all duration-300"
                >
                  View all
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoServices;
