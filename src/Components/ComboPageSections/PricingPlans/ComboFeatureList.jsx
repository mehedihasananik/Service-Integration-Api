import React from "react";
import { RiCheckboxBlankCircleLine } from "react-icons/ri";

const ComboFeatureList = ({
  features,
  isDark,
  isCustomPlan = false,
  isPremiumPlus = false,
}) => (
  <div className="mt-9">
    {features.map((feature, index) => (
      <div key={index} className="flex justify-between items-center mt-4">
        <div
          className={`${
            isDark
              ? "text-white"
              : "text-blue-900 " +
                (!feature.active && !isCustomPlan ? "text-opacity-40" : "")
          }`}
        >
          {typeof feature === "string" ? feature : feature.name}
        </div>
        {!isCustomPlan &&
          (feature.active ? (
            <div
              className={`flex items-center justify-center ${
                isPremiumPlus ? "w-6 h-6 rounded-full " : ""
              }`}
            >
              {isPremiumPlus ? (
                <img src="/assets/Check circle.png" />
              ) : (
                <img src="/assets/Check circle1.png" />
              )}
            </div>
          ) : (
            <div
              className={`flex items-center justify-center ${
                isPremiumPlus ? "w-6 h-6 rounded-full bg-white" : ""
              }`}
            >
              <RiCheckboxBlankCircleLine className="text-gray-400" />
            </div>
          ))}
      </div>
    ))}
  </div>
);

export default ComboFeatureList;
