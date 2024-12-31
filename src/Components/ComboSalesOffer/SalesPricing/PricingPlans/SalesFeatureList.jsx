"use client";
import React, { useState } from "react";
import SalesDropdown from "./SalesDropdown";

const SalesFeatureList = ({
  features,
  isDark,
  isCustomPlan = false,
  isPremiumPlus = false,
  plan,
  onTotalPriceChange,
  onTotalDiscountChange,
  onOptionChange,
  selectedOption: parentSelectedOption,
  errorMessage,
  totalPrice,
}) => {
  const [selectedOption, setSelectedOption] = useState({});
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleOptionChange = (featureName, option) => {
    const feature = features.find((f) => f.name === featureName);
    const selectedOptionData = feature.options.find(
      (opt) => opt.Option === option
    );

    // Update selected options
    setSelectedOption((prev) => {
      const newSelectedOptions = {
        ...prev,
        [featureName]: {
          option,
          price: parseFloat(selectedOptionData?.Price || "0"),
          discountP: parseFloat(selectedOptionData?.discountP || "0"),
        },
      };

      // Calculate total price
      let newTotalPrice = Object.values(newSelectedOptions).reduce(
        (total, item) => total + (item.price || 0),
        0
      );

      // Maintain existing WordPress Website and Content logic
      const websiteOption = newSelectedOptions["WordPress Website"];
      const contentOption = newSelectedOptions["Content"];

      if (contentOption?.option === "Yes" && websiteOption?.option) {
        switch (websiteOption.option) {
          case "4 pages":
          case "6 pages":
          case "8 pages":
            newTotalPrice += 80;
            break;
          case "10 pages":
          case "12 pages":
          case "14 pages":
            newTotalPrice += 120;
            break;
          case "16 pages":
          case "18 pages":
          case "20 pages":
            newTotalPrice += 150;
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
            newTotalDiscountPrice += 120;
            break;
          case "10 pages":
          case "12 pages":
          case "14 pages":
            newTotalDiscountPrice += 180;
            break;
          case "16 pages":
          case "18 pages":
          case "20 pages":
            newTotalDiscountPrice += 250;
            break;
          default:
            break;
        }
      }

      // Update parent component
      onTotalPriceChange(newTotalPrice);
      onTotalDiscountChange(newTotalDiscountPrice);
      onOptionChange(
        featureName,
        option,
        selectedOptionData?.Price,
        selectedOptionData?.discountP
      );

      console.log("Selected Feature:", {
        feature: featureName,
        option: option,
        price: selectedOptionData?.Price,
        discountPrice: selectedOptionData?.discountP,
        totalPrice: newTotalPrice,
        totalDiscount: newTotalDiscountPrice,
      });

      return newSelectedOptions;
    });

    setOpenDropdown(null);
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
          onClick={() => toggleDropdown(feature.name)}
          className={`flex justify-between items-center cursor-pointer ${
            plan.title === "Premium Plan" || plan.title === "Premium+ Plan"
              ? "mt-3"
              : "mt-3 md:mt-1 border-b border-b-gray-100"
          }`}
        >
          <div
            className={`whitespace-nowrap font-semibold text-[14px] md:text-[16px] font-Inter ${
              isDark
                ? "text-white"
                : "text-[#001246]" +
                  (!feature.active && !isCustomPlan ? " text-opacity-40" : "")
            } ${!feature.active && !isCustomPlan ? "text-gray-500" : ""}`}
          >
            {typeof feature === "string" ? feature : feature.name}
          </div>

          {feature.options ? (
            <div className="flex items-center">
              <SalesDropdown
                options={feature.options.map((option) => option.Option)}
                placeholder={
                  selectedOption[feature.name]
                    ? selectedOption[feature.name].option
                    : parentSelectedOption[feature.name]?.option || ""
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
                className={`flex items-center justify-center w-[16px] h- ${
                  isPremiumPlus ? "" : ""
                }`}
              >
                {isPremiumPlus ? (
                  <img
                    src="/assets/Salescircle.svg"
                    className="text-black"
                    style={{ background: "none" }}
                  />
                ) : (
                  <img
                    src="/assets/Salescircle1.svg "
                    className="text-black"
                    style={{ background: "none" }}
                  />
                )}
              </div>
            ) : (
              <div
                className={`flex items-center justify-center pl-[16px] ${
                  isPremiumPlus ? "rounded-full bg-white" : ""
                }`}
              >
                <img src="/assets/Salescircle2.svg" alt="" />
              </div>
            )
          ) : null}
        </div>
      ))}
      {errorMessage && totalPrice <= 499 && (
        <div className="text-center md:pt-2 font-bold">
          <h2 className="text-[#FF5050] font-Inter text-[16px] font-semibold md:leading-[18px]">
            Select services, minimum $499.
          </h2>
        </div>
      )}
    </div>
  );
};

export default SalesFeatureList;
