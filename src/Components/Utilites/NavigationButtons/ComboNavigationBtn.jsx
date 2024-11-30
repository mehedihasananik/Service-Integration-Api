import React from "react";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";

const ComboNavigationBtn = ({
  onPrev,
  onNext,
  iconSize = 20, // Default icon size
  className = "", // Optional additional classes
}) => {
  return (
    <div
      className={`flex justify-center items-center lg:justify-start lg:items-start gap-6 py-4 md:mb-4 ${className}`}
    >
      <button
        className="group bg-[#F8FAFF] hover:bg-[#0A2C8C] px-4 py-4 rounded-lg transition-all duration-300"
        onClick={onPrev}
      >
        <HiArrowLeft
          className={`text-[#0A2C8C] group-hover:text-[#fff] w-[${iconSize}px] h-[${iconSize}px]`}
          size={iconSize}
        />
      </button>

      <button
        className="group bg-[#0A2C8C] hover:bg-[#F8FAFF] px-4 py-4 rounded-lg transition-all duration-300"
        onClick={onNext}
      >
        <HiArrowRight
          className={`text-[#fff] group-hover:text-[#0A2C8C] w-[${iconSize}px] h-[${iconSize}px]`}
          size={iconSize}
        />
      </button>
    </div>
  );
};

export default ComboNavigationBtn;
