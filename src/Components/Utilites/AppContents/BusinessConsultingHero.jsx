import React from "react";
import Image from "next/image";
import GlobalButtonColored from "../GlobalButton/GlobalButtonColored";
import GlobalButtonHovered from "../GlobalButton/GlobalButtonHovered";

const BusinessConsultingHero = () => {
  return (
    <div
      id="businessConsulting"
      className="bg-gradient-to-br from-blue-600 to-blue-700 py-20 px-4 sm:px-6 lg:px-8 rounded-[3px]"
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Left column */}
        <div className="lg:w-1/2 text-white mb-12 lg:mb-0 lg:pr-12">
          <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            Expert Business
            <br />
            <span className="text-[#FF693B]">Consulting App</span>
          </h1>
          <p className="text-xl mb-8 leading-relaxed text-blue-100">
            Discover unparalleled expertise with AppSuite's business consulting
            services. Our team offers strategic insights and tailored solutions
            to help your business thrive. Whether you're looking to optimize
            operations or drive growth, we have the skills and experience to
            guide you toward success.
          </p>
          <div className="flex flex-col xs:flex-row justify-center lg:justify-start gap-4 md:gap-6 py-6">
            <GlobalButtonColored
              path="https://play.google.com/store/apps/dev?id=8045723784298228141"
              title="Playstore"
              className="btn btn-primary md:w-[30%] text-center border-none"
            />
            <GlobalButtonHovered
              path="/services"
              title="Our Services"
              className="btn btn-secondary md:w-[30%] text-center bg-[#fff] border-none"
            />
          </div>
        </div>

        {/* Right column */}
        <div className="lg:w-1/2 flex justify-center lg:justify-center">
          <div className="relative w-full max-w-md aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/assets/appsuite.jpeg"
              alt="Business Consulting App"
              layout="fill"
              objectFit="cover"
              className="rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessConsultingHero;
