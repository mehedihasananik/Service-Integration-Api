"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const ServiceIndustriesContent = ({ industries, details }) => {
  return (
    <div className=" text-dark  px-0 mt-0 rounded-md  overflow-hidden relative text-center pt-2 md:pt-8 md:pb-20">
      <motion.h1
        className="text-[20px] whitespace-nowrap md:text-[30px] lg:text-[48px] font-Raleway font-bold tracking-wide"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {details.title}
      </motion.h1>
      <motion.p
        className="text-center mb-4 md:mb-16 max-w-4xl mx-auto  leading-relaxed text-[#000] text-[18px] md:text-[20px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        {details.description}
      </motion.p>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8"
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
            className="bg-gradient-to-br  from-[#11328F] to-[#11328F] hover:from-[#FF693B] hover:to-[#FF8C5F]   p-6 rounded-lg shadow-lg transition-all duration-300 flex flex-col justify-between h-full overflow-hidden hover:scale-105 hover:shadow-2xl  group"
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
          >
            <div>
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-3">{industry.emoji}</span>
                <h2 className="text-[16px] whitespace-nowrap md:text-2xl font-serif font-bold text-white group-hover:text-gray-100">
                  {industry.title}
                </h2>
              </div>
              <p className="text-sm text-white mb-6 group-hover:text-gray-200">
                {industry.description}
              </p>
            </div>
            <Link
              href={`/contact-us`}
              className="md:w-[35%] bg-white text-[#FF693B] text-nowrap font-semibold py-2 px-4 rounded-md text-center hover:bg-opacity-90 transition duration-300 mt-4 inline-block group-hover:bg-gray-100 group-hover:text-[#3B82F6]"
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
