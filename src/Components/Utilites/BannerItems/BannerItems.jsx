"use client";

import React from "react";
import Image from "next/image";
import GlobalButtonColored from "../GlobalButton/GlobalButtonColored";
import GlobalButtonHovered from "../GlobalButton/GlobalButtonHovered";

const BannerItems = ({ banner }) => {
  const smoothScroll = (e, target) => {
    e.preventDefault();
    const element = document.querySelector(target);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between animate-fade-in space-y-3 md:space-y-0 md:gap-11 pt-5 xl:pt-10 pb-10">
      <div className="flex flex-col">
        <h2 className="lg:w-[450px] font-Raleway font-bold text-headingBase md:text-headingMedium xl:text-headingLarge xl:leading-[63.98px]  mx-auto xs:mx-0  lg:pt-14 xs:px-3 md:px-0">
          Creative Design <span className="line-break"></span> and{" "}
          <span className="custom-rotate">Development </span> <br />
          for your product
        </h2>
        <p className="w-[300px] xs:w-full lg:w-[450px] mx-auto text-paragraph  line-clamp-5 xs:px-3 md:px-0 pt-4">
          {banner[0].details}
        </p>
        <div className="flex flex-col xs:flex-row  justify-center lg:justify-start gap-4 md:gap-6 py-6">
          <GlobalButtonColored
            path="#projectDetails"
            title="Get a Quote"
            className="btn btn-primary w-[45%] md:w-[50%] text-center"
            onClick={(e) => smoothScroll(e, "#projectDetails")}
          />
          <GlobalButtonHovered
            path="/services"
            title="Our Services"
            className="w-[45%] md:w-[50%] btn btn-secondary text-center"
          />
        </div>
      </div>
      <div className="relative w-full max-w-[742px] aspect-[742/554]">
        <Image
          src={banner[0].banner_image}
          alt={banner[0].alt_text || "Banner image"}
          fill // Use fill for responsive images
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 742px" // Define sizes for responsive loading
          style={{ objectFit: "cover" }} // Ensures the image covers the container without distortion
          quality={80}
        />
      </div>
    </div>
  );
};

export default BannerItems;
