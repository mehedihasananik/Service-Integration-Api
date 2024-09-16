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
              Join 45k users worldwide!
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight sm:leading-tight md:leading-tight lg:leading-[1.2]">
              Connect with{" "}
              <span className="text-[#FF693B] relative">
                Friends
                <span className="absolute bottom-0 left-0 w-full h-3 bg-blue-200 -z-10 transform -skew-x-12"></span>
              </span>{" "}
              Share <br className="hidden sm:inline" /> your{" "}
              <span className="text-[#173792] relative">
                Thoughts
                <span className="absolute bottom-0 left-0 w-full h-3 bg-indigo-200 -z-10 transform -skew-x-12"></span>
              </span>
            </h1>
            <p className="text-gray-700 text-lg sm:text-xl md:text-2xl mb-8 mt-6 sm:mt-8 max-w-2xl mx-auto md:mx-0">
              Experience a new way of connecting in our vibrant online
              community. Share ideas, create memories, and build lasting
              friendships.
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
            <div className="relative w-full max-w-[300px] sm:max-w-[400px] md:max-w-full  h-full">
              <Image
                src="/assets/9e5f0fe0-dc12-4146-bac0-05c3f72d.png"
                width={700}
                height={700}
                alt="Friends connecting online"
                className="rounded-3xl w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppBanner;
