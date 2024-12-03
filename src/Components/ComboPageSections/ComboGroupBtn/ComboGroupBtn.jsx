// Buttons.js
import React from "react";

const SeePricingButton = () => {
  return (
    <a
      href="#pricing"
      className="bg-[#FF693B] border border-[#FF693B] hover:border-[#0A2C8C] text-white hover:bg-white hover:text-[#0A2C8C] py-3 px-[2.5%] rounded-md transition-all duration-300"
    >
      See Pricing
    </a>
  );
};

const BookAppointmentButton = () => {
  return (
    <a
      href="#appointment"
      className="hover:bg-[#FF693B] border border-[#0A2C8C] hover:border-[#FF693B] hover:text-white bg-white text-[#0A2C8C] py-3 px-[1.5%] rounded-md transition-all duration-300"
    >
      Book an appointment
    </a>
  );
};

// Exporting both buttons
export { SeePricingButton, BookAppointmentButton };
