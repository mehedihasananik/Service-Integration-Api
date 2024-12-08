"use client";
import React, { useState } from "react";
import ComboFeatureList from "./ComboFeatureList";
import { TiArrowRight } from "react-icons/ti";
import axios from "axios";
import { useRouter } from "next/navigation";
import { comboCheckoutApi } from "@/config/apis";

const ComboPlanCard = ({ plan }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalDiscountPrice, setTotalDiscountPrice] = useState(0);
  const [selectedOption, setSelectedOption] = useState({});
  const [errorMessage, setErrorMessage] = useState(""); // State for error message
  const router = useRouter();

  // Handle price changes when options are selected
  const handleTotalPriceChange = (newTotalPrice) => {
    setTotalPrice(newTotalPrice);
  };

  // Handle discount price changes when options are selected
  const handleTotalDiscountChange = (newTotalDiscountPrice) => {
    setTotalDiscountPrice(newTotalDiscountPrice);
  };

  const originalPrice =
    plan.title === "Custom Plan" ? totalPrice : parseFloat(plan.price);

  const handlePlaceOrder = async () => {
    // Reset error message
    setErrorMessage("");

    // Check if the price is less than $499
    if (originalPrice < 499) {
      setErrorMessage("Minimum Order $499");
      return; // Stop further execution
    }

    // Determine selected features based on the plan type
    const selectedFeatures =
      plan.title === "Custom Plan"
        ? plan.features.map((feature) => ({
            name: feature.name,
            option:
              feature.options && feature.options.length
                ? selectedOption[feature.name]?.option || ""
                : "",
          }))
        : plan.features.map((feature) => ({
            name: feature.name,
            option: "", // No options, just pass the name
          }));

    const orderData = {
      user_id: plan.user_id,
      plan_type: plan.title,
      total_price: originalPrice,
      service_id: plan.service_id,
      package_id: plan.package_id,
      selected_features: selectedFeatures,
      payment_status: "pending",
      order_status: "requirement needed",
    };

    try {
      const response = await axios.post(comboCheckoutApi, orderData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        // If session_url is present in the response, navigate to it
        const sessionUrl = response.data.session_url;
        if (sessionUrl) {
          router.push(sessionUrl); // Redirect to the session URL
        } else {
          alert("Order placed successfully, but no session URL found.");
        }
        console.log("API Response:", response.data);
      } else {
        alert("Failed to place the order. Please try again.");
        console.error("API Error:", response);
      }
    } catch (error) {
      alert("Error placing the order. Please check the console for details.");
      console.error("API Call Error:", error);
    }
  };

  return (
    <div
      key={plan.title}
      className={`flex flex-col px-6 py-6 rounded-lg w-[350px] md:w-[400px] xl:w-[400px] xxl:w-[380px] font-Inter ${
        errorMessage
          ? "border-[3px] border-[#FF5050] text-[14px] font-Inter"
          : "border border-slate-200 "
      } ${
        plan.isDark ? "bg-[#0A2C8C] text-white" : "bg-white text-[#0A2C8C] "
      }`}
    >
      <div
        className={`text-lg ${
          plan.isDark
            ? "text-[#FFD54D] font-semibold md:text-[18px] font-Inter "
            : "text-[#0A2C8C] font-semibold md:text-[18px] font-Inter "
        }`}
      >
        {plan.title}
      </div>
      <div className="flex gap-2 items-center mt-4">
        {errorMessage ? (
          <img src={plan.iconSrcError} alt="" className="w-10" />
        ) : (
          <img src={plan.iconSrc} alt="" className="w-10" />
        )}

        <div className="flex flex-1 gap-3 items-center font-Inter">
          <div
            className={`md:text-[40px] font-Inter ${
              errorMessage ? "text-[#FF5050] font-semibold" : "font-semibold"
            } ${plan.title === "Premium+ Plan" ? "text-[#FFD54D]" : ""}`}
          >
            {`$${originalPrice.toFixed(2)}`}
          </div>

          <div className="mt-6  font-medium font-Inter">
            {plan.title === "Custom Plan" ? (
              <div className="text-[14px] line-through text-gray-400 font-Inter">
                {`$${parseFloat(totalDiscountPrice).toFixed(2)}`}
              </div>
            ) : (
              <div className="text-[14px]  line-through text-gray-400 font-Inter">
                {`$${parseFloat(plan.originalPrice).toFixed(2)}`}
              </div>
            )}
          </div>
          {errorMessage && (
            <span className="mt-3 font-bold text-[14px] font-Inter text-[#FF5050] text-sm relative top-0">
              {errorMessage}
            </span>
          )}
        </div>
      </div>
      <div className="mt-4 font-Inter text-[16px] font-normal">
        {plan.description}
      </div>
      {plan.title === "Premium+ Plan" ? (
        <hr className="mt-6 border-t border-[#FFD54D]" />
      ) : (
        <hr className="mt-6 border-t border-[#E1E4ED]" />
      )}

      {/* Pass the necessary props to ComboFeatureList */}
      <ComboFeatureList
        features={plan.features}
        isDark={plan.isDark}
        isCustomPlan={plan.title === "Custom Plan"}
        isPremiumPlus={plan.title === "Premium+ Plan"}
        plan={plan}
        onTotalPriceChange={handleTotalPriceChange}
        onTotalDiscountChange={handleTotalDiscountChange}
        onOptionChange={(featureName, option) => {
          // Update selected options when a feature option is selected
          setSelectedOption((prev) => ({
            ...prev,
            [featureName]: { option },
          }));
        }}
      />

      {/* Display error message if price is too low */}

      <button
        onClick={handlePlaceOrder}
        className={`mt-9 p-3 w-full rounded flex justify-center items-center text-[16px] font-semibold font-Inter ${
          plan.title === "Custom Plan"
            ? "bg-[#0A2C8C66]  hover:bg-[#7f8eb4] text-[#fff] transition-all duration-300 " // Custom Plan color
            : plan.isDark
            ? "bg-[#FFD54D] text-blue-900 hover:bg-[#FFC300] transition-all duration-300 "
            : "bg-blue-900 hover:bg-[#0F2870] text-white transition-all duration-300"
        } transform transition-all duration-300  hover:shadow-lg`}
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
