"use client";

import Container from "@/Components/Container/Container";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { HiArrowSmallRight } from "react-icons/hi2";

const PortfolioHomeItems = ({ portfolios, services }) => {
  const [loading, setLoading] = useState(true);
  const [selectedServiceId, setSelectedServiceId] = useState(0);

  useEffect(() => {
    setLoading(false); // Assuming data is already passed as props, set loading to false
  }, []);
  // console.log(services);

  const truncateText = (text, maxWords) => {
    const words = text.split(" ");
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(" ") + "...";
    }
    return text;
  };

  return (
    <div className="md:py-5 lg:pt-20">
      <div className="max-w-[1520px] mx-auto px-[6%] md:px-[4%] lg:px-[2%] 4xl:px-[4%]">
        {/* title */}
        <div className="text-center lg:text-left">
          <h3 className="text-[30px] text-[#0F172A] md:text-[38px] lg:text-[48px] font-bold font-Raleway">
            Our Amazing Portfolio
          </h3>
        </div>
        <div className="flex flex-col gap-5 md:gap-10 justify-center items-center lg:flex-row lg:justify-between py-4 pt-5">
          {/* description */}
          <div>
            <h3 className="text-[16px] text-[#666666]">
              Our beautiful work you need to know!
            </h3>
          </div>
          {/* portfolio buttons  */}
          <div className="flex flex-col lg:flex-row gap-3 md:gap-10 text-[#9E9E9E] text-[16px] lg:text-[16px] ">
            <div className="hidden md:block">
              <div className="flex md:gap-10">
                <button
                  key={0}
                  onClick={() => setSelectedServiceId(0)} // Set selectedServiceId to 0 for "All"
                  className={`text-[#9E9E9E] hover:text-[#FA8D59] font-bold transition-all text-[16px] ${
                    selectedServiceId === 0 && "text-[#FA8D59]" // Add a class to differentiate the active button
                  }`}
                >
                  All
                </button>

                {services.map((service, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedServiceId(service.category_id)}
                    className={`text-[#9E9E9E] hover:text-[#FA8D59] font-bold transition-all text-[16px] ${
                      selectedServiceId === service.category_id &&
                      "text-[#FA8D59]" // Add a class to differentiate the active button
                    }`}
                  >
                    {service.category_name}
                  </button>
                ))}
              </div>
            </div>
            <div className="block md:hidden ">
              <div className="flex justify-center space-x-4 pb-4">
                {services.map((service, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedServiceId(service.category_id)}
                    className="text-[#9E9E9E] hover:text-[#FA8D59] font-bold  transition-all text-[16px]"
                  >
                    {service.category_name}
                  </button>
                ))}
              </div>{" "}
            </div>
          </div>
        </div>
        {/*Portfolio  cards */}
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 justify-between pt-10 pb-5">
            <>
              {portfolios
                ?.filter(
                  (portfolio) =>
                    selectedServiceId === 0 ||
                    portfolio.service_id === selectedServiceId
                )
                .map((portfolio) => (
                  <Link
                    key={portfolio.id}
                    href={`/portfolio/${portfolio.slug}`}
                  >
                    <div className="group border border-[#CBD5E1] rounded-[10px]">
                      <div className="portfolio-bgHover cursor-pointer xxl:space-x-4 4xl:space-x-0 flex flex-col lg:flex-row xll:justify-between bg-[#FFFFFF] rounded-[10px]">
                        <div>
                          <Image
                            width={800}
                            height={262}
                            className="lg:w-[340px] 4xl:w-[332px] lg:h-[450px] 4xl:h-[420px] object-cover rounded-l-[10px]"
                            src={portfolio?.image}
                            alt=""
                          />
                        </div>
                        <div className="flex flex-col justify-center items-center p-3 md:py-0 xll:px-8 2xl:px-12 4xl:px-8">
                          <div className="text-center h-[300px]">
                            <h4 className="text-[14px] text-[#999999] pt-3 pb-3 md:pt-0 md:pb-6 portfolio-textHover ">
                              {portfolio?.service_name[0]?.service_name}
                            </h4>
                            <h3 className="text-[16px] w-[280px] font-bold font-Raleway text-[#333333] portfolio-textHover  ">
                              {(() => {
                                const originalHeading =
                                  portfolio?.heading || "";
                                const truncatedHeading = originalHeading.slice(
                                  0,
                                  145
                                );
                                const words = truncatedHeading.split(" ");
                                const isHeadingTruncated =
                                  originalHeading.length > 146;

                                return (
                                  <>
                                    {words.map((word, index) => (
                                      <React.Fragment key={index}>
                                        {word}
                                        {index === 3 ||
                                        index === 9 ||
                                        index === 12 ? (
                                          <br />
                                        ) : (
                                          " "
                                        )}
                                      </React.Fragment>
                                    ))}
                                    {isHeadingTruncated && "..."}
                                  </>
                                );
                              })()}
                            </h3>
                            <p className="w-[280px] text-center text-[14px] text-[#666666] py-3 portfolio-textHover pt-10">
                              <span>{portfolio.text.slice(0, 195)}...</span>
                            </p>
                          </div>
                          <div className="group flex justify-center items-center gap-2 text-[#FF693B] font-bold mt-10 portfolio-textHover pb-6 lg:pb-0 mt-14">
                            <button className="text-[14px]">Read More</button>
                            <span className="w-[19px] font-bold">
                              <HiArrowSmallRight className="text-xl" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
            </>
          </div>
        </div>

        {/* navigate to portfolio */}
        <div className="flex justify-center py-10">
          <Link
            href={"/portfolio"}
            className="text-[16px] bg-[#FF693B] px-11 py-2.5 md:px-10 md:py-3 text-white rounded-lg border border-[#FF693B]  hover:bg-white hover:text-[#FF693B] transition-all duration-300"
          >
            View All Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PortfolioHomeItems;
