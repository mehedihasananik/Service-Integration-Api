"use client";
import React, { useState } from "react";
import ComboFeatureList from "./ComboFeatureList";
import { TiArrowRight } from "react-icons/ti";

const ComboPlanCard = ({ plan }) => {
  const [totalPrice, setTotalPrice] = useState(0);

  const handleTotalPriceChange = (newTotalPrice) => {
    setTotalPrice(newTotalPrice);
  };

  // Calculate discounted price (10% off)
  const originalPrice =
    plan.title === "Custom Plan" ? totalPrice : parseFloat(plan.price);
  const discountPrice =
    plan.title === "Custom Plan" ? totalPrice : parseFloat(plan.discountP);

  return (
    <div
      key={plan.title}
      className={`flex flex-col px-6 py-6 rounded-lg w-[350px] md:w-[430px]  ${
        plan.isDark
          ? "bg-[#0A2C8C] text-white"
          : "bg-white text-[#0A2C8C] shadow-sm border border-slate-200"
      }`}
    >
      <div
        className={`text-lg ${
          plan.isDark
            ? "text-white font-bold md:text-[18px]"
            : "text-[#0A2C8C] font-bold md:text-[18px]"
        }`}
      >
        {plan.title}
      </div>
      <div className="flex gap-2 items-center mt-4">
        <img src={plan.iconSrc} alt="" className="w-10" />
        <div className="flex flex-1 gap-3 items-center">
          <div className="md:text-[40px] font-bold">
            {`$${originalPrice.toFixed(2)}`}
          </div>
          <div className="text-sm text-opacity-40 line-through">
            {`$${discountPrice.toFixed(2)}`}
          </div>
        </div>
      </div>
      <div className="mt-4">{plan.description}</div>
      <hr className="mt-6 divide-y divide-slate-600 " />
      <ComboFeatureList
        features={plan.features}
        isDark={plan.isDark}
        isCustomPlan={plan.title === "Custom Plan"}
        isPremiumPlus={plan.title === "Premium+ Plan"}
        plan={plan}
        onTotalPriceChange={handleTotalPriceChange} // Pass price update handler
      />
      <button
        className={`mt-9 p-3 w-full rounded flex justify-center items-center text-[16px] font-medium ${
          plan.isDark
            ? "bg-white text-blue-900"
            : "bg-blue-900 text-white shadow-sm"
        }`}
      >
        <span>Place Order</span>{" "}
        <span>
          <TiArrowRight className="text-[20px]" />
        </span>
      </button>
    </div>
  );
};

export default ComboPlanCard;
