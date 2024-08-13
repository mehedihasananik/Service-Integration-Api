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
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Boost Your Online Presence
          </h2>
          <p className="text-gray-600 mb-8">
            Join thousands of businesses who use our service to reach their
            audience effectively. Sign up now to get started!
          </p>
          <form className="flex flex-col sm:flex-row items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-auto flex-grow px-4 py-2 mb-4 sm:mb-0 sm:mr-4 border border-gray-300 rounded"
            />
            <button
              type="submit"
              className="w-full sm:w-auto bg-blue-600 text-white px-6 py-2 rounded shadow hover:bg-blue-700 transition"
            >
              Get Started
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default DigitalBusinessConsiderations;
