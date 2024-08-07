import Container from "@/Components/Container/Container";
import { whyChoose_us } from "@/config/apis";
import Image from "next/image";
import React from "react";

async function getWhyChooseContent() {
  const res = await fetch(`${whyChoose_us}`, {
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const WhyChooseUs = async () => {
  const data = await getWhyChooseContent();

  return (
    <div className="pb-5 lg:py-5 overflow-hidden">
      <Container>
        <div className="text-center pb-5 md:pb-12">
          <h2 className="text-[30px] text-[#1E293B] md:text-[48px] font-bold font-Raleway  ">
            Why Choose Us
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-y-10 gap-x-24 md:grid-cols-1 lg:grid-cols-2">
          {/* 1st cARD */}
          <div className="bg-[#FFF9EE] xl:h-[300px] 2xl:h-[250px] flex flex-col items-center lg:flex-row gap-4 px-10 py-16 ">
            <div className="w-full flex justify-center lg:w-[550px] mt-4">
              <img src={data[0]?.icon} alt="" />
            </div>
            <div className="text-center lg:text-left space-y-4">
              <h2 className="text-[24px] text-[#333333] font-bold">
                {data[0]?.heading}
              </h2>
              <p className="text-[16px] text-[#666666] text-justify">
                {data[0]?.text}
              </p>
            </div>
          </div>

          {/* 2nd card */}
          <div className="flex  xl:h-[300px] 2xl:h-[250px] gap-x-8">
            {/* content */}
            <div className="bg-[#FFF9EE] flex flex-col items-center lg:flex-row gap-4 pt-8 pl-10 pr-10 pb-10 lg:pt-[25px] lg:pb-[30px] lg:pl-[100px] lg:pr-[35px] lg:relative">
              <div className="flex justify-center items-center lg:absolute lg:left-[-72px] lg:top-[50px]">
                <img className="w-[150px]" src={data[1]?.icon} alt="" />
              </div>
              <div className="text-center lg:text-left space-y-4">
                <h2 className="text-[24px] text-[#333333] font-bold">
                  {data[1]?.heading}
                </h2>
                <p className="text-[16px] text-[#666666] text-justify">
                  {data[1]?.text}
                </p>
              </div>
            </div>
            {/* image */}
            <div className="hidden lg:flex items-center">
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
                <img className="w-[150px]" src={data[2]?.icon} alt="" />
              </div>
              <div className="text-center lg:text-left space-y-4">
                <h2 className="text-[24px] text-[#333333] font-bold">
                  {data[2]?.heading}
                </h2>
                <p className="text-[16px] text-[#666666] text-justify">
                  {data[2]?.text}
                </p>
              </div>
            </div>
            {/* image */}
            <div className="hidden lg:flex items-center">
              {" "}
              {/* Use flex to align the image */}
              <img
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
              <img className="w-[150px]" src={data[3]?.icon} alt="" />
            </div>
            <div className="text-center lg:text-left space-y-4">
              <h2 className="text-[24px] text-[#333333] font-bold">
                {data[3]?.heading}
              </h2>
              <p className="text-[16px] text-[#666666] text-justify">
                {data[3]?.text}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WhyChooseUs;
