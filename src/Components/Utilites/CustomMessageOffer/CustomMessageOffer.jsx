"use client";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { BiRevision } from "react-icons/bi";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import Link from "next/link";
import { AuthContext } from "@/providers/AuthProviders";
import { useRouter } from "next/navigation";

const CustomMessageOffer = ({ customoffer }) => {
  const { setCustomId } = useContext(AuthContext);
  const {
    title,
    delivery,
    description,
    message,
    id,
    order_id,
    order_price,
    order_status,
    payment_status,
    revision,
    service_items_id,
  } = customoffer;
  const router = useRouter();
  const [orderId, setOrderId] = useState(null);

  const handleStatusUpdate = async (status) => {
    try {
      const response = await axios.post(
        "http://192.168.10.14:8000/api/order-cancel/client",
        {
          order_status: status,
          custome_offer_id: id,
        }
      );

      if (response.status === 200) {
        console.log("Order status updated:", response.data);
        setOrderId(response.data.order_id);
        // You can add any additional logic here, like updating the UI or showing a success message.
      } else {
        console.error("Failed to update order status");
      }
    } catch (error) {
      console.error("Error updating order status:", error);
    }
  };

  useEffect(() => {
    if (orderId) {
      router.push(`/checkout/${orderId}`);
    }
  }, [orderId, router]);

  const handlePassData = () => {
    setCustomId(id);
    localStorage.setItem("customId", id);
  };
  console.log(orderId);

  return (
    <div className="lg:mx-0 w-[80%] pb-4">
      <div>
        <h3 className="text-[16px] pb-[2%] text-justify font-Roboto font-[600] text-[#000000]">
          {message}
        </h3>
      </div>
      <div className="pb-3">
        <h3 className="text-[14px] font-Raleway font-[600] text-[#0A2C8C]">
          Here&apos;s your Custom offer
        </h3>
      </div>
      <div className="border border-[#E2E2E2] py-5 rounded-md pb-0">
        <div className="px-5 lg:px-4">
          {/* title */}
          <div className="flex justify-between">
            <div>
              <h3 className="text-[16px] font-Raleway font-[600] text-[#333333]">
                {title}
              </h3>
            </div>
            <div>
              <h3 className="text-[text-16px] font-600 text-[#2F83E4] flex justify-center items-center">
                ${order_price} USD
              </h3>
            </div>
          </div>
          <hr className="my-4" />
          {/* description */}
          <div>
            <p className="text-[#666666] text-[14px] pb-4">{description}</p>
          </div>
          {/* delivery details & title */}
        </div>
        <div className="flex items-center justify-between w-full bg-[#F1F8FC] lg:px-4">
          <div className="flex gap-8">
            <div className="bg-[#F1F8FC] flex gap-1 items-center py-4 text-[14px] font-Raleway font-[700]">
              <span>
                <BiRevision className="text-[20px] text-[#123390]" />
              </span>{" "}
              <span className="text-[16px] font-Raleway font-[600] flex justify-center items-center gap-1">
                <span>{revision}</span> <span>Revision</span>
              </span>
            </div>
            <div className="bg-[#F1F8FC] flex items-center py-4 text-[14px] font-Raleway font-[700] gap-1">
              <span>
                <MdOutlineAccessTimeFilled className="text-[20px] text-[#123390]" />
              </span>{" "}
              <span className="text-[16px] font-Raleway font-[600] flex justify-center items-center gap-1">
                <span>{delivery}</span> <span> Day Delivery</span>
              </span>
            </div>
          </div>

          {order_status === "cancel" ? (
            <h3 className="text-lg font-bold">
              The order request has been removed
            </h3>
          ) : order_status === "Approved" ? (
            <>
              <h3 className="text-lg font-bold">
                The order request has been approved
              </h3>
            </>
          ) : (
            <div className="space-x-7">
              <button
                onClick={() => handleStatusUpdate("cancel")}
                className="text-[#000] text-[14px] w-[600] bg-[#B0B0B0] hover:shadow-xl rounded-[4px] px-5 py-1.5 font-[600] transition-all duration-300"
              >
                Cancel
              </button>
              <button
                onClick={() => handleStatusUpdate("Approved")}
                className="text-[#FFF] text-[14px] w-[600] bg-[#FF693B] hover:shadow-xl rounded-[4px] px-5 py-1.5 font-[600] transition-all duration-300"
              >
                Accept
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomMessageOffer;
