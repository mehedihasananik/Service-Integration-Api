"use client";
import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import Image from "next/image";
import { HiArrowSmallRight } from "react-icons/hi2";
import Link from "next/link";
import { Autoplay } from "swiper/modules";
import { sevice_portfolioApi } from "@/config/apis";

const ServicePortolio = ({ portfolios }) => {
  const [loading, setLoading] = useState(true);

  const swiperRef = useRef(null);

  const breakpoints = {
    // when window width is >= 1024px (lg)
    1920: {
      slidesPerView: 2.8,
      spaceBetween: 50,
    },
    1336: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1280: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    // when window width is >= 768px (md)
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 320px (sm)
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  };

  const truncateText = (text, maxWords) => {
    const words = text.split(" ");
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(" ") + "...";
    }
    return text;
  };

  return (
    <>
      {portfolios?.length > 0 ? (
        <>
          <div className="text-center py-3 md:pt-0 md:pb-5">
            <h2 className="text-[32px] md:text-[48px] text-[#0F172A] font-bold font-Raleway">
              Portfolio&apos;s{" "}
            </h2>
          </div>
          <div className="px-[5%] md:px-[5%] lg:px-0 ">
            <Swiper
              ref={swiperRef}
              slidesPerView={3}
              spaceBetween={30}
              breakpoints={breakpoints}
              className="mySwiper "
              modules={[Autoplay]}
              // autoplay={{ delay: 3000, disableOnInteraction: false }}
            >
              {portfolios?.map((portfolio) => {
                // console.log(portfolio);
                return (
                  <SwiperSlide key={portfolio.id} className="">
                    <Link href={`/portfolio/${portfolio.slug}`}>
                      <div className="group rounded-[10px] overflow-hidden hidden lg:block border border-[#CBD5E1]  w-[620px]">
                        <div className="portfolio-bgHover h-[390px]  cursor-pointer flex bg-[#FFFFFF] rounded-[10px]">
                          <div className="w-1/2 h-full">
                            <Image
                              width={800}
                              height={500}
                              className="w-[350px] h-full rounded-l-[10px]"
                              src={portfolio?.image}
                              alt=""
                            />
                          </div>
                          <div className="w-1/2 h-[500px] flex flex-col justify-start items-center mt-10 p-0 md:py-0 xll:px-8 2xl:px-12 4xl:px-0">
                            <div className="text-center">
                              <h4 className="text-[14px] text-[#999999] pt-3 pb-3 md:pt-0 md:pb-6 portfolio-textHover">
                                {portfolio?.service_name[0]?.service_name}
                              </h4>
                              <div className="text-[16px] px-[10%] w-[380px] h-[65px] font-bold font-Raleway text-[#333333] portfolio-textHover line-clamp-3">
                                {portfolio?.heading
                                  .split(" ")
                                  .slice(0, 12)
                                  .join(" ")}
                                {portfolio?.heading.split(" ").length > 12
                                  ? "..."
                                  : ""}
                              </div>
                              <div>
                                <p className="w-[370px] px-[10%] flex justify-center text-center text-[14px] text-[#666666] py-3 portfolio-textHover pt-3.5">
                                  <span>{portfolio.text.slice(0, 240)}...</span>
                                </p>
                                <div className="pt-10 group flex justify-center items-center gap-2 text-[#FF693B] font-bold portfolio-textHover pb-6 lg:pb-0">
                                  <button className="text-[14px]">
                                    Read More
                                  </button>
                                  <span className="w-[19px] font-bold">
                                    <HiArrowSmallRight className="text-xl" />
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="group h-auto rounded-[10px] overflow-hidden block lg:hidden">
                        <div className="border border-[#CBD5E1] portfolio-bgHover h-auto w-full cursor-pointer flex flex-col bg-[#FFFFFF] rounded-[10px]">
                          <div className="w-full h-[250px]">
                            <Image
                              width={800}
                              height={500}
                              className="w-full h-full object-cover"
                              src={portfolio?.image}
                              alt=""
                            />
                          </div>
                          <div className="w-full h-auto flex flex-col justify-start items-center p-4">
                            <div className="text-center">
                              <h4 className="text-[14px] text-[#999999] pt-0 pb-2 portfolio-textHover">
                                {portfolio?.service_name[0]?.service_name}
                              </h4>
                              <div className="text-[16px] px-[5%] w-full h-[67px] font-bold font-Raleway text-[#333333] portfolio-textHover line-clamp-3">
                                {portfolio?.heading
                                  .split(" ")
                                  .slice(0, 12)
                                  .join(" ")}
                                {portfolio?.heading.split(" ").length > 12
                                  ? "..."
                                  : ""}
                              </div>
                              <div>
                                <p className="w-full px-[5%] flex justify-center text-center text-[14px] text-[#666666] py-3 portfolio-textHover pt-3.5">
                                  <span>{portfolio.text.slice(0, 150)}...</span>
                                </p>
                                <div className="pt-2 pb-0 group flex justify-center items-center gap-2 text-[#FF693B] font-bold portfolio-textHover ">
                                  <button className="text-[14px]">
                                    Read More
                                  </button>
                                  <span className="w-[19px] font-bold">
                                    <HiArrowSmallRight className="text-xl" />
                                  </span>
                                </div>
                              </div>
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
          <div className="flex justify-center py-10">
            <Link
              href={"/portfolio"}
              className="text-[16px] bg-[#FF693B] px-11 py-2 text-white rounded-lg border border-[#FF693B]  hover:bg-white hover:text-[#FF693B] transition-all duration-300"
            >
              See More
            </Link>
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default ServicePortolio;
