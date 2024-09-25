import Image from "next/image";
import Link from "next/link";
import React from "react";
import GlobalButtonColored from "../GlobalButton/GlobalButtonColored";
import GlobalButtonHovered from "../GlobalButton/GlobalButtonHovered";

const AppBanner = () => {
  return (
    <div className=" h-full pt-8 md:pt-0 lg:min-h-[80vh] flex  justify-center items-center">
      <div className="container mx-auto px-0 lg:px-8">
        <div className="flex flex-col-reverse md:flex-row items-center md:items-start gap-8 md:gap-12">
          <div className="w-full md:w-1/2 order-2 md:order-1 text-center md:text-left ">
            <p className="text-[#173792] font-semibold mb-3 sm:mb-4 text-lg sm:text-xl md:text-2xl">
              Join 1 Million users worldwide!
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold text-gray-900 leading-tight sm:leading-tight md:leading-tight lg:leading-[1.2]">
              Welcome to{" "}
              <span className="text-[#FF693B] relative">Envobyte</span>: Your
              One-Stop Solution for Custom App Development
            </h1>
            <p className="text-gray-700 text-lg sm:text-xl md:text-2xl mb-8 mt-6 sm:mt-8 max-w-2xl mx-auto md:mx-0">
              Envobyte seamlessly develops your digital idea into a fully
              functional, user-friendly mobile application. From Android app
              development to UX/UI design of the highest class, our team strives
              to deliver the most innovative solution according to your business
              goals.
            </p>
            <div className="flex flex-col xs:flex-row  justify-center lg:justify-start gap-4 md:gap-6 lg:py-6">
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
            <div className="relative w-full md:max-w-full   aspect-[3/2] rounded-2xl overflow-hidden shadow-xl">
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
