"use client";
import { useEffect } from "react";

const ComboScheduleMetting = ({ containerClass }) => {
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

  return (
    <div id="appointment" className={`${containerClass}`}>
      <div className="text-center mb-8 pt-5">
        <h1 className="text-[#0A2C8C] text-center font-Inter text-[20px] md:text-[30px] lg:text-5xl font-bold lg:leading-[52px]">
          Book Meeting With Us
        </h1>
        <p className="text-[#6D758F] text-center [font-family:Inter] text-base font-medium lg:leading-6 pt-[1%] ">
          Easily schedule a meeting with our experts at a time that suits you
          best.
        </p>
      </div>
      <div
        className="meetings-iframe-container"
        data-src="https://meetings.hubspot.com/envobyte?embed=true"
      ></div>
    </div>
  );
};

export default ComboScheduleMetting;
