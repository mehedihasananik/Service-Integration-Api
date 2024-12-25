"use client";
import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const ComboPortfolioSlider1 = ({ portfolio: images }) => {
  const [animationComplete, setAnimationComplete] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const controls = useAnimation();

  const imageWidth = 730;
  const filteredImages = images.filter(
    (image) => image.position.toLowerCase() === "down"
  ); // Filter 'up' position regardless of case

  const totalImages = filteredImages.length;
  const stopAtX = -(imageWidth * (totalImages - 3));

  useEffect(() => {
    if (!animationComplete) {
      controls.start({
        x: stopAtX,
        transition: {
          duration: 4,
          ease: "easeOut",
        },
      });
    }
  }, [controls, animationComplete, stopAtX]);

  const dragConstraints = {
    right: 0,
    left: stopAtX,
  };

  const openModal = (src) => {
    setCurrentImage(src);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentImage(null);
  };

  const getCurrentImageDetails = (image_url) =>
    filteredImages.find((image) => image.image_url === image_url);

  return (
    <div className="w-full overflow-hidden py-2">
      <div className="relative h-[420px] overflow-hidden">
        <motion.div
          animate={controls}
          drag={animationComplete ? "x" : false}
          dragConstraints={dragConstraints}
          dragElastic={0.1}
          className={`absolute flex gap-6 cursor-grab active:cursor-grabbing ${
            isModalOpen ? "pointer-events-none" : ""
          }`}
          style={{
            width: `${imageWidth * totalImages}px`,
            filter: isModalOpen ? "blur(2px)" : "none",
            opacity: isModalOpen ? 0.3 : 1,
            transition: "opacity 0.3s ease-out",
          }}
          onAnimationComplete={() => {
            setAnimationComplete(true);
          }}
        >
          {filteredImages.map(({ image_url, title, updated_at }, index) => (
            <div
              key={index}
              className="relative flex-none group"
              style={{ width: `${imageWidth}px`, height: "410px" }}
            >
              <img
                src={image_url}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover object-left cursor-pointer"
                draggable={false}
              />

              {/* Overlay on Hover */}
              <div
                className="absolute inset-0 bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.90) 100%)",
                }}
              >
                <div className="absolute bottom-4 left-10">
                  <p className="font-Inter text-[22px] font-medium leading-[20px] tracking-[0.44px] text-white mb-1">
                    {title}
                  </p>
                  <p className="text-[14px] text-white/70 leading-[20px] font-inter font-normal not-italic tracking-normal">
                    {updated_at}
                  </p>
                </div>
                <button
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#fff] font-Inter text-[16px] font-medium view_design flex items-center leading-[20px] tracking-[0.32px]"
                  onClick={() => openModal(image_url)}
                  style={{
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                  }}
                >
                  View Design
                  <span className="ml-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      viewBox="0 0 19 19"
                      fill="none"
                    >
                      <path
                        d="M17 17L13.5643 13.5643M13.5643 13.5643C14.7902 12.3384 15.5484 10.6448 15.5484 8.77419C15.5484 5.03291 12.5155 2 8.77419 2C5.03291 2 2 5.03291 2 8.77419C2 12.5155 5.03291 15.5484 8.77419 15.5484C10.6448 15.5484 12.3384 14.7902 13.5643 13.5643ZM8.77419 8.77419V5.87097M8.77419 8.77419V11.6774M8.77419 8.77419H11.6774M8.77419 8.77419H5.87097"
                        stroke="white"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed inset-0 bg-[#1E1E1E] flex items-center justify-center z-50"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative max-w-[1600px] w-full px-6"
          >
            <button
              className="absolute top-4 right-4 text-white text-3xl font-bold"
              onClick={closeModal}
            >
              &times;
            </button>
            <div className="flex flex-col items-start mb-4">
              {/* Title and Date */}
              <p className="font-Inter text-[32px] font-medium leading-[20px] tracking-[0.64px] text-white mb-4">
                {getCurrentImageDetails(currentImage)?.title}
              </p>
              <p className="text-[14px] text-white/70 leading-[20px] font-inter font-normal not-italic tracking-normal">
                {getCurrentImageDetails(currentImage)?.updated_at}
              </p>
            </div>
            <motion.img
              src={currentImage}
              alt="Enlarged View"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="w-full max-w-[1800px] aspect-[235/100] rounded-lg shadow-xl"
            />
            <div className="text-white mt-10 text-center flex justify-center">
              <button className="flex  border shadow-[0px_1px_4px_0px_rgba(25,33,61,0.08)] font-semibold  py-3 px-6 rounded-md border-solid border-white hover:bg-[#fff] hover:text-[#1E1E1E] transition-all duration-300">
                Book an Appointment
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default ComboPortfolioSlider1;
