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
        <div className="flex flex-col xs:flex-row  justify-center lg:justify-start gap-6 py-6">
          <GlobalButtonColored
            path={"#"}
            title={"Book an Appointment"}
            className="btn btn-primary w-full text-center "
          />
          <GlobalButtonHovered
            path={"#projectDetails"}
            title={" Get a Quote"}
            className="btn btn-secondary w-full text-center"
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
