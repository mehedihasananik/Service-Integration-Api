"use client";
import React, { useState } from "react";
import { TiArrowRight } from "react-icons/ti";
import axios from "axios";
import { useRouter } from "next/navigation";
import { comboCheckoutApi } from "@/config/apis";
import SalesFeatureList from "./SalesFeatureList";

const SalesPlanCard = ({ plan }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalDiscountPrice, setTotalDiscountPrice] = useState(0);
  const [selectedOption, setSelectedOption] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [checkout, setCheckout] = useState("begin_checkout");
  const router = useRouter();

  const handleTotalPriceChange = (newTotalPrice) => {
    setTotalPrice(newTotalPrice);
  };

  const handleTotalDiscountChange = (newTotalDiscountPrice) => {
    setTotalDiscountPrice(newTotalDiscountPrice);
  };

  const originalPrice =
    plan.title === "Custom Plan" ? totalPrice : parseFloat(plan.price);

  const handleOrderClick = (selectedFeatures) => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: checkout,
      ecommerce: {
        currency: "USD",
        value: Number(originalPrice),
        items: [
          {
            item_id: plan.package_id || "",
            item_name: plan.title,
            package_name: plan.title,
            item_brand: "Envobyte Ltd",
            price: originalPrice,
            price_period: "1 time",
            selected_features: selectedFeatures,
          },
        ],
      },
      "gtm.uniqueEventId": Date.now(),
    });
  };

  const handlePlaceOrder = async () => {
    setErrorMessage("");

    if (originalPrice < 499) {
      setErrorMessage("Minimum Order $499");
      return;
    }

    // Enhanced selectedFeatures mapping with complete selection data
    const selectedFeatures =
      plan.title === "Custom Plan"
        ? plan.features.map((feature) => {
            const selection = selectedOption[feature.name] || {};
            const featureOption = feature.options?.find(
              (opt) => opt.Option === selection.option
            );

            return {
              name: feature.name,
              option: selection.option || "",
            };
          })
        : plan.features.map((feature) => ({
            name: feature.name,
            active: feature.active || false,
            option: "",
          }));

    console.log("Selected Features:", selectedFeatures); // Debug log
    handleOrderClick(selectedFeatures);

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
        const sessionUrl = response.data.session_url;
        if (sessionUrl) {
          router.push(sessionUrl);
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
        errorMessage && totalPrice <= 499
          ? "border-[3px] border-[#FF5050] text-[14px] font-Inter"
          : "border border-slate-200"
      } ${plan.isDark ? "text-white" : "bg-white text-[#0A2C8C]"}`}
      style={
        plan.isDark
          ? {
              borderRadius: "8px",
              border: "1px solid #FFF",
              background:
                "linear-gradient(169deg, #0A2C8C -1.15%, #0C89FF 99.51%)",
              boxShadow: " 0 0 60px 10px #0C89FF",
            }
          : {}
      }
    >
      <div
        className={`text-lg ${
          plan.isDark
            ? "text-[#FFF] font-semibold md:text-[18px] font-Inter "
            : "text-[#001246] font-semibold md:text-[18px] font-Inter "
        }`}
      >
        {plan.title}
      </div>
      <div className="flex gap-2 items-center mt-4">
        {errorMessage && totalPrice <= 499 ? (
          <img src={plan.iconSrcError} alt="" className="w-10" />
        ) : (
          <img src={plan.iconSrc} alt="" className="w-10" />
        )}

        <div className="flex flex-1 gap-3 items-center font-Inter relative">
          <div
            className={`md:text-[40px] font-Inter ${
              errorMessage && totalPrice <= 499
                ? "text-[#FF5050] font-semibold"
                : "font-semibold"
            } ${
              plan.title === "Premium+ Plan" ? "text-[#fff]" : "text-[#001246]"
            }`}
          >
            {plan.title === "Custom Plan"
              ? `$${originalPrice.toFixed(2)}`
              : `$${originalPrice}`}
          </div>

          <div className="mt-0 md:mt-6  font-medium font-Inter">
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
          <span className="absolute -bottom-5 left-[0%] md:left-[1%] md:bottom-[-15%]">
            {errorMessage && totalPrice <= 499 && (
              <span className="mt-3 font-bold text-[14px] font-Inter text-[#FF5050] text-sm relative top-0">
                {errorMessage}
              </span>
            )}
          </span>
        </div>
      </div>

      <div
        className={`mt-4 font-Inter text-[16px] font-normal  ${
          plan.isDark ? "text-[#FFF]  " : "text-[#001246] "
        }`}
      >
        {plan.description}
      </div>

      {plan.title === "Premium+ Plan" ? (
        <hr className="mt-6 border-t border-[#cccccc]" />
      ) : (
        <hr className="mt-6 border-t border-[#E1E4ED]" />
      )}

      <SalesFeatureList
        features={plan.features}
        isDark={plan.isDark}
        isCustomPlan={plan.title === "Custom Plan"}
        isPremiumPlus={plan.title === "Premium+ Plan"}
        plan={plan}
        onTotalPriceChange={handleTotalPriceChange}
        onTotalDiscountChange={handleTotalDiscountChange}
        onOptionChange={(featureName, option) => {
          setSelectedOption((prev) => ({
            ...prev,
            [featureName]: { option },
          }));
        }}
        errorMessage={errorMessage}
        totalPrice={totalPrice}
        selectedOption={selectedOption}
      />

      <button
        onClick={handlePlaceOrder}
        className={`mt-9 p-3 w-full rounded flex justify-center items-center text-[16px] font-semibold font-Inter ${
          plan.title === "Custom Plan" && totalPrice > 0
            ? "bg-blue-900 hover:bg-[#0E2566] text-white"
            : plan.title === "Custom Plan"
            ? "bg-[#0A2C8C66] hover:bg-[#7f8eb4] text-[#fff] transition-all duration-300 border"
            : plan.isDark
            ? "bg-[#fff] text-[#001B69] hover:bg-[#ffffffc7] hover:text-[#0F2870] hover:shadow-lg    transition-all duration-300"
            : "bg-[#000] hover:bg-[#260c0c] text-white transition-all duration-300 border border-[#0F2870]"
        } transform transition-all duration-300 hover:shadow-lg`}
      >
        <span>Place Order</span>{" "}
        <span>
          <TiArrowRight className="text-[20px]" />
        </span>
      </button>
    </div>
  );
};

export default SalesPlanCard;
