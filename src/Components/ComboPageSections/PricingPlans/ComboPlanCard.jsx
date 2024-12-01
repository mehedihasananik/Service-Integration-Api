"use client";
import React from "react";
import ComboFeatureList from "./ComboFeatureList";

const ComboPlanCard = ({ plan }) => (
  <div
    key={plan.title}
    className={`flex flex-col px-6 py-8 rounded-lg min-w-[240px] w-[430px]  ${
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
    <div className="flex gap-2 items-center mt-9">
      <img src={plan.iconSrc} alt="" className="w-10" />
      <div className="flex flex-1 gap-3">
        <div className="text-4xl">{`$${plan.price}`}</div>
        {plan.originalPrice && (
          <div className="text-sm text-opacity-40 line-through">{`$${plan.originalPrice}`}</div>
        )}
      </div>
    </div>
    <div className="mt-9">{plan.description}</div>
    <hr className="mt-9 divide-y divide-slate-700 " />
    <ComboFeatureList
      features={plan.features}
      isDark={plan.isDark}
      isCustomPlan={plan.title === "Custom Plan"}
      isPremiumPlus={plan.title === "Premium+ Plan"}
    />
    <button
      className={`mt-9 p-3 w-full rounded ${
        plan.isDark
          ? "bg-white text-blue-900"
          : "bg-blue-900 text-white shadow-sm"
      }`}
    >
      Place Order
    </button>
  </div>
);

export default ComboPlanCard;
