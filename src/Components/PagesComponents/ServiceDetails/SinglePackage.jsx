"use client";
import React, { useContext, useLayoutEffect, useState, useEffect } from "react";
import { Tooltip } from "flowbite-react";
import { IoCheckmarkSharp } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa6";
import { BiRevision } from "react-icons/bi";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { AuthContext } from "@/providers/AuthProviders";

const SinglePackage = ({ item, setOpenModal }) => {
  const router = useRouter();
  const { setItemId } = useContext(AuthContext);

  const [userData, setUserData] = useState(null);
  const [orderId, setOrderId] = useState(null);

  const handlePlaceOrder = async () => {
    const data = {
      user_id: userData?.id,
      service_package: item?.id,
      sevice_items_id: item?.sevice_items_id,
      package_price: item?.package_price,
      payment_status: "done",
      order_status: "Requirement Needed",
    };

    try {
      const response = await fetch(
        `https://admin.envobyte.com/api/service_order`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const responseData = await response.json();

      if (responseData?.order_id) {
        setOrderId(responseData?.order_id);
        router.push(`/checkout/${orderId}`);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handlePassData = () => {
    setItemId(item.id);
    localStorage.setItem("itemId", item?.id);
  };

  // kakon
  const orderWithLogin = () => {
    localStorage.setItem("item", JSON.stringify(item));
    setOpenModal(true);
  };

  useLayoutEffect(() => {
    if (typeof window !== "undefined") {
      const data = JSON.parse(localStorage.getItem("userData"));
      setUserData(data);
    }
  }, []);

  useEffect(() => {
    if (orderId) {
      router.push(`/checkout/${orderId}`);
    }
  }, [orderId, router]);

  return (
    <div className="md:mx-[10%] lg:mx-0">
      <div
        key={item?.id}
        className="border border-[#CBD5E1] transition-all duration-300 hover:border-[#FF693B] px-8 pt-10 pb-11 rounded-3xl 6xl:w-[400px] 6xl:gap-x-20"
      >
        {/* title */}
        <div className="h-[95px]">
          <div className="space-y-5">
            <h3 className="font-Raleway text-[16px] text-[#1E293B] font-bold">
              {item?.package_name}
            </h3>
            <p className="text-[15px] text-[#334155] font-normal">
              {item?.package_text}
            </p>
          </div>
        </div>
        {/* price */}
        <div className="md:h-[50px] xl:h-[60px] xxl:h-[50px] mt-[20px] md:mt-0">
          <h2 className="md:my-2 text-[20px] md:text-[32px] font-semibold font-Raleway flex items-center">
            $ <span>{item?.package_price}</span>
          </h2>
        </div>
        {/* order button */}
        <div className="py-4 mt-4 md:mt-0 md:pb-8 flex justify-center">
          {userData ? (
            <button
              onClick={handlePlaceOrder}
              className="text-[16px] w-[100%] text-center font-medium text-[#FF693B] border border-[#FF693B] px-6 py-2 rounded-md hover:text-white hover:bg-[#FF693B] transition-all duration-300"
            >
              Place Order Now
            </button>
          ) : (
            <button
              onClick={orderWithLogin}
              className="text-[16px] font-medium text-[#FF693B] border border-[#FF693B] px-6 py-2 w-full rounded-md hover:text-white hover:bg-[#FF693B] transition-all duration-300"
            >
              Place Order Now
            </button>
          )}
        </div>
        {/* order details */}
        <div className="space-y-5 md:h-[150px]">
          {item?.package_details?.map((item, index) => (
            <div key={index} className="flex justify-start items-center gap-5">
              <span>
                <IoCheckmarkSharp className="text-[#FF8F5A] w-[16px] h-[16px]" />
              </span>
              <span className="text-[#646464] text-[16px] font-Roboto">
                {item?.package_item}
              </span>
            </div>
          ))}
        </div>
        <div className="flex pt-14 lg:pt-80 items-center justify-between">
          {/* 1st */}
          <div className="flex items-center gap-1.5 font-Raleway font-semibold">
            <span>
              <FaRegClock className="w-[24px] h-[24px]" />
            </span>
            <div className="flex items-center gap-2">
              <span className="text-[12px] md:text-[16px]">
                {item?.delivery_time}{" "}
                {item?.delivery_time === "1" ? "Day Delivery" : "Days Delivery"}
              </span>{" "}
              <Tooltip
                className="flowbite-tooltip-target"
                placement="top"
                content={
                  <div
                    className="py-2"
                    style={{ fontSize: "12px", left: "300px" }}
                  >
                    <h3>
                      All days are business days except Friday and Saturday.
                    </h3>
                    <button className="bg-[#FF6C37] px-2 text-[13px] mt-2 rounded-sm">
                      Learn More
                    </button>
                  </div>
                }
              >
                <div className="cursor-pointer">
                  <img
                    className="w-[14px] h-[14px]"
                    src="/assets/mark.png"
                    alt=""
                  />
                </div>
              </Tooltip>
            </div>
          </div>
        </div>
        {/* delivery date */}
      </div>
    </div>
  );
};

export default SinglePackage;
