"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { ComboLeadBookBtn } from "@/Components/ComboLead/ComboLeadButtons/ComboLeadBookBtn";
import { SlideLeadBtn } from "@/Components/ComboLead/ComboLeadButtons/SlideLeadBtn";

const ComboPortfolioSlider1 = ({ portfolio: images }) => {
  const [animationComplete, setAnimationComplete] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [direction, setDirection] = useState("next");
  const [autoSlideTriggered, setAutoSlideTriggered] = useState(false);
  const controls = useAnimation();
  const sliderRef = useRef(null);

  const getImageWidth = () => {
    if (typeof window === "undefined") return 730;
    return window.innerWidth < 1024 ? 360 : 730;
  };

  const imageWidth = getImageWidth();
  const containerWidth =
    typeof window !== "undefined" ? window.innerWidth : 1200;

  const filteredImages = images.filter(
    (image) => image.position.toLowerCase() === "down"
  );
  const totalImages = filteredImages.length;

  const gapWidth = 24;
  const totalWidth = imageWidth * totalImages + gapWidth * (totalImages - 1);

  const startAtX = 0;
  const stopAtX = -Math.max(0, totalWidth - containerWidth);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !autoSlideTriggered) {
          setAutoSlideTriggered(true);
          controls.start({
            x: stopAtX,
            transition: { duration: 4, ease: "easeOut" },
          });
        }
      },
      { threshold: 0.1 }
    );

    if (sliderRef.current) {
      observer.observe(sliderRef.current);
    }

    return () => {
      if (sliderRef.current) {
        observer.unobserve(sliderRef.current);
      }
    };
  }, [controls, stopAtX, autoSlideTriggered]);

  const dragConstraints = {
    right: 0,
    left: stopAtX,
  };

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDragEnd = () => {
    setTimeout(() => {
      setIsDragging(false);
    }, 100);
  };

  const handleClick = (src) => {
    if (!isDragging) {
      openModal(src);
    }
  };

  const openModal = (src) => {
    const index = filteredImages.findIndex((img) => img.image_url === src);
    setCurrentImageIndex(index);
    setCurrentImage(src);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentImage(null);
  };

  const navigateModal = (direction) => {
    setDirection(direction);

    const newIndex =
      direction === "next" ? currentImageIndex + 1 : currentImageIndex - 1;

    if (newIndex >= 0 && newIndex < totalImages) {
      setCurrentImageIndex(newIndex);
      setCurrentImage(filteredImages[newIndex].image_url);
    }
  };

  const getCurrentImageDetails = (image_url) =>
    filteredImages.find((image) => image.image_url === image_url);

  const isFirstImage = currentImageIndex === 0;
  const isLastImage = currentImageIndex === totalImages - 1;

  const handleCloseAndScroll = () => {
    closeModal();
    document
      .querySelector("#appointment")
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full overflow-hidden py-2" ref={sliderRef}>
      <div className="relative h-[200px] md:h-[220px] lg:h-[420px] overflow-hidden">
        <motion.div
          initial={{ x: startAtX }}
          animate={controls}
          drag={animationComplete ? "x" : false}
          dragConstraints={dragConstraints}
          dragElastic={0.1}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          className={`absolute flex gap-6 cursor-pointer active:cursor-pointer ${
            isModalOpen ? "pointer-events-none" : ""
          }`}
          style={{
            width: `${totalWidth}px`,
            filter: isModalOpen ? "blur(2px)" : "none",
            opacity: isModalOpen ? 0.3 : 1,
            transition: "opacity 0.1s ease-out",
          }}
          onAnimationComplete={() => setAnimationComplete(true)}
        >
          {filteredImages.map(({ image_url, title, updated_at }, index) => (
            <div
              key={index}
              className={`relative flex-none group ${
                isModalOpen ? "pointer-events-none" : ""
              } w-[360px] h-[200px] lg:w-[730px] lg:h-[410px]`}
              onClick={() => handleClick(image_url)}
            >
              <img
                src={image_url}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover cursor-pointer"
                draggable={false}
              />
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
                <div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#fff] font-Inter text-[16px] font-medium view_design flex items-center leading-[20px] tracking-[0.32px]"
                  style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
                >
                  View Design{" "}
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
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
      {isModalOpen && (
        <>
          <button
            className={`fixed left-[5%] top-1/2 transform -translate-y-1/2 p-4 rounded-full transition-colors z-[60] ${
              isFirstImage ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
            }`}
            onClick={() => !isFirstImage && navigateModal("prev")}
            disabled={isFirstImage}
          >
            <img
              src="/assets/arrow-back-simpleRight.png"
              alt="Previous"
              className={isFirstImage ? "opacity-50" : ""}
            />
          </button>

          <button
            className={`fixed right-[5%] top-1/2 transform -translate-y-1/2 p-4 rounded-full transition-colors z-[60] ${
              isLastImage ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
            }`}
            onClick={() => !isLastImage && navigateModal("next")}
            disabled={isLastImage}
          >
            <img
              src="/assets/arrow-back-simpleRight.svg"
              alt="Next"
              className={isLastImage ? "opacity-50" : ""}
            />
          </button>

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
                <p className="font-Inter text-[32px] font-medium leading-[20px] tracking-[0.64px] text-white mb-4">
                  {getCurrentImageDetails(currentImage)?.title}
                </p>
                <p className="text-[14px] text-white/70 leading-[20px] font-inter font-normal not-italic tracking-normal">
                  {getCurrentImageDetails(currentImage)?.updated_at}
                </p>
              </div>

              <motion.img
                key={currentImage}
                src={currentImage}
                alt="Enlarged View"
                initial={{
                  opacity: 0,
                  x: direction === "next" ? 200 : -200,
                }}
                animate={{ opacity: 1, x: 0 }}
                exit={{
                  opacity: 0,
                  x: direction === "next" ? -200 : 200,
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="w-full max-w-[1800px] aspect-[235/100] rounded-lg shadow-xl"
              />

              <div className="text-white mt-10 text-center flex justify-center">
                <SlideLeadBtn
                  onClick={handleCloseAndScroll}
                  className="border-primary"
                />
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </div>
  );
};

export default ComboPortfolioSlider1;
