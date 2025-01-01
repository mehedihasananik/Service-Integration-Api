"use client";
import Container from "@/Components/Container/Container";
import React from "react";
import { SalesPricingBtn } from "../SalesBtn/SalesBtn";

const SalesAllOne = () => {
  // List of services
  const services = [
    {
      icon: "/assets/offer1.png",
      title: (
        <>
          10-Page WordPress <br /> Website
        </>
      ),
    },
    {
      icon: "/assets/offer2.png",
      title: (
        <>
          Content <br /> Writing
        </>
      ),
    },
    {
      icon: "/assets/offer3.png",
      title: (
        <>
          Professional <br /> Logo
        </>
      ),
    },
    {
      icon: "/assets/offer4.png",
      title: (
        <>
          Brand <br /> Guideline
        </>
      ),
    },
    {
      icon: "/assets/offer5.png",
      title: (
        <>
          Monthly <br /> SEO
        </>
      ),
    },
    {
      icon: "/assets/offer6.png",
      title: (
        <>
          Animated <br /> Video
        </>
      ),
    },
    {
      icon: "/assets/offer7.png",
      title: (
        <>
          Custom <br /> Graphics
        </>
      ),
    },
    {
      icon: "/assets/offer8.png",
      title: (
        <>
          Social Media <br /> Kit
        </>
      ),
    },
    {
      icon: "/assets/offer9.png",
      title: (
        <>
          3-Months Website <br /> Maintenance
        </>
      ),
    },
  ];

  return (
    <>
      <div id="offer" className="salesAllOne">
        {/* Main Section For Lg*/}
        <div className="relative hidden lg:block">
          <Container>
            <div className="w-[100%] h-[720px] flex justify-center  text-white pl-[11%]">
              <div className="w-[50%] pl-[3%] lg:pt-[14%]">
                <div>
                  <h2 className="text-[#fff] md:text-[30px] lg:text-[48px] font-semibold font-Inter pb-[4%] leading-[24px]">
                    Website Combo Offer
                  </h2>
                  <h4 className="text-[#FF693B] text-[20px] lg:text-[32px] font-medium leading-[24px] tracking-[0.48px] pb-[3%] font-Inter">
                    9-in-one
                  </h4>
                  <div className="space-y-5 pb-[4%]">
                    <p className="font-Inter text-[18px] font-[300]  leading-[25.5px] -tracking-[0.036px]">
                      Get 9 services in one unbeatable offer! Our combo includes
                      custom web design, development, content writing, SEO,
                      branding, logos, social media kit, marketing consultation,
                      and custom graphics—all tailored to your goals.
                    </p>
                    <p className="font-Inter text-[18px] font-[300]  leading-[25.5px] -tracking-[0.036px]">
                      Designed for startups and businesses, this power-packed
                      deal delivers everything you need at the best price. Save
                      time, avoid hassle, and elevate your online presence
                      effortlessly!
                    </p>
                  </div>
                </div>
                <div className="w-[32%]">
                  <SalesPricingBtn className="border-none" />
                </div>
              </div>
              <div className="w-[50%] pt-[8%]">
                <img src="/assets/salesOne.svg" alt="" />
              </div>
            </div>
          </Container>
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
