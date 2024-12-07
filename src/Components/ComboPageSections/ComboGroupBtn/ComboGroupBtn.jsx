"use client";
import React from "react";

// Smooth scroll function
const handleSmoothScroll = (e) => {
  e.preventDefault();

  const href = e.target.getAttribute("href");

  if (href && href.startsWith("#")) {
    const target = document.querySelector(href);

    if (target) {
      const targetPosition = target.offsetTop;
      const startPosition = window.scrollY;
      const distance = targetPosition - startPosition;
      const duration = 1500; // Duration in milliseconds (1 second)
      let startTime = null;

      const ease = (t, b, c, d) => {
        // Ease-in-out function
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
      };

      const animation = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);

        window.scrollTo(0, run);

        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      };

      requestAnimationFrame(animation);
    }
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
