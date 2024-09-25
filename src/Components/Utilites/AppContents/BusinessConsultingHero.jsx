import React from "react";
import Image from "next/image";
import GlobalButtonColored from "../GlobalButton/GlobalButtonColored";
import GlobalButtonHovered from "../GlobalButton/GlobalButtonHovered";

const BusinessConsultingHero = () => {
  return (
    <div
      id="businessconsulting"
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
            Unlock unparalleled knowledge with the range of business consulting
            services at Envobyte. A diversified team at Envobyte equips
            businesses with strategic insights and customized solutions. Be it
            optimization of operations or driving growth, we have the skill and
            experience to lead you to success.
          </p>
          <div className="flex flex-col xs:flex-row justify-center lg:justify-start gap-4 md:gap-6 py-6">
            <GlobalButtonColored
              path="/services"
              title="Our Services"
              className="btn btn-primary md:w-[30%] text-center  border-none"
            />
          </div>
        </div>

        {/* Right column */}
        <div className="lg:w-1/2 flex justify-center lg:justify-center">
          <div className="relative w-full max-w-md aspect-[3/4]  overflow-hidden shadow-xl">
            <Image
              src="/assets/appsuite.webp"
              alt="Business Consulting App"
              layout="fill"
              objectFit="cover"
              className="rounded-sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessConsultingHero;
