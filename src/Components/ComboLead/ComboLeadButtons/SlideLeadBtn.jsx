"use client";
import React from "react";

const SlideLeadBtn = ({ onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`font-Inter text-[16px] font-semibold bg-[#FF693B] leading-[20px]  border cursor-pointer hover:border-[#FF693B] text-white hover:bg-[#fff] hover:text-[#FF693B] py-3 px-4 md:py-4 md:px-[1.7%] flex justify-center items-center rounded-md transition-all duration-300 ${className}`}
    >
      Book an appointment
    </button>
  );
};

export { SlideLeadBtn };
