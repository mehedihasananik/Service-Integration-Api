"use client";
import { useState, useEffect } from "react";

const ScheduleMeetingContent = ({ containerClass }) => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(true);

  useEffect(() => {
    // Load the HubSpot Meetings Embed script
    const script = document.createElement("script");
    script.src =
      "https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsOverlayVisible(true); // Show overlay on scroll to disable interaction
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleOverlayClick = () => {
    setIsOverlayVisible(false); // Hide overlay to enable interaction
  };

  return (
    <div id="appointment" className={`${containerClass}`}>
      <div className="text-center mb-8 pt-5">
        <h1 className="text-[30px] md:text-[30px] lg:text-[48px] font-Raleway font-bold">
          Schedule a <span className="text-[#FF693B]">meeting</span>
        </h1>
        <p className="text-xl ">
          Please use the calendar below to book your appointment.
        </p>
      </div>
      <div
        className="meetings-iframe-container relative"
        data-src="https://meetings.hubspot.com/envobyte?embed=true"
        style={{ height: "" }} // Adjust as needed for your layout
      >
        {/* Overlay Div */}
        {isOverlayVisible && (
          <div
            className="absolute inset-0  z-10 flex items-center justify-center cursor-pointer transition-opacity"
            onClick={handleOverlayClick}
            role="button"
            aria-label="Enable interaction with the calendar"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                handleOverlayClick();
              }
            }}
          >
            <span className="text-lg text-gray-700 relative top-[-10%] left-[10%]">
              Click to Book An Appointment
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ScheduleMeetingContent;
