"use client";
import React from "react";

// Smooth scroll function
const handleSmoothScroll = (e) => {
  e.preventDefault();
  const target = document.querySelector(e.target.getAttribute("href"));

  if (target) {
    window.scrollTo({
      top: target.offsetTop,
      behavior: "smooth",
    });
  }
};

const SeePricingButton = () => {
  return (
    <a
      href="#pricing"
      onClick={handleSmoothScroll} // Attach the smooth scroll handler
      className="font-Inter text-[16px] font-semibold bg-[#FF693B] border hover:border-[#FF693B] text-white hover:bg-[#fff] hover:text-[#FF693B] py-3 px-4 md:py-3 md:px-[1.7%] flex justify-center items-center rounded-md transition-all duration-300"
    >
      See Pricing
    </a>
  );
};

const BookAppointmentButton = () => {
  return (
    <a
      href="#appointment"
      onClick={handleSmoothScroll} // Attach the smooth scroll handler
      className="font-Inter text-[16px] font-semibold hover:bg-[#0A2C8C] border border-[#0A2C8C] hover:border-[#0A2C8C] hover:text-white bg-white text-[#0A2C8C] px-[3%] py-[3%] md:py-3 md:px-[1%] flex justify-center items-center rounded-md transition-all duration-300"
    >
      Book an appointment
    </a>
  );
};

// Exporting both buttons
export { SeePricingButton, BookAppointmentButton };
