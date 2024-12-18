"use client";
import React from "react";
import CountUp from "react-countup";
import Link from "next/link";
import Container from "@/Components/Container/Container";

const StatsSection = ({ stats }) => {
  return (
    <Container>
      <section
        id="experience"
        className="px-4 sm:px-6 lg:px-0 app_space pt-[2%] md:pt-[3%]"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="app_heading mb-6 leading-tight ">
              Elevating Mobile
              <span className="px-1 md:px-4 text-transparent bg-clip-text bg-[#173792]">
                Experiences
              </span>
            </h2>
            <p className="text-xl text-gray-600 mx-auto">
              We craft innovative, user-centric applications that drive growth
              and engagement.
            </p>
          </div>

          <div className="w-full grid grid-cols-1 justify-center lg:grid-cols-3 gap-8 mb-8 md:mb-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 text-center"
              >
                <CountUp
                  end={stat.value}
                  duration={2.5}
                  separator="," // Adds commas to large numbers
                  suffix={stat.suffix}
                  className="text-5xl font-bold text-[#173792]"
                />
                <p className="text-xl mt-4 text-gray-600 font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center flex justify-center">
            <Link
              href="https://play.google.com/store/apps/dev?id=8045723784298228141"
              className="font-Inter w-[18%] flex justify-center items-center font-semibold md:leading-[20px] text-[14px] md:text-[16px] whitespace-nowrap px-4 py-2.5 md:px-11 md:py-3.5 rounded-lg transition-all duration-300 text-white bg-[#FF693B] border border-[#FF693B] hover:bg-white hover:text-[#FF693B]"
            >
              Explore Our Apps
            </Link>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default StatsSection;
