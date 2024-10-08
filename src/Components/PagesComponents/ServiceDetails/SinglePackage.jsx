"use client";
import React, { useState, useEffect } from "react";
import { IoCheckmarkSharp } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa6";
import { Tooltip } from "flowbite-react";
import { VscQuestion } from "react-icons/vsc";
import Link from "next/link";
import GlobalButtonHovered from "@/Components/Utilites/GlobalButton/GlobalButtonHovered";

const SinglePackage = ({ item, setOpenModal, height, serviceName }) => {
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

  const heightClass =
    height === 1
      ? "h-[360px]"
      : height === 2
      ? "h-[410px]"
      : height === 3
      ? "h-[460px]"
      : height === 4
      ? "h-[495px]"
      : height === 5
      ? "h-[530px] md:h-[565px]"
      : height === 6
      ? "h-[570px] md:h-[595px]"
      : height === 7
      ? "h-[615px] md:h-[628px]"
      : height === 8
      ? "h-[615px] md:h-[660px]"
      : height === 9
      ? "h-[700px] md:h-[720px]"
      : height === 10
      ? "h-[700px] md:h-[760px]"
      : "";

  const deliveryHeight =
    height === 1
      ? "mt-[30px] md:mt-[-110px]"
      : height === 2
      ? "mt-[30px] md:mt-[-60px]"
      : height === 3
      ? "mt-[30px] md:mt-[-20px]"
      : height === 4
      ? "mt-[30px] md:mt-[40px]"
      : height === 5
      ? "mt-[30px] md:mt-[90px]"
      : height === 6
      ? "mt-[30px] md:mt-[120px]"
      : height === 7
      ? "mt-[30px] md:mt-[155px]"
      : height === 8
      ? "mt-[30px] md:mt-[200px]"
      : height === 9
      ? "mt-[30px] md:mt-[245px]"
      : height === 10
      ? "mt-[30px] md:mt-[290px]"
      : "";

  // console.log(item);

  return (
    <div className="md:mx-[10%] lg:mx-0 overflow-hidden">
      <div
        id={item?.package_name?.toLowerCase().replace(/\s+/g, "-")}
        key={item?.id}
        className={`border ${heightClass} border-[#CBD5E1] transition-all duration-300 hover:border-[#FF693B] pt-5 pb-11 rounded-3xl 6xl:w-[400px] 6xl:gap-x-20`}
      >
        {/* title */}
        <div className="h-[95px]  px-4 md:px-4">
          <div className="space-y-5">
            <h3 className="font-Raleway text-[16px] text-[#1E293B] font-bold">
              {item?.package_name}
            </h3>
            <p className="text-[15px] text-[#334155] font-normal line-clamp-2">
              {item?.package_text}
            </p>
          </div>
        </div>
        {/* price */}
        <div className="md:h-[50px] xl:h-[60px] xxl:h-[50px] mt-[20px] md:mt-0 px-4 md:px-4 flex">
          <div className="md:my-2 font-Raleway font-semibold flex items-center space-x-2">
            {item?.discount_price && (
              <span className="line-through text-gray-500 text-[16px] md:text-[20px] ">
                ${item?.discount_price}
              </span>
            )}
            <span className="text-[20px] md:text-[32px]  ">
              ${item?.package_price}
            </span>
          </div>
          {item?.monthly_subscription === 1 && (
            <div className="mt-4 font-semibold"> /monthly</div>
          )}
        </div>
        {/* order button */}
        <div className="py-4 mt-4 md:mt-0 md:pb-8 flex justify-center px-4 md:px-4">
          {/* <button
            onClick={orderWithLogin}
            className="text-[16px] font-medium text-[#FF693B] border border-[#FF693B] px-6 py-2 w-full rounded-md hover:text-white hover:bg-[#FF693B] transition-all duration-300"
          >
            Contact For Order
          </button> */}
          <GlobalButtonHovered
            path={"/checkout"}
            title={"Pay Now"}
            className="btn btn-secondary md:w-[100%] text-center py-2.5"
          />
        </div>
        {/* order details */}
        <div className="space-y-5 md:h-[150px] pl-3 md:pl-8">
          {item?.package_details?.slice(0, 10).map((item, index) => (
            <div
              key={index}
              className="flex justify-start items-center gap-x-1.5"
            >
              <span>
                <IoCheckmarkSharp className="text-[#FF8F5A] w-[16px] h-[16px]" />
              </span>
              <span className="text-[#646464] text-[16px] font-Roboto">
                {item?.package_item.length > 35
                  ? `${item?.package_item.slice(0, 35)}...`
                  : item?.package_item}
              </span>
            </div>
          ))}
        </div>
        <div
          className={`flex items-center justify-between mt-[100px] px-4 md:px-8 ${deliveryHeight}`}
        >
          {/* 1st */}
          <div className="flex items-center gap-1.5 font-Raleway font-semibold">
            <span>
              <FaRegClock className="w-[24px] h-[24px]" />
            </span>
            <div className="flex items-center gap-2 ">
              <span className="text-[12px] md:text-[16px]">
                {item?.delivery_time}{" "}
                {item?.delivery_time === "1" ? "Day Delivery" : "Days Delivery"}
              </span>{" "}
              <div className="relative inline-block">
                <Tooltip
                  className="w-[280px] py-3 "
                  content={
                    <div className="">
                      <span>
                        {" "}
                        All days are business days except <br /> Friday and
                        Saturday.
                      </span>
                      <Link
                        href="/refund-policy#working_days"
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
          </div>
        </div>
        {/* delivery date */}
      </div>
    </div>
  );
};

export default SinglePackage;
