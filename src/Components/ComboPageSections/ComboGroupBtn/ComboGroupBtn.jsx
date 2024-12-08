"use client";
import React from "react";
import { Link } from "react-scroll";

// Smooth scroll function

const SeePricingButton = () => {
  return (
    <Link
      to="pricing"
      smooth={true}
      duration={1500}
      className="font-Inter text-[16px] font-semibold bg-[#FF693B] border cursor-pointer hover:border-[#FF693B] text-white hover:bg-[#fff] hover:text-[#FF693B] py-3 px-4 md:py-3 md:px-[1.7%] flex justify-center items-center rounded-md transition-all duration-300"
    >
      See Pricing
    </Link>
  );
};

const BookAppointmentButton = () => {
  return (
    <Link
      to="appointment"
      smooth={true}
      duration={1500}
      className="font-Inter text-[16px] font-semibold hover:bg-[#0A2C8C] border cursor-pointer border-[#0A2C8C] hover:border-[#0A2C8C] hover:text-white bg-white text-[#0A2C8C] px-[3%] py-[3%] md:py-3 md:px-[1%] flex justify-center items-center rounded-md transition-all duration-300"
    >
      Book an appointment
    </Link>
  );
};

// Exporting both buttons
export { SeePricingButton, BookAppointmentButton };
