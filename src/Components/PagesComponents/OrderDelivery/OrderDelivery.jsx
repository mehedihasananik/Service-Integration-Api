"use client";
import { BiRevision } from "react-icons/bi";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { GoPaperclip } from "react-icons/go";
import { CiFaceSmile } from "react-icons/ci";

const OrderDelivery = () => {
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
    <div className="py-3 bg-[#fff] mx-8">
      <div className="">
        {/* cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 px-4">
          {/* 1st */}
          <div className="max-w-[330px] flex  items-start gap-x-3  border border-[#E2E2E2] bg-[#FDFDFD] rounded-md p-3">
            <div>
              <img src="/assets/ui.png" alt="ui ux desing" />
            </div>
            <div>
              <h2 className="text-[#444] font-Raleway text-[16px] font-[600]">
                UI/UX Design
              </h2>
              <p className="text-[#666] text-[14px] font-[400] ">
                Order No. #F06CE0914A11
              </p>
            </div>
            <div>
              <h3 className="text-[#3371F2] text-[20px] font-[600] ">$50</h3>
            </div>
          </div>
          {/* 2nd */}
          <div className="max-w-[330px] flex items-start gap-x-3  border border-[#E2E2E2] bg-[#FDFDFD] rounded-md p-3">
            <div>
              <img src="/assets/date.png" alt="ui ux desing" />
            </div>
            <div>
              <h2 className="text-[#444] font-Raleway text-[16px] font-[600]">
                Order Placed
              </h2>
              <p className="text-[#666] text-[14px] font-[400] ">
                Dec 07, 03:03 AM
              </p>
            </div>
          </div>
          {/* 3rd */}
          <div className="max-w-[400px] flex items-center gap-x-5  border border-[#E2E2E2] bg-[#FDFDFD] rounded-md p-3">
            <div>
              <img src="/assets/pin.png" alt="ui ux desing" />
            </div>
            <div>
              <h2 className="text-[#444] font-Raleway text-[14px] font-[600] whitespace-nowrap">
                Requirement Submitted
              </h2>
              <p className="text-[#666] text-[14px] font-[400] ">
                Order No. #F06CE0914A11
              </p>
            </div>
            <div>
              <button className="bg-[#FF693B] text-[14px] font-[600] border border-[#FF693B] text-white px-4 py-1 rounded-md hover:text-[#FF693B] hover:bg-[#fff] transition-all duration-200">
                View
              </button>
            </div>
          </div>
        </div>

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
                <span className="text-[#7B7B7B] text-[12px] font-[300]">
                  Dec 13, 10.40 am
                </span>
              </div>
              <p className="text-[14px] font-Raleway font-[400] text-[#666]">
                Hi, I&apos;ve submitted the UI design project requirement,
                please check and let me know if you have any questions.
              </p>
            </div>
          </div>
          {/* 2nd chatting */}
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
                <span className="text-[#7B7B7B] text-[12px] font-[300]">
                  Dec 13, 10.40 am
                </span>
              </div>
              <p className="text-[14px] font-Raleway font-[400] text-[#666]">
                Can you do one more concept for the UI design?
              </p>
            </div>
          </div>
          {/* 3rd */}
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
                <h3 className="text-[14px] font-Raleway font-[600] text-[#333333] ">
                  Envobyte
                </h3>{" "}
                <span className="text-[#7B7B7B] text-[12px] font-[300]">
                  Dec 13, 10.40 am
                </span>
              </div>
              <p className="text-[14px] font-Raleway font-[400] text-[#666]">
                Nice to meet you. Yes, got the details, I’m starting work on it.
                Please accept the below offer to get one more concept for the UI
                design.
              </p>
            </div>
          </div>
          {/* 3rd chatting */}
        </div>
        {/* custom order */}
        {/* custom title */}
        <div className="px-5  lg:px-20 pb-3 ">
          <h3 className="text-[14px] font-Raleway font-[600] text-[#0A2C8C]">
            Here&apos;s your custom offer
          </h3>
        </div>
        {/* custom box */}
        <div className="lg:mx-20 ">
          <div className=" border border-[#E2E2E2]   py-5 rounded-md pb-0">
            <div className="px-5 lg:px-4">
              {/* title */}
              <div className="flex justify-between">
                <div>
                  <h3 className="text-[16px] font-Raleway font-[600] text-[#333333]">
                    Add one more Concept for the UI design
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
            <div className="flex items-center justify-between w-full bg-[#F1F8FC] lg:px-4 ">
              <div className="flex gap-8">
                <div className="bg-[#F1F8FC] flex gap-1 items-center py-4 text-[14px] font-Raleway font-[700]">
                  <span>
                    <BiRevision className="text-[20px] text-[#123390]" />
                  </span>{" "}
                  <span className="text-[16px] font-Raleway font-[600]">
                    1 Revision
                  </span>
                </div>
                <div className="bg-[#F1F8FC] flex items-center py-4 text-[14px] font-Raleway font-[700] gap-1">
                  <span>
                    <MdOutlineAccessTimeFilled className="text-[20px] text-[#123390]" />
                  </span>{" "}
                  <span className="text-[16px] font-Raleway font-[600]">
                    2 Day Delivery
                  </span>
                </div>
              </div>
              <div className="space-x-7">
                <button className="text-[#000] text-[14px] w-[600] bg-[#B0B0B0] hover:shadow-xl  rounded-[4px] px-5 py-1.5 font-[600] transition-all duration-300">
                  Cancel
                </button>
                <button className="text-[#FFF] text-[14px] w-[600] bg-[#FF693B] hover:shadow-xl  rounded-[4px] px-5 py-1.5 font-[600] transition-all duration-300">
                  Accept
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* ffth batch */}
        <div className="border border-[#E2E2E2] rounded-md py-3 mt-4 flex space-x-4 px-3 lg:ml-4 lg:mr-20">
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
              <h3 className="text-[14px] font-Raleway text-[#333] font-[700]">
                Envobyte
              </h3>{" "}
              <span className="text-[#7B7B7B font-Raleway text-[12px]">
                Dec 13, 10.40 am
              </span>
            </div>
            <p className="text-[14px] font-Raleway font-[600] text-[#666666]">
              Thank for sending the offer.
            </p>
          </div>
        </div>

        {/* delivery */}

        <div className="border border-[#E2E2E2] rounded-md mt-4  px-3 lg:ml-4 lg:mr-20 py-5">
          {/* delivery title */}
          <div className="pb-5">
            <h3 className="text-[#333] font-Raleway text-[24px] font-[700]">
              Delivery #1
            </h3>
            <div className="border-b-2 border-[#E2E2E2] py-2"></div>
          </div>
          {/* delivery details */}
          <div className="flex flex-col md:flex-row md:gap-x-4">
            <div>
              <Image
                width={500}
                height={500}
                className="w-[80px] h-[40px]"
                src="/assets/msgAvater.png"
                alt="icon"
              />
            </div>
            <div className="space-y-2">
              <h3 className="text-[#333] font-Raleway text-[14px] font-[700]">
                Envobyte Message
              </h3>
              <p className="text-[14px] text-[#666] font-[400]">Hi Envobyte,</p>
              <p className="text-[14px] text-[#666] font-[400]">
                Thanks again for your work!. Your delivery is enclosed. If there
                are any problems, Please let me know I will get back to you soon
                as I can.
              </p>
              <div className="lg:pt-4">
                <h3 className="text-[#333] font-Raleway text-[16px] font-[600]">
                  Attachments
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6">
                <div>
                  <img className="" src="/assets/delivery1.png" alt="" />
                </div>
                <div>
                  <img className="" src="/assets/delivery2.png" alt="" />
                </div>
                <div>
                  <img className="" src="/assets/delivery3.png" alt="" />
                </div>
              </div>
              <div className="space-x-4 pt-3">
                <button className="text-[16px] font-[600] text-[#fff] bg-[#FF693B] px-4 py-2 rounded-md hover:shadow-xl transition-all duration-200">
                  Approve
                </button>
                <button className="text-[16px] font-[600] text-[#B0B0B0] bg-[#F3F3F3] px-4 py-2 rounded-md hover:shadow-xl  transition-all duration-200">
                  Send a Revision
                </button>
              </div>
              <div className="py-3">
                <p className="text-[#666] text-[14px] font-[400]">
                  You have until Dec 18, 11:42 to approve or request a revision.
                  Otherwise, the order will mark as complete.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* sending message input */}
        <div className="pt-16 flex w-full items-center gap-5 pl-3 pb-5 ">
          <div className="w-[82.5%] relative">
            <input
              className="w-full border border-[#E2E2E2] rounded-md py-2.5 px-5#FF693B"
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

export default OrderDelivery;
