import React from "react";
import { BiRevision } from "react-icons/bi";
import { MdOutlineAccessTimeFilled } from "react-icons/md";

const CustomOffer = ({ order }) => {
  const {
    package_name,
    package_price,
    package_text,
    delivery_time,
    id,
    revision,
    status,
  } = order;

  console.log(status);

  const handleStatusUpdate = async (status) => {
    const formData = new FormData();
    formData.append("status", status);

    try {
      const response = await fetch(
        `http://192.168.10.16:8000/api/chat/order/update/${id}`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update status");
      }

      const data = await response.json();
      console.log("Status updated:", data?.delivery?.status);
      // Optionally, you can update the state here to reflect the new status
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  return (
    <div className="lg:mx-10 w-[80%] py-4">
      <div className="pb-3">
        <h3 className="text-[14px] font-Raleway font-[600] text-[#0A2C8C]">
          Here&apos;s your custom offer
        </h3>
      </div>
      <div className=" border border-[#E2E2E2]   py-5 rounded-md pb-0">
        <div className="px-5 lg:px-4">
          {/* title */}
          <div className="flex justify-between">
            <div>
              <h3 className="text-[16px] font-Raleway font-[600] text-[#333333]">
                {package_name}
              </h3>
            </div>
            <div>
              <h3 className="text-[text-16px] font-600 text-[#2F83E4] flex justify-center items-center">
                ${package_price} USD
              </h3>
            </div>
          </div>
          <hr className="my-4" />
          {/* description */}
          <div>
            <p className="text-[#666666] text-[14px] pb-4">{package_text}</p>
          </div>
          {/* delivery details & title */}
        </div>
        <div className="flex items-center justify-between w-full bg-[#F1F8FC] lg:px-4 ">
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
                <span>{delivery_time}</span> <span> Day Delivery</span>
              </span>
            </div>
          </div>
          {order.status === "cancel" ? (
            <h3 className="text-lg font-bold">
              The order request has been removed
            </h3>
          ) : order.status === "accept" ? (
            <h3 className="text-lg font-bold">
              The order request has been approved
            </h3>
          ) : (
            <div className="space-x-7">
              <button
                onClick={() => handleStatusUpdate("cancel")}
                className="text-[#000] text-[14px] w-[600] bg-[#B0B0B0] hover:shadow-xl rounded-[4px] px-5 py-1.5 font-[600] transition-all duration-300"
              >
                Cancel
              </button>
              <button
                onClick={() => handleStatusUpdate("accept")}
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

export default CustomOffer;
