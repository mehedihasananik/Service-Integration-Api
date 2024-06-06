"use client";
import React, { useEffect, useState, useRef } from "react";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import "../../../app/globals.css";
import { Autoplay } from "swiper/modules";

const RelevantServices = ({ service }) => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const swiperRef = useRef(null);

  const { relevant_services } = service;
  // console.log(relevant_services);

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

  return (
    <div className="pt-5 pb-10 md:pt-3 md:pb-8">
      <div className="text-center font-Raleway">
        <h3 className="text-[32px] font-bold md:text-[48px] pb-10">
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
          {relevant_services.map((service) => (
            <SwiperSlide key={service.id}>
              <Link href={`/services/${service.slug.replace(/\s+/g, "")}`}>
                <div className="w-full md:w-[340px] xl:w-[350px]  xxl:w-[280px] xll:w-[300px] 4xl:w-[330px] group shadow-lg rounded-md border border-[#E2E8F0]   cursor-pointer">
                  <div className="bg-[#E2E8F0]">
                    <Image
                      width={700}
                      height={700}
                      className="w-full h-[270px]"
                      src={service.image}
                      alt=""
                    />
                  </div>
                  <div className="px-5 group-hover:bg-[#FF693B]  group-hover:text-white transition-all duration-200">
                    <h3 className="text-[24px] font-bold font-Raleway pt-5 pb-2">
                      {service.title}
                    </h3>
                    <p className="text-[14px] text-[#475569] group-hover:text-white transition-all duration-200">
                      {service.details}
                    </p>
                  </div>
                  <div className="flex items-center justify-between px-5 py-5 group-hover:bg-[#FF693B] transition-all duration-200">
                    <div className="font-Raleway">
                      <span className="font-bold text-[16px] text-[#1E293B] group-hover:text-white transition-all duration-200">
                        Start From
                      </span>
                    </div>
                    <div>
                      <span className="font-Raleway text-[20px] font-bold text-[#0A2C8C] group-hover:text-white transition-all duration-200">
                        {service.start_price} $
                      </span>
                    </div>
                    <div>
                      <button className="text-[14px] bg-[#FF693B] rounded-md px-8 py-[5px] text-white border border-[#ff693B] group-hover:bg-white group-hover:text-[#FF693B] transition-all duration-200">
                        View
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default RelevantServices;
