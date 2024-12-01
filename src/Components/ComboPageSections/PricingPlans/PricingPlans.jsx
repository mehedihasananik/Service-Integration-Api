import React from "react";
import ComboPlanCard from "./ComboPlanCard";
import ComboPricingHeader from "./ComboPricingHeader";

const PricingPlans = async () => {
  return (
    <div className="flex flex-col items-center my-[4%]">
      <ComboPricingHeader />
      <div className="flex flex-wrap gap-10 justify-center mt-11">
        {/* Static Plan 1 */}
        <ComboPlanCard
          plan={{
            title: "Premium Plan",
            price: "499",
            originalPrice: "999",
            description: "Build a strong foundation with everything ",
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
          }}
        />
        {/* Static Plan 2 */}
        <ComboPlanCard
          plan={{
            title: "Premium+ Plan",
            price: "1199",
            originalPrice: "2240",
            description: "Scale your business with the essential ",
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
          }}
        />
        {/* Static Plan 3 */}
        <ComboPlanCard
          plan={{
            title: "Custom Plan",
            price: "0.00",
            originalPrice: "0.00",
            description: "Customize the plan tailored to your unique needs.",
            iconSrc:
              "https://cdn.builder.io/api/v1/image/assets/e7a246693dbe47b68ba0a6f099060cf8/1d694be04f1ee028608754572ee5982ed1b8b2712a62b70f6d18efd2c2ad362d?apiKey=5dfe0fed099d4e7fb78a3e68f506b2af&",
            isDark: false,
            features: [
              {
                name: "Professional Logo Design",
                options: [
                  { Option: "Basic Logo", Price: "220.00" },
                  { Option: "Professional Logo", Price: "154.00" },
                  { Option: "Advanced Logo", Price: "333.00" },
                ],
              },
              {
                name: "10-Page WordPress Website",
                options: [
                  { Option: "2 page website", Price: "380.00" },
                  { Option: "4 page website", Price: "577.00" },
                ],
              },
              {
                name: "Content Writing",
                options: [
                  { Option: "yes", Price: "380.00" },
                  { Option: "no", Price: "0" },
                ],
              },
              {
                name: "Custom Graphics",
                options: [
                  { Option: "yes", Price: "380.00" },
                  { Option: "no", Price: "0" },
                ],
              },
              {
                name: "Brand Guideline",
                options: [
                  { Option: "yes", Price: "" },
                  { Option: "no", Price: "0" },
                ],
              },
              {
                name: "Monthly SEO Services",
                options: [
                  { Option: "Basic 1 Month", Price: "230.00" },
                  { Option: "Basic 3 Months", Price: "635.00" },
                  { Option: "Standard 1 Month", Price: "459.00" },
                  { Option: "Standard 3 Months", Price: "349.00" },
                  { Option: "Standard 1 Year", Price: "589.00" },
                  { Option: "Advanced 1 Month", Price: "519.00" },
                  { Option: "Advanced 3 Months", Price: "132.00" },
                  { Option: "Advanced 1 Year", Price: "450.00" },
                ],
              },
              {
                name: "Social Media Kit & Posts",
                options: [
                  { Option: "1 Platform", Price: "399.00" },
                  { Option: "2 Platforms", Price: "632.00" },
                  { Option: "3 Platforms", Price: "514.00" },
                  { Option: "4 Platforms", Price: "613.00" },
                ],
              },
              {
                name: "Animated Video",
                options: [
                  { Option: "20 sec - 30 sec", Price: "120.00" },
                  { Option: "30 sec - 50 sec", Price: "150.00" },
                  { Option: "50 sec - 60 sec", Price: "160.00" },
                  { Option: "60 sec - 70 sec", Price: "180.00" },
                ],
              },
              {
                name: "Website Maintenance",
                options: [
                  { Option: "No Maintenance", Price: "120.00" },
                  { Option: "3 Months", Price: "150.00" },
                  { Option: "1 Year", Price: "160.00" },
                ],
              },
            ],
          }}
        />
      </div>
    </div>
  );
};

export default PricingPlans;
