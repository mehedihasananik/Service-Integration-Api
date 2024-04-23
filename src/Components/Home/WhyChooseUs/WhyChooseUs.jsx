"use client";
import Container from "@/Components/Container/Container";
import Image from "next/image";
import React from "react";

function WhyChooseUs() {
  return (
    <div className="pb-5 lg:py-5 overflow-hidden">
      <Container>
        <div className="text-center pb-5 md:pb-12">
          <h3 className="text-[32px] text-[#1E293B] md:text-[48px] font-bold font-Raleway  ">
            Why Choose Us
          </h3>
        </div>
        <div className="grid grid-cols-1 gap-y-10 gap-x-24 md:grid-cols-1 lg:grid-cols-2">
          {/* 1st cARD */}
          <div className="bg-[#FFF9EE] xl:h-[300px] 2xl:h-[250px] flex flex-col items-center lg:flex-row gap-4 px-10 py-16 ">
            <div className="w-full flex justify-center lg:w-[550px] mt-4">
              <img
                onContextMenu={(e) => e.preventDefault()}
                src="/assets/why1.png"
                alt=""
              />
            </div>
            <div className="text-center lg:text-left space-y-4">
              <h2 className="text-[24px] text-[#333333] font-bold">
                Senior & Creative Team
              </h2>
              <p className="text-[16px] text-[#666666] text-justify">
                Develop a website by finding a product identity that has value
                and branding to become a characteristic of a company. We will
                also facilitate the business marketing of these products with
                our SEO experts so that they become a ready-to-use website{" "}
              </p>
            </div>
          </div>

          {/* 2nd card */}
          <div className="flex  xl:h-[300px] 2xl:h-[250px] gap-x-8">
            {/* content */}
            <div className="bg-[#FFF9EE] flex flex-col items-center lg:flex-row gap-4 pt-8 pl-10 pr-10 pb-10 lg:pt-[25px] lg:pb-[30px] lg:pl-[100px] lg:pr-[35px] lg:relative">
              <div className="flex justify-center items-center lg:absolute lg:left-[-72px] lg:top-[50px]">
                <img
                  onContextMenu={(e) => e.preventDefault()}
                  className="w-[150px]"
                  src="/assets/why2.png"
                  alt=""
                />
              </div>
              <div className="text-center lg:text-left space-y-4">
                <h2 className="text-[24px] text-[#333333] font-bold">
                  Quick Delivery
                </h2>
                <p className="text-[16px] text-[#666666] text-justify">
                  Develop a website by finding a product identity that has value
                  and branding to become a characteristic of a company. We will
                  also facilitate the business marketing of these products with
                  our SEO experts so that they become a ready-to-use website
                </p>
              </div>
            </div>
            {/* image */}
            <div
              onContextMenu={(e) => e.preventDefault()}
              className="hidden lg:flex items-center"
            >
              {" "}
              {/* Use flex to align the image */}
              <img
                className="w-[300px] h-full"
                src="/assets/whyRight.png"
                alt=""
              />{" "}
              {/* Set height to 'full' */}
            </div>
          </div>
          {/* 3rd card */}
          <div className="flex flex-row-reverse  xl:h-[300px] 2xl:h-[250px] gap-x-24">
            {/* content */}
            <div className="bg-[#EEF2FF] flex flex-col items-center lg:flex-row gap-4 pt-8 pl-10 pr-10 pb-10 lg:pt-[50px] lg:pb-[30px] lg:pl-[64px] 2xl:pr-[50px] lg:relative">
              <div className="lg:absolute left-[-98px] top-[48px]">
                <img className="w-[150px]" src="/assets/why3.png" alt="" />
              </div>
              <div className="text-center lg:text-left space-y-4">
                <h2 className="text-[24px] text-[#333333] font-bold">
                  Affordable Price
                </h2>
                <p className="text-[16px] text-[#666666] text-justify">
                  Develop a website by finding a product identity that has value
                  and branding to become a characteristic of a company. We will
                  also facilitate the business marketing of these products with
                  our SEO experts so that they become a ready-to-use website
                </p>
              </div>
            </div>
            {/* image */}
            <div className="hidden lg:flex items-center">
              {" "}
              {/* Use flex to align the image */}
              <img
                onContextMenu={(e) => e.preventDefault()}
                className="w-[300px] h-full"
                src="/assets/whyBlue.png"
                alt=""
              />{" "}
              {/* Set height to 'full' */}
            </div>
          </div>
          {/* 4th card */}
          <div className="bg-[#EEF2FF] xl:h-[300px] 2xl:h-[250px] flex flex-col items-center lg:flex-row gap-4 px-10 py-10 lg:py-0 ">
            <div className="w-full flex items-center justify-center lg:w-[550px] mt-4">
              <img
                onContextMenu={(e) => e.preventDefault()}
                src="/assets/why4.png"
                alt=""
              />
            </div>
            <div className="text-center lg:text-left space-y-4">
              <h2 className="text-[24px] text-[#333333] font-bold">
                Money Back Guarantee
              </h2>
              <p className="text-[16px] text-[#666666] text-justify">
                Develop a website by finding a product identity that has value
                and branding to become a characteristic of a company. We will
                also facilitate the business marketing of these products with
                our SEO experts so that they become a ready-to-use website{" "}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default WhyChooseUs;
