"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import GlobalButtonColored from "../GlobalButton/GlobalButtonColored";
import GlobalButtonHovered from "../GlobalButton/GlobalButtonHovered";

const BannerItems = ({ banner }) => {
  // console.log(banner);
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between space-y-3 md:space-y-0 md:gap-11 pt-5 xl:pt-10 pb-10 animate-fade-in">
      <div className="flex flex-col">
        <h3 className="font-Raleway font-bold text-[30px] md:text-[40px] xl:text-[48px] xl:leading-[63.98px] lg:w-[450px] lg:pt-14 xs:px-3 md:px-0">
          Creative Design <span className="line-break"></span> and{" "}
          <span className="custom-rotate">Development </span> <br />
          for your product
        </h3>
        <p className="w-full lg:w-[450px] pt-4 text-[16px] xs:px-3 md:px-0">
          {banner[0].details}
        </p>
        <div className="flex gap-6 py-6 justify-center lg:justify-start">
          <GlobalButtonColored
            path={"#"}
            title={"Book an Appointment"}
            className="btn btn-primary"
          />
          <GlobalButtonHovered
            path={"#projectDetails"}
            title={" Get a Quote"}
            className="btn btn-secondary"
          />
        </div>
      </div>
      <div>
        <Image
          className="md:w-[742px] md:h-[554px]"
          src={banner[0].banner_image}
          width={742}
          height={554}
          quality={100}
          priority
          alt="banner image"
        />
      </div>
    </div>
  );
};

export default BannerItems;
