"use client";
import React from "react";
import { FaAngleDown } from "react-icons/fa";

const CustomDropdown = ({
  options,
  onSelect,
  placeholder = "",
  isOpen,
  toggleDropdown,
}) => {
  // Check if any option contains "yes" or "no"
  const isYesNoOptions = options.some(
    (option) => option.toLowerCase() === "yes" || option.toLowerCase() === "no"
  );

  // Check if any option contains "platform"
  const containsPlatform = options.some((option) =>
    option.toLowerCase().includes("platform")
  );

  // Check if any option contains "sec"
  const containsSec = options.some((option) =>
    option.toLowerCase().includes("sec")
  );

  // Check if any option contains "page"
  const containsPage = options.some((option) =>
    option.toLowerCase().includes("page")
  );

  // Check if any option contains "logo"
  const containsLogo = options.some((option) =>
    option.toLowerCase().includes("logo")
  );
  // basic seo
  const basicSeo = options.some((option) =>
    option.toLowerCase().includes("basic")
  );
  const maintenance = options.some((option) =>
    option.toLowerCase().includes("maintenance")
  );
  const website = options.some((option) =>
    option.toLowerCase().includes("website")
  );

  // Conditionally set the width based on the options
  const containerWidth = containsLogo
    ? "w-[110px] md:w-[180px]" // If the option contains "logo"
    : website
    ? "w-[110px] md:w-[150px]"
    : containsPage
    ? "w-[80px] md:w-[155px]" // If the option contains "page"
    : containsSec
    ? " w-[172px]" // If the option contains "sec"
    : containsPlatform
    ? "w-[80px] md:w-[150px]" // If the option contains "platform"
    : isYesNoOptions
    ? "w-[100px]" // If the option is "yes" or "no"
    : basicSeo // If basic seo
    ? "w-[100px] md:w-[200px]"
    : maintenance
    ? "w-[130px] md:w-[] lg:w-[200px]"
    : "w-[200px]"; // Default width for other cases

  return (
    <div className={`relative ${containerWidth}`}>
      <button
        onClick={toggleDropdown}
        className="flex items-center justify-end w-full px-4 py-2 text-left bg-none text-black text-[12px] md:text-[16px]"
      >
        {/* Span with fixed height */}
        <span
          className={`${
            isOpen ? "text-black" : "text-gray-500"
          } mr-[5px] h-[14px] flex items-center whitespace-nowrap`}
        >
          {placeholder || (isOpen ? "" : "")}
        </span>
        <span className="block">
          {" "}
          <FaAngleDown className="text-gray-500" />
        </span>
      </button>

      {isOpen && (
        <ul
          className="absolute z-10 max-w-[400px] mt-1 bg-white rounded-md shadow-lg overflow-y-auto"
          style={{ maxHeight: "500px" }} // Prevent horizontal scroll and limit height
        >
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => {
                onSelect(option);
                toggleDropdown(); // Close the dropdown after selection
              }}
              className="px-4 py-2 cursor-pointer 
                transition-colors duration-200
                text-white bg-[#0A2C8C] border-b border-b-gray-500 hover:bg-[#0075FF] text-center text-[16px]"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomDropdown;
