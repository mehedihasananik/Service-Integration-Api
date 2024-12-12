import React from "react";
import Image from "next/image";
import GlobalButtonColored from "../GlobalButton/GlobalButtonColored";

const BusinessConsultingHero = () => {
  return (
    <div className="  max-w-[1520px] md:mx-auto md:px-[4%] xl:px-[8%] 4xl:px-[4%]">
      <div
        id="businessconsulting"
        className="bg-secondary py-8 md:py-20 px-4 sm:px-6 lg:px-8 rounded-lg app_space md:mt-6"
      >
        <div className=" mx-auto flex flex-col lg:flex-row items-center justify-between">
          {/* Left column */}
          <div className="lg:w-1/2 lg:mb-0 lg:pr-12">
            <h1 className="app_heading text-white   text-center md:text-left font-extrabold mb-6 leading-tight">
              Expert Business
              <br />
              Consulting App
            </h1>

            <p className="text-xl mb-8 leading-relaxed text-blue-100">
              According to recent studies, businesses that adopt mobile
              solutions see up to 25% improvement in operational efficiency.
              Plus, 65% of users report that mobile apps provide greater
              convenience in accessing business services than traditional
              methods. If you&apos;re seeking customized business solutions, our
              team is ready to develop a custom app tailored to your needs.
            </p>
            <div className="flex flex-col xs:flex-row justify-center lg:justify-start gap-4 md:gap-6 py-2">
              <GlobalButtonColored
                path="/services"
                title="Our Services"
                className="btn btn-primary w-[50%] md:w-[30%] text-center  border-none"
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
    </div>
  );
};

export default BusinessConsultingHero;
