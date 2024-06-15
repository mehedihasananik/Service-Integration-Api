"use client";
import Image from "next/image";
import React from "react";
import { MdDownload } from "react-icons/md";
import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { GoPaperclip } from "react-icons/go";
import Revision from "@/Components/Utilites/Revision/Revision";
import DeliveryRevision from "./DeliveryRevision";

const DeliveryPackage = ({ delivery }) => {
  const [openModal, setOpenModal] = useState(false);
  const [modalSize, setModalSize] = useState("4xl");

  const { description, media_urls, id, status } = delivery;

  const handleImageClick = (url) => {
    window.open(url, "_blank");
  };

  const handleDownloadClick = async (url) => {
    try {
      const response = await fetch(url, {
        mode: "cors",
      });
      const blob = await response.blob();
      const urlObject = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = urlObject;
      link.setAttribute("download", url.split("/").pop());
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading the image:", error);
    }
  };

  const handleStatusUpdate = async (status) => {
    const formData = new FormData();
    formData.append("status", status);

    try {
      const response = await fetch(
        `http://192.168.0.103:8000/api/chat/delivery/update/${id}`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update status");
      }

      const data = await response.json();
      // console.log("Status updated:", data?.delivery?.status);
      // Optionally, you can update the state here to reflect the new status
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  return (
    <div className="bg-[#FDFDFD] border-2 border-[#E2E2E2] rounded-[8px]  px-3 lg:ml-[40px]  py-5 mb-3 w-[80%] ">
      {/* delivery title */}
      <div className="pb-5">
        <h3 className="text-[#333] font-Raleway text-[24px] font-[700]">
          Delivery #{id}
        </h3>
        <div className="border-b-2 border-[#E2E2E2] py-2"></div>
      </div>
      {/* delivery details */}
      <div className="flex flex-col md:flex-row md:gap-x-4">
        <div>
          <Image
            width={50}
            height={50}
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
            Thanks again for your work!. Your delivery is enclosed. If there are
            any problems, Please let me know I will get back to you soon as I
            can.
          </p>
          <div className="lg:pt-4">
            <h3 className="text-[#333] font-Raleway text-[16px] font-[600]">
              Attachments
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {media_urls.map((item, index) => (
              <div key={index} className="group relative text-center">
                <div
                  className="h-[150px] flex items-center justify-center bg-[#F3F6F9] rounded-lg group-hover:brightness-75 cursor-pointer"
                  onClick={() => handleImageClick(item)}
                >
                  <img className="max-h-[120px] py-3 " src={item} alt="" />
                </div>
                <div className="absolute bottom-[10px] left-0 right-4 flex justify-end">
                  <button
                    className="bg-[#FF693B] py-1.5 px-2 rounded-sm shadow-md text-white"
                    onClick={() => handleDownloadClick(item)}
                  >
                    <MdDownload />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="space-x-4 pt-3">
            {status === "approved" ? (
              <p className="text-[16px] font-[600] text-[#333]">
                The order has been approved.
              </p>
            ) : status === "revision" ? (
              <p className="text-[16px] font-[600] text-[#333]">
                The order has been sent for revision.
              </p>
            ) : (
              <>
                <button
                  // onClick={() => handleStatusUpdate("approved")}
                  className="text-[16px] font-[600] text-[#fff] bg-[#FF693B] px-4 py-2 rounded-md hover:shadow-xl transition-all duration-200"
                >
                  Approve
                </button>
                <button
                  onClick={() => setOpenModal(true)}
                  className="text-[16px] font-[600] text-[#6a6a6a] bg-[#ddd] px-4 py-2 rounded-md hover:shadow-xl transition-all duration-200"
                >
                  Send a Revision
                </button>
              </>
            )}
          </div>
          <div className="py-3">
            <p className="text-[#666] text-[14px] font-[400]">
              {status === "approved"
                ? "The order has been approved."
                : status === "revision"
                ? "The order has been sent for revision."
                : "You have until Dec 18, 11:42 to approve or request a revision. Otherwise, the order will mark as complete."}
            </p>
          </div>
        </div>
      </div>
      <>
        <DeliveryRevision
          openModal={openModal}
          setOpenModal={setOpenModal}
          modalSize={modalSize}
          delivery={delivery}
        />
      </>
    </div>
  );
};

export default DeliveryPackage;
