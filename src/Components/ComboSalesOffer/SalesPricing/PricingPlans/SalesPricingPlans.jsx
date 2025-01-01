import React from "react";
import SalesPlanCard from "./SalesPlanCard";
import SalesPricingHeader from "./SalesPricingHeader";

const SalesPricingPlans = () => {
  return (
    <div className="pt-4 md:pt-0">
      <div className="relative h-full md:h-full ">
        <div className=" font-Inter  ">
          <div className="flex flex-col items-center   md:px-0">
            <SalesPricingHeader />
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-8 mt-5 lg:mt-11 gap-y-10 md:gap-y-5 ">
              {/* Static Plan 1 */}
              <SalesPlanCard
                plan={{
                  package_id: 101,
                  service_id: 34,
                  user_id: 1,
                  title: "Premium Plan",
                  price: "499",
                  originalPrice: "999",
                  description:
                    "Build a strong foundation with everything you need to start your brand.",
                  iconSrcError:
                    "https://cdn.builder.io/api/v1/image/assets/e7a246693dbe47b68ba0a6f099060cf8/3ac69dfdc9e08983c3b2f5eaf193014f1fed181f38625cbee9a92a1f08967462?apiKey=5dfe0fed099d4e7fb78a3e68f506b2af&",
                  iconSrc: "/assets/blackCrown.svg",
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
              <SalesPlanCard
                plan={{
                  package_id: 102,
                  service_id: 34,
                  user_id: 1,
                  title: "Premium+ Plan",
                  price: "1199",
                  originalPrice: "2240",
                  description:
                    "Scale your business with the essential tools to boost your online presence.",
                  iconSrcError:
                    "https://cdn.builder.io/api/v1/image/assets/e7a246693dbe47b68ba0a6f099060cf8/c6192dc25953d0c31c7432f7e09db95874d8a54296018ca3e3eecda042c32a7a?apiKey=5dfe0fed099d4e7fb78a3e68f506b2af&",
                  iconSrc: "/assets/PreminumPClown.svg",
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
              <SalesPlanCard
                plan={{
                  package_id: 103,
                  service_id: 34,
                  user_id: 1,
                  title: "Custom Plan",
                  price: "0.00",
                  percentage: "10",
                  originalPrice: "0.00",
                  description:
                    "Select services and customize the plan tailored to your needs.",
                  iconSrcError: "/assets/iconSrcError.png",
                  iconSrc: "/assets/customCrown.svg",
                  isDark: false,
                  features: [
                    {
                      name: "Logo Design",
                      options: [
                        { Option: "None", Price: "0", discountP: "0" },
                        {
                          Option: "Basic Logo",
                          Price: "20.00",
                          discountP: "30.00",
                        },
                        {
                          Option: "Professional Logo",
                          Price: "35.00",
                          discountP: "75.00",
                        },
                        {
                          Option: "Advanced Logo",
                          Price: "100.00",
                          discountP: "200.00",
                        },
                      ],
                    },
                    {
                      name: "WordPress Website",
                      options: [
                        { Option: "None", Price: "0" },
                        {
                          Option: "4 pages",
                          Price: "200.00",
                          discountP: "399.00",
                        },
                        {
                          Option: "6 pages",
                          Price: "250.00",
                          discountP: "499.00",
                        },
                        {
                          Option: "8 pages",
                          Price: "350.00",
                          discountP: "699.00",
                        },
                        {
                          Option: "10 pages",
                          Price: "450.00",
                          discountP: "899.00",
                        },
                        {
                          Option: "12 pages",
                          Price: "600.00",
                          discountP: "1199.00",
                        },
                        {
                          Option: "14 pages",
                          Price: "700.00",
                          discountP: "1399.00",
                        },
                        {
                          Option: "16 pages",
                          Price: "800.00",
                          discountP: "1599.00",
                        },
                        {
                          Option: "18 pages",
                          Price: "900.00",
                          discountP: "1799.00",
                        },
                        {
                          Option: "20 pages",
                          Price: "1000.00",
                          discountP: "1999.00",
                        },
                      ],
                    },
                    {
                      name: "Content",
                      options: [
                        { Option: "Yes", Price: "0" },
                        { Option: "No", Price: "0" },
                        // {
                        //   Option: "4-8 pages",
                        //   Price: "80.00",
                        //   discountP: "120.00",
                        // },
                        // {
                        //   Option: "10-14 pages",
                        //   Price: "120.00",
                        //   discountP: "180.00",
                        // },
                        // {
                        //   Option: "16-20 pages",
                        //   Price: "150.00",
                        //   discountP: "250.00",
                        // },
                      ],
                    },
                    {
                      name: "Custom Graphics",
                      options: [
                        { Option: "Yes", Price: "40.00", discountP: "80.00" },
                        { Option: "No", Price: "0", discountP: "0" },
                      ],
                    },
                    {
                      name: "Brand Guideline",
                      options: [
                        { Option: "Yes", Price: "50.00", discountP: "100.00" },
                        { Option: "No", Price: "0", discountP: "0.00" },
                      ],
                    },
                    {
                      name: "SEO Services",
                      options: [
                        { Option: "None", Price: "0" },
                        {
                          Option: "Basic 1 Month",
                          Price: "300.00",
                          discountP: "499.00",
                        },
                        {
                          Option: "Basic 3 Months",
                          Price: "790.00",
                          discountP: "1499.00",
                        },
                        {
                          Option: "Standard 1 Month",
                          Price: "459.00",
                          discountP: "799.00",
                        },
                        {
                          Option: "Standard 3 Months",
                          Price: "1300.00",
                          discountP: "2399.00",
                        },
                        {
                          Option: "Standard 1 Year",
                          Price: "4590.00",
                          discountP: "9500.00",
                        },
                        {
                          Option: "Advanced 1 Month",
                          Price: "1000.00",
                          discountP: "1499.00",
                        },
                        {
                          Option: "Advanced 3 Months",
                          Price: "2490.00",
                          discountP: "4499.00",
                        },
                        {
                          Option: "Advanced 1 Year",
                          Price: "7900.00",
                          discountP: "17900.00",
                        },
                      ],
                    },
                    {
                      name: "Social Media Designs",
                      options: [
                        { Option: "None", Price: "0", discountP: "0" },
                        {
                          Option: "1 Platform",
                          Price: "100.00",
                          discountP: "200.00",
                        },
                        {
                          Option: "2 Platforms",
                          Price: "150.00",
                          discountP: "250.00",
                        },
                        {
                          Option: "3 Platforms",
                          Price: "180.00",
                          discountP: "300.00",
                        },
                        {
                          Option: "4 Platforms",
                          Price: "200.00",
                          discountP: "350.00",
                        },
                      ],
                    },
                    {
                      name: "Video",
                      options: [
                        { Option: "None", Price: "0" },
                        {
                          Option: "20 sec - 30 sec",
                          Price: "40.00",
                          discountP: "60.00",
                        },
                        {
                          Option: "40 sec - 60 sec",
                          Price: "60.00",
                          discountP: "100.00",
                        },
                      ],
                    },
                    {
                      name: "Website Maintenance",
                      options: [
                        {
                          Option: "No Maintenance",
                          Price: "0",
                          discountP: "0.00",
                        },
                        {
                          Option: "3 Months",
                          Price: "100.00",
                          discountP: "300.00",
                        },
                        {
                          Option: "1 Year",
                          Price: "300.00",
                          discountP: "1200.00",
                        },
                      ],
                    },
                  ],
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesPricingPlans;
