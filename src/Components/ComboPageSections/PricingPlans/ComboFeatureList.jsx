"use client";

import React, { useState } from "react";
import { RiCheckboxBlankCircleLine } from "react-icons/ri";
import CustomDropdown from "./CustomDropdown";

const ComboFeatureList = ({
  features,
  isDark,
  isCustomPlan = false,
  isPremiumPlus = false,
}) => {
  const [selectedOption, setSelectedOption] = useState({});

  const handleOptionChange = (featureName, option) => {
    setSelectedOption((prev) => ({
      ...prev,
      [featureName]: option,
    }));
  };

  return (
    <div className="h-[380px] mt-8">
      {features.map((feature, index) => (
        <div key={index} className="flex justify-between items-center mt-2">
          <div
            className={`whitespace-nowrap ${
              isDark
                ? "text-white"
                : "text-blue-900 " +
                  (!feature.active && !isCustomPlan ? "text-opacity-40" : "")
            }`}
          >
            {typeof feature === "string" ? feature : feature.name}
          </div>

          {feature.options ? (
            <CustomDropdown
              options={feature.options.map((option) => option.Option)}
              placeholder={selectedOption[feature.name] || ""}
              onSelect={(selectedOpt) =>
                handleOptionChange(feature.name, selectedOpt)
              }
            />
          ) : !isCustomPlan ? (
            feature.active ? (
              <div
                className={`flex items-center justify-center ${
                  isPremiumPlus ? "w-6 h-6 rounded-full " : ""
                }`}
              >
                {isPremiumPlus ? (
                  <img
                    src="/assets/Check circle.png"
                    className="text-black"
                    style={{ background: "none" }}
                  />
                ) : (
                  <img
                    src="/assets/Check circle1.png"
                    className="text-black"
                    style={{ background: "none" }}
                  />
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
            )
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default ComboFeatureList;
