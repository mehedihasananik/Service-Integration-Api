"use client";
import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import Link from "next/link";
import GlobalButtonColored from "../GlobalButton/GlobalButtonColored";

const AboutUsItems = ({ about }) => {
  // counter states and about details
  const [counterOn, setCounterOn] = useState(false);
  const { heading, text, experience, project, customers, country } = about;

  useEffect(() => {
    // Function to handle entering the section
    const handleScrollEnter = () => {
      if (!counterOn) {
        setCounterOn(true);
      }
    };

    // Adding scroll event listener when component mounts
    window.addEventListener("scroll", handleScrollEnter);

    // Cleanup function to remove the event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScrollEnter);
    };
  }, [counterOn]); // Dependency array to run effect only when counterOn changes

  return (
    <div>
      {/* title & description */}
      <div className="w-full text-center lg:text-left lg:w-[544px]">
        <h2 className="text-[30px] md:text-[38px] lg:text-[48px] font-bold font-Raleway text-[#0F172A] md:leading-[55px]">
          {heading}
        </h2>
        <p className="text-[16px] text-[#666666] py-5">{text}</p>
      </div>

      {/* Counters for large device */}
      <div className="hidden md:block">
        <ScrollTrigger>
          <div className="flex justify-between gap-6 md:gap-0  ">
            {/* Experience */}
            <div>
              <h3 className="text-[30px] md:text-[48px] text-[#0A2C8C] font-bold">
                {counterOn && (
                  <CountUp start={0} end={experience} duration={3} delay={0} />
                )}{" "}
                +
              </h3>
              <p className="text-[16px] text-[#64748B] w-20">
                Years of Experience
              </p>
            </div>
            {/* Project Completed */}
            <div className="text-[30px] md:text-[48px] text-[#0A2C8C] ">
              <div className="font-bold">
                <CountUp
                  start={0}
                  end={project}
                  duration={2}
                  delay={0}
                  redraw={true}
                  formattingFn={(value) => {
                    if (value >= project) {
                      return "1k ";
                    }
                    return value;
                  }}
                />
                <span>+</span>
              </div>
              <p className="text-[16px] text-[#64748B] w-20">
                Project Completed
              </p>
            </div>
            {/* Customers Satisfaction */}
            <div>
              <h3 className="text-[30px] md:text-[48px] text-[#0A2C8C] font-bold">
                {counterOn && (
                  <CountUp start={0} end={customers} duration={2} delay={0} />
                )}{" "}
                +
              </h3>
              <p className="text-[16px] text-[#64748B] w-20">
                Customers Satisfaction
              </p>
            </div>
            {/* Numbers of Country */}
            <div>
              <h3 className="text-[30px] md:text-[48px] text-[#0A2C8C] font-bold">
                {counterOn && (
                  <CountUp start={0} end={country} duration={3} delay={0} />
                )}{" "}
                +
              </h3>
              <p className="text-[16px] text-[#64748B] w-20">
                Numbers of Country
              </p>
            </div>
          </div>
        </ScrollTrigger>
      </div>

      {/* counter for small device */}

      <div className="block md:hidden">
        <ScrollTrigger>
          <div className="space-y-5">
            <div className="flex justify-center gap-x-20">
              {/* Experience */}
              <div>
                <h3 className="text-[30px] md:text-[48px] text-[#0A2C8C] font-bold">
                  {counterOn && (
                    <CountUp
                      start={0}
                      end={experience}
                      duration={3}
                      delay={0}
                    />
                  )}{" "}
                  +
                </h3>
                <p className="text-[16px] text-[#64748B] w-20">
                  Years of Experience
                </p>
              </div>
              {/* Project Completed */}
              <div className="text-[30px] md:text-[48px] text-[#0A2C8C] ">
                <div className="font-bold">
                  <CountUp
                    start={0}
                    end={project}
                    duration={2}
                    delay={0}
                    redraw={true}
                    formattingFn={(value) => {
                      if (value >= project) {
                        return "1k ";
                      }
                      return value;
                    }}
                  />
                  <span>+</span>
                </div>
                <p className="text-[16px] text-[#64748B] w-20">
                  Project Completed
                </p>
              </div>
            </div>
            <div className="flex justify-center gap-x-20">
              {/* Customers Satisfaction */}
              <div>
                <h3 className="text-[30px] md:text-[48px] text-[#0A2C8C] font-bold">
                  {counterOn && (
                    <CountUp start={0} end={customers} duration={2} delay={0} />
                  )}{" "}
                  +
                </h3>
                <p className="text-[16px] text-[#64748B] w-20">
                  Customers Satisfaction
                </p>
              </div>
              {/* Numbers of Country */}
              <div>
                <h3 className="text-[30px] md:text-[48px] text-[#0A2C8C] font-bold">
                  {counterOn && (
                    <CountUp start={0} end={country} duration={3} delay={0} />
                  )}{" "}
                  +
                </h3>
                <p className="text-[16px] text-[#64748B] w-20">
                  Numbers of Country
                </p>
              </div>
            </div>
          </div>
        </ScrollTrigger>
      </div>

      {/* Learn More Button */}
      <div className="py-8 pt-10 md:pt-16 text-center lg:text-left">
        <GlobalButtonColored
          path={"/about-us"}
          title={"Learn More"}
          className="btn btn-primary px-12"
        />
      </div>
    </div>
  );
};

export default AboutUsItems;
