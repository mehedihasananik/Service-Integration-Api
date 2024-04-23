import Container from "@/Components/Container/Container";
import RelevantServices from "@/Components/Utilites/RelevantServices/RelevantServices";
import Image from "next/image";
import React from "react";

const PortfolioDetails = ({ singlePortfolioItem }) => {
  return (
    <div>
      <div className="md:py-10 md:pb-5">
        <Container>
          {singlePortfolioItem.map((portfolio) => {
            console.log(portfolio);
            const { title, details, image, caption_text } = portfolio;
            return (
              <div key={portfolio.id}>
                {/* title */}
                <div className="text-center pt-7 md:pt-0">
                  <h1 className=" text-[20px] md:text-[30px] lg:text-[54px] font-Raleway font-bold lg:leading-[63.4px] text-[#000000] ">
                    {portfolio?.title}
                  </h1>
                </div>
                <div>
                  <p className="text-[18px] font-Roboto text-[#333333] md:leading-[27px] text-left py-5">
                    {portfolio?.details}
                  </p>
                </div>
                <div className="w-[100%]">
                  <Image
                    className="w-full h-[75vh] rounded-md"
                    width={1000}
                    height={1000}
                    src={portfolio?.image}
                    alt="image"
                  />
                </div>
                <div className="text-center py-4 md:pt-5 md:py-0">
                  <h3 className="text-gray-500 text-[18px] md:text-[20px]  font-Raleway font-semibold">
                    {portfolio?.caption_text}
                  </h3>
                </div>
              </div>
            );
          })}
        </Container>
      </div>
      <div className="text-center bg-[#FF693B08] py-8 md:py-14 md:pb-16">
        <h3 className="text-[20px] md:text-[32px] lg:text-[54px] text-[#111111] lg:leading-[101px] font-semibold">
          Let&apos;s Choose Us for Your Next Project
        </h3>
        <button className="bg-[#FF693B] border border-[#FF693B] text-[18px] font-Poppins text-white px-5 py-2 md:px-10 md:py-3 rounded-lg mt-3 transition-all duration-300 hover:bg-[#fff] hover:text-[#FF693B]">
          Contact Us
        </button>
      </div>
      <div className="bg-[#F8FAFC] py-5 md:py-10">
        <Container>
          <RelevantServices />
        </Container>
      </div>
    </div>
  );
};

export default PortfolioDetails;
