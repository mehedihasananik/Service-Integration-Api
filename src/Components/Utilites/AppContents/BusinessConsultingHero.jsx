import Container from "@/Components/Container/Container";
import React from "react";
import GlobalButtonColored from "../GlobalButton/GlobalButtonColored";

const BusinessConsultingHero = ({ business }) => {
  return (
    <div className="businessConsultingHero">
      <div className="max-w-[1450px] mx-auto px-[6%] md:px-[4%] xl:px-[8%] 4xl:px-[4%] h-[90vh]  flex items-center ">
        <div className="flex flex-col md:flex-row items-center justify-center w-[100%]">
          <div className="w-[60%]">
            <h2 className="text-[#0A2C8C] font-Poppins text-[25px] md:text-[62px] font-bold md:leading-[68px] capitalize">
              Expert Business Consulting App
            </h2>
            <div className="text-[#0A2C8C] font-Inter font-normal text-[24px] leading-[36px] tracking-[-0.48px] pt-5 md:pt-10">
              <span>
                <p>
                  {" "}
                  According to recent studies, businesses that adopt mobile
                  solutions see up to 25% improvement in operational efficiency.
                </p>{" "}
              </span>
              <br />
              <p>
                {" "}
                Plus, 65% of users report that mobile apps provide greater
                convenience in accessing business services than traditional
                methods. If you&apos;re seeking customized business solutions,
                our team is ready to develop a custom app tailored to your
                needs.
              </p>
            </div>
            <div className="flex flex-col xs:flex-row justify-center lg:justify-start gap-4 md:gap-6 py-2 mt-[3%]">
              <GlobalButtonColored
                path="/services"
                title="Our Services"
                className="font-Inter flex items-center font-semibold md:leading-[20px] text-[14px] md:text-[16px] whitespace-nowrap px-4 py-2.5 md:px-11 md:py-3.5 rounded-lg transition-all duration-300 text-white bg-[#FF693B] border border-[#FF693B] hover:bg-white hover:text-[#FF693B]"
              />
            </div>
          </div>
          <div className="w-[40%]"></div>
        </div>
      </div>
    </div>
  );
};

export default BusinessConsultingHero;
