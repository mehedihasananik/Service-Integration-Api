"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "../../../app/globals.css";
import { Autoplay } from "swiper/modules";

const RelevantPortfolio = ({ singlePortfolioItem }) => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const swiperRef = useRef(null);

  const breakpoints = {
    2500: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
    1920: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
    1336: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
    1280: {
      slidesPerView: 3,
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
  const { relevant } = singlePortfolioItem;
  // console.log(singlePortfolioItem.relevant);

  return (
    <>
      {relevant.length > 0 ? (
        <div className="pt-0 pb-5 md:pt-3 md:pb-0">
          <div className="text-center font-Raleway">
            <h3 className="text-[32px] font-bold md:text-[48px] pb-5">
              Relevant Services
            </h3>
          </div>
          <div className="relative">
            <Swiper
              ref={swiperRef}
              slidesPerView={4}
              spaceBetween={30}
              breakpoints={breakpoints}
              modules={[Autoplay]}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              className="mySwiper"
            >
              {relevant?.map((service) => {
                // console.log(service);
                return (
                  <SwiperSlide key={service.id}>
                    <Link href={`/services/${service.slug}`}>
                      <div className="group h-[550px] xl:w-[296px] xxl:w-[296px]  2xl:w-[320px]  shadow-lg rounded-md border border-[#E2E8F0]  cursor-pointer">
                        <div className="flex flex-col">
                          <div className="bg-[#E2E8F0]">
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
                          <div>
                            {" "}
                            <div className="px-3 group-hover:bg-[#FF693B] group-hover:text-white  transition-all duration-200">
                              <h3 className="text-[20px] md:text-[18px] font-bold  font-Raleway pt-5 pb-2 whitespace-nowrap">
                                {service.title}
                              </h3>
                              <p className="text-[14px] text-[#475569]  group-hover:text-white transition-all duration-200">
                                {service.service_summery.slice(0, 195)}...
                              </p>
                            </div>
                            <div className="flex  group-hover:rounded-b-md items-center justify-between px-3 h-[50px] pt-10 pb-12 group-hover:bg-[#FF693B] transition-all duration-200">
                              <div className="font-Raleway">
                                <span className=" font-bold text-[16px] text-[#1E293B] group-hover:text-white transition-all duration-200">
                                  Start From
                                </span>
                              </div>
                              <div>
                                <h3 className="flex items-center space-x-[1px] font-Raleway text-[20px] font-bold text-[#0A2C8C] group-hover:text-white transition-all duration-200">
                                  <span> $</span>{" "}
                                  <span>{service.start_price}</span>
                                </h3>
                              </div>
                              <div>
                                <button className="text-[14px] bg-[#FF693B] rounded-md px-8 py-[5px] text-white border border-[#ff693B]  group-hover:bg-white group-hover:text-[#FF693B] transition-all duration-200">
                                  View
                                </button>
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
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default RelevantPortfolio;
