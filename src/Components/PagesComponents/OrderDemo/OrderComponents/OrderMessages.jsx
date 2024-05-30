import Image from "next/image";
import React from "react";
import { BiRevision } from "react-icons/bi";
import { MdOutlineAccessTimeFilled } from "react-icons/md";

const OrderMessages = ({
  senderName,
  formattedDate,
  msg,
  isImage,
  order,
  handleAcceptClick,
  handleCancelClick,
  index,
  messageHistory,
  lastMessageRef,
  isLoading,
  handleImageLoaded,
}) => {
  return (
    <div
      className="flex flex-col"
      ref={index === messageHistory.length - 1 ? lastMessageRef : null}
    >
      <div className="flex gap-x-3 py-3">
        <div className="w-[40px]">
          <Image
            width={100}
            height={100}
            className="w-[40px] h-[40px]"
            src={
              senderName === "Admin"
                ? "/assets/msgAvater.png"
                : "/assets/msgAvater2.png"
            }
            alt=""
          />
        </div>
        <div className="w-[100%]">
          <div className="flex space-x-4">
            <h3 className="text-[14px] font-Raleway font-[600] text-[#333333] ">
              <span>{senderName}</span>
            </h3>{" "}
            <span className="text-[#7B7B7B font-Raleway text-[12px]">
              {formattedDate}
            </span>
          </div>
          <p className="text-[14px] pr-[4%] text-justify font-Raleway font-[500] text-[#666666]">
            <span> {msg.message}</span>
          </p>
          {msg?.attachment && (
            <div className="my-5">
              {isImage(msg?.attachment) ? (
                <Image
                  width={200}
                  height={200}
                  alt=""
                  src={msg.attachment}
                  onLoad={handleImageLoaded}
                />
              ) : (
                <a
                  href={msg.attachment}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download Attachment
                </a>
              )}
            </div>
          )}
        </div>
      </div>

      {order && (
        <div className="lg:mx-20 ">
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
                    {order.package_name}
                  </h3>
                </div>
                <div>
                  <h3 className="text-[text-16px] font-600 text-[#2F83E4] flex justify-center items-center">
                    ${order.package_price} USD
                  </h3>
                </div>
              </div>
              <hr className="my-4" />
              {/* description */}
              <div>
                <p className="text-[#666666] text-[14px] pb-4 text-justify">
                  {order.package_text}
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
                  <span className="text-[16px] font-Raleway font-[600] flex justify-center items-center gap-1">
                    <span>{order.revision}</span> <span>Revision</span>
                  </span>
                </div>
                <div className="bg-[#F1F8FC] flex items-center py-4 text-[14px] font-Raleway font-[700] gap-1">
                  <span>
                    <MdOutlineAccessTimeFilled className="text-[20px] text-[#123390]" />
                  </span>{" "}
                  <span className="text-[16px] font-Raleway font-[600] flex justify-center items-center gap-1">
                    <span>{order.delivery_time}</span>{" "}
                    <span> Day Delivery</span>
                  </span>
                </div>
              </div>
              <div className="space-x-7">
                <button
                  onClick={() => handleCancelClick(order.id)}
                  className="text-[#000] text-[14px] w-[600] bg-[#B0B0B0] hover:shadow-xl  rounded-[4px] px-5 py-1.5 font-[600] transition-all duration-300"
                >
                  Cancel
                </button>
                <button
                  onClick={() => handleAcceptClick(order.id)}
                  className="text-[#FFF] text-[14px] w-[600] bg-[#FF693B] hover:shadow-xl  rounded-[4px] px-5 py-1.5 font-[600] transition-all duration-300"
                >
                  Accept
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderMessages;
