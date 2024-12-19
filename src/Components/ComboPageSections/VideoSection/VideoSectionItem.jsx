"use client";
import React from "react";
import ComboBrands from "../ComboBrands/ComboBrands";
import Container from "@/Components/Container/Container";
import {
  BookAppointmentButton,
  SeePricingButton,
} from "../ComboGroupBtn/ComboGroupBtn";
import { motion } from "framer-motion";

const VideoSectionItem = ({ brands }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative"
    >
      <div className="youtube_vdoSection absolute "></div>
      <div className="pt-[0%]">
        <ComboBrands brands={brands} />
      </div>
      <Container>
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-[20px] md:text-[35px] lg:text-[48px] font-bold text-[#0A2C8C] mt-[5%] font-Inter">
            Excellence at Every Step
          </h3>
          <div className="flex justify-center">
            <p className="combo_des text-center pt-3 lg:w-[80%] font-Inter text-[#6D758F] font-normal">
              Our experienced team of developers, designers, and marketers works
              together to deliver outstanding results.
            </p>
          </div>
        </div>
        <div className="w-full hidden lg:flex justify-center my-8">
          <iframe
            width="1120"
            height="630"
            src="https://www.youtube.com/embed/N73NyNDq-ZY?si=W2VUBjMkee8TGkv6"
            title="YouTube video player"
            className="rounded-lg shadow-lg"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>

        <div className="w-full flex lg:hidden justify-center my-8">
          <div
            className="relative w-full flex justify-center items-center"
            style={{ paddingBottom: "56.25%" }}
          >
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/N73NyNDq-ZY?si=W2VUBjMkee8TGkv6"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center text-[16px] font-bold gap-x-5 gap-y-5 md:gap-y-0">
          <SeePricingButton />
          <BookAppointmentButton />
        </div>
      </Container>
    </motion.div>
  );
};

export default VideoSectionItem;
