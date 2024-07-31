import React from "react";

const SlideCounter = ({ currentSlide, totalSlides }) => {
  return (
    <>
      <div className="text-center lg:text-left md:hidden">
        <span className="text-[48px] font-Raleway text-[#0A2C8C] font-bold">
          {currentSlide + 1}
        </span>
        <span className="text-[16px] font-bold text-[#94A3B8] font-Raleway">
          /{totalSlides}
        </span>
      </div>
      <div className="text-center lg:text-left hidden md:block 4xl:hidden">
        <span className="text-[48px] font-Raleway text-[#0A2C8C] font-bold">
          {currentSlide + 2}
        </span>
        <span className="text-[16px] font-bold text-[#94A3B8] font-Raleway">
          /{totalSlides}
        </span>
      </div>
      <div className="text-center lg:text-left hidden 4xl:block">
        <span className="text-[48px] font-Raleway text-[#0A2C8C] font-bold">
          {currentSlide + 3}
        </span>
        <span className="text-[16px] font-bold text-[#94A3B8] font-Raleway">
          /{totalSlides}
        </span>
      </div>
    </>
  );
};

export default SlideCounter;
