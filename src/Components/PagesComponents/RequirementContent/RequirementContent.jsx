"use client";
import Container from "@/Components/Container/Container";
import React, { useRef, useState } from "react";

const RequirementContent = ({ requireMent }) => {
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileInputChange = () => {
    // Handle file input change here if needed
  };
  console.log(requireMent);

  return (
    <div className="pt-5">
      <div className=" max-w-[1680px] mx-auto px-[4%] md:px-[10%]">
        <div className="bg-[#F4F4F4] p-5 md:px-10 md:py-7 rounded-md">
          {/* title */}
          <div>
            <h3 className="text-[36px] font-Raleway font-[600] text-[#333333] px-4">
              Requirements
            </h3>
          </div>
          {/* form */}
          <div className=" pt-5">
            <form className="bg-[#FFFFFF] rounded-md">
              {requireMent.map((item, index) => {
                return (
                  <div
                    key={index}
                    className=" mb-4 px-5 pt-5 pb-1 rounded-t-md "
                  >
                    <label
                      htmlFor="businessName"
                      className="block text-[18px] font-Raleway font-[600] text-[#444444] mb-2 space-x-1 "
                    >
                      <span className="bg-[#EBEBEB] text-[14px] font-[600] py-[4px]  px-[8px] rounded-full font-Raleway text-center">
                        <span> {index + 1}</span>
                      </span>{" "}
                      <span>
                        {" "}
                        {item.questions}
                        <span
                          className={
                            item.field_type === "optional"
                              ? "text-[#0A2C8C]"
                              : ""
                          }
                        >
                          {item.field_type === "optional" ? "(Optional)" : ""}
                        </span>
                      </span>
                    </label>
                    <div className="flex flex-col gap-y-5 md:gap-y-0 md:flex-row gap-x-4 px-8">
                      <textarea
                        type="text"
                        id="businessName"
                        className="w-full md:w-[85%] border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 text-[16px] font-Raleway  text-[#323941] font-[400] "
                        placeholder="Write your answer here"
                        rows={1}
                        required
                      />

                      <button
                        onClick={handleButtonClick}
                        className="h-[45px] bg-[#FFF3EF] text-[16px] text-[#FF693B] font-[600] px-10 py-2.5 rounded-md whitespace-nowrap"
                      >
                        Attach file
                      </button>
                      {/* Hidden file input */}
                      <input
                        ref={fileInputRef}
                        type="file"
                        style={{ display: "none" }}
                        onChange={handleFileInputChange}
                      />
                    </div>
                  </div>
                );
              })}

              <div className="text-center md:text-left md:px-12 md:pt-5">
                <button
                  type="submit"
                  className="bg-[#FF693B] border border-[#FF693B] text-[16px] font-[600] text-white px-5 py-2.5 rounded-md hover:bg-white hover:text-[#FF693B] transition-all duration-300"
                >
                  Submit Requirement
                </button>
              </div>
            </form>
          </div>
          <div className="flex flex-col justify-center items-center px-5 pb-5 md:flex-row md:justify-start md:items-start  md:px-12 bg-[#FFFFFF] py-5 md:pb-20 text-[#484848] font-Raleway text-[12px]   gap-x-1 italic rounded-b-md">
            <span className="font-[600] ">Note:</span>
            <span>
              Please submit the complete requirements of the project. Change
              requirements in the middle of the project may be subject to extra
              charges.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequirementContent;
