import Image from "next/image";
import React from "react";
import { HiArrowSmallRight } from "react-icons/hi2";

const PortfolioPageItems = ({ portfolio }) => {
  return (
    <>
      <div className="group rounded-lg overflow-hidden border border-[#CBD5E1] ">
        <div className="portfolio-bgHover w-full cursor-pointer flex flex-col xl:flex-row bg-white rounded-lg">
          <div className="w-full xl:w-1/2">
            <div className="relative  h-[370px] w-[370px] md:w-auto overflow-hidden">
              <Image
                src={portfolio?.image}
                fill
                style={{ objectFit: "fill" }}
                quality={80}
                className="rounded-t-lg xl:rounded-l-lg lg:rounded-tr-none"
                alt={portfolio?.alt_text || "Portfolio image"}
              />
            </div>
          </div>

          <div className="w-full xl:w-1/2 p-4 lg:p-6 flex flex-col justify-center items-center">
            <div className="text-center w-full">
              <h4 className="text-headingCaption text-grayish mb-2 portfolio-textHover">
                {portfolio?.service_name.slice(0, 3).map((service, index) => (
                  <span key={index}>
                    {index > 0 && (
                      <>
                        ,<br />
                      </>
                    )}
                    {service}
                  </span>
                ))}
              </h4>
              <h2 className="text-headingText lg:text-subheading font-bold font-Raleway text-[#333333] portfolio-textHover line-clamp-2 lg:line-clamp-3 mb-3">
                {portfolio?.heading}
              </h2>
              <p className="text-sm text-grayish portfolio-textHover mb-4 line-clamp-4 md:line-clamp-5 lg:line-clamp-[7]">
                {portfolio.portfolio_summery}
              </p>
              <div className="flex justify-center items-center gap-2 text-primary font-bold portfolio-textHover">
                <button className="text-sm lg:text-base">Read More</button>
                <span className="w-5">
                  <HiArrowSmallRight className="text-xl" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioPageItems;
