"use client";
import React, { useEffect } from "react";
import Container from "@/Components/Container/Container";

const ScheduleMeeting = () => {
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
    <Container>
      <div className="text-center mb-8 mt-5">
        <h1 className="text-[30px] md:text-[30px] lg:text-[48px] font-Raleway font-bold">
          Schedule a <span className="text-[#FF693B]">meeting</span>
        </h1>
        <p className="text-xl ">
          Please use the calendar below to book your appointment.
        </p>
      </div>
      <div
        className="meetings-iframe-container"
        data-src="https://meetings.hubspot.com/envobyte?embed=true"
      ></div>

    </Container>
  );
};

export default ScheduleMeeting;
