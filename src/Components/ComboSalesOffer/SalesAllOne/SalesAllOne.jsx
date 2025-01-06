"use client";
import React from "react";
import { SalesPricingBtn } from "../SalesBtn/SalesBtn";
import { Link } from "react-scroll";

const SalesAllOne = () => {
  // List of services

  return (
    <>
      <div id="offer" className="salesAllOne">
        <div className="absolute lg:-top-[1%] xl:-top-[3%] lg:left-[2%] hidden lg:block">
          <img
            className="lg:w-[60%] xl:w-[100%]"
            src="/assets/salesCombo.svg"
            alt=""
          />
        </div>
        {/* Main Section For Lg*/}
        <div className="relative hidden lg:block">
          <div className="max-w-[1600px] mx-auto px-[6%] md:px-[4%] xl:px-[8%] 4xl:px-[4%] ">
            <div className="w-[100%] h-[720px] flex justify-center  text-white pl-[11%] pt-[3%]">
              <div className="w-[50%] pl-[3%] lg:pt-[14%]">
                <div>
                  <h2 className="text-[#fff] md:text-[30px] xl:text-[48px] font-semibold font-Inter pb-[4%] leading-[24px]">
                    Website Combo Offer
                  </h2>
                  <h4 className="text-[#FF693B] text-[20px] lg:text-[24px] font-bold leading-[24px] tracking-[0.48px] pt-[1%] pb-[3%] font-Inter">
                    9-in-one
                  </h4>
                  <div className="space-y-6 pb-[4%]">
                    <p className="font-Inter text-[18px] font-light leading-[25.5px] -tracking-[0.036px]">
                      Get 9 services in one unbeatable offer! Our combo includes
                      custom web design, development, content writing, SEO,
                      branding, logos, social media kit, marketing consultation,
                      and custom graphics—all tailored to your goals.
                    </p>
                    <p className="font-Inter text-[18px] font-light leading-[25.5px] -tracking-[0.036px]">
                      Designed for startups and businesses, this power-packed
                      deal delivers everything you need at the best price. Save
                      time, avoid hassle, and elevate your online presence
                      effortlessly!
                    </p>
                  </div>
                </div>
                <div className="w-[32%]">
                  <Link
                    to="pricing"
                    smooth={true}
                    duration={1500}
                    className={` font-Inter text-[16px] leading-[42px] font-normal bg-[#FF693B] border cursor-pointer border-[#FF693B] hover:border-[#FF693B] text-white hover:bg-transparent hover:text-[#FF693B] py-4 px-4 md:py-3 md:px-[1.7%] flex justify-center items-center rounded-full w-[180px] h-[43px] transition-all duration-300`}
                  >
                    See Pricing
                  </Link>
                </div>
              </div>
              <div className="w-[50%] pt-[8%] relative -right-12">
                <img
                  className="w-[685px] h-[576px]"
                  src="/assets/salesOne.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Section For mobile*/}
      <div className="block lg:hidden">
        <div className="all-offer-section2 relative">
          <img src="/assets/leadHead.svg" alt="Centered Image" />
          <div className="lg:hidden px-[4%]">
            <div className="text-white flex flex-col items-center justify-center h-[465px] text-center">
              <div className="pt-[16%]">
                <h2 className="text-[#fff] text-[32px] font-semibold font-Inter leading-[24px] tracking-[-0.64px] pb-[4%]">
                  Website Combo Offer
                </h2>
                <h4 className="text-[#FF693B] text-[22px] font-medium leading-[24px] tracking-[0.64px] pb-[3%] font-Inter">
                  9-in-one
                </h4>
                <div className="space-y-5 pb-[4%]">
                  <p className="font-Inter text-[12px] font-[300] leading-[24px] -tracking-[0.028px]  text-white text-xl">
                    Dominate the digital world with our power-packed website
                    combo! Ignite your brand, skyrocket visibility, and
                    captivate your audience like never before.
                  </p>
                  <p className="font-Inter text-[12px] font-[300] leading-[24px] -tracking-[0.028px]  text-white text-xl">
                    Take charge today—stand out, grow faster, and make an
                    unforgettable impact online!
                  </p>
                </div>
              </div>
              <div className=" pt-5 ">
                <SalesPricingBtn className="border-none" />
              </div>
            </div>
          </div>
        </div>

        <div className="all-offer-section3 bg-[#03165F] flex justify-center">
          <img src="/assets/allLogo1.svg" alt="" />
        </div>
      </div>
    </>
  );
};

export default SalesAllOne;
