"use client";
import React, { useState } from "react";
import { RiEdit2Fill } from "react-icons/ri";

const ComboPageAccodion = ({ title, answer, index }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="py-2 rounded-md">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex justify-between items-center w-full  rounded-md py-3 px-3 md:px-4 font-semibold border-b"
      >
        <div className="flex items-center gap-2 md:gap-4">
          <span
            className={`p-1 md:p-2 rounded-full ${
              accordionOpen ? " text-[#0A2C8C]" : " text-[#0A2C8C]"
            }`}
          >
            0{index + 1}
          </span>

          <h3 className="text-[rgb(90,94,110)] font-Inter font-semibold text-headingCaption lg:text-headingSmall text-left">
            {title}
          </h3>
        </div>

        <svg
          className="fill-[#6D758F] shrink-0 ml-2 md:ml-8 w-4 h-4 md:w-4 md:h-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
        </svg>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden font-Inter text-[#6D758F] text-left text-paragraphSmall md:text-paragraph px-3 md:px-4 py-0 lg:ml-[5%]">
          <p className="py-3 pb-6 md:pb-8">{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default ComboPageAccodion;
