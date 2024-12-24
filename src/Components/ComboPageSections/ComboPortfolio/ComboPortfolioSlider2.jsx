"use client";
import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const ComboPortfolioSlider2 = () => {
  const images = [
    "/assets/comboP.png",
    "/assets/comboP1.png",
    "/assets/comboP2.png",
    "/assets/comboP4.png",
    "/assets/comboP5.png",
    "/assets/comboP6.png",
  ];

  const [animationComplete, setAnimationComplete] = useState(false);
  const controls = useAnimation();

  const imageWidth = 730; // Single image width
  const totalImages = images.length;
  const startAtX = -(imageWidth * (totalImages - 3)); // Start position (show last 3 images)
  const stopAtX = 0; // End position (show first images)

  useEffect(() => {
    if (!animationComplete) {
      // Start animation from leftmost to rightmost
      controls.start({
        x: stopAtX,
        transition: {
          duration: 15,
          ease: "easeOut",
        },
      });
    }
  }, [controls, animationComplete, stopAtX]);

  const dragConstraints = {
    right: stopAtX, // End at first image
    left: startAtX, // Start from last visible image
  };

  return (
    <div className="w-full overflow-hidden py-2">
      <div className="relative h-[420px] overflow-hidden">
        <motion.div
          initial={{ x: startAtX }} // Ensure starting position is correct
          animate={controls}
          drag={animationComplete ? "x" : false} // Enable drag only after animation
          dragConstraints={dragConstraints}
          dragElastic={0.1}
          className="absolute flex gap-6 cursor-grab active:cursor-grabbing"
          style={{
            width: `${imageWidth * totalImages}px`,
          }}
          onAnimationComplete={() => {
            setAnimationComplete(true);
          }}
        >
          {images.map((src, index) => (
            <div
              key={index}
              className="flex-none"
              style={{ width: `${imageWidth}px`, height: "410px" }}
            >
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
                draggable={false}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ComboPortfolioSlider2;
