"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import GlobalButtonColored from "../Utilites/GlobalButton/GlobalButtonColored";

const ServiceExploreContents = ({ services }) => {
  const swiperRef = useRef(null);

  const breakpoints = {
    1920: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    1536: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    1440: {
      slidesPerView: 3.8,
      spaceBetween: 10,
    },
    1366: {
      slidesPerView: 3.5,
      spaceBetween: 10,
    },
    1280: {
      slidesPerView: 3.4,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 2.8,
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
    <div className="max-w-[1600px]  mx-auto px-[6%] md:px-[4%]">
      <div className="relative pt-0 ">
        <div className="text-center pb-[5%] md:pb-[2%]">
          <h1 className="headings md:text-[40px]">Explore Our Services</h1>
        </div>
        <button
          onClick={() => swiperRef.current?.swiper.slidePrev()}
          className="absolute left-0 lg:-left-10 2xl:-left-10 3xl:-left-20 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-primary text-white shadow-md hover:bg-secondary transition-all duration-300 opacity-100"
          aria-label="Previous slide"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={() => swiperRef.current?.swiper.slideNext()}
          className="absolute right-0 lg:-right-10 2xl:-right-5 3xl:-right-12 top-1/2 -translate-y-1/2 z-10  w-10 h-10 flex items-center justify-center rounded-full bg-primary text-white shadow-md hover:bg-secondary transition-all duration-300 opacity-100"
          aria-label="Next slide"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        <Swiper
          ref={swiperRef}
          slidesPerView={3}
          slidesPerGroup={1}
          spaceBetween={30}
          breakpoints={breakpoints}
          modules={[Autoplay, Navigation]}
          // autoplay={{
          //   delay: 3000,
          //   disableOnInteraction: false,
          // }}
          className=" mx-auto"
        >
          {services.map((service) => (
            <SwiperSlide key={service.id} className="swiper-slide-card">
              <Link href={`/services/${service.slug}`}>
                <div className="w-[330px] h-[550px] group shadow-lg rounded-md border border-[#E2E8F0] cursor-pointer hover:bg-[#FF693B] hover:text-white">
                  <div className="flex flex-col h-full">
                    <div className="bg-[#E2E8F0] transition-all duration-300">
                      <div className="relative w-full max-w-[330px] aspect-[330/305] overflow-hidden rounded-t-md">
                        <Image
                          src={service?.image}
                          fill
                          sizes="(max-width: 768px) 100vw, 330px"
                          style={{ objectFit: "cover" }}
                          quality={80}
                          className="rounded-t-md"
                          alt={service?.alt_text || "Service image"}
                        />
                      </div>
                    </div>
                    <div className="px-5 h-[155px] group-hover:bg-[#FF693B] transition-all duration-300 flex-grow">
                      <h3 className="line-clamp-1 text-headingSmall md:text-subheading font-bold text-blackish font-Raleway pt-5 pb-2 group-hover:text-white transition-all duration-300">
                        {service.title}
                      </h3>
                      <p className="text-paragraphSmall line-clamp-5 text-slateBlueGray group-hover:text-white transition-all duration-300">
                        {service?.service_summery}
                      </p>
                    </div>
                    <div className="flex items-center justify-between px-5 py-5 group-hover:bg-[#FF693B] transition-all duration-300 group-hover:rounded-b-md">
                      <span className="font-bold text-paragraph text-[#1E293B] group-hover:text-white">
                        Start From
                      </span>
                      <div className="flex items-center space-x-[1px] font-Raleway text-paragraphLarge font-bold text-secondary group-hover:text-white transition-all duration-200">
                        <span>$</span>
                        <span>{service.start_price}</span>
                      </div>
                      <button className="btn-service">View</button>
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="text-center mt-10 mb-6   md:mt-14 md:mb-8">
          <GlobalButtonColored
            path={"/services"}
            title={"View All Services"}
            className="btn btn-primary md:w-[50%] text-center "
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceExploreContents;
