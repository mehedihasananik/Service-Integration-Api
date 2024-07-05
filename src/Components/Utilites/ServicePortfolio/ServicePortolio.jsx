"use client";
import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import Image from "next/image";
import { HiArrowSmallRight } from "react-icons/hi2";
import Link from "next/link";
import { Autoplay } from "swiper/modules";
import { sevice_portfolioApi } from "@/config/apis";

const ServicePortolio = () => {
  const [portfolios, setPortfolios] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://admin.envobyte.com/api/sevice_portfolio`
      );
      const data = await response.json();
      setPortfolios(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const swiperRef = useRef(null);

  const breakpoints = {
    // when window width is >= 1024px (lg)
    1920: {
      slidesPerView: 2.5,
      spaceBetween: 30,
    },
    1336: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1280: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    // when window width is >= 768px (md)
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 320px (sm)
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  };

  const truncateText = (text, maxWords) => {
    const words = text.split(" ");
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(" ") + "...";
    }
    return text;
  };
  console.log(portfolios);

  return (
    <div className="px-[5%] md:px-[5%] lg:px-0">
      <Swiper
        ref={swiperRef}
        slidesPerView={3}
        spaceBetween={30}
        breakpoints={breakpoints}
        className="mySwiper "
        modules={[Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
      >
        {portfolios.map((portfolio) => {
          // console.log(portfolio);
          return (
            <SwiperSlide key={portfolio.id} className="">
              <Link href={`/portfolio/${portfolio.slug}`}>
                <div className="group ">
                  <div className="w-[630px]  portfolio-bgHover cursor-pointer xxl:space-x-4 4xl:space-x-0 flex flex-col lg:flex-row xll:justify-between bg-[#FFFFFF] rounded-xl border border-[#CBD5E1]">
                    <div>
                      <Image
                        width={800}
                        height={262}
                        className="lg:w-[340px] 4xl:w-[332px]  lg:h-[450px] 4xl:h-[420px] object-cover md:rounded-l"
                        src={portfolio?.image}
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col justify-center items-center p-3 md:py-0 xll:px-8 2xl:px-12 4xl:px-8">
                      <div className="text-center h-[300px]">
                        <h4 className="text-[14px] text-[#999999] pt-3 pb-3 md:pt-0 md:pb-6 portfolio-textHover">
                          {portfolio?.service_name[0]?.service_name}
                        </h4>
                        <h3 className="text-[16px] font-bold font-Raleway text-[#333333] portfolio-textHover">
                          {portfolio?.heading}
                        </h3>
                        <p className="w-[250px] text-justify text-[14px] text-[#666666] py-3 portfolio-textHover">
                          {portfolio.text.slice(0, 400)}...
                        </p>
                      </div>
                      <div className="group flex justify-center items-center gap-2 text-[#FF693B] font-bold mt-10 portfolio-textHover pb-6 lg:pb-0">
                        <button className="text-[14px]">Read More</button>
                        <span className="w-[19px] font-bold">
                          <HiArrowSmallRight className="text-xl" />
                        </span>
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
  );
};

export default ServicePortolio;
