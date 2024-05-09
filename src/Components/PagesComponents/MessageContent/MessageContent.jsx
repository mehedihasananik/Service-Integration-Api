"use client";
import { BiRevision } from "react-icons/bi";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { GoPaperclip } from "react-icons/go";
import { CiFaceSmile } from "react-icons/ci";
import { IoMdMore } from "react-icons/io";

const MessageContent = () => {
  const fileInputRef = useRef(null);
  0;

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileInputChange = () => {
    // Handle file input change here if needed
  };
  return (
    <div className="px-6">
      {/* avater */}
      <div className="flex justify-between items-center px-4 bg-[#FFFFFF] py-5  rounded-lg  ">
        <div className="flex gap-x-3 ">
          <div>
            {" "}
            <Image
              className="w-[54px] h-54px]"
              src="/assets/msgAvater.png"
              width={100}
              height={100}
              alt="avater"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-[20px] font-Raleway font-[600]">
              Envobyte
            </span>
            <span className="text-[#777777] font-Raleway">Online</span>
          </div>
        </div>
        <div>
          <button>
            <IoMdMore className="text-[25px]" />
          </button>
        </div>
      </div>
      <div style={{ background: "#fff" }}>
        <div>
          {/* chatting */}
          <div className="bg-white mt-4 space-y-5 p-5 4  rounded-md">
            {/* 1st chatting */}
            <div className="flex space-x-4">
              <div>
                <Image
                  width={100}
                  height={100}
                  className="w-[40px] h-[40px]"
                  src="/assets/msgAvater2.png"
                  alt=""
                />
              </div>
              <div>
                <div className="flex space-x-4">
                  <h3 className="text-[14px] font-Raleway font-[600] text-[#333333] ">
                    Rozey Rayin
                  </h3>{" "}
                  <span className="text-[#7B7B7B font-Raleway text-[12px]">
                    Dec 13, 10.40 am
                  </span>
                </div>
                <p className="text-[14px] font-Raleway font-[500] text-[#666666]">
                  Hi Sir
                </p>
              </div>
            </div>
            {/* 2nd chatting */}
          </div>
          {/* custom order */}
          {/* custom title */}
        </div>
        {/* sending message input */}
        <div className="bg-[#FFFFFF lg:pt-[10%] pb-8 flex w-full items-center gap-5 px-10 ">
          <div className="w-[90%] relative">
            <input
              className="w-full border border-[#E2E2E2] rounded-md py-2.5 px-4"
              type="text"
              placeholder="Write a message..."
            />
            {/* <div className="absolute top-[13px] left-[14px]">
            <button>
              <BsPlusCircle className=" text-[#8A8A8A] text-[20px]" />
            </button>
          </div> */}
            <div className="flex gap-2 absolute right-3 top-[13px]">
              <button onClick={handleButtonClick}>
                <GoPaperclip className="text-[20px]" />
              </button>
              <button>
                <CiFaceSmile className="text-[20px]" />
              </button>
              <input
                type="file"
                onChange={handleFileInputChange}
                style={{ display: "none" }}
                ref={fileInputRef}
              />
            </div>
          </div>
          <div className="w-[10%]">
            <button className="w-full font-[600] bg-[#FF693B] border border-[#FF693B] text-white hover:text-[#FF693B] hover:bg-[#ffff] transition-all duration-200  text-[16px] font-[600]px-[20px] py-2.5 rounded-[4px]">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageContent;
