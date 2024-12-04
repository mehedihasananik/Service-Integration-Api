import React from "react";

const ComboPricingHeader = () => (
  <div className="text-center">
    <div className="flex items-center justify-center py-4 gap-x-3 text-[14px] text-[#6D758F] font-semibold font-Inter ">
      <span> Custom</span>
      <div className="relative -top-4">
        <img src="/assets/crown.png" />
      </div>
      <span> Combo</span>
    </div>
    <h2
      id="pricing"
      className="text-[30px] md:text-[48px] font-bold text-[#0A2C8C] font-Inter"
    >
      Friendly <span className="text-orange-500">Pricing Plans</span>
    </h2>
    <div className="flex justify-center">
      {" "}
      <p className="mt-2 text-[16px] text-[#787878] w-[75%] combo_des font-medium">
        Our limited-time Combo packages are designed to jumpstart your brand
        with exceptional value:
      </p>
    </div>
  </div>
);

export default ComboPricingHeader;
