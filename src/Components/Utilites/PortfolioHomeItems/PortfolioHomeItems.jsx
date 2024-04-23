"use client";

import Container from "@/Components/Container/Container";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import ContentLoader from "react-content-loader";
import { HiArrowSmallRight } from "react-icons/hi2";

const PortfolioHomeItems = ({ portfolios, services }) => {
  const [loading, setLoading] = useState(true);
  const [selectedServiceId, setSelectedServiceId] = useState(0);

  useEffect(() => {
    setLoading(false); // Assuming data is already passed as props, set loading to false
  }, []);

  return (
    <div className="md:py-5 lg:pt-20">
      <Container>
        <div className="text-center lg:text-left">
          <h3 className="text-[32px] text-[#0F172A] xl:text-[48px] font-bold font-Raleway">
            Our Amazing Portfolio
          </h3>
        </div>
        <div className="flex flex-col gap-10 justify-center items-center lg:flex-row lg:justify-between py-4 pt-5">
          <div>
            <h3 className="text-[16px] text-[#666666]">
              Our beautiful work you need to know!
            </h3>
          </div>
          <div className="flex flex-col lg:flex-row gap-3 md:gap-10 text-[#9E9E9E] text-[16px] lg:text-[16px] ">
            <div className="hidden md:block">
              <div className="flex gap-10">
                {services.map((service) => (
                  <button
                    key={service.service_id}
                    onClick={() => setSelectedServiceId(service.service_id)}
                    className="text-[#9E9E9E] hover:text-[#FA8D59] font-bold  transition-all text-[16px]"
                  >
                    {service.service_name}
                  </button>
                ))}
              </div>
            </div>
            <div className="block md:hidden ">
              <div className="flex justify-center space-x-4 pb-4">
                {services.slice(0, 3).map((service) => (
                  <button
                    key={service.service_id}
                    onClick={() => setSelectedServiceId(service.service_id)}
                    className="text-[#9E9E9E] hover:text-[#FA8D59] font-bold  transition-all text-[14px] "
                  >
                    {service.service_name}
                  </button>
                ))}
              </div>{" "}
              <div className="flex justify-center space-x-4">
                {services.slice(3, 6).map((service) => (
                  <button
                    key={service.service_id}
                    onClick={() => setSelectedServiceId(service.service_id)}
                    className="text-[#9E9E9E] hover:text-[#FA8D59] font-bold  transition-all text-[14px] "
                  >
                    {service.service_name}
                  </button>
                ))}
              </div>{" "}
            </div>
          </div>
        </div>
        {/* card */}
        <div>
          {/* 1st row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 justify-between pt-10 pb-5">
            {/* 1st row 1st column card */}
            {loading ? (
              <>
                <ContentLoader
                  speed={2}
                  width={1000}
                  height={500}
                  viewBox="0 0 700 300"
                  backgroundColor="#f5f5f5"
                  foregroundColor="#dbdbdb"
                >
                  {/* Your loader SVG */}
                </ContentLoader>
                <ContentLoader
                  speed={2}
                  width={1000}
                  height={500}
                  viewBox="0 0 700 300"
                  backgroundColor="#f5f5f5"
                  foregroundColor="#dbdbdb"
                >
                  {/* Your loader SVG */}
                </ContentLoader>
              </>
            ) : (
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
                              className="w-full lg:w-[400px] h-[420px] object-cover rounded-l-lg overflow-hidden border border-r-0 border-[#CBD5E1]"
                              src={portfolio.image}
                              alt=""
                            />
                          </div>
                          <div className="flex flex-col justify-center items-center p-3 md:py-0 2xl:px-10 border border-l-0 border-[#CBD5E1] rounded-r-lg">
                            <div className="text-center">
                              <h4 className="text-[14px] text-[#999999] pt-3 pb-3 md:pt-0 md:pb-6 portfolio-textHover">
                                {portfolio.heading}
                              </h4>
                              <h3 className="text-[16px] font-bold font-Raleway text-[#333333] portfolio-textHover">
                                Visuel Agency <br /> Photo Brand
                              </h3>
                              <p className="w-[250px] text-[14px] text-[#666666] py-3 portfolio-textHover">
                                {portfolio.text}
                              </p>
                            </div>
                            <div className="group flex justify-center items-center gap-2 text-[#FF693B] font-bold mt-5 portfolio-textHover pb-6 lg:pb-0">
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
            )}
          </div>
        </div>

        <div className="flex justify-center py-10">
          <Link
            href={"/portfolio"}
            className="text-[16px] bg-[#FF693B] px-10 py-3 text-white rounded-xl border border-[#FF693B]  hover:bg-white hover:text-[#FF693B] transition-all duration-300"
          >
            View All Portfolio
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default PortfolioHomeItems;
