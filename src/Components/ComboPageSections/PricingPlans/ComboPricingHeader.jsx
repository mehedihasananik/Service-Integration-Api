import React from "react";

const ComboPricingHeader = () => (
  <div className="text-center">
    <div className="flex items-center py-4 gap-x-3 text-[14px] text-[#6D758F] font-bold">
      <span> Custom</span>
      <div className="relative -top-4">
        <img src="/assets/crown.png" />
      </div>
      <span> Combo</span>
    </div>
    <h2 className="text-5xl font-bold text-[#0A2C8C]">
      Friendly <span className="text-orange-500">Pricing Plans</span>
    </h2>
    <p className="mt-6 text-[16px] text-[#787878] w-[75%]">
      Our limited-time Combo packages are designed to jumpstart your brand with
      exceptional value:
    </p>
  </div>
);

export default ComboPricingHeader;
