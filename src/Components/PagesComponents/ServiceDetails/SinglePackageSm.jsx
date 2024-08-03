"use client";
import React, { useState, useEffect } from "react";
import { Tooltip } from "flowbite-react";
import { IoCheckmarkSharp } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa6";
import { BiRevision } from "react-icons/bi";
import Link from "next/link";
import { VscQuestion } from "react-icons/vsc";

const SinglePackageSm = ({ item, setOpenModal }) => {
  const [userData, setUserData] = useState(null);

  const orderWithLogin = () => {
    localStorage.setItem(
      "item",
      JSON.stringify({
        ...item,
        serviceName: serviceName,
      })
    );
    setOpenModal(true);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const data = JSON.parse(localStorage.getItem("userData"));
      setUserData(data);
    }
  }, []);

  return (
    <div className="md:mx-[10%] lg:mx-0">
      <div
        key={item?.id}
        className="border border-[#CBD5E1] transition-all duration-300 hover:border-[#FF693B] px-8 py-5 rounded-3xl 6xl:w-[400px] flex flex-col"
      >
        {/* title */}
        <div className="mb-5">
          <h3 className="font-Raleway text-[16px] text-[#1E293B] font-bold mb-2">
            {item?.package_name}
          </h3>
          <p className="text-[15px] text-[#334155] font-normal">
            {item?.package_text}
          </p>
        </div>

        {/* price */}
        <div className="mb-4">
          <h2 className="text-[20px] md:text-[32px] font-semibold font-Raleway flex items-center">
            $ <span>{item?.package_price}</span>
          </h2>
        </div>

        {/* order button */}
        <div className="mb-6">
          <button
            onClick={orderWithLogin}
            className="text-[16px] font-medium text-[#FF693B] border border-[#FF693B] px-6 py-2 w-full rounded-md hover:text-white hover:bg-[#FF693B] transition-all duration-300"
          >
            Place Order Now
          </button>
        </div>

        {/* order details */}
        <div className="flex-grow">
          {item?.package_details?.map((detail, index) => (
            <div key={index} className="flex items-center gap-5 mb-3">
              <IoCheckmarkSharp className="text-[#FF8F5A] w-[16px] h-[16px] flex-shrink-0" />
              <span className="text-[#646464] text-[16px] font-Roboto">
                {detail?.package_item}
              </span>
            </div>
          ))}
        </div>

        {/* delivery and revision info */}
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-1.5 font-Raleway font-semibold">
            <FaRegClock className="w-[24px] h-[24px]" />
            <div className="flex items-center gap-2">
              <span className="text-[12px] md:text-[16px]">
                {item?.delivery_time}{" "}
                {item?.delivery_time === "1" ? "Day" : "Days"} Delivery
              </span>
              <Tooltip
                className="w-[280px] py-3"
                content={
                  <div>
                    <span>
                      All days are business days except Friday and Saturday.
                    </span>
                    <Link
                      href="/faq"
                      className="flex justify-center items-center mt-2 py-1 px-3 rounded-md bg-[#FF693B] whitespace-nowrap w-[32%]"
                    >
                      Learn More
                    </Link>
                  </div>
                }
              >
                <VscQuestion className="cursor-pointer" />
              </Tooltip>
            </div>
          </div>
          <div className="flex gap-1 items-center justify-center font-Raleway font-semibold">
            <BiRevision className="w-[24px] h-[24px]" />
            <span className="text-[12px] md:text-[16px]">
              {item?.revision}{" "}
              {item?.revision === "1" ? "Revision" : "Revisions"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePackageSm;
