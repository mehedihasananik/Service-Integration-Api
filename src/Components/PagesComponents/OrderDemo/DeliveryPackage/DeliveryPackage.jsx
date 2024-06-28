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

const fileTypeIcons = {
  jpg: "image/jpeg",
  jpeg: "image/jpeg",
  png: "image/png",
  webp: "image/webp",
  txt: "https://cdn3.iconfinder.com/data/icons/muksis/128/txt-128.png",
  pdf: "https://cdn3.iconfinder.com/data/icons/muksis/128/pdf-128.png",
  xlsx: "https://cdn3.iconfinder.com/data/icons/muksis/128/xlsx-128.png",
  docx: "https://cdn3.iconfinder.com/data/icons/muksis/128/docx-128.png",
  mp4: "video/mp4",
  webm: "video/webm",
  ogg: "video/ogg",
  zip: "https://cdn3.iconfinder.com/data/icons/muksis/128/zip-128.png",
};

const fallbackIconUrl = "/assets/file-1453.png";
const videoIconUrl = "/assets/play-button.png";

const getFileType = (url) => {
  const extension = url.split(".").pop().split("_")[0];
  return extension.toLowerCase();
};

const DeliveryPackage = ({ delivery, human_readable_delivery_time }) => {
  const [downloading, setDownloading] = useState({});
  const [openModal, setOpenModal] = useState(false);
  const [modalSize, setModalSize] = useState("4xl");
  const [showConfetti, setShowConfetti] = useState(false);
  const [showCongratulations, setShowCongratulations] = useState(false);
  const [openCongratsModal, setOpenCongratsModal] = useState(false);

  const { width, height } = useWindowSize();
  const { descripttion, media_urls, id, status, updated_at, delivery_number } =
    delivery;

  const handleImageClick = (url) => {
    window.open(url, "_blank");
  };

  const handleDownloadClick = async (url) => {
    setDownloading((prev) => ({ ...prev, [url]: true }));
    try {
      const response = await fetch(url, { mode: "cors" });
      const blob = await response.blob();
      const urlObject = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = urlObject;
      link.setAttribute("download", url.split("/").pop());
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading the file:", error);
    } finally {
      setDownloading((prev) => ({ ...prev, [url]: false }));
    }
  };

  const handleStatusUpdate = async (status) => {
    const formData = new FormData();
    formData.append("status", status);

    try {
      const response = await fetch(
        `https://admin.envobyte.com/api/chat/delivery/update/${id}`,
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
  // console.log(delivery);
  return (
    <div>
      <div className=" bg-[#FDFDFD]  rounded-[8px] px-1 lg:ml-[40px] mb-3 md:w-[90%]">
        <h3 className="text-[16px] font-Raleway font-bold text-[#0A2C8C]">
          Delivered your order :
        </h3>
      </div>
      <div className="relative bg-[#FDFDFD] border-2 border-[#E2E2E2] rounded-[8px] px-3 lg:ml-[40px] py-5 mb-3 md:w-[90%]">
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
          <h3 className="text-[#333] font-Roboto text-[24px] font-[700]">
            Delivery #{delivery_number}
          </h3>
          <div className="border-b-2 border-[#E2E2E2] py-2"></div>
        </div>
        <div className="flex space-x-5">
          <div>
            <img
              className="w-[50px] rounded-lg"
              src="/assets/icon_for_favicon.png"
              alt="icon"
            />
          </div>
          <div className="flex flex-col md:flex-row md:gap-x-4">
            <div className="space-y-2">
              <h3 className="text-[#333] font-Raleway text-[14px] font-[700]">
                Delivery Message :
              </h3>
              <p className="text-[14px] text-[#666] font-[400]">Hi There,</p>
              <p className="text-[14px] text-[#666] font-[400]">
                {descripttion}.
              </p>
              <div className="lg:pt-4">
                <h3 className="text-[#333] font-Raleway text-[16px] font-[600]">
                  Attachments
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {media_urls.map((item, index) => {
                  const fileType = getFileType(item);
                  const iconSrc = fileTypeIcons[fileType] || fallbackIconUrl;

                  return (
                    <div key={index} className="group relative text-center">
                      <div
                        className="h-[180px] flex items-center justify-center bg-[#F3F6F9] rounded-lg group-hover:brightness-75 cursor-pointer"
                        onClick={() => handleImageClick(item)}
                      >
                        {fileType === "jpg" ||
                        fileType === "jpeg" ||
                        fileType === "png" ||
                        fileType === "webp" ? (
                          <img
                            className="h-[180px] w-full object-contain object-position-center pointer-events-auto rounded-lg"
                            src={item}
                            alt=""
                          />
                        ) : fileType === "mp4" ||
                          fileType === "webm" ||
                          fileType === "ogg" ? (
                          <div className="relative w-full flex justify-center">
                            <img
                              className="h-[180px] w-[180px] pt-3  cursor-pointer  pointer-events-auto"
                              src={videoIconUrl}
                              alt="Video Thumbnail"
                            />
                          </div>
                        ) : (
                          <img
                            className="h-[120px] pointer-events-auto rounded-lg"
                            src={iconSrc}
                            alt="File Thumbnail"
                          />
                        )}
                      </div>
                      <div className="absolute bottom-[10px] left-0 right-4 flex justify-end">
                        {downloading[item] ? (
                          <button
                            className="bg-[#FF693B] py-1.5 px-2 rounded-sm shadow-md text-white"
                            disabled
                          >
                            Downloading...
                          </button>
                        ) : (
                          <button
                            className="bg-[#FF693B] py-1.5 px-2 rounded-sm shadow-md text-white"
                            onClick={() => handleDownloadClick(item)}
                          >
                            <MdDownload />
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
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
              <div className="py-0">
                <p className="text-[#666] text-[14px] font-[400]">
                  {status === "approved"
                    ? ""
                    : status === "revision"
                    ? ""
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
            handleStatusUpdate={handleStatusUpdate}
          />
          <CongratsModal
            openCongratsModal={openCongratsModal}
            setOpenCongratsModal={setOpenCongratsModal}
          />
        </>
      </div>
    </div>
  );
};

export default DeliveryPackage;
