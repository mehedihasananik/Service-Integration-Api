import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

const CustomDropdown = ({ options, onSelect, placeholder = "" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect && onSelect(option);
  };

  return (
    <div className="relative w-64">
      <button
        onClick={toggleDropdown}
        className="flex items-center justify-end w-full px-4 py-2 text-left
          bg-none text-black
        "
      >
        <span className={selectedOption ? "text-black" : "text-gray-500"}>
          {selectedOption ? selectedOption : placeholder}
        </span>
        <FaAngleDown className="text-gray-500" />
      </button>

      {isOpen && (
        <ul className="absolute z-10 w-full mt-1 bg-white rounded-md shadow-lg max-h-60 overflow-auto">
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => handleOptionSelect(option)}
              className="px-4 py-2 cursor-pointer
                transition-colors duration-200
                text-white bg-[#0A2C8C] border-b hover:bg-[#0A2C8C]"
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
