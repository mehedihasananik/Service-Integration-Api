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

  return (
    <>
      {portfolios?.length > 0 ? (
        <div className="lg:px-[0%] xxl:px-[0%] 4xl:px-[1%]">
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
                      <div className="group rounded-lg overflow-hidden border border-[#CBD5E1]">
                        <div className="portfolio-bgHover w-full cursor-pointer flex flex-col xl:flex-row bg-white rounded-lg">
                          <div className="w-full xl:w-1/2">
                            <div className="relative w-full aspect-[16/9] lg:aspect-[330/370] overflow-hidden">
                              <Image
                                src={portfolio?.image}
                                layout="fill"
                                objectFit="cover"
                                quality={80}
                                className="rounded-t-lg xl:rounded-l-lg lg:rounded-tr-none"
                                alt={portfolio?.title || "Portfolio image"}
                              />
                            </div>
                          </div>

                          <div className="w-full xl:w-1/2 p-4 lg:p-6 flex flex-col justify-center items-center">
                            <div className="text-center w-full">
                              {
                                portfolio?.service_name?.map((service, index) => (
                                  service && (
                                    <h4 key={index} className="text-[14px] text-[#999999]  portfolio-textHover">
                                      {service}
                                    </h4>
                                  )
                                ))
                              }
                              <div className="text-base lg:text-lg font-bold font-Raleway text-[#333333] portfolio-textHover line-clamp-2 lg:line-clamp-3 mb-3">
                                {portfolio?.heading?.slice(0, 120)}
                              </div>
                              <p className="text-sm text-[#666666] portfolio-textHover mb-4 line-clamp-3 lg:line-clamp-6">
                                {portfolio.portfolio_summery}
                              </p>
                              <div className="flex justify-center items-center gap-2 text-[#FF693B] font-bold portfolio-textHover">
                                <button className="text-sm lg:text-base">Read More</button>
                                <span className="w-5">
                                  <HiArrowSmallRight className="text-xl" />
                                </span>
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
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default ServicePortolio;
