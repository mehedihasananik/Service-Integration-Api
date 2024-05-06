"use client";
import React, { useEffect, useState, useRef } from "react";
import API_ROUTES from "@/app/api/confiq";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import "../../../app/globals.css";
import { Autoplay } from "swiper/modules";
import { allsServiceItemsApi } from "@/config/apis";

const RelevantServices = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const swiperRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${allsServiceItemsApi}`);
        const data = await response.json();
        setServices(data);
        setTotalSlides(data.length);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching services data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

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
        {loading ? (
          <div
            aria-label="Loading..."
            role="status"
            class="flex justify-center items-center space-x-2"
          >
            <svg
              class="h-24 w-32 animate-spin stroke-gray-500"
              viewBox="0 0 256 256"
            >
              <line
                x1="128"
                y1="32"
                x2="128"
                y2="64"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="24"
              ></line>
              <line
                x1="195.9"
                y1="60.1"
                x2="173.3"
                y2="82.7"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="24"
              ></line>
              <line
                x1="224"
                y1="128"
                x2="192"
                y2="128"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="24"
              ></line>
              <line
                x1="195.9"
                y1="195.9"
                x2="173.3"
                y2="173.3"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="24"
              ></line>
              <line
                x1="128"
                y1="224"
                x2="128"
                y2="192"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="24"
              ></line>
              <line
                x1="60.1"
                y1="195.9"
                x2="82.7"
                y2="173.3"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="24"
              ></line>
              <line
                x1="32"
                y1="128"
                x2="64"
                y2="128"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="24"
              ></line>
              <line
                x1="60.1"
                y1="60.1"
                x2="82.7"
                y2="82.7"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="24"
              ></line>
            </svg>
            <span class="text-4xl font-medium text-gray-500">Loading...</span>
          </div>
        ) : (
          <Swiper
            ref={swiperRef}
            slidesPerView={4}
            spaceBetween={30}
            breakpoints={breakpoints}
            modules={[Autoplay]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            className="mySwiper"
          >
            {services.map((service) => (
              <SwiperSlide key={service.id}>
                <Link href={`/services/${service.slug.replace(/\s+/g, "")}`}>
                  <div className="w-full md:w-[340px] xl:w-[350px]  xxl:w-[280px] xll:w-[300px] 4xl:w-[330px] group shadow-lg rounded-md border border-[#E2E8F0]   cursor-pointer">
                    <div className="bg-[#E2E8F0]">
                      <Image
                        width={700}
                        height={700}
                        className="w-full h-[270px]"
                        src={service.image || "/assets/service1.jpeg"}
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
        )}
      </div>
    </div>
  );
};

export default RelevantServices;
