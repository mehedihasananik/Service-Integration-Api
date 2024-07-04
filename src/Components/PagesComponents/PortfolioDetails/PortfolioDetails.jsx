import Container from "@/Components/Container/Container";
import RelevantPortfolio from "@/Components/Utilites/RelevantServices/RelevantPortfolio";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const PortfolioDetails = ({ singlePortfolioItem }) => {
  const { basic, details, relevant } = singlePortfolioItem;

  return (
    <div>
      <div className="md:py-10 md:pb-5">
        <Container>
          <div className="text-center pb-3 lg:pb-5  md:pt-0">
            <h1 className=" text-[20px] md:text-[30px] lg:text-[54px] font-Raleway font-bold lg:leading-[63.4px] text-[#000000] ">
              {basic?.title}
            </h1>
          </div>
          <div>
            <p className="text-[18px] text-justify font-Roboto text-[#333333] md:leading-[27px] md:text-left py-3 md:pt-0 md:py-5">
              {basic?.details}
            </p>
          </div>

          {details.map((portfolio, index) => {
            //console.log(portfolio);
            const { title, details, image, caption_text } = portfolio;
            // console.log(title);
            return (
              <div key={portfolio?.id}>
                {/* title */}

                <div className="w-[100%]">
                  <Image
                    className="md:w-full md:h-[75vh]"
                    alt="image"
                    width={1000}
                    height={1000}
                    src={image}
                  />
                </div>
                <div className="text-center py-4  md:py-5">
                  <h3 className="text-gray-500 text-[18px] md:text-[20px]  font-Raleway font-semibold  md:pb-8">
                    {caption_text}
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
        <Link
          href={"/#projectDetails"}
          className="bg-[#FF693B] border border-[#FF693B] text-[18px] font-Poppins text-white px-5 py-2 md:px-10 md:py-3 rounded-lg mt-3 transition-all duration-300 hover:bg-[#fff] hover:text-[#FF693B]"
        >
          Contact Us
        </Link>
      </div>
      <div className="bg-[#F8FAFC] py-5 md:py-10">
        <Container>
          <RelevantPortfolio singlePortfolioItem={singlePortfolioItem} />
        </Container>
      </div>
    </div>
  );
};

export default PortfolioDetails;
