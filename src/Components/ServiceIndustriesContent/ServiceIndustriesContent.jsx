"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const industries = [
  {
    name: "Health, wellness and fitness",
    description: "Tailored lead generation for health and wellness providers.",
    icon: "👩🏻‍⚕️",
  },
  {
    name: "E-commerce",
    description: "Innovative strategies to boost online sales and conversions.",
    icon: "🛒",
  },
  {
    name: "Coaching",
    description:
      "Targeted leads for personal and professional coaching services.",
    icon: "🎓",
  },
  {
    name: "Management Consulting",
    description: "Specialized lead generation for business consultancy firms.",
    icon: "💼",
  },
  {
    name: "Construction",
    description: "Effective leads for construction and contracting businesses.",
    icon: "🏗️",
  },
  {
    name: "Legal Service",
    description: "Tailored lead solutions for law firms and legal consultants.",
    icon: "⚖️",
  },
  {
    name: "Travel",
    description: "Strategic lead generation for travel agencies and tourism.",
    icon: "✈️",
  },
  {
    name: "Solar",
    description: "Targeted leads for solar energy installation and services.",
    icon: "☀️",
  },
  {
    name: "Roofing",
    description:
      "Custom lead generation for roofing contractors and companies.",
    icon: "🏠",
  },
  {
    name: "Real Estate",
    description: "Effective leads for realtors and property management firms.",
    icon: "🏢",
  },
  {
    name: "Cleaning Company",
    description:
      "Specialized leads for residential and commercial cleaning services.",
    icon: "🧹",
  },
  {
    name: "Civil Engineer",
    description:
      "Targeted lead generation for civil engineering projects and firms.",
    icon: "👷‍♂️",
  },
  {
    name: "Building Materials",
    description:
      "Strategic leads for building material suppliers and manufacturers.",
    icon: "🧱",
  },
  {
    name: "E-Learning",
    description: "Innovative lead strategies for online education platforms.",
    icon: "💻",
  },
  {
    name: "Furniture",
    description: "Tailored leads for furniture retailers and manufacturers.",
    icon: "🪑",
  },
  {
    name: "Hospital & HealthCare",
    description: "Specialized lead generation for healthcare institutions.",
    icon: "🏥",
  },
  {
    name: "Hospitality",
    description:
      "Effective leads for hotels, restaurants, and hospitality services.",
    icon: "🤝",
  },
  {
    name: "Individuals & Familycare",
    description:
      "Targeted leads for personal care and family support services.",
    icon: "👪",
  },
  {
    name: "Manufacturing",
    description: "Custom lead solutions for various manufacturing sectors.",
    icon: "🏭",
  },
  {
    name: "Food and Beverage",
    description: "Custom lead solutions for various manufacturing sectors.",
    icon: "🍲",
  },
  {
    name: "Consumer Goods",
    description: "Custom lead solutions for various manufacturing sectors.",
    icon: "🛍️",
  },
];
const ServiceIndustriesContent = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 text-white pt-10 pb-20 px-8 mt-5 rounded-md shadow-2xl overflow-hidden relative">
      <motion.h1
        className="text-6xl font-serif font-bold text-center mb-8 text-white tracking-wide"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Service Industries
      </motion.h1>
      <motion.p
        className="text-center mb-16 max-w-4xl mx-auto text-xl leading-relaxed text-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        We offer effective lead-generating solutions for businesses across a
        wide range of industries. With our extensive experience, we&apos;ve
        achieved significant success in the following sectors:
      </motion.p>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
        initial="hidden"
        animate="show"
      >
        {industries.map((industry, index) => (
          <motion.div
            key={index}
            className="bg-gradient-to-br from-[#FF693B] to-[#FF8C5F] p-6 rounded-lg shadow-lg transition-all duration-300 flex flex-col justify-between h-full overflow-hidden hover:scale-105 hover:shadow-2xl hover:from-[#11328F] hover:to-[#11328F] group"
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
          >
            <div>
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-3">{industry.icon}</span>
                <h2 className="text-2xl font-serif font-bold text-white group-hover:text-gray-100">
                  {industry.name}
                </h2>
              </div>
              <p className="text-sm text-white mb-6 group-hover:text-gray-200">
                {industry.description}
              </p>
            </div>
            <Link
              href={`/contact-us`}
              className="w-[35%] bg-white text-[#FF693B] text-nowrap font-semibold py-2 px-4 rounded-md text-center hover:bg-opacity-90 transition duration-300 mt-4 inline-block group-hover:bg-gray-100 group-hover:text-[#3B82F6]"
            >
              Learn More
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ServiceIndustriesContent;
