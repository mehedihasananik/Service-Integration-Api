"use client";
import React, { useState, useEffect } from "react";
import SalesHeader1 from "./SalesHeader1";
import SalesHeroSection1 from "./SalesHeroSection1";
import SalesHeroSection from "./SalesHeroSection";

const HeaderHeroSection = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust the duration as needed

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex flex-col justify-center items-center h-[50vh] md:h-[100vh] lg:h-full bg-[#01297D] text-white gap-y-5">
        <div className=" ">
          <div className="flex justify-center gap-x-4 ">
            <span className="font-Oswald capitalize text[30px] lg:text-[114px] font-bold lg:leading-[130px]">
              {" "}
              WEBSITE
            </span>{" "}
          </div>{" "}
          <div className=" capitalize flex lg:gap-x-8 text[30px] lg:text-[114px] font-bold lg:leading-[130px] relative -left-[5px]">
            <span className="font-Oswald ">COMBO</span>{" "}
            <span className="font-Oswald ">OFFER</span>
          </div>
        </div>
        <div className="spinner border-t-4 border-white rounded-full w-16 h-16 animate-spin"></div>
      </div>
    );
  }

  return (
    <>
      <SalesHeader1 />
      <div className="hidden xl:block">
        <SalesHeroSection1 />
      </div>
      <div className="xl:hidden">
        <SalesHeroSection />
      </div>
    </>
  );
};

export default HeaderHeroSection;
