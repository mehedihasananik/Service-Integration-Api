"use client";
import ComboContainer from "@/Components/Container/ComboContainer";
import React from "react";

const ComboHeroSection = () => {
  const handleSmoothScroll = (e) => {
    e.preventDefault();
    const target = document.querySelector(e.target.getAttribute("href"));

    if (target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <ComboContainer>
      {/* main section */}
      <div className="hidden lg:flex justify-center relative top-8">
        <img src="/assets/comboshape.png" alt="" className="max-w-full" />
      </div>
      <div className="flex md:mt-[15%] lg:mt-[0%] flex-col md:flex-row justify-between text-white items-center h-auto md:h-[60vh] space-y-0 md:space-y-0">
        {/* left side */}
        <div className="text-center  md:text-left space-y-0 md:space-y-6 px-4 md:px-0">
          <div>
            <h3 className="text-[18px] lg:text-[24px]  md:pb-4 font-semibold pt-5 md:pt-0 font-Inter">
              <span className="text-primary">All-In-One</span>{" "}
              <span className="text-[#BDCEFF]">Creative Combo</span>
            </h3>
            <h1 className="text-[25px]  font-Poppins font-semibold md:text-[25px] lg:text-[48px] xl:text-[52px]  w-full md:w-[80%] lg:w-[100%] lg:leading-[68px] ">
              <span className="text-primary">Web </span> Design, Development,
              SEO, Content, And <span className="text-primary">Logo </span>
            </h1>

            <p className="text-[15px] md:text-[24px] py-4 md:py-6 w-full md:w-[100%] mx-auto md:mx-0 font-Inter">
              Get everything you need from website design, development, SEO,
              branding, logos, social media posts, and content writing in one
              unbeatable combo!
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-4 md:gap-x-10 justify-center md:justify-start">
            <div className="flex justify-center md:justify-start ">
              <a
                href="#pricing"
                onClick={handleSmoothScroll} // Add the click handler
                className="flex justify-center items-center bg-white whitespace-nowrap text-[#0A2C8C] w-[50%] md:w-[100%] lg:w-[100%] text-[14px] md:text-[18px] px-4 md:px-10 lg:px-8 py-3 md:py-1 lg:py-2 font-semibold rounded-md font-Inter"
              >
                See Pricing
              </a>
            </div>
            <div className="hidden lg:flex justify-center">
              <img
                src="/assets/FrameClient.png"
                alt="Client Frame"
                className="w-[100%] h-[100%]"
              />
            </div>
            <div className="  flex lg:hidden justify-center mt-2">
              <img
                src="/assets/FrameClientSm.png"
                alt="Client Frame"
                className="w-[80%] md:w-[100%] h-[100%] md:h-[50px]"
              />
            </div>
          </div>
        </div>
        {/* right side */}
        <div className="w-[100%] md:w-[140%] lg:w-[80%] xl:w-[80%] 4xl:w-[70%] px-4 md:px-0 relative lg:right-[-7%] xl:right-[-5%]">
          <div className="relative lg:top-5">
            <div className="hidden md:block">
              <img
                className="w-full  mx-auto "
                src="/assets/landingservices1.png"
                alt="Landing Services"
              />
            </div>
            <div>
              <img
                className="w-full  mx-auto block md:hidden "
                src="/assets/landingservices3.png"
                alt="Landing Services"
              />
            </div>
          </div>
        </div>
      </div>
    </ComboContainer>
  );
};

export default ComboHeroSection;
