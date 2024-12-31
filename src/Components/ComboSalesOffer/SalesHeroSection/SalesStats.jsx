"use client";

import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const SalesStats = () => {
  // Statistics Data
  const statisticsData = [
    {
      id: 1,
      count: 2,
      suffix: "k+",
      label: "Websites built",
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

  // Use Intersection Observer
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger only once when the component enters the viewport
    threshold: 0.2, // Component is considered in view when 20% of it is visible
  });

  return (
    <div className="flex justify-center">
      <section
        ref={ref}
        className="w-full max-w-[1340px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10 py-10 px-5"
      >
        {statisticsData.map((stat) => (
          <div
            key={stat.id}
            className="flex items-center p-4 bg-[rgba(10,44,140,0.7)] backdrop-blur-[36px] rounded-lg"
          >
            <div className="flex items-center gap-4">
              {/* Icon */}
              <img
                loading="lazy"
                src={stat.icon}
                alt={stat.label}
                className="w-12 h-12 object-contain"
              />
              {/* Count and Label */}
              <div className="flex flex-col">
                {inView && (
                  <CountUp
                    start={0}
                    end={stat.count}
                    duration={2}
                    separator="," // Add commas as thousand separators
                    suffix={stat.suffix}
                    className="text-[24px] font-semibold text-white"
                  />
                )}
                <p className="mt-1 text-[16px] font-semibold text-white/90">
                  {stat.label}
                </p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default SalesStats;
