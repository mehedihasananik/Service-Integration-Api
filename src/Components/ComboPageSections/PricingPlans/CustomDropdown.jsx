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

  // Conditionally set the width based on the options
  const containerWidth = containsSec
    ? "w-[172px]" // If the option contains "sec"
    : containsPlatform
    ? "w-[150px]" // If the option contains "platform"
    : isYesNoOptions
    ? "w-[100px]" // If the option is "yes" or "no"
    : "w-[200px]"; // Default width for other cases

  return (
    <div className={`relative ${containerWidth}`}>
      <button
        onClick={toggleDropdown}
        className="flex items-center justify-end w-full px-4 py-2 text-left bg-none text-black text-[16px] "
      >
        <span className={isOpen ? "text-black" : "text-gray-500 mr-[5px]"}>
          {placeholder || (isOpen ? "" : "")}
        </span>
        <FaAngleDown className="text-gray-500" />
      </button>

      {isOpen && (
        <ul
          className="absolute z-10 max-w-full mt-1 bg-white rounded-md shadow-lg overflow-y-auto"
          style={{ maxHeight: "200px", overflowX: "hidden" }} // Prevent horizontal scroll and limit height
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
                text-white bg-[#0A2C8C] border-b border-b-gray-500 hover:bg-[#0A2C8C] text-center text-[16px]"
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
