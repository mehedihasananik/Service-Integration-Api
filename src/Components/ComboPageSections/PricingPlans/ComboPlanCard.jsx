"use client";
import React, { useState } from "react";
import ComboFeatureList from "./ComboFeatureList";
import { TiArrowRight } from "react-icons/ti";
import axios from "axios";
import { useRouter } from "next/navigation";

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
      const response = await axios.post(
        "http://192.168.10.16:8000/api/custom/checkout",
        orderData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

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
      className={`flex flex-col px-6 py-6 rounded-lg w-[350px] md:w-[430px] ${
        errorMessage ? "border-2 border-red-500" : "border border-slate-200 "
      } ${
        plan.isDark
          ? "bg-[#0A2C8C] text-white"
          : "bg-white text-[#0A2C8C] shadow-sm"
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
        {errorMessage ? (
          <img src={plan.iconSrcError} alt="" className="w-10" />
        ) : (
          <img src={plan.iconSrc} alt="" className="w-10" />
        )}

        <div className="flex flex-1 gap-3 items-center">
          <div
            className={`md:text-[40px] ${
              errorMessage ? "text-red-600 font-bold" : "font-bold"
            }`}
          >
            {`$${originalPrice.toFixed(2)}`}
          </div>

          {plan.title === "Custom Plan" ? (
            <div className="text-sm text-opacity-40 line-through">
              {`$${parseFloat(totalDiscountPrice).toFixed(2)}`}
            </div>
          ) : (
            <div className="text-sm text-opacity-40 line-through">
              {`$${parseFloat(plan.originalPrice).toFixed(2)}`}
            </div>
          )}
          {errorMessage && (
            <span className="mt-3 font-bold text-red-600 text-sm relative top-0">
              {errorMessage}
            </span>
          )}
        </div>
      </div>
      <div className="mt-4">{plan.description}</div>
      <hr className="mt-6 divide-y divide-slate-600 " />

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
