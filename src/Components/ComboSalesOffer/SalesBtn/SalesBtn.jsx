"use client";
import React from "react";
import { Link } from "react-scroll";

// Smooth scroll function

const SalesPricingBtn = ({ className }) => {
  return (
    <Link
      to="pricing"
      smooth={true}
      duration={1500}
      className={`${className} font-Inter text-[16px] leading-[42px] font-normal bg-[#FF693B] border cursor-pointer hover:border-[#FF693B] text-white hover:bg-[#fff] hover:text-[#FF693B] py-4 px-4 md:py-3 md:px-[1.7%] flex justify-center items-center rounded-full w-[180px] h-[43px] transition-all duration-300`}
    >
      See Pricing
    </Link>
  );
};

// Exporting both buttons
export { SalesPricingBtn };
