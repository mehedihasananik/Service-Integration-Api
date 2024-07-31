import Image from "next/image";
import React from "react";
import { HiArrowSmallRight } from "react-icons/hi2";

const PortfolioPageItems = ({ portfolio }) => {
  const truncateText = (text, limit) => {
    if (text.length <= limit) return text;
    return text.slice(0, limit) + "...";
  };
  // console.log(portfolio);

  return (
    <>
      <div className="hidden lg:block group rounded-[10px] overflow-hidden border border-[#CBD5E1] ">
        <div className="portfolio-bgHover h-auto lg:h-[400px]  w-[100%]  cursor-pointer flex flex-col lg:flex-row bg-[#FFFFFF] rounded-[10px]">
          <div className="w-1/2 h-full">
            <Image
              width={800}
              height={500}
              className="4xl:max-w-[345px] h-[400px]  rounded-l-[10px]"
              src={portfolio?.image}
              alt=""
            />
          </div>

          <div className="w-full lg:w-1/2 p-4  mt-0 lg:p-6 flex flex-col lg:justify-center 4xl:justify-center items-center">
            <div className="text-center w-full">
              <h4 className="text-[14px] text-[#999999] mb-2 portfolio-textHover">
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
              <div className="text-[16px] font-bold font-Raleway text-[#333333] portfolio-textHover line-clamp-3 mb-3">
                {truncateText(portfolio?.heading, 120)}
              </div>
              <p className="text-[14px] text-[#666666] portfolio-textHover mb-4">
                {portfolio.portfolio_summery.length > 300
                  ? portfolio.portfolio_summery.slice(0, 300) + "..."
                  : portfolio.portfolio_summery}
              </p>
              <div className="flex justify-center items-center gap-2 text-[#FF693B] font-bold portfolio-textHover">
                <button className="text-[14px]">Read More</button>
                <span className="w-[19px]">
                  <HiArrowSmallRight className="text-xl" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="block lg:hidden group rounded-[10px] overflow-hidden border border-[#CBD5E1]">
        <div className="portfolio-bgHover h-auto md:h-[650px] lg:h-[400px] w-full cursor-pointer flex flex-col lg:flex-row bg-[#FFFFFF] rounded-[10px]">
          <div className="w-full lg:w-1/2 h-[200px] md:h-[300px] lg:h-full">
            <Image
              width={800}
              height={500}
              className="w-full h-full object-cover rounded-t-[10px] lg:rounded-l-[10px] lg:rounded-tr-none"
              src={portfolio?.image}
              alt=""
            />
          </div>

          <div className="w-full lg:w-1/2 p-4 md:p-5 lg:p-6 flex flex-col justify-start md:justify-center items-center h-[calc(100%-200px)] md:h-[300px] lg:h-full">
            <div className="text-center w-full">
              <h4 className="text-[14px] text-[#999999] mb-2 portfolio-textHover md:mt-10 lg:mt-0">
                {portfolio?.service_name.slice(0, 3).map((service, index) => (
                  <span key={index}>
                    {index > 0 && ", "}
                    {service}
                  </span>
                ))}
              </h4>
              <div className="text-[16px] md:text-[18px] font-bold font-Raleway text-[#333333] portfolio-textHover line-clamp-3 mb-3">
                {truncateText(portfolio?.heading, 120)}
              </div>
              <p className="text-[14px] md:text-[15px] text-[#666666] portfolio-textHover mb-4">
                {truncateText(portfolio.text, 300)}
              </p>
              <div className="flex justify-center items-center gap-2 text-[#FF693B] font-bold portfolio-textHover">
                <button className="text-[14px] md:text-[15px]">
                  Read More
                </button>
                <span className="w-[19px]">
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
