"use client";
import React, { useContext, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { GoPaperclip } from "react-icons/go";
import { CiFaceSmile } from "react-icons/ci";
import Loading from "@/Components/Utilites/Loading/Loading";
import { IoMdMore } from "react-icons/io";
import io from "socket.io-client";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { useDropzone } from "react-dropzone";
import { FaTimes } from "react-icons/fa";
import { BiRevision } from "react-icons/bi";
import { MdDownload, MdOutlineAccessTimeFilled } from "react-icons/md";
import CustomOffer from "./CustomOffer/CustomOffer";
import DeliveryPackage from "./DeliveryPackage/DeliveryPackage";
import OrderRequirements from "@/Components/Utilites/OrderRequirements/OrderRequirements";
import Media_Urls from "@/Components/Utilites/Media_Urls/Media_Urls";
import { AuthContext } from "@/providers/AuthProviders";
import Link from "next/link";
import ServiceOrderRevisions from "@/Components/Utilites/ServiceOrderRevisions/ServiceOrderRevisions";
import { Spinner } from "flowbite-react";
import toast from "react-hot-toast";

const SOCKET_URL_ONE = "http://localhost:3000";
const socket = io(SOCKET_URL_ONE);

const OrderChat = ({
  messageHistory,
  inputtedMessage,
  setInputtedMessage,
  handleSendMessage,
  loading,
  setSelectedFile,
  selectedFile,
  attachments,
  setAttachments,
  isImageSending,
}) => {
  const lastMessageRef = useRef(null);
  const chatContainerRef = useRef(null);
  const [showEmoji, setShowEmoji] = useState(false);
  const [text, setText] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [userScrolledUp, setUserScrolledUp] = useState(false);
  const { userData } = useContext(AuthContext);
  // console.log(userData);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const addEmoji = (e) => {
    const sym = e.unified.split("_");
    const codeArray = [];
    sym.forEach((el) => codeArray.push("0x" + el));
    let emoji = String.fromCodePoint(...codeArray);
    setInputtedMessage(inputtedMessage + emoji);
    setText(inputtedMessage + emoji);
  };

  const handleImageLoaded = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    socket.on("message", (newMessage) => {
      sendMessageToAPI(newMessage.message);
    });

    return () => {
      socket.off("message");
    };
  }, []);

  const parseDate = (timestamp) => {
    if (!timestamp) return null;
    const date = new Date(timestamp);
    if (isNaN(date)) {
      return new Date(timestamp.replace("T", " "));
    }
    return date;
  };

  function isImage(fileUrl) {
    const imageExtensions = [".jpg", ".jpeg", ".png", ".gif"];
    return imageExtensions.some((ext) => fileUrl.toLowerCase().endsWith(ext));
  }

  const onDrop = (acceptedFiles) => {
    if (attachments.length + acceptedFiles.length <= 6) {
      const newattachments = acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      );
      setAttachments((prevattachments) => [
        ...prevattachments,
        ...newattachments,
      ]);

      setSelectedFile(acceptedFiles[0]);
    } else {
      toast.error("You cannot add more than 6 attachments.");
    }
  };

  const removeImage = (indexToRemove) => {
    setAttachments((prevattachments) =>
      prevattachments.filter((_, index) => index !== indexToRemove)
    );
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
  });
  useEffect(() => {
    // Scroll to the bottom of the chat container only if user is already at the bottom
    if (chatContainerRef.current && !userScrolledUp) {
      const { scrollHeight, clientHeight } = chatContainerRef.current;
      chatContainerRef.current.scrollTop = scrollHeight - clientHeight;
    }
  }, [messageHistory, userScrolledUp]);

  const handleScroll = () => {
    if (chatContainerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } =
        chatContainerRef.current;
      const isAtBottom = scrollTop + clientHeight >= scrollHeight - 10; // Adjust threshold as needed
      setUserScrolledUp(!isAtBottom);
    }
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
  const handleImageClick = (url) => {
    window.open(url, "_blank");
  };
  // console.log(messageHistory);

  return (
    <div className="bg-[#FCFCFC] h-[88vh] flex flex-col relative px-8">
      <div
        ref={chatContainerRef}
        onScroll={handleScroll}
        className="bg-[#FCFCFC] flex-grow overflow-y-auto"
      >
        <div className="flex justify-between items-center mx-4 bg-[#FFFFFF] my-5 rounded-lg  ">
          {/* <div className="flex gap-x-3 bg-[#FFFFFF]">
            <div>
              {" "}
              <Image
                className="w-[54px] h-54px]"
                src="/assets/msgAvater.png"
                width={100}
                height={100}
                alt="avater"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-[20px] font-Raleway font-[600]">
                Envobyte
              </span>
              <span className="text-[#777777] font-Raleway">Online</span>
            </div>
          </div> 
          <div>
            <button>
              <IoMdMore className="text-[25px]" />
            </button>
          </div>
          */}
        </div>
        <div className="bg-[#fff] px-4">
          <div className="mb-[8%]">
            {messageHistory.map((msg, index) => {
              // console.log(msg);
              const senderName = msg.sender_id === 19 ? "Anik" : "Envobyte";
              const updatedAt = parseDate(msg.updated_at);
              const formattedDate = new Intl.DateTimeFormat("en-US", {
                month: "short",
                day: "2-digit",
                hour: "numeric",
                minute: "2-digit",
                hour12: true,
              }).format(updatedAt);
              const {
                order,
                delivery,
                media_urls,
                human_readable_delivery_time,
              } = msg;

              return (
                <div
                  key={index}
                  className="flex flex-col"
                  ref={
                    index === messageHistory.length - 19 ? lastMessageRef : null
                  }
                >
                  <div className="flex gap-x-3 py-3">
                    <div className="w-[40px]">
                      {senderName === "Envobyte" && (
                        <Image
                          width={100}
                          height={100}
                          className="w-[40px] h-[40px] rounded-lg"
                          src={
                            senderName === "Envobyte"
                              ? "/assets/icon_for_favicon.png"
                              : ` ${userData.image}`
                          }
                          alt=""
                        />
                      )}
                      {senderName === "Anik" && (
                        <Link href={"/profile"}>
                          <Image
                            width={100}
                            height={100}
                            className="w-[40px] h-[40px] rounded-lg"
                            src={
                              senderName === "Envobyte"
                                ? "/assets/msgAvater.png"
                                : ` ${userData.image}`
                            }
                            alt=""
                          />
                        </Link>
                      )}
                    </div>
                    <div className="w-[100%]">
                      <div className="flex space-x-4">
                        <h3 className="text-[14px] font-Raleway font-[600] text-[#333333] ">
                          <span>{senderName}</span>
                        </h3>{" "}
                        <span className="text-[#7B7B7B font-Roboto text-[12px]  flex items-center">
                          {formattedDate}
                        </span>
                      </div>
                      <p className="text-[14px] pr-[4%] text-justify font-Roboto font-[400] text-[#666666]">
                        {msg.message}
                      </p>
                      {msg?.attachment && (
                        <div className="my-5">
                          {isLoading && <p>Loading...</p>}
                          {isImage(msg?.attachment) ? (
                            <div className="group relative">
                              <Image
                                onClick={() => handleImageClick(msg.attachment)}
                                className="group-hover:brightness-75 cursor-pointer rounded-md"
                                width={300}
                                height={200}
                                alt=""
                                src={msg.attachment}
                                onLoad={handleImageLoaded}
                              />
                              <div className="absolute bottom-[10px] left-[23%] hidden group-hover:flex justify-end">
                                <button
                                  className="bg-[#FF693B] py-1.5 px-2 rounded-sm shadow-md text-white"
                                  onClick={() =>
                                    handleDownloadClick(msg.attachment)
                                  }
                                >
                                  <MdDownload />
                                </button>
                              </div>
                            </div>
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
                  {order && <CustomOffer order={order} />}
                  {delivery && (
                    <DeliveryPackage
                      delivery={delivery}
                      human_readable_delivery_time={
                        human_readable_delivery_time
                      }
                    />
                  )}
                  {media_urls && <Media_Urls media_urls={media_urls} />}
                  {delivery?.service_order_revisions && (
                    <ServiceOrderRevisions delivery={delivery} />
                  )}
                </div>
              );
            })}
          </div>
          {/* Loading indicator */}
          {loading && <Loading />}

          {!loading && (
            <div className="bg-[#FFFFFF pb-8 flex w-[78%] items-center gap-5 px-10 fixed left-[14.5%] 6xl:left-[11%] -bottom-6">
              <div className="w-[70%] 6xl:w-[75%] relative">
                <textarea
                  className="w-full border border-[#E2E2E2] rounded-md py-4 px-4 resize-none pr-20 text-justify"
                  placeholder="Write a message..."
                  value={inputtedMessage}
                  onChange={(e) => {
                    setInputtedMessage(e.target.value);
                    setText(e.target.value);
                  }}
                  maxLength={2000} // Limit to 500 characters
                />

                <div className="flex h-[0px] gap-2 absolute right-0 top-[0px]">
                  <label htmlFor="file-upload" className="cursor-pointer">
                    <div className="flex relative top-[-108px]">
                      {attachments.map((file, index) => (
                        <div key={index} className="relative mr-[10px]">
                          {file.type.startsWith("image/") ? (
                            <img
                              src={file.preview}
                              alt={`Preview ${index}`}
                              className="w-[100px] h-[100px] object-cover"
                            />
                          ) : file.type === "application/pdf" ? (
                            <img
                              src="https://cdn3.iconfinder.com/data/icons/muksis/128/pdf-512.png"
                              alt={`PDF Preview ${index}`}
                              className="w-[100px] h-[100px]"
                            />
                          ) : file.type === "image/vnd.adobe.photoshop" ? (
                            <img
                              src="https://cdn3.iconfinder.com/data/icons/muksis/128/psd-512.png"
                              alt={`PSD Preview ${index}`}
                              className="w-[100px] h-[100px]"
                            />
                          ) : file.type === "application/vnd.adobe.xd" ? (
                            <img
                              src="http://192.168.10.16:8000/js/icons/xd.png"
                              alt={`XD Preview ${index}`}
                              className="w-[100px] h-[100px]"
                            />
                          ) : file.type === "application/msword" ||
                            file.type ===
                              "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ? (
                            <img
                              src="https://cdn3.iconfinder.com/data/icons/muksis/128/docx-128.png"
                              alt={`Word Preview ${index}`}
                              className="w-[100px] h-[100px]"
                            />
                          ) : file.type === "application/vnd.ms-excel" ||
                            file.type ===
                              "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" ? (
                            <img
                              src="http://192.168.10.16:8000/js/icons/excel.png"
                              alt={`Excel Preview ${index}`}
                              className="w-[100px] h-[100px]"
                            />
                          ) : file.type === "text/plain" ? (
                            <img
                              src="http://192.168.10.16:8000/js/icons/txt.png"
                              alt={`Text Preview ${index}`}
                              className="w-[100px] h-[100px]"
                            />
                          ) : file.type === "application/zip" ||
                            file.type === "application/x-zip-compressed" ? (
                            <img
                              src="https://cdn3.iconfinder.com/data/icons/muksis/128/zip-128.png"
                              alt={`Zip Preview ${index}`}
                              className="w-[100px] h-[100px]"
                            />
                          ) : file.type.startsWith("video/") ? (
                            <img
                              src="http://192.168.10.16:8000/js/icons/video.png"
                              alt={`Video Preview ${index}`}
                              className="w-[100px] h-[100px]"
                            />
                          ) : (
                            <img
                              src="/assets/file-1453.png"
                              alt={`Unsupported Preview ${index}`}
                              className="w-[100px] h-[100px]"
                            />
                          )}
                          <FaTimes
                            className="absolute top-[5px] right-[5px] cursor-pointer text-[15px] text-white  bg-[#95AFC0] rounded-sm"
                            onClick={(e) => {
                              e.preventDefault();
                              removeImage(index);
                            }}
                          />
                        </div>
                      ))}
                    </div>
                  </label>
                </div>
                <div className="rounded-sm cursor-pointer flex gap-0">
                  <input
                    {...getInputProps()}
                    id="file-upload"
                    className="hidden "
                  />
                  <label htmlFor="file-upload">
                    <GoPaperclip className="cursor-pointer absolute right-[45px] bottom-[40px]" />
                  </label>
                </div>
                <span
                  onClick={() => setShowEmoji(!showEmoji)}
                  className="cursor-pointer absolute right-[15px] bottom-[40px]"
                >
                  <CiFaceSmile className="text-[20px] " />
                </span>
              </div>

              <div className="w-[8%]">
                <button
                  onClick={() => {
                    handleSendMessage(inputtedMessage, attachments);
                    setInputtedMessage("");
                    setAttachments([]);
                  }}
                  disabled={isImageSending} // Disable button while loading
                  className="w-full font-[600] bg-[#FF693B] border border-[#FF693B] text-white hover:text-[#FF693B] hover:bg-[#ffff] transition-all duration-200  text-[16px]  mx-[10%] py-2.5 rounded-[4px]"
                >
                  {isImageSending && <Spinner size="sm" className="mr-2" />}
                  {isImageSending ? "Sending..." : "Send"}
                </button>
              </div>
            </div>
          )}
        </div>
        {showEmoji && (
          <div className="absolute bottom-[7%] right-[10px]">
            <Picker
              data={data}
              emojiSize={20}
              emojiButtonSize={28}
              onEmojiSelect={addEmoji}
              maxFrequentRows={0}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderChat;
