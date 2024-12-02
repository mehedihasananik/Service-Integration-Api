"use client";
import Container from "@/Components/Container/Container";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/autoplay";

const breakpoints = {
  320: { slidesPerView: 3, spaceBetween: 10 },
  768: { slidesPerView: 4, spaceBetween: 20 },
  1024: { slidesPerView: 4, spaceBetween: 10 },
  1280: { slidesPerView: 5, spaceBetween: 30 },
  1336: { slidesPerView: 5, spaceBetween: 50 },
  1920: { slidesPerView: 6, spaceBetween: 10 },
  2500: { slidesPerView: 5, spaceBetween: 50 },
};

const demoBrands = [
  {
    src: "/assets/logo1.png",
    hoverSrc: "/assets/logo1-hover.png",
    alt: "Brand 1 Logo",
  },
  {
    src: "/assets/logo2.png",
    hoverSrc: "/assets/logo2-hover.png",
    alt: "Brand 2 Logo",
  },
  {
    src: "/assets/logo3.png",
    hoverSrc: "/assets/logo3-hover.png",
    alt: "Brand 3 Logo",
  },
  {
    src: "/assets/logo4.png",
    hoverSrc: "/assets/logo4-hover.png",
    alt: "Brand 4 Logo",
  },
  {
    src: "/assets/logo5.png",
    hoverSrc: "/assets/logo5-hover.png",
    alt: "Brand 5 Logo",
  },
];

const ComboBrands = ({ brands }) => {
  const duplicatedBrands = [...demoBrands, ...demoBrands];

  return (
    <Container>
      <div>
        <h2 className="text-[20px] md:text-[24px] text-[#5168A7] text-center font-bold py-8 md:py-15">
          Trusted by Top Brands
        </h2>
      </div>
      <div>
        <div className="overflow-hidden md:px-[10%]">
          <Swiper
            slidesPerView={5}
            slidesPerGroup={1}
            spaceBetween={200}
            breakpoints={breakpoints}
            className="mySwiper space-x-4"
          >
            {duplicatedBrands.map((brand, index) => (
              <SwiperSlide
                key={index}
                className="flex justify-center items-center"
              >
                <div className="relative w-[147px] h-[72px] group">
                  {/* Default image */}
                  <Image
                    width={147}
                    height={72}
                    src={brand.src}
                    alt={brand.alt}
                    className="absolute top-0 left-0 w-full h-full rounded-lg transition-all duration-300 group-hover:opacity-0"
                  />
                  {/* Hover image */}
                  <Image
                    width={147}
                    height={72}
                    src={brand.hoverSrc}
                    alt={`Hover ${brand.alt}`}
                    className="absolute top-0 left-0 w-full h-full rounded-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100"
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
