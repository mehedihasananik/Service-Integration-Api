"use client";
import Image from "next/image";
import React, { useState } from "react";
import { MdDownload } from "react-icons/md";
import { Button, Modal } from "flowbite-react";
import { GoPaperclip } from "react-icons/go";
import DeliveryRevision from "./DeliveryRevision";
import Confetti from "react-confetti";
import useWindowSize from "@/Components/Utilites/WindowSize/useWindowSize";
import CongratsModal from "@/Components/Utilites/CongratsModal/CongratsModal";

const DeliveryPackage = ({ delivery, human_readable_delivery_time }) => {
  const [openModal, setOpenModal] = useState(false);
  const [modalSize, setModalSize] = useState("4xl");
  const [showConfetti, setShowConfetti] = useState(false);
  const [showCongratulations, setShowCongratulations] = useState(false);
  const [openCongratsModal, setOpenCongratsModal] = useState(false);

  const { width, height } = useWindowSize();
  const { description, media_urls, id, status, updated_at } = delivery;

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
        `http://192.168.10.16:8000/api/chat/delivery/update/${id}`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update status");
      }

      const data = await response.json();
      if (status === "approved") {
        setShowConfetti(true);
        setShowCongratulations(true);
        setOpenCongratsModal(true);
        setTimeout(() => {
          setShowConfetti(false);
          setShowCongratulations(false);
        }, 10000);
      }
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  return (
    <div className="relative bg-[#FDFDFD] border-2 border-[#E2E2E2] rounded-[8px] px-3 lg:ml-[40px] py-5 mb-3 w-[80%]">
      {showConfetti && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <Confetti width={width} height={height} />
        </div>
      )}
      {showCongratulations && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-md shadow-lg">
            <h1 className="text-[32px] font-[700] text-[#FF693B]">
              Congratulations!
            </h1>
          </div>
        </div>
      )}
      <div className="pb-5">
        <h3 className="text-[#333] font-Raleway text-[24px] font-[700]">
          Delivery #{id}
        </h3>
        <div className="border-b-2 border-[#E2E2E2] py-2"></div>
      </div>
      <div className="flex space-x-5">
        <div>
          {" "}
          <img
            className="w-[50px]  rounded-lg"
            src="/assets/icon_for_favicon.png"
            alt="icon"
          />
        </div>
        <div className="flex flex-col md:flex-row md:gap-x-4">
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {media_urls.map((item, index) => (
                <div key={index} className="group relative text-center">
                  <div
                    className="h-[180px] flex items-center justify-center bg-[#F3F6F9] rounded-lg group-hover:brightness-75 cursor-pointer"
                    onClick={() => handleImageClick(item)}
                  >
                    <img
                      className="h-[180px] w-full object-contain object-position-center pointer-events-auto rounded-lg"
                      src={item}
                      alt=""
                    />
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
                    onClick={() => handleStatusUpdate("approved")}
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
                  ? ""
                  : status === "revision"
                  ? "The order has been sent for revision."
                  : `Note: You have until ${human_readable_delivery_time} to approve the delivery or request a revision. Otherwise, the order will be marked as complete.`}
              </p>
            </div>
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
        <CongratsModal
          openCongratsModal={openCongratsModal}
          setOpenCongratsModal={setOpenCongratsModal}
        />
      </>
    </div>
  );
};

export default DeliveryPackage;
