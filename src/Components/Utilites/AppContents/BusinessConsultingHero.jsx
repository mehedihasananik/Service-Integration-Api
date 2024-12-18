import Container from "@/Components/Container/Container";
import React from "react";
import GlobalButtonColored from "../GlobalButton/GlobalButtonColored";

const BusinessConsultingHero = ({ business }) => {
  return (
    <div
      id="businessconsulting"
      className="businessConsultingHero pb-10 lg:pb-0"
    >
      <div className="max-w-[1450px] mx-auto px-[6%] md:px-[6%] lg:px-[2%] xl:px-[8%] 4xl:px-[4%] lg:h-[80vh]  flex items-center ">
        <div className="flex flex-col-reverse gap-y-7 lg:gap-y-0 lg:flex-row items-center justify-center w-[100%] overflow-hidden">
          <div className="w-[100%] lg:w-[50%] lg:pt-10">
            <h2 className="text-[#0A2C8C] font-Poppins text-[20px] md:text-[30px] lg:text-[30px] xxl:text-[62px] font-bold xxl:leading-[68px] capitalize">
              {business.title}
            </h2>
            <div className="text-[#0A2C8C] whitespace-pre-wrap font-Inter font-normal text-[18px] lg:text-[24px] lg:leading-[36px] lg:tracking-[-0.48px] pt-3 lg:pt-5 w-[100%]  xxl:w-[112%] lg:text-justify ]">
              {business.description}
            </div>
            <div className="flex flex-col xs:flex-row justify-center lg:justify-start gap-4 md:gap-6 py-2 mt-[3%]">
              <GlobalButtonColored
                path="/services"
                title="Our Services"
                className="font-Inter flex items-center font-semibold md:leading-[20px] text-[14px] md:text-[16px] whitespace-nowrap px-4 py-2.5 md:px-11 md:py-3.5 rounded-lg transition-all duration-300 text-white bg-[#FF693B] border border-[#FF693B] hover:bg-white hover:text-[#FF693B]"
              />
            </div>
          </div>
          <div className="w-[100%] lg:w-[50%] relative left-[-12%] lg:left-[0%]">
            <div className="relative">
              <img
                src="/assets/businessConsultingLeft.png"
                alt="Business Consulting Graphic"
                className="w-full"
              />
              <div className="consulting_engine"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessConsultingHero;
