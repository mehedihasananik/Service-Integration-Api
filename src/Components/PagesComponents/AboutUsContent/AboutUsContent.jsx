import Container from "@/Components/Container/Container";
import { aboutUsApi, aboutUsItemApi } from "@/config/apis";
import Head from "next/head";
import Image from "next/image";
import React from "react";

async function getAboutPage() {
  const res = await fetch(`${aboutUsApi}`, {
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch  singleAboutDetails");
  }
  return res.json();
}

async function getAbout_item() {
  const res = await fetch(`${aboutUsItemApi}`, {
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch  singleAboutDetails");
  }
  return res.json();
}

const AboutUsContent = async ({ aboutDetails, singleAboutDetails }) => {
  const {
    title1,
    details1,
    image,
    title2,
    details2,
    title3,
    details3,
    title4,
    details4,
  } = aboutDetails;

  if (!aboutDetails || !singleAboutDetails) {
    return <div>Loading...</div>; // You can customize your loading indicator here
  }
  return (
    <Container>
      <div>
        {/* titles & description */}
        <div className="pt-5 md:pt-10 lg:pt-10 space-y-4">
          <h2 className="text-[32px] lg:text-[48px] text-[#0F172A] font-bold font-Raleway text-center lg:text-left">
            {title1}
          </h2>
          <p className="text-[18px] text-justify">{details1}</p>
        </div>
        {/* mission & vision */}
        <div className="grid grid-cols-1 justify-items-center lg:justify-items-start gap-y-10 lg:gap-y-0 lg:grid-cols-3 pt-10 lg:pt-16 lg:gap-x-10  ">
          {/* 1st col */}
          <div>
            <Image
              className="w-[450px]"
              width={500}
              height={500}
              src={image}
              alt=""
            />
          </div>
          {/* 2nd col */}
          <div className="space-y-3 text-center lg:text-left lg:pt-[8%]">
            {/* logo */}
            <div className="flex justify-center lg:justify-start">
              <img src="/assets/missionLogo.png" alt="" />
            </div>
            {/* title */}
            <div>
              <h1 className="text-[18px] md:text-[32px] font-semibold ">
                {title2}
              </h1>
            </div>
            {/* description */}
            <div>
              <p className="text-[16px]">{details2}</p>
            </div>
          </div>
          <div>
            {/* 3rd col */}
            <div className="space-y-3  text-center lg:text-left lg:pt-[8%]">
              {/* logo */}
              <div className="flex justify-center lg:justify-start">
                <img src="/assets/missionLogo2.png" alt="" />
              </div>
              {/* title */}
              <div>
                <h1 className="text-[18px] md:text-[32px] font-semibold ">
                  {title3}
                </h1>
              </div>
              {/* description */}
              <div>
                <p className="text-[16px]">{details3}</p>
              </div>
            </div>
          </div>
        </div>
        {/* values */}
        <div className="lg:pt-20 lg:pb-4 space-y-3">
          <h3 className="text-[32px] text-[#334155] text-center lg:text-left">
            Our Values
          </h3>
          <div className="w-full lg:w-[70%] text-center lg:text-left space-y-3">
            <h1 className="text-[#0F172A] text-[32px] lg:text-[48px] font-bold font-Raleway leading-tight">
              {title4}
            </h1>
            <p className="text-[#334155] text-[16px]">{details4}</p>
          </div>
        </div>
        {/* Transparency */}
        <div className="flex flex-col gap-4 md:gap-8 lg:flex-row  lg:justify-between my-5 lg:py-20">
          {/* left side */}
          <div className="lg:w-[50%]  flex flex-col justify-center">
            <h2 className="text-[#0F172A] text-[32px] font-bold font-Raleway text-center lg:text-left">
              {singleAboutDetails[0].title}
            </h2>
            <div className="text-[#334155] text-center lg:text-left text-[18px] space-y-5 pt-5">
              <p>{singleAboutDetails[0].details.slice(0, 294)}</p>
              <p>{singleAboutDetails[0].details.slice(294, 600)}</p>
            </div>
          </div>
          {/* right side */}
          <div className="lg:w-[40%] flex justify-center lg:justify-end gap-x-4 ">
            <Image
              className="w-[100%] h-[450px] rounded-lg"
              width={1000}
              height={1000}
              src={singleAboutDetails[0].image}
              alt=""
            />
          </div>
        </div>
        {/* communication */}
        <div className="flex flex-col gap-4 md:gap-8 lg:flex-row-reverse  lg:justify-between my-5 lg:py-20">
          {/* left side */}
          <div className="lg:w-[50%] text-center lg:text-left flex flex-col justify-center">
            <h2 className="text-[#0F172A] text-[32px] font-bold font-Raleway text-center lg:text-left">
              {singleAboutDetails[1].title}
            </h2>
            <div className="text-[#334155] text-[18px] space-y-5 pt-5">
              <p>{singleAboutDetails[1].details.slice(0, 292)}</p>
              <p>{singleAboutDetails[1].details.slice(292, 600)}</p>
            </div>
          </div>
          {/* right side */}
          <div className="lg:w-[40%] flex justify-center lg:justify-start gap-x-4 ">
            <Image
              className="w-[100%] h-[450px] rounded-lg"
              width={1000}
              height={1000}
              src={singleAboutDetails[1].image}
              alt=""
            />
          </div>
        </div>
        {/* Project Management */}
        <div className="flex flex-col gap-4 md:gap-8 lg:flex-row  lg:justify-between my-5 lg:py-20">
          {/* left side */}
          <div className="lg:w-[50%] flex flex-col justify-center">
            <h2 className="text-[#0F172A] text-[32px] font-bold font-Raleway text-center lg:text-left">
              {singleAboutDetails[2].title}
            </h2>
            <div className="text-[#334155] text-center lg:text-left text-[18px] space-y-5 pt-5">
              <p>{singleAboutDetails[2].details.slice(0, 294)}</p>
              <p>{singleAboutDetails[2].details.slice(294, 600)}</p>
            </div>
          </div>
          {/* right side */}
          <div className="lg:w-[40%] flex justify-center lg:justify-end gap-x-4 ">
            <Image
              className="w-[100%] h-[450px] rounded-lg"
              width={1000}
              height={1000}
              src={singleAboutDetails[2].image}
              alt=""
            />
          </div>
        </div>
        {/* Attention To Details */}
        <div className="flex flex-col gap-4 md:gap-8 lg:flex-row-reverse  lg:justify-between my-5 lg:py-20">
          {/* left side */}
          <div className="lg:w-[50%] flex flex-col justify-center text-center lg:text-left">
            <h2 className="text-[#0F172A] text-[32px] font-bold font-Raleway text-center lg:text-left">
              {singleAboutDetails[3].title}
            </h2>
            <div className="text-[#334155] text-[18px] space-y-5 pt-5">
              <p>{singleAboutDetails[3].details.slice(0, 294)}</p>
              <p>{singleAboutDetails[3].details.slice(294, 600)}</p>
            </div>
          </div>
          {/* right side */}
          <div className="lg:w-[40%] flex justify-center lg:justify-start gap-x-4 ">
            <Image
              className="w-[100%] h-[450px] rounded-lg"
              width={1000}
              height={1000}
              src={singleAboutDetails[3].image}
              alt=""
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AboutUsContent;
