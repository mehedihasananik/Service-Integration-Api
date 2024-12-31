import React from "react";

const AnswerSection = () => {
  return (
    <div className="anserSection pt-[5%]">
      <div className="text-center text-white">
        <h3>More details</h3>
        <h2>Get Your Answers</h2>
      </div>
      <div className="flex justify-center overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center gap-y-3 lg:gap-y-0 lg:gap-x-8 pt-[5%]">
          <div
            style={{
              border: "1px solid #FFF",
              background: "rgba(255, 255, 255, 0.74)",
              backdropFilter: "blur(36px)",
            }}
            className=" lg:w-[370px]  py-[8%] shadow-lg"
          >
            <div className="flex justify-center">
              <img
                className="w-[280.982px] h-[275.709px]"
                src="/assets/saleLogo.svg"
                alt=""
              />
            </div>
            <div className="px-[8%]">
              <h2 className=" text-[#001246]  font-Inter text-[20px] lg:text-[30px] font-semibold leading-9 ">
                What is Combo Offer
              </h2>
              <p className=" text-[#002AA3]  font-Inter text-[16px]  font-medium leading-[22px] pb-2 pt-2">
                Get 9 services in one package
              </p>
              <p className=" text-[#424242]  font-Inter text-[16px]  font-normal leading-[24px]">
                You’re getting web design, development, content writing, social
                media kit, custom graphics, and business consultation—all in one
                combo package!
              </p>
            </div>
          </div>
          <div
            style={{
              border: "1px solid #FFF",
              background: "rgba(255, 255, 255, 0.74)",
              backdropFilter: "blur(36px)",
            }}
            className="w-[370px]  py-[8%] shadow-lg"
          >
            <div className="flex justify-center">
              <img
                className="w-[280.982px] h-[275.709px]"
                src="/assets/answer1.svg"
                alt=""
              />
            </div>
            <div className="px-[8%]">
              <h2 className=" text-[#001246]  font-Inter text-[20px] lg:text-[30px] font-semibold leading-9 ">
                What’s Your Benefit
              </h2>
              <p className=" text-[#002AA3]  font-Inter text-[16px]  font-medium leading-[22px] pb-2 pt-2">
                No hassle with best price
              </p>
              <p className=" text-[#424242]  font-Inter text-[16px]  font-normal leading-[24px]">
                A hassle-free process that saves you time, with everything you
                need in one seamless package at an incredibly attractive price.
              </p>
            </div>
          </div>

          <div
            style={{
              border: "1px solid #0A2C8C",
              background: "#0A2C8C",
              backdropFilter: "blur(36px)",
            }}
            className="w-[370px]  py-[8%] shadow-lg"
          >
            <div className="flex justify-center">
              <img
                className="w-[280.982px] h-[275.709px]"
                src="/assets/answer2.svg"
                alt=""
              />
            </div>
            <div className="px-[8%]">
              <h2 className=" text-[#fff]  font-Inter text-[20px] lg:text-[30px] font-semibold leading-9 ">
                What’s Your Benefit
              </h2>
              <p className=" text-[#fff]  font-Inter text-[16px]  font-medium leading-[22px] pb-2 pt-2">
                No hassle with best price
              </p>
              <p className=" text-[#fff]  font-Inter text-[16px]  font-normal leading-[24px]">
                A hassle-free process that saves you time, with everything you
                need in one seamless package at an incredibly attractive price.
              </p>
            </div>
          </div>

          {/* Your content here */}
        </div>
      </div>
    </div>
  );
};

export default AnswerSection;
