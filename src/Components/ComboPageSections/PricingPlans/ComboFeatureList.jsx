"use client";
import React, { useState } from "react";
import CustomDropdown from "./CustomDropdown";

const ComboFeatureList = ({
  features,
  isDark,
  isCustomPlan = false,
  isPremiumPlus = false,
  plan,
  onTotalPriceChange,
  onTotalDiscountChange,
  onOptionChange, // Added this prop to handle option change
}) => {
  const [selectedOption, setSelectedOption] = useState({});
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleOptionChange = (featureName, option) => {
    const feature = features.find((f) => f.name === featureName);

    // Update selected options
    setSelectedOption((prev) => {
      const newSelectedOptions = {
        ...prev,
        [featureName]: {
          option,
          price: parseFloat(
            feature.options.find((opt) => opt.Option === option)?.Price || "0"
          ),
          discountP: parseFloat(
            feature.options.find((opt) => opt.Option === option)?.discountP ||
              "0"
          ),
        },
      };

      // Calculate total price
      let newTotalPrice = Object.values(newSelectedOptions).reduce(
        (total, item) => total + (item.price || 0),
        0
      );

      // Handle WordPress Website and Content logic
      const websiteOption = newSelectedOptions["WordPress Website"];
      const contentOption = newSelectedOptions["Content"];

      if (contentOption?.option === "Yes" && websiteOption?.option) {
        switch (websiteOption.option) {
          case "4 pages":
          case "6 pages":
          case "8 pages":
            newTotalPrice += 80; // Add price for 4-8 pages
            break;
          case "10 pages":
          case "12 pages":
          case "14 pages":
            newTotalPrice += 120; // Add price for 10-14 pages
            break;
          case "16 pages":
          case "18 pages":
          case "20 pages":
            newTotalPrice += 150; // Add price for 16-20 pages
            break;
          default:
            break;
        }
      }

      // Calculate total discount
      let newTotalDiscountPrice = Object.values(newSelectedOptions).reduce(
        (total, item) => total + (item.discountP || 0),
        0
      );

      if (contentOption?.option === "Yes" && websiteOption?.option) {
        switch (websiteOption.option) {
          case "4 pages":
          case "6 pages":
          case "8 pages":
            newTotalDiscountPrice += 120; // Add discount for 4-8 pages
            break;
          case "10 pages":
          case "12 pages":
          case "14 pages":
            newTotalDiscountPrice += 180; // Add discount for 10-14 pages
            break;
          case "16 pages":
          case "18 pages":
          case "20 pages":
            newTotalDiscountPrice += 250; // Add discount for 16-20 pages
            break;
          default:
            break;
        }
      }

      // Update totals
      onTotalPriceChange(newTotalPrice);
      onTotalDiscountChange(newTotalDiscountPrice);

      return newSelectedOptions;
    });
  };

  const toggleDropdown = (featureName) => {
    setOpenDropdown((prev) => (prev === featureName ? null : featureName));
  };

  return (
    <div
      className={`${
        plan.title === "Custom Plan"
          ? "h-[380px] md:h-[335px]"
          : "h-[310px] md:h-[335px]"
      } mt-4`}
    >
      {features.map((feature, index) => (
        <div
          key={index}
          className={`flex justify-between items-center ${
            plan.title === "Premium Plan" || plan.title === "Premium+ Plan"
              ? "mt-3"
              : "mt-3 md:mt-1 border-b border-b-gray-100"
          }`}
        >
          <div
            className={`whitespace-nowrap font-semibold text-[14px] md:text-[16px] font-Inter ${
              isDark
                ? "text-white"
                : "text-[#0A2C8C]" +
                  (!feature.active && !isCustomPlan ? " text-opacity-40" : "")
            } ${!feature.active && !isCustomPlan ? "text-gray-500" : ""}`}
          >
            {typeof feature === "string" ? feature : feature.name}
          </div>

          {feature.options ? (
            <div className="flex items-center">
              <CustomDropdown
                options={feature.options.map((option) => option.Option)}
                placeholder={
                  selectedOption[feature.name]
                    ? selectedOption[feature.name].option
                    : ""
                }
                onSelect={(selectedOpt) => {
                  handleOptionChange(feature.name, selectedOpt);
                }}
                isOpen={openDropdown === feature.name}
                toggleDropdown={() => toggleDropdown(feature.name)}
              />
            </div>
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
                className={`flex items-center justify-center pl-[16px] ${
                  "isPremiumPlus" ? " rounded-full bg-white" : ""
                }`}
              >
                <img src="/assets/Check circleR.png" alt="" />
              </div>
            )
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default ComboFeatureList;
