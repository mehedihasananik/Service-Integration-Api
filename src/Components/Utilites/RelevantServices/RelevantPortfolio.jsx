"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "../../../styles/globals.css";
import { Autoplay } from "swiper/modules";

const RelevantPortfolio = ({ singlePortfolioItem }) => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const swiperRef = useRef(null);

  const breakpoints = {
    320: { slidesPerView: 1, spaceBetween: 10 },
    500: { slidesPerView: 1.3, spaceBetween: 10 },
    768: { slidesPerView: 2, spaceBetween: 20 },
    800: { slidesPerView: 2.2, spaceBetween: 20 },
    991: { slidesPerView: 2.5, spaceBetween: 20 },
    1024: { slidesPerView: 2.6, spaceBetween: 30 },
    1280: { slidesPerView: 3.3, spaceBetween: 30 },
    1336: { slidesPerView: 3.5, spaceBetween: 30 },
    1440: { slidesPerView: 3.5, spaceBetween: 30 },
    1536: { slidesPerView: 3.8, spaceBetween: 30 },
    1680: { slidesPerView: 4, spaceBetween: 30 },
    1700: { slidesPerView: 4, spaceBetween: 30 },
    1920: { slidesPerView: 4, spaceBetween: 30 },
  };
  const { relevant } = singlePortfolioItem;

  return (
    <>
      {relevant.length > 0 ? (
        <div className="pt-0 pb-5 md:pt-3 md:pb-0">
          <div className="text-center font-Raleway">
            <h3 className="text-[32px] font-bold md:text-[48px] pb-6">
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
                return (
                  <SwiperSlide key={service.id}>
                    <Link href={`/services/${service.slug}`}>
                      <div className="group w-[330px] h-[550px] shadow-lg rounded-md border border-[#E2E8F0] cursor-pointer transition-all duration-200 hover:bg-[#FF693B]">
                        <div className="flex flex-col h-full">
                          <div className="bg-[#E2E8F0]">
                            <div>
                              <Image
                                alt={service?.alt_text}
                                width={700}
                                height={700}
                                className="w-[330px] h-[305px] overflow-hidden rounded-t-md"
                                src={service?.image}
                              />
                            </div>
                          </div>
                          <div className="flex flex-col justify-between flex-grow">
                            <div className="px-3 transition-all duration-200">
                              <h3 className="text-[20px] md:text-[18px] font-bold font-Raleway pt-5 pb-2 whitespace-nowrap group-hover:text-white">
                                {service.title}
                              </h3>
                              <p className="text-[14px] text-[#475569] group-hover:text-white transition-all duration-200">
                                {service.service_summery.slice(0, 195)}...
                              </p>
                            </div>
                            <div className="flex items-center justify-between px-3 h-[50px] pt-10 pb-12 mt-auto">
                              <div className="font-Raleway">
                                <span className="font-bold text-[16px] text-[#1E293B] group-hover:text-white transition-all duration-200">
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
                                <button className="text-[14px] bg-[#FF693B] rounded-md px-8 py-[5px] text-white border border-[#ff693B] group-hover:bg-white group-hover:text-[#FF693B] transition-all duration-200">
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
