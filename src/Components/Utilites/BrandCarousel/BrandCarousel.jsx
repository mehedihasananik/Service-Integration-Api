"use client";
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
  1920: { slidesPerView: 5, spaceBetween: 10 },
  2500: { slidesPerView: 5, spaceBetween: 50 },
};

const BrandCarousel = ({ brands }) => {
  const duplicatedBrands = [...brands, ...brands];

  return (
    <div className="overflow-hidden">
      <Swiper
        slidesPerView={5}
        slidesPerGroup={1}
        spaceBetween={200}
        breakpoints={breakpoints}
        modules={[Autoplay]}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        className="mySwiper space-x-4"
      >
        {duplicatedBrands.map((brand, index) => (
          <SwiperSlide key={index} className="flex justify-end items-center ">
            <Image
              width={101}
              height={70}
              src={brand.logo}
              alt={`Brand logo`}
              className="h-[70px]"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BrandCarousel;
