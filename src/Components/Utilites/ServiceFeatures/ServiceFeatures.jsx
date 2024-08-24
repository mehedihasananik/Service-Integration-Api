"use client";
import React, { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

const pricingData = {
  features: [
    "Simple ad automation",
    "Permission sets",
    "Form automation",
    "Email automation",
    "Facebook Messenger integration",
    "Subdomain and country code top-level domain availability",
    "Advanced reporting",
    "Custom Messenger bot actions",
    "Unlimited workflows and actions",
    "Customizable permission sets",
  ],
  plans: [
    {
      name: "Marketing Hub Starter",
      price: "US$15/mo",
      details: [
        "1 simple workflow per form, with up to 10 actions.",
        "Permission templates only.",
        "Up to 10 automated actions.",
        "Up to 10 automated actions.",
        "Remove HubSpot branding.",
        "1 subdomain and 1 country code top-level domain on 1 root domain.",
        "1 subdomain and 1 country code top-level domain on 1 root domain.",
      ],
    },
    {
      name: "Marketing Hub Professional",
      price: "US$800/mo",
      details: [
        "Unlimited simple workflows per form, with unlimited actions.",
        "Permission templates only.",
        "Unlimited actions, plus omni-channel marketing automation.",
        "Unlimited actions, plus omni-channel marketing automation.",
        "Includes advanced Messenger bot branching and advanced reporting.",
        "Unlimited number of subdomains and country code top-level domains on 1 root domain.",
      ],
    },
    {
      name: "Marketing Hub Enterprise",
      price: "US$3,600/mo",
      details: [
        "Unlimited simple workflows per form, with unlimited actions.",
        "Customize and save your own permission sets.",
        "Unlimited actions, plus omni-channel marketing automation.",
        "Unlimited actions, plus omni-channel marketing automation.",
        "Includes the ability to use code snippets for custom Messenger bot actions.",
        "Unlimited number of subdomains and country code top-level domains on 1 root domain.",
      ],
    },
  ],
};

const ServiceFeatures = ({features}) => {
  const [showMoreRows, setShowMoreRows] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const featuresPerPage = 5;
  const totalFeatures = pricingData.features.length;
  const visibleFeatures = showMoreRows
    ? totalFeatures
    : Math.min(featuresPerPage, totalFeatures);

  const handleShowMoreRows = () => {
    setIsLoading(true);
    setShowMoreRows(!showMoreRows);
    setTimeout(() => {
      setIsLoading(false);
    }, 20);
  };
// console.log(features.plans.length)
  return (
    <div>
  { features?.plans?.length> 0 ?     <> 
     <div className="bg-white border border-gray-200 rounded-lg overflow-hidden mt-5 md:mt-10">
      <div className="px-8 py-6  bg-gray-200 text-center">
        <h3 className="text-[26px] font-semibold">Features List</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-4 border-r border-gray-200 bg-gray-50 text-left font-semibold text-sm  text-gray-800 uppercase tracking-wider">
              {features?.features?.name}
              </th>
              {features?.plans?.map((plan, index) => (
                <th
                  key={index}
                  className="px-6 py-4 border-r border-gray-200 bg-gray-50 text-center text-sm font-medium text-gray-600 uppercase tracking-wider"
                >
                  <div className="font-semibold text-gray-800">
                    {plan?.name}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 text-[16px]">
            {features?.features?.details
              .slice(0, visibleFeatures)
              .map((feature, index) => (
                <tr
                  key={index}
                  className={`hover:bg-gray-100 transition duration-300 ease-in-out ${
                    index >= featuresPerPage && isLoading
                      ? "filter blur-sm transition-all duration-300"
                      : ""
                  }`}
                >
                  <td className="px-6 py-4 border-r border-gray-200 text-gray-800">
                    {feature}
                  </td>
                  {features.plans.map((plan, planIndex) => (
                    <td
                      key={planIndex}
                      className="px-6 py-4 border-r border-gray-200 text-center text-gray-800 "
                    >
                      <div className="text-[16px]">{plan?.details[index]}</div>
                    </td>
                  ))}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
    {totalFeatures > featuresPerPage && (
      <div className="flex justify-center mt-4 pb-6">
        <button
          className="text-gray-800 hover:text-[#FF693B] font-bold py-2 px-4 rounded flex items-center transition-all delay-100"
          onClick={handleShowMoreRows}
        >
          {showMoreRows ? (
            <>
              Show Less <ChevronUp className="ml-2" size={16} />
            </>
          ) : (
            <>
              See More Features <ChevronDown className="ml-2" size={16} />
            </>
          )}
        </button>
      </div>
    )}</> : ""}
   
    </div>
  );
};

export default ServiceFeatures;
