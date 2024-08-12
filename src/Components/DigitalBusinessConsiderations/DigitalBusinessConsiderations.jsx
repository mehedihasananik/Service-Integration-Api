"use client";
import React, { useState } from "react";
import { CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

const DigitalBusinessConsiderations = () => {
  const considerations = [
    "A Solid Business Plan",
    "Web Development",
    "Digital Marketing",
    "App Development",
    "Identify Audience",
    "Landing Page Design",
    "Local SEO",
    "Logo Design",
    "UI/UX Design",
    "WordPress Development",
    "On-Page SEO",
    "Social Media Marketing",
    "Search Engine Optimization",
    "Graphic Design",
    "Off-Page SEO",
    "Lead Generation",
  ];

  // Array of unique deeper background colors for cards
  const cardColors = [
    "#1E40AF",
    "#166534",
    "#854D0E",
    "#9D174D",
    "#5B21B6",
    "#1E3A8A",
    "#92400E",
    "#065F46",
    "#0E7490",
    "#3F6212",
    "#064E3B",
    "#0369A1",
    "#6B21A8",
    "#7C2D12",
    "#4338CA",
    "#047857",
  ];

  // Array of unique hover colors (slightly lighter versions of cardColors)
  const hoverColors = [
    "#2563EB",
    "#16A34A",
    "#D97706",
    "#DB2777",
    "#7C3AED",
    "#2563EB",
    "#F59E0B",
    "#059669",
    "#0891B2",
    "#65A30D",
    "#047857",
    "#0EA5E9",
    "#8B5CF6",
    "#9A3412",
    "#4F46E5",
    "#10B981",
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="max-w-[1520px] mx-auto px-[6%] md:px-[4%] xl:px-[8%] 4xl:px-[4%] py-16 ">
      <div className="mb-16">
        <h3 className="text-4xl font-bold text-gray-900 leading-tight mb-6 text-center">
          Before starting any business you should consider a few things
        </h3>
        <p className="text-xl text-gray-700 mb-8 text-center">
          In today&apos;s fast-paced digital landscape, ensure your business has
          a strong foundation with these key considerations:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {considerations.map((item, index) => (
            <div
              key={index}
              style={{
                backgroundColor:
                  hoveredIndex === index
                    ? hoverColors[index]
                    : cardColors[index],
                transition: "all 0.3s ease",
              }}
              className="rounded-lg shadow-md overflow-hidden cursor-pointer hover:scale-[1.03] hover:shadow-lg"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="h-2 bg-gradient-to-r from-orange-400 to-red-500"></div>
              <div className="p-6 relative">
                <div className="absolute top-0 right-0 w-16 h-16 bg-white bg-opacity-20 rounded-bl-full"></div>
                <div className="relative z-10">
                  <CheckCircle className="w-8 h-8 text-white mb-4" />
                </div>
                <h4 className="text-lg font-semibold mb-2 text-white">
                  {item}
                </h4>
                <p className="text-sm text-gray-200 mb-4">
                  Essential for your digital success
                </p>
                <Link
                  href={"/services"}
                  className="flex items-center text-white text-sm font-medium group"
                >
                  Learn more{" "}
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DigitalBusinessConsiderations;
