"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import "../../../app/globals.css";
import { Autoplay } from "swiper/modules";

const BrandCarousel = ({ brands }) => {
  // declaring the loading & slider states states

  const duplicatedBrands = [...brands, ...brands];

  // slider breakpoints
  const breakpoints = {
    2500: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
    1920: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
    1336: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
    1280: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    320: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
  };

  return (
    <div className="overflow-hidden">
      <div className="">
        {/* right side sliders images */}
        <Swiper
          slidesPerView={5}
          slidesPerGroup={1}
          spaceBetween={200}
          breakpoints={breakpoints}
          modules={[Autoplay]}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          className="mySwiper space-x-4"
        >
          {duplicatedBrands.map((brand, index) => {
            return (
              <SwiperSlide key={index} className="flex justify-end">
                <Image
                  key={brand.id}
                  width={500}
                  height={500}
                  className="w-[60px] h-[50px] md:w-[101px] md:h-[70px] "
                  src={brand.logo}
                  alt=""
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default BrandCarousel;
