import React from "react";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";

const NavigationButtons = ({ onPrev, onNext }) => {
  return (
    <div className="flex justify-center items-center lg:justify-start lg:items-start gap-6 py-4 md:mb-4">
      <button
        className="group bg-[#FF9F711A] hover:bg-[#FF693B] px-5 py-5 rounded-lg transition-all duration-300"
        onClick={onPrev}
      >
        <HiArrowLeft className="text-[#FF693B] group-hover:text-[#fff] w-[24px] h-[24px]" />
      </button>
      <button
        className="group bg-[#FF9F711A] hover:bg-[#FF693B] px-5 py-5 rounded-lg transition-all duration-300"
        onClick={onNext}
      >
        <HiArrowRight className="text-[#FF693B] group-hover:text-[#fff] w-[24px] h-[24px]" />
      </button>
    </div>
  );
};

export default NavigationButtons;
