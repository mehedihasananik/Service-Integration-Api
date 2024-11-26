import Container from "@/Components/Container/Container";
import React from "react";

const ComboHeroSection = () => {
  return (
    <Container>
      {/* main section */}
      <div className="flex justify-center relative top-8">
        <img src="/assets/comboshape.png" alt="" className="max-w-full" />
      </div>
      <div className="flex flex-col md:flex-row justify-between text-white items-center h-auto md:h-[60vh] space-y-8 md:space-y-0">
        {/* left side */}
        <div className="text-center md:text-left space-y-4 md:space-y-6 px-4 md:px-0">
          <div>
            <h3 className="text-[18px] md:text-[24px] font-Poppins">
              <span className="text-primary">All-in-One</span> Creative Combo
            </h3>
            <h1 className="text-[25px] md:text-[35px] lg:text-[48px] xl:text-[62px] leading-tight">
              Content, <span className="text-primary">Logo</span>, Social <br />{" "}
              and <span className="text-primary">Web</span> Design!
            </h1>
            <p className="text-[15px] md:text-[18px] py-4 md:py-6 w-full md:w-[75%] mx-auto md:mx-0">
              Get everything you need: website design (development), branding,
              logos, social media posts, and content writing in one unbeatable
              combo!
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-x-10 justify-center md:justify-start">
            <button className="bg-white text-[#0A2C8C] px-8 py-2 font-bold rounded-md">
              Read More
            </button>
            <div className="flex justify-center">
              <img
                src="/assets/FrameClient.png"
                alt="Client Frame"
                className="w-[100%] h-[100%]"
              />
            </div>
          </div>
        </div>
        {/* right side */}
        <div className="w-full md:w-[100%] lg:w-[50%] px-4 md:px-0 relative md:right-[-7%] xl:right-[-5%]">
          <div className="relative lg:top-5">
            <img
              className="w-full max-w-sm md:max-w-full mx-auto"
              src="/assets/landingservices.png"
              alt="Landing Services"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ComboHeroSection;
