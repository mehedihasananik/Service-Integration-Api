"use client";

import React from "react";
import Image from "next/image";
import GlobalButtonColored from "../GlobalButton/GlobalButtonColored";
import GlobalButtonHovered from "../GlobalButton/GlobalButtonHovered";

const BannerItems = ({ banner }) => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between animate-fade-in space-y-3 md:space-y-0 md:gap-11 pt-5 xl:pt-10 pb-10">
      <div className="flex flex-col">
        <h3 className="lg:w-[450px] font-Raleway font-bold text-[30px] md:text-[40px] xl:text-[48px] xl:leading-[63.98px]  mx-auto xs:mx-0  lg:pt-14 xs:px-3 md:px-0">
          Creative Design <span className="line-break"></span> and{" "}
          <span className="custom-rotate">Development </span> <br />
          for your product
        </h3>
        <p className="w-[300px] xs:w-full lg:w-[450px]  mx-auto  pt-4 text-[16px] xs:px-3 md:px-0">
          {banner[0].details}
        </p>
        <div className="flex flex-col xs:flex-row  justify-center lg:justify-start gap-4 md:gap-6 py-6">
          <GlobalButtonColored
            path={"#projectDetails"}
            title={"Get a Quote"}
            className="btn btn-primary md:w-[50%] text-center "
          />
          <GlobalButtonHovered
            path={"/services"}
            title={"Our Services"}
            className="btn btn-secondary md:w-[50%] text-center"
          />
        </div>
      </div>

      <div className="relative w-full max-w-[742px] aspect-[742/554]">
        <Image
          src={banner[0].banner_image}
          layout="fill"
          objectFit="contain"
          quality={80}
          alt="banner image"
        />
      </div>
    </div>
  );
};

export default BannerItems;
