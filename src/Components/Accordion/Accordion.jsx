"use client";
import React, { useState } from "react";
import { RiEdit2Fill } from "react-icons/ri";

const Accordion = ({ title, answer }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="py-2 rounded-md">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex justify-between items-center w-full bg-[#F8FAFC] rounded-md py-3 px-3 md:px-4 font-semibold"
      >
        <div className="flex items-center gap-2 md:gap-4">
          <span
            className={`p-1 md:p-2 rounded-full ${
              accordionOpen ? "bg-red-500" : "bg-[#0A2C8C]"
            }`}
          >
            <RiEdit2Fill className="text-white w-3 h-3 md:w-4 md:h-4" />
          </span>

          <h3 className="text-[#334155] text-headingCaption lg:text-headingSmall text-left">
            {title}
          </h3>
        </div>

        <svg
          className="fill-indigo-500 shrink-0 ml-2 md:ml-8 w-4 h-4 md:w-6 md:h-6"
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
        <div className="overflow-hidden text-left text-paragraphSmall md:text-paragraph px-3 md:px-4 py-0 bg-[#F8FAFC]">
          <p className="py-3 pb-6 md:pb-8">{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
