"use client";
import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import GlobalButtonColored from "../GlobalButton/GlobalButtonColored";

const AboutUsItems = ({ about }) => {
  const { heading, text, experience, project, customers, country } = about;
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    // Trigger animation on initial load
    setShouldAnimate(true);
  }, []);

  const CountUpItem = ({ end, label, suffix = "" }) => (
    <div>
      <h3 className="text-[30px] md:text-[48px] text-[#0A2C8C] font-bold">
        <CountUp
          start={0}
          end={end}
          duration={3}
          delay={0}
          redraw={true}
          preserveValue={true}
        >
          {({ countUpRef }) => (
            <>
              <span ref={countUpRef} />
              {suffix}
            </>
          )}
        </CountUp>
        +
      </h3>
      <p className="text-[16px] text-[#64748B] w-20">{label}</p>
    </div>
  );

  return (
    <div ref={ref}>
      <div className="w-full text-center lg:text-left lg:w-[544px]">
        <h2 className="text-[20px] md:text-[38px] lg:text-[48px] font-bold font-Raleway text-[#0F172A] md:leading-[55px]">
          {heading}
        </h2>
        <p className="text-[16px] text-[#666666] py-2 md:py-5">{text}</p>
      </div>

      {(inView || shouldAnimate) && (
        <>
          <div className="hidden md:block">
            <div className="flex justify-between gap-6 md:gap-0">
              <CountUpItem end={experience} label="Years of Experience" />
              <CountUpItem end={project} label="Project Completed" suffix="k" />
              <CountUpItem end={customers} label="Customers Satisfaction" />
              <CountUpItem end={country} label="Numbers of Country" />
            </div>
          </div>

          <div className="block md:hidden">
            <div className="space-y-5">
              <div className="flex justify-center gap-x-20">
                <CountUpItem end={experience} label="Years of Experience" />
                <CountUpItem
                  end={project}
                  label="Project Completed"
                  suffix="k"
                />
              </div>
              <div className="flex justify-center gap-x-20">
                <CountUpItem end={customers} label="Customers Satisfaction" />
                <CountUpItem end={country} label="Numbers of Country" />
              </div>
            </div>
          </div>
        </>
      )}

      <div className="md:py-8 pt-4 md:pt-16 text-center lg:text-left">
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
