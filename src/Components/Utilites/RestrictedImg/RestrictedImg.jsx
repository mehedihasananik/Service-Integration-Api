"use client";
import React from "react";

const RestrictedImg = (portfolio) => {
  console.log(portfolio.image);
  return (
    <div>
      <img
        className="md:w-full md:h-[auto]"
        alt="image"
        src={portfolio.image}
      />
      <h3 className="text-gray-500 text-[18px] md:text-[20px] font-Raleway font-semibold text-center py-4 md:py-5 md:pb-8">
        {portfolio.caption_text}
      </h3>
    </div>
  );
};

export default RestrictedImg;
