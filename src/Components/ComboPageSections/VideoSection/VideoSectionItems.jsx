"use client";
import React, { useEffect, useState } from "react";
import {
  BookAppointmentButton,
  SeePricingButton,
} from "../ComboGroupBtn/ComboGroupBtn";
import Container from "@/Components/Container/Container";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Play, Pause } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const VideoSectionItems = () => {
  const [isVideoEnabled, setIsVideoEnabled] = useState(false);
  const [videoSrc, setVideoSrc] = useState(
    "https://www.youtube.com/embed/N73NyNDq-ZY?si=W2VUBjMkee8TGkv6"
  );
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      ".video-iframe",
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".video-iframe",
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  const togglePlayPause = () => {
    if (isPlaying) {
      setIsPlaying(false);
      setVideoSrc(
        "https://www.youtube.com/embed/N73NyNDq-ZY?si=W2VUBjMkee8TGkv6"
      );
    } else {
      setIsVideoEnabled(true);
      setIsPlaying(true);
      setVideoSrc(
        "https://www.youtube.com/embed/N73NyNDq-ZY?si=W2VUBjMkee8TGkv6&autoplay=1"
      );
    }
  };

  return (
    <Container>
      <div className="flex flex-col items-center justify-center">
        <motion.h3
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-[20px] md:text-[35px] lg:text-[48px] font-bold text-[#0A2C8C] mt-[5%] font-Inter"
        >
          Excellence at Every Step
        </motion.h3>

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="flex justify-center">
            <p className="combo_des text-center pt-3 lg:w-[80%] font-Inter text-[#6D758F] font-normal">
              Our experienced team of developers, designers, and marketers works
              together to deliver outstanding results.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Desktop Video Section */}
      <div className="w-full hidden lg:flex justify-center my-8 video-iframe relative">
        <iframe
          width="1120"
          height="630"
          src={videoSrc}
          title="YouTube video player"
          className="rounded-lg shadow-lg"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          style={{ pointerEvents: isVideoEnabled ? "auto" : "none" }}
        />
        <button
          onClick={togglePlayPause}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-6 shadow-lg transition-all duration-300"
        >
          {isPlaying ? <Pause size={32} /> : <Play size={32} />}
        </button>
      </div>

      {/* Mobile Video Section */}
      <div className="w-full flex lg:hidden justify-center my-8 video-iframe relative">
        <div
          className="relative w-full flex justify-center items-center"
          style={{ paddingBottom: "56.25%" }}
        >
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
            src={videoSrc}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            style={{ pointerEvents: isVideoEnabled ? "auto" : "none" }}
          />
          <button
            onClick={togglePlayPause}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg transition-all duration-300"
          >
            {isPlaying ? <Pause size={24} /> : <Play size={24} />}
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center text-[16px] font-bold gap-x-5 gap-y-5 md:gap-y-0">
        <SeePricingButton />
        <BookAppointmentButton />
      </div>
    </Container>
  );
};

export default VideoSectionItems;
