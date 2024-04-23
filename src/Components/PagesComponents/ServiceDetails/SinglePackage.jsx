import React from "react";
import { Tooltip } from "flowbite-react";
import { IoCheckmarkSharp } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa6";
import { BiRevision } from "react-icons/bi";
import API_ROUTES from "@/app/api/confiq";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const SinglePackage = ({ item, openModal, setOpenModal }) => {
  const userData = JSON.parse(sessionStorage.getItem("userData"));
  const router = useRouter();

  const handlePlaceOrder = async () => {
    const data = {
      user_id: userData.id,
      service_package: item.id,
      sevice_items_id: item.sevice_items_id,
      package_price: item.package_price,
      payment_status: "done",
      order_status: "Requirement Needed",
    };

    try {
      const response = await fetch(`${API_ROUTES.route}/service_order`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();
      console.log(responseData);
      if (responseData.resultsuccess) {
        toast.success(responseData.resultsuccess);
        router.push("/dashboard");
      }
      // Log the response from the API
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <div
        key={item.id}
        className=" border border-[#CBD5E1]  transition-all duration-300  hover:border-[#FF693B] px-8 py-10 rounded-3xl"
      >
        {/* title */}
        <div className="h-[150px]">
          <div className="space-y-5">
            <h3 className="font-Raleway text-[16px] text-[#1E293B] font-bold">
              {item.package_name}
            </h3>
            <p className="text-[15px] text-[#334155] font-normal">
              {item.package_text.substring(0, 80)}
            </p>
          </div>
          {/* price */}
          <div className="py-2">
            <h2 className="text-[32px] font-semibold font-Raleway">
              {item.package_price}
            </h2>
          </div>
        </div>
        {/* order button */}
        <div className="py-4 md:pb-8">
          {userData ? (
            <button
              onClick={() => handlePlaceOrder()}
              className="text-[16px] font-medium text-[#FF693B] border border-[#FF693B] px-6 py-2 w-full rounded-md hover:text-white hover:bg-[#FF693B] transition-all duration-300"
            >
              Place Order Now
            </button>
          ) : (
            <button
              onClick={() => setOpenModal(true)}
              className="text-[16px] font-medium text-[#FF693B] border border-[#FF693B] px-6 py-2 w-full rounded-md hover:text-white hover:bg-[#FF693B] transition-all duration-300"
            >
              Place Order Now
            </button>
          )}
        </div>
        {/* order details */}
        <div className="space-y-5 h-[150px]">
          {item?.package_details.map((item) => {
            return (
              <div
                key={item.sevice_package_id}
                className="flex justify-start items-center gap-5"
              >
                <span>
                  <IoCheckmarkSharp className="text-[#FF8F5A] w-[16px] h-[16px]" />
                </span>
                <span className="text-[#646464] text-[16px] font-Roboto">
                  {item.package_item}
                </span>
              </div>
            );
          })}
        </div>
        {/* delivery date */}
        <div className="flex pt-14 lg:pt-28 items-center justify-between">
          {/* 1st */}
          <div className="flex items-center gap-1.5 font-Raleway  font-semibold">
            <span>
              <FaRegClock className="w-[24px] h-[24px]" />
            </span>
            <div className="flex items-center gap-2">
              <span className="text-[16px]">{item.delivery_time}</span>{" "}
              <Tooltip content="Tooltip content">
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
          <div className="flex gap-1 items-center justify-center font-Raleway  font-semibold">
            <span>
              <BiRevision className="w-[24px] h-[24px]" />
            </span>
            <span className="text-[16px]"> {item.revision}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePackage;
