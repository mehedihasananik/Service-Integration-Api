"use client";
import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import Link from "next/link";
import Container from "@/Components/Container/Container";

const StatsSection = ({ stats }) => {
  return (
    <Container>
      <section id="experience" className=" px-4 sm:px-6 lg:px-0 app_space">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <h2 className="app_heading mb-6 leading-tight ">
              Elevating Mobile
              <span className="px-1 md:px-4 text-transparent bg-clip-text bg-[#173792]">
                Experiences
              </span>
            </h2>
            <p className="text-xl text-gray-600  mx-auto">
              We craft innovative, user-centric applications that drive growth
              and engagement.
            </p>
          </motion.div>

          <div className="w-full grid grid-cols-1 justify-center lg:grid-cols-3 gap-8 mb-8 md:mb-16">
            {stats.map((stat, index) => {
              console.log(stat.value);
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 text-center"
                >
                  <CountUp
                    end={stat.value}
                    duration={2.5}
                    separator=","
                    suffix={stat.suffix}
                    className="text-5xl font-bold text-[#173792]"
                  />
                  <p className="text-xl mt-4 text-gray-600 font-medium">
                    {stat.label}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center"
          >
            <Link
              href="https://play.google.com/store/apps/dev?id=8045723784298228141"
              className="inline-block bg-gradient-to-r from-blue-800 to-purple-600 text-white font-semibold py-4 px-10 rounded-md text-sm md:text-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 hover:from-blue-600 hover:to-purple-700"
            >
              Explore Our Apps
            </Link>
          </motion.div>
        </div>
      </section>
    </Container>
  );
};

export default StatsSection;
