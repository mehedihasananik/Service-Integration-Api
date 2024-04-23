"use client";
import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { HiArrowLeft } from "react-icons/hi";
import { HiArrowRight } from "react-icons/hi";

// import required modules
import { Navigation } from "swiper/modules";
import Container from "@/Components/Container/Container";
import Image from "next/image";
import { HiArrowSmallRight } from "react-icons/hi2";
import Link from "next/link";
import API_ROUTES from "@/app/api/confiq";

const ServicePortolio = () => {
  const [portfolios, setPortfolios] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch(`${API_ROUTES.route}/sevice_portfolio`);
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
  return (
    <div className="">
      <Swiper
        ref={swiperRef}
        slidesPerView={3}
        spaceBetween={30}
        breakpoints={breakpoints}
        className="mySwiper "
      >
        {portfolios.map((portfolio) => {
          const { service_name } = portfolio;

          return (
            <SwiperSlide key={portfolio.id} className="">
              <Link href={`/portfolio/${portfolio.slug}`}>
                <div className="  flex flex-col md:flex-row gap-10 justify-between pt-10 pb-5 ">
                  {/* 1st row 1st column card */}
                  <div className="group flex flex-col xl:flex-row justify-between bg-[#FFFFFF] rounded-xl border border-[#CBD5E1] ">
                    <div>
                      <Image
                        width={800}
                        height={262}
                        className="w-full lg:w-[350.45px] h-[420px]"
                        src={portfolio.image}
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col justify-center items-center p-3 md:py-0 2xl:px-10 portfolio-bgHover">
                      <div className="text-center">
                        <h4 className="text-[14px] text-[#999999] pt-3 pb-3 md:pt-0 md:pb-6 portfolio-textHover">
                          {service_name[0].service_name}
                        </h4>
                        <h3 className="text-[16px] font-bold font-Raleway text-[#333333] portfolio-textHover">
                          {portfolio.heading}
                        </h3>
                        <p className="w-[250px] text-[14px] text-[#666666] py-3 portfolio-textHover">
                          {portfolio.text}
                        </p>
                      </div>
                      <div className="group flex justify-center items-center gap-2 text-[#FF693B] font-bold mt-5 portfolio-textHover pb-6 lg:pb-0">
                        {" "}
                        <button className=" text-[14px]  ">Read More </button>
                        <span className="w-[19px] font-bold">
                          <HiArrowSmallRight className="text-xl " />
                        </span>{" "}
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
