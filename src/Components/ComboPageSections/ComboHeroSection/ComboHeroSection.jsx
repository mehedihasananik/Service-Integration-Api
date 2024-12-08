"use client";
import React from "react";
import ServiceList from "./ComboServiceList";
import { Link } from "react-scroll";

const ComboHeroSection = () => {
  const handleSmoothScroll = (e) => {
    e.preventDefault();

    const href = e.target.getAttribute("href");

    if (href && href.startsWith("#")) {
      const target = document.querySelector(href);

      if (target) {
        const targetPosition = target.offsetTop;
        const startPosition = window.scrollY;
        const distance = targetPosition - startPosition;
        const duration = 1500; // Duration in milliseconds (1 second)
        let startTime = null;

        const ease = (t, b, c, d) => {
          // Ease-in-out function
          t /= d / 2;
          if (t < 1) return (c / 2) * t * t + b;
          t--;
          return (-c / 2) * (t * (t - 2) - 1) + b;
        };

        const animation = (currentTime) => {
          if (!startTime) startTime = currentTime;
          const timeElapsed = currentTime - startTime;
          const run = ease(timeElapsed, startPosition, distance, duration);

          window.scrollTo(0, run);

          if (timeElapsed < duration) {
            requestAnimationFrame(animation);
          }
        };

        requestAnimationFrame(animation);
      }
    }
  };

  return (
    <div className="max-w-[1520px] mx-auto px-[6%] md:px-[4%] xl:px-[8%] 4xl:px-[4%]">
      {/* main section */}
      <div className="hidden lg:flex justify-center relative top-8">
        <img src="/assets/comboshape.png" alt="" className="max-w-full" />
      </div>
      <div className="flex md:mt-[15%] lg:mt-[0%] flex-col xl:flex-row justify-between text-white items-center h-auto md:h-[60vh] space-y-0 md:space-y-0">
        {/* left side */}
        <div className="text-center md:text-left space-y-0 md:space-y-6 px-4 md:px-0">
          <div>
            <h3 className="text-[18px] lg:text-[24px] md:pb-4 font-semibold pt-5 md:pt-0 font-Inter">
              <span className="text-primary">All-In-One</span>{" "}
              <span className="text-[#BDCEFF]">Creative Combo</span>
            </h3>
            <h1 className="text-[25px] font-Poppins font-semibold md:text-[25px] lg:text-[38px] xxl:text-[52px] w-full md:w-[100%] lg:w-[100%] xll:leading-[68px] ">
              <span className="text-primary">Web </span> Design, Development,
              SEO, Content, And <span className="text-primary">Logo </span>
            </h1>

            <p className="text-[15px] md:text-[24px] lg:text-[20px]  xxl:text-[20px] py-4 md:py-6 w-full md:w-[100%] mx-auto md:mx-0 font-Inter">
              Get everything you need from website design, development, SEO,
              branding, logos, social media posts, and content writing in one
              unbeatable combo!
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-4 md:gap-x-10 justify-center md:justify-start">
            <div className="flex justify-center md:justify-start ">
              <Link
                to="pricing"
                smooth={true}
                duration={1500}
                onClick={handleSmoothScroll} // Add the click handler
                className="flex justify-center items-center bg-white whitespace-nowrap cursor-pointer text-[#0A2C8C] w-[140px] md:w-[100%] lg:w-[100%] text-[14px] md:text-[18px] px-4 md:px-10 lg:px-8 py-3 md:py-1 lg:py-2 font-semibold rounded-md font-Inter transition-all duration-300 transform hover:shadow-[0px_4px_6px_rgba(0,0,0,0.1)] hover:bg-[#F0F0F0] hover:drop-shadow-lg"
              >
                See Pricing
              </Link>
            </div>
            <div className="hidden lg:flex justify-center">
              <img
                src="/assets/FrameClient.png"
                alt="Client Frame"
                className="w-[100%] h-[100%]"
              />
            </div>
            <div className="flex lg:hidden justify-center mt-2">
              <img
                src="/assets/FrameClientSm.png"
                alt="Client Frame"
                className="w-[262px] h-[50px]"
              />
            </div>
          </div>
        </div>

        {/* right side */}

        <div className=" hidden lg:block w-[100%] md:w-[140%] lg:w-[80%] xl:w-[80%] 4xl:w-[70%] px-4 md:px-0 relative lg:right-[-7%] xl:right-[-14%] lg:top-[10%] lg:left-[30%] xl:left-[10%] xxl:left-[15%]  xl:top-[14%] 4xl:top-[0%] 3xl:left-[20%]">
          {/* Replace the image with ServiceList component */}
          <div className="bg-cover bg-center w-full mx-auto h-[600px]">
            {/* Render the ServiceList component here */}
            <ServiceList />
          </div>
        </div>

        <div className="w-[100%]  block lg:hidden md:w-[140%] lg:w-[80%] xl:w-[80%] 4xl:w-[70%] px-4 md:px-0 relative lg:right-[-7%] xl:right-[-5%]">
          <div className="relative lg:top-5">
            {/* <div className="hidden md:block">
              <img
                className="w-full  mx-auto "
                src="/assets/landingservices1.png"
                alt="Landing Services"
              />
            </div> */}
            <div>
              <img
                className="w-[332px]  mx-auto block  "
                src="/assets/landingservices3.png"
                alt="Landing Services"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComboHeroSection;
