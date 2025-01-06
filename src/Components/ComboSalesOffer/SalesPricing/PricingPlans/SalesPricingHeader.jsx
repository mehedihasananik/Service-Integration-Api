import React from "react";

const SalesPricingHeader = () => (
  <div className="text-center pt-[5%] lg:pt-[3%]">
    <div className="h-[10px]" id="pricing"></div>
    <div className="flex items-center justify-center lg:py-4 gap-x-3 text-[14px] text-[#fff] font-semibold font-Inter lg:leading-[20px] ">
      <span> Custom</span>
      <div className="relative -top-4">
        <img src="/assets/salesCrown.svg" />
      </div>
      <span> Combo</span>
    </div>
    <h2 className="text-[24px] md:text-[48px] font-bold text-[#FFF] font-Inter lg:leading-[52px]">
      Friendly Pricing Plans
    </h2>
  </div>
);

export default SalesPricingHeader;
