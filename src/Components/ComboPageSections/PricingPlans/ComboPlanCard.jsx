import React from "react";
import ComboFeatureList from "./ComboFeatureList";
import { TiArrowRight } from "react-icons/ti";

const ComboPlanCard = ({ plan }) => (
  <div
    key={plan.title}
    className={`flex flex-col px-6 py-6 rounded-lg min-w-[240px] w-[430px]  ${
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
      <div className="flex flex-1 gap-3">
        <div className="md:text-[40px] font-bold">{`$${plan.price}`}</div>
        {plan.originalPrice && (
          <div className="text-sm text-opacity-40 line-through ">{`$${plan.originalPrice}`}</div>
        )}
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

export default ComboPlanCard;
