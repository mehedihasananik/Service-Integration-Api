"use client";
import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function ShowcaseProjects() {
  // Statistics Data
  const statisticsData = [
    {
      id: 1,
      count: 800,
      suffix: "+",
      label: "Websites build",
      icon: "https://cdn.builder.io/api/v1/image/assets/e7a246693dbe47b68ba0a6f099060cf8/26684aa8f35edd61be877ff82151124536ee8424f36a37ab1faf0c3c4399c33c?apiKey=e7a246693dbe47b68ba0a6f099060cf8&",
    },
    {
      id: 2,
      count: 97,
      suffix: "%",
      label: "Client satisfaction",
      icon: "https://cdn.builder.io/api/v1/image/assets/e7a246693dbe47b68ba0a6f099060cf8/50c23cc415af792a0c9a33b7ab5287dd8097257f5c3123eec52067efb305a390?apiKey=e7a246693dbe47b68ba0a6f099060cf8&",
    },
    {
      id: 3,
      count: 25,
      suffix: "+",
      label: "Team members",
      icon: "https://cdn.builder.io/api/v1/image/assets/e7a246693dbe47b68ba0a6f099060cf8/c7f49d7df514be5c977631e7fbc60f0b4edc5d270f61a232fe26a0f4a8633ecd?apiKey=e7a246693dbe47b68ba0a6f099060cf8&",
    },
    {
      id: 4,
      count: 500,
      suffix: "+",
      label: "Amazing clients",
      icon: "https://cdn.builder.io/api/v1/image/assets/e7a246693dbe47b68ba0a6f099060cf8/f218d0b1d33ddf7902c976efd34a38b1b49bdeb88758c4b1f48441eb00b85ae3?apiKey=e7a246693dbe47b68ba0a6f099060cf8&",
    },
  ];

  // Divider Component Inline
  const Divider = () => (
    <img loading="lazy" src="/assets/Divider.png" alt="Divider" />
  );

  // Use Intersection Observer
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger only once when the component enters the viewport
    threshold: 0.2, // Component is considered in view when 20% of it is visible
  });

  return (
    <div className="">
      <section
        ref={ref}
        className="showcase_section flex overflow-hidden flex-col justify-center items-center lg:px-2 xl:px-10 py-5 md:py-14 rounded-lg max-md:px-5 md:pt-[0%]"
      >
        {/* Title */}
        <h2 className="text-[20px] md:text-[24px] font-Inter font-semibold md:leading-[32px] text-center text-[#0A2C8C] max-md:max-w-full">
          Check-out Our Stats
        </h2>

        {/* Statistics */}
        <div className="containerStats hidden lg:flex flex-wrap space-y-5 md:space-y-0 md:gap-5 justify-between px-16 py-10 mt-6 w-full font-semibold text-white rounded-xl max-w-[1340px]">
          {statisticsData.map((stat, index) => (
            <React.Fragment key={stat.id}>
              {/* Statistic Card Inline */}
              <article className="flex space-x-5 items-center">
                <img
                  loading="lazy"
                  src={stat.icon}
                  alt={stat.label}
                  className="object-contain shrink-0 self-stretch my-auto w-12 aspect-square"
                />
                <div className="flex flex-col self-stretch my-auto">
                  {inView && (
                    <CountUp
                      start={0}
                      end={stat.count}
                      duration={2}
                      separator=","
                      suffix={stat.suffix}
                      className="text-[24px] font-semibold leading-none font-Inter"
                    />
                  )}
                  <p className="mt-2 text-[16px] font-semibold text-base leading-none font-Inter">
                    {stat.label}
                  </p>
                </div>
              </article>
              {/* Divider */}
              <div className="hidden md:block">
                {index < statisticsData.length - 1 && <Divider />}
              </div>
            </React.Fragment>
          ))}
        </div>

        <div className="containerStats lg:hidden w-full max-w-[1340px] px-4 sm:px-6 lg:px-16 py-6 sm:py-8 lg:py-10 mt-4 sm:mt-6 rounded-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
            {statisticsData.map((stat, index) => (
              <React.Fragment key={stat.id}>
                {/* Statistic Card */}
                <article className="flex items-center space-x-4 bg-opacity-10 bg-white p-4 rounded-lg">
                  <img
                    loading="lazy"
                    src={stat.icon}
                    alt={stat.label}
                    className="w-10 sm:w-12 h-10 sm:h-12 object-contain shrink-0"
                  />
                  <div className="flex flex-col">
                    {inView && (
                      <CountUp
                        start={0}
                        end={stat.count}
                        duration={2}
                        separator=","
                        suffix={stat.suffix}
                        className="text-[20px] sm:text-[24px] font-semibold leading-tight font-Inter text-white"
                      />
                    )}
                    <p className="mt-1 sm:mt-2 text-[14px] sm:text-[16px] font-semibold leading-tight font-Inter text-white/90">
                      {stat.label}
                    </p>
                  </div>
                </article>

                {/* Divider - Only show between items on larger screens */}
                {index < statisticsData.length - 1 && (
                  <div className="hidden lg:block lg:col-span-0">
                    <Divider />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
