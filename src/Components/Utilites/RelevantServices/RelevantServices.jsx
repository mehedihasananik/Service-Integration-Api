"use client";
import React, { useEffect, useState, useRef } from "react";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import "../../.../../../styles/globals.css";
import { Autoplay } from "swiper/modules";

const RelevantServices = ({ service }) => {
  const swiperRef = useRef(null);

  const { relevant_services } = service;
  // console.log(relevant_services);

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

  return (
    <>
      {relevant_services.length > 0 ? (
        <div className="pt-5 pb-10 md:pt-3 md:pb-8">
          <div className="text-center font-Raleway">
            <h2 className="text-[32px] font-bold md:text-[48px] pb-10">
              Relevant Services
            </h2>
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
              {relevant_services.map((service) => (
                <SwiperSlide key={service.id}>
                  <Link href={`/services/${service.slug.replace(/\s+/g, "")}`}>
                    <div className="group w-[330px] h-[550px] shadow-lg rounded-md border border-[#E2E8F0] cursor-pointer overflow-hidden">
                      <div className="flex flex-col h-full">
                        <div className="bg-[#E2E8F0]">
                          <Image
                            width={330}
                            height={305}
                            className="w-full h-[305px] object-cover"
                            src={service?.image}
                            alt={service?.alt_text}
                          />
                        </div>
                        <div className="flex flex-col justify-between flex-grow bg-white group-hover:bg-[#FF693B] transition-colors duration-200">
                          <div className="px-3 pt-5 pb-2">
                            <h3 className="text-[20px] md:text-[18px] font-bold font-Raleway whitespace-nowrap group-hover:text-white transition-colors duration-200">
                              {service.title}
                            </h3>
                            <p className="text-[14px] text-[#475569] group-hover:text-white transition-colors duration-200 mt-2">
                              {service.service_summery.slice(0, 195)}...
                            </p>
                          </div>
                          <div className="flex items-center justify-between px-3 py-4">
                            <div className="font-Raleway">
                              <span className="font-bold text-[16px] text-[#1E293B] group-hover:text-white transition-colors duration-200">
                                Start From
                              </span>
                            </div>
                            <div>
                              <h3 className="flex items-center space-x-[1px] font-Raleway text-[20px] font-bold text-[#0A2C8C] group-hover:text-white transition-colors duration-200">
                                <span>$</span>
                                <span>{service.start_price}</span>
                              </h3>
                            </div>
                            <div>
                              <button className="text-[14px] bg-[#FF693B] rounded-md px-8 py-[5px] text-white border border-[#FF693B] group-hover:bg-white group-hover:text-[#FF693B] transition-colors duration-200">
                                View
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      ) : (
        " "
      )}
    </>
  );
};

export default RelevantServices;
