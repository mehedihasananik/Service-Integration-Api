"use client";
import { BiRevision } from "react-icons/bi";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { BsPlusCircle } from "react-icons/bs";
import { GoPaperclip } from "react-icons/go";
import { CiFaceSmile } from "react-icons/ci";
import { IoMdMore } from "react-icons/io";

const MessageContent = () => {
  const fileInputRef = useRef(null);

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
            <div className="flex space-x-4">
              <div>
                <img src="/assets/msgAvater2.png" alt="" />
              </div>
              <div>
                <div className="flex space-x-4">
                  <h3>Rozey Rayin</h3>{" "}
                  <span className="text-[#7B7B7B font-Raleway text-[12px]">
                    Dec 13, 10.40 am
                  </span>
                </div>
                <p className="text-[14px] font-Raleway font-[600] text-[#666666]">
                  I&apos;d like to design UI for my corporate website, it’s has
                  the following pages: Homepage, About Us, Product, Terms &
                  Condition and Contact us.
                </p>
              </div>
            </div>
            {/* 3rd chatting */}
            <div className="flex space-x-4">
              <div>
                <Image
                  width={100}
                  height={100}
                  className="w-[40px] h-[40px]"
                  src="/assets/msgAvater.png"
                  alt=""
                />
              </div>
              <div>
                <div className="flex space-x-4">
                  <h3>Rozey Rayin</h3>{" "}
                  <span className="text-[#7B7B7B font-Raleway text-[12px]">
                    Dec 13, 10.40 am
                  </span>
                </div>
                <p className="text-[14px] font-Raleway font-[600] text-[#666666]">
                  Nice to meet you. Please send me your details.
                </p>
              </div>
            </div>
          </div>
          {/* custom order */}
          {/* custom title */}
          <div className="px-5  lg:px-20 pb-3 bg-[#FFFFFF">
            <h3 className="text-[14px] font-Raleway font-[600] text-[#0A2C8C]">
              Here&apos;s your custom offer
            </h3>
          </div>
          {/* custom box */}
          <div className="border border-[#E2E2E2]   py-5 rounded-md pb-0 bg-[#FFFFFF">
            <div className="px-5 lg:px-20">
              {/* title */}
              <div className="flex justify-between">
                <div>
                  <h3 className="text-[16px] font-Raleway font-[600] text-[#333333]">
                    We will design 5 pages website UI for your corporate
                    business.
                  </h3>
                </div>
                <div>
                  <h3 className="text-[text-16px] font-600 text-[#2F83E4]">
                    $200 USD
                  </h3>
                </div>
              </div>
              <hr className="my-4" />
              {/* description */}
              <div>
                <p className="text-[#666666] text-[14px] pb-4">
                  Lorem ipsum dolor sit amet consectetur. Nulla sed eu quam
                  congue orci enim. Scelerisque molestie aliquam ac mauris ipsum
                  venenatis egestas. Scelerisque molestie aliquam ac mauris
                  ipsum venenatis egestas.{" "}
                </p>
              </div>
              {/* delivery details & title */}
            </div>
            <div className="flex items-center justify-between w-full bg-[#F1F8FC] lg:px-20 ">
              <div className="flex gap-8">
                <div className="bg-[#F1F8FC] flex gap-1 items-center py-4 text-[14px] font-Raleway font-[700]">
                  <span>
                    <BiRevision className="text-[20px] text-[#0A2C8C]" />
                  </span>{" "}
                  <span>1 Revision</span>
                </div>
                <div className="bg-[#F1F8FC] flex items-center py-4 text-[14px] font-Raleway font-[700] gap-1">
                  <span>
                    <MdOutlineAccessTimeFilled className="text-[20px] text-[#0A2C8C]" />
                  </span>{" "}
                  <span>Day Delivery</span>
                </div>
              </div>
              <div className="space-x-7">
                <button className="text-[#000] text-[14px] w-[600] bg-[#B0B0B0] hover:shadow-xl  rounded-[4px] px-5 py-1.5 font-[600] transition-all duration-300">
                  Cancel
                </button>
                <button className="text-[#FFF] text-[14px] w-[600] bg-[#FF693B] hover:shadow-xl rounded-[4px] px-5 py-1.5 font-[600]">
                  Accept
                </button>
              </div>
            </div>
          </div>
          {/* ffth batch */}
          <div className="px-6 mt-4 flex space-x-4">
            <div>
              <img src="/assets/msgAvater2.png" alt="" />
            </div>
            <div>
              <div className="flex space-x-4">
                <h3>Rozey Rayin</h3>{" "}
                <span className="text-[#7B7B7B font-Raleway text-[12px]">
                  Dec 13, 10.40 am
                </span>
              </div>
              <p className="text-[14px] font-Raleway font-[600] text-[#666666]">
                Thank for sending the offer.
              </p>
            </div>
          </div>
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
