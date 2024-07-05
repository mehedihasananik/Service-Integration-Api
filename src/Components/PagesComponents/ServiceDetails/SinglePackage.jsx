"use client";
import React, {
  useContext,
  useLayoutEffect,
  useState,
  useEffect,
  useCallback,
} from "react";
import { IoCheckmarkSharp } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa6";
import { BiRevision } from "react-icons/bi";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/providers/AuthProviders";

const SinglePackage = ({ item, setOpenModal, height }) => {
  const router = useRouter();
  const { setItemId } = useContext(AuthContext);

  const [userData, setUserData] = useState(null);
  const [orderId, setOrderId] = useState(null);
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  let timeoutId = null;

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

  const showTooltip = () => {
    clearTimeout(timeoutId);
    setIsTooltipVisible(true);
  };

  const hideTooltip = useCallback(() => {
    timeoutId = setTimeout(() => {
      setIsTooltipVisible(false);
    }, 1500); // 300ms delay
  }, []);

  const truncateText = (text, maxWords) => {
    const words = text.split(" ");
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(" ") + "...";
    }
    return text;
  };

  const heightClass =
    height === 1
      ? "h-[360px]"
      : height === 2
      ? "h-[410px]"
      : height === 3
      ? "h-[460px]"
      : height === 4
      ? "h-[500px]"
      : height === 5
      ? "h-[565px]"
      : height === 6
      ? "h-[595px]"
      : height === 7
      ? "h-[628px]"
      : height === 8
      ? "h-[675px]"
      : height === 9
      ? "h-[720px]"
      : height === 10
      ? "h-[760px]"
      : "";

  const deliveryHeight =
    height === 1
      ? "mt-[-110px]"
      : height === 2
      ? "mt-[-60px]"
      : height === 3
      ? "mt-[-20px]"
      : height === 4
      ? "mt-[30px]"
      : height === 5
      ? "mt-[90px]"
      : height === 6
      ? "mt-[120px]"
      : height === 7
      ? "mt-[155px]"
      : height === 8
      ? "mt-[200px]"
      : height === 9
      ? "mt-[245px]"
      : height === 10
      ? "mt-[290px]"
      : "";

  return (
    <div className="md:mx-[10%] lg:mx-0">
      <div
        key={item?.id}
        className={`border ${heightClass} border-[#CBD5E1] transition-all duration-300 hover:border-[#FF693B] px-8 pt-5 pb-11 rounded-3xl 6xl:w-[400px] 6xl:gap-x-20`}
      >
        {/* title */}
        <div className="h-[95px]">
          <div className="space-y-5">
            <h3 className="font-Raleway text-[16px] text-[#1E293B] font-bold">
              {item?.package_name}
            </h3>
            <p className="text-[15px] text-[#334155] font-normal">
              {truncateText(item?.package_text, 20)}
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
        <div
          className={`flex items-center justify-between mt-[100px] ${deliveryHeight}`}
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
                <img
                  className="w-[14px] h-[14px] cursor-pointer"
                  src="/assets/mark.png"
                  alt=""
                  onMouseEnter={showTooltip}
                  onMouseLeave={hideTooltip}
                />
                {isTooltipVisible && (
                  <div
                    className="absolute z-10 bg-gray-800 bg-opacity-50 text-white text-sm rounded py-3 px-4 bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 w-[300px]"
                    onMouseEnter={showTooltip}
                    onMouseLeave={hideTooltip}
                  >
                    All days are business days except Friday and Saturday.
                    <button
                      className="bg-[#FF6C37] px-2 text-[13px] mt-2 rounded-sm mx-3"
                      onClick={(e) => {
                        e.stopPropagation();
                        // Add your "Learn More" button functionality here
                        console.log("Learn More clicked");
                      }}
                    >
                      Learn More
                    </button>
                  </div>
                )}
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
