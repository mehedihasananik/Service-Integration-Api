import Image from "next/image";
import Link from "next/link";
import React from "react";
import GlobalButtonColored from "../GlobalButton/GlobalButtonColored";
import GlobalButtonHovered from "../GlobalButton/GlobalButtonHovered";

const AppBanner = () => {
  return (
    <div className=" min-h-[80vh] flex  justify-center items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse md:flex-row items-center md:items-start gap-8 md:gap-12">
          <div className="w-full md:w-1/2 order-2 md:order-1 text-center md:text-left ">
            <p className="text-[#173792] font-semibold mb-3 sm:mb-4 text-lg sm:text-xl md:text-2xl">
              Join 1 Million users worldwide!
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold text-gray-900 leading-tight sm:leading-tight md:leading-tight lg:leading-[1.2]">
              Unleash
              <span className="text-[#FF693B] relative"> Digital</span>
              <br className="hidden sm:inline" /> Innovation & Creativity with{" "}
              <span className="text-[#173792] relative">
                Apps
                <span className="absolute bottom-0 left-0 w-full h-3 bg-indigo-200 -z-10 transform -skew-x-12"></span>
              </span>
            </h1>
            <p className="text-gray-700 text-lg sm:text-xl md:text-2xl mb-8 mt-6 sm:mt-8 max-w-2xl mx-auto md:mx-0">
              Envobyte brings you great apps to make your life easier and more
              fun. Our apps help you do things better, from work to play. Try
              our apps today and see how they can improve your daily life!
            </p>
            <div className="flex flex-col xs:flex-row  justify-center lg:justify-start gap-4 md:gap-6 py-6">
              <GlobalButtonColored
                path="https://play.google.com/store/apps/dev?id=8045723784298228141"
                title="Playstore"
                className="btn btn-primary md:w-[30%] text-center"
              />
              <GlobalButtonHovered
                path="/services"
                title="Our Services"
                className="btn btn-secondary md:w-[30%] text-center"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 order-1 md:order-2 flex justify-center md:justify-end mb-8 md:mb-0 pt-[5%]">
            <div className="relative w-full max-w-[300px] sm:max-w-[400px] md:max-w-full aspect-[3/2] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/assets/app_banner.png"
                alt="Friends connecting online"
                layout="fill"
                objectFit="cover"
                className="rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppBanner;
