"use client";
import ComboServiceList from "@/Components/ComboPageSections/ComboHeroSection/ComboServiceList";
import ComboServiceListSm from "@/Components/ComboPageSections/ComboHeroSection/ComboServiceListSm";
import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import SalesStats from "./SalesStats";

const SalesHeroSection = () => {
  const [currentPath, setCurrentPath] = useState("");
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

  useEffect(() => {
    // Use window.location.pathname to get the current route
    const path = window?.location?.pathname.replace(/\/$/, ""); // Remove trailing slash
    setCurrentPath(path);
  }, []);

  return (
    <div>
      <div className="hidden xl:block">
        <div className="max-w-[1520px] mx-auto px-[6%] md:px-[4%] xl:px-[8%] 4xl:px-[4%]">
          <div className="flex md:mt-[15%] lg:mt-[0%] flex-col xl:flex-row justify-between text-white items-center h-auto md:h-[60vh] space-y-0 md:space-y-0">
            {/* left side */}
            <div className="w-[60%] text-center md:text-left space-y-0 md:space-y-6 px-4 md:px-0 pt-[15%]">
              <div className=" ">
                <div className="flex gap-x-4 ">
                  <span className="font-Oswald capitalize  text-[114px] font-bold leading-[130px]">
                    {" "}
                    WEBSITE
                  </span>{" "}
                  <img src="/assets/star.svg" alt="" />
                </div>{" "}
                <div className=" capitalize flex gap-x-8  text-[114px] font-bold leading-[130px]">
                  <span className="font-Oswald ">COMBO</span>{" "}
                  <span className="font-Oswald ">OFFER</span>
                </div>
              </div>
              <div>
                <p
                  style={{ color: "rgba(255, 255, 255, 0.83)" }}
                  className="text-[15px] md:text-[18px] lg:text-[18px] font-medium leading-[27px] font-Inter"
                >
                  Get everything you need from website design, development, SEO,
                  branding, logos, social media posts, and content writing in
                  one unbeatable combo!
                </p>
              </div>
              <div className="flex flex-col md:flex-row gap-4 md:gap-x-10 justify-center md:justify-start">
                <div className=" ">
                  <Link
                    to="pricing"
                    smooth={true}
                    duration={1500}
                    onClick={handleSmoothScroll} // Add the click handler
                    className="flex justify-center items-center bg-white whitespace-nowrap cursor-pointer text-[#001246]   hover:bg-transparent border hover:text-white hover:border-white w-[140px] md:w-[100%] lg:w-[100%] text-[14px] md:text-[14px] px-4 md:px-10 lg:px-12 py-3 md:py-1 lg:py-3 font-semibold  font-Inter transition-all duration-300 transform hover:shadow-[0px_4px_6px_rgba(0,0,0,0.1)] hover:bg-[#F0F0F0] hover:drop-shadow-lg leading-[14px]"
                  >
                    See Pricing
                  </Link>
                </div>
                <div className="hidden lg:flex justify-center">
                  <img
                    src="/assets/FrameClientSales.svg"
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
            <div className="w-[50%]"></div>
          </div>
        </div>
        <div className="absolute bottom-3 left-0 right-0">
          <SalesStats />
        </div>
      </div>
      <div className="block xl:hidden">
        <div className="flex md:px-[10%] md:mt-[15%] lg:mt-[0%] flex-col xl:flex-row justify-between text-white items-center h-auto md:h-[60vh] space-y-0 md:space-y-0">
          {/* left side */}
          <div className="text-center md:text-left space-y-0 md:space-y-6 px-4 md:px-0">
            <div>
              <h1 className="text-[25px] font-Oswald font-semibold md:text-[25px] lg:text-[38px] xxl:text-[52px] w-full md:w-[100%] lg:w-[100%] xll:leading-[68px] ">
                Website combo offer
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
                  className=" bg-white whitespace-nowrap cursor-pointer text-[#0A2C8C]  hover:bg-transparent border hover:text-white hover:border-white w-[180px] md:w-[100%] lg:w-[100%] text-[14px] md:text-[18px] px-10 md:px-10 lg:px-8 py-3 md:py-1 lg:py-2 font-semibold rounded-md font-Inter transition-all duration-300 transform hover:shadow-[0px_4px_6px_rgba(0,0,0,0.1)] hover:bg-[#F0F0F0] hover:drop-shadow-lg"
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

          <div className=" xl:hidden py-8 ">
            <div className="flex justify-center">
              <img
                className="w-[100%] md:w-[40%] lg:w-[50%]"
                src="/assets/panda.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesHeroSection;
