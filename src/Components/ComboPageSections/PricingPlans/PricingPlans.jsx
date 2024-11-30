import React from "react";
import ComboPlanCard from "./ComboPlanCard";
import ComboPricingHeader from "./ComboPricingHeader";
import { fetchData } from "@/config/fetchData";

const PricingPlans = async () => {
  const data = await fetchData("http://192.168.10.16:8000/api/custom-plan");
  console.log(data);

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

  return (
    <div className="flex flex-col items-center my-[4%]">
      <ComboPricingHeader />
      <div className="flex flex-wrap gap-10 justify-center mt-11">
        {plans.map((plan) => (
          <ComboPlanCard key={plan.title} plan={plan} />
        ))}
      </div>
    </div>
  );
};

export default PricingPlans;
