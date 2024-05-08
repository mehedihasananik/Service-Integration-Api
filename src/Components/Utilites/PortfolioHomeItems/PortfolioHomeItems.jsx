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
  console.log(services);

  return (
    <div className="md:py-5 lg:pt-20">
      <Container>
        <div className="text-center lg:text-left">
          <h3 className="text-[30px] text-[#0F172A] md:text-[38px] lg:text-[48px] font-bold font-Raleway">
            Our Amazing Portfolio
          </h3>
        </div>
        <div className="flex flex-col gap-5 md:gap-10 justify-center items-center lg:flex-row lg:justify-between py-4 pt-5">
          <div>
            <h3 className="text-[16px] text-[#666666]">
              Our beautiful work you need to know!
            </h3>
          </div>
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

                {services.map((service) => (
                  <button
                    key={service.category_id}
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
                {services.map((service) => (
                  <button
                    key={service.category_id}
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
        {/* card */}
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
                    <div className="group">
                      <div className="portfolio-bgHover cursor-pointer flex flex-col xl:flex-row justify-between bg-[#FFFFFF] rounded-xl  ">
                        <div className="overflow-hidden">
                          <Image
                            width={800}
                            height={262}
                            className="overflow-hidden w-full lg:w-[400px] h-[350px] md:h-[420px] border-b-0 object-cover   border-[#CBD5E1]  rounded-b-none rounded-r-none rounded-t-lg border lg:rounded-l-lg lg:rounded-r-none lg:rounded-l-0 lg:rounded-t lg:border-r-0 lg:border-b "
                            src={portfolio.image}
                            alt=""
                          />
                        </div>
                        <div className="flex flex-col justify-center items-center p-3 md:py-0 2xl:px-10  border border-t-0  border-[#CBD5E1]  md:border md:border-t-0 lg:border-t lg:border-l-0  rounded-b-lg  md:rounded-r-0 md:rounded-l-none lg:rounded-r-lg">
                          <div className="text-center">
                            <h4 className="text-[14px] text-[#999999] pt-3 pb-3 md:pt-0 md:pb-6 portfolio-textHover">
                              {portfolio.service_name[0].service_name}
                            </h4>
                            <h3 className="text-[16px] font-bold font-Raleway text-[#333333] portfolio-textHover">
                              {portfolio.heading}
                            </h3>
                            <p className="w-[250px] text-[14px] text-[#666666] py-3 portfolio-textHover">
                              {portfolio.text}
                            </p>
                          </div>
                          <div className="group flex justify-center items-center gap-2 text-[#FF693B] font-bold mt-2 pb-2 md:mt-5 portfolio-textHover md:pb-6 lg:pb-0">
                            <button className="text-[14px]">Read More</button>
                            <span className="w-[19px] font-bold">
                              <HiArrowSmallRight className="text-xl " />
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

        <div className="flex justify-center py-10">
          <Link
            href={"/portfolio"}
            className="text-[16px] bg-[#FF693B] px-11 py-2.5 md:px-10 md:py-3 text-white rounded-lg border border-[#FF693B]  hover:bg-white hover:text-[#FF693B] transition-all duration-300"
          >
            View All Portfolio
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default PortfolioHomeItems;
