"use client";
import Container from "@/Components/Container/Container";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/autoplay";

const breakpoints = {
  320: { slidesPerView: 4, spaceBetween: 10 },
  768: { slidesPerView: 4, spaceBetween: 20 },
  1024: { slidesPerView: 4, spaceBetween: 10 },
  1280: { slidesPerView: 5, spaceBetween: 30 },
  1336: { slidesPerView: 5, spaceBetween: 50 },
  1920: { slidesPerView: 6, spaceBetween: 10 },
  2500: { slidesPerView: 6, spaceBetween: 50 },
};

const ComboBrands = ({ brands }) => {
  const duplicatedBrands = [...brands, ...brands];
  return (
    <Container>
      <div>
        <h2 className="text-[24px] text-[#5168A7] text-center font-bold py-8 md:py-15">
          Trusted by Top Brands
        </h2>
      </div>
      <div>
        <div className="overflow-hidden md:px-[10%]">
          <Swiper
            slidesPerView={6}
            slidesPerGroup={1}
            spaceBetween={200}
            breakpoints={breakpoints}
            modules={[Autoplay]}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            className="mySwiper space-x-4"
          >
            {duplicatedBrands.map((brand, index) => (
              <SwiperSlide
                key={index}
                className="flex justify-end items-center "
              >
                <div className="flex justify-center items-center border shadow-md  rounded-lg w-full bg-white">
                  <Image
                    width={101}
                    height={70}
                    src={brand.logo}
                    alt={`Brand logo`}
                    className="h-[70px] rounded-lg"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </Container>
  );
};

export default ComboBrands;
