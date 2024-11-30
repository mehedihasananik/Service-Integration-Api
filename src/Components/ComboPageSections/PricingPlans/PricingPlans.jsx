import * as React from "react";
import { IoCheckmarkCircle } from "react-icons/io5";
import { RiCheckboxBlankCircleLine } from "react-icons/ri";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

function PricingPlans() {
  const plans = [
    {
      title: "Premium Plan",
      price: "499",
      originalPrice: "999",
      description:
        "Build a strong foundation with everything you need to start your brand.",
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/e7a246693dbe47b68ba0a6f099060cf8/3ac69dfdc9e08983c3b2f5eaf193014f1fed181f38625cbee9a92a1f08967462?apiKey=5dfe0fed099d4e7fb78a3e68f506b2af&",
      isDark: false,
      features: [
        { name: "Professional Logo Design", active: true },
        { name: "4-Page WordPress Website", active: true },
        { name: "Content Writing", active: true },
        { name: "Custom Graphics", active: true },
        { name: "Brand Guideline", active: false },
        { name: "Monthly SEO Services", active: false },
        { name: "Social Media Kit & Posts", active: false },
        { name: "Animated Video", active: false },
        { name: "3-Month Website Maintenance", active: true },
      ],
    },
    {
      title: "Premium+ Plan",
      price: "1199",
      originalPrice: "2240",
      description:
        "Scale your business with the essential tools to boost your online presence.",
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/e7a246693dbe47b68ba0a6f099060cf8/c6192dc25953d0c31c7432f7e09db95874d8a54296018ca3e3eecda042c32a7a?apiKey=5dfe0fed099d4e7fb78a3e68f506b2af&",
      isDark: true,
      features: [
        { name: "Professional Logo Design", active: true },
        { name: "10-Page WordPress Website", active: true },
        { name: "Content Writing", active: true },
        { name: "Custom Graphics", active: true },
        { name: "Brand Guideline", active: true },
        { name: "Monthly SEO Services", active: true },
        { name: "Social Media Kit & Posts", active: true },
        { name: "Animated Video", active: true },
        { name: "3-Month Website Maintenance", active: true },
      ],
    },
    {
      title: "Custom Plan",
      price: "0.00",
      originalPrice: "0.00",
      description: "Customize the plan tailored to your unique needs.",
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/e7a246693dbe47b68ba0a6f099060cf8/1d694be04f1ee028608754572ee5982ed1b8b2712a62b70f6d18efd2c2ad362d?apiKey=5dfe0fed099d4e7fb78a3e68f506b2af&",
      isDark: false,
      features: [
        "Logo Design",
        "WordPress Website",
        "Content",
        "Custom Graphics",
        "Brand Guideline",
        "SEO Services",
        "Social Media Designs",
        "Video",
        "Website Maintenance",
      ],
    },
  ];

  const renderFeatures = (
    features,
    isDark,
    isCustomPlan = false,
    isPremiumPlus = false
  ) =>
    features.map((feature, index) => (
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
    ));

  const renderCard = (plan) => (
    <div
      key={plan.title}
      className={`flex flex-col px-6 py-8 rounded-lg min-w-[240px] w-[368px] ${
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
            <div className="text-sm text-opacity-40 line-through">
              {`$${plan.originalPrice}`}
            </div>
          )}
        </div>
      </div>
      <div className="mt-9">{plan.description}</div>
      <hr className="mt-9 divide-y divide-slate-700 " />
      <div className="mt-9">
        {renderFeatures(
          plan.features,
          plan.isDark,
          plan.title === "Custom Plan",
          plan.title === "Premium+ Plan"
        )}
      </div>
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

  return (
    <div className="flex flex-col items-center my-[4%]">
      <div className="flex items-center py-4 gap-x-3 text-[14px] text-[#6D758F] font-bold">
        <span> Custom</span>{" "}
        <div className="relative -top-4">
          <img src="/assets/crown.png" />
        </div>
        <span> Combo</span>
      </div>
      <div className="text-center">
        <h2 className="text-5xl font-bold text-[#0A2C8C]">
          Friendly <span className="text-orange-500">Pricing Plans</span>
        </h2>
        <div className="flex justify-center">
          {" "}
          <p className="mt-6 text-[16px] text-[#787878] w-[75%]">
            Our limited-time Combo packages are designed to jumpstart your brand
            with exceptional value:
          </p>
        </div>
      </div>
      <div className="flex flex-wrap gap-10 justify-center mt-11">
        {plans.map(renderCard)}
      </div>
    </div>
  );
}

export default PricingPlans;
