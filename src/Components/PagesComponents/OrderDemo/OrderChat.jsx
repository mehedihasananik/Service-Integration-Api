"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { GoPaperclip } from "react-icons/go";
import { CiFaceSmile } from "react-icons/ci";
import Loading from "@/Components/Utilites/Loading/Loading";
import { IoMdMore } from "react-icons/io";
import io from "socket.io-client";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { BiRevision } from "react-icons/bi";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import axios from "axios";

const SOCKET_URL_ONE = "http://localhost:3000";
const socket = io(SOCKET_URL_ONE);

const OrderChat = ({
  messageHistory,
  inputtedMessage,
  setInputtedMessage,
  sendMessageToAPI,
  loading,
  setSelectedFile,
  selectedFile,
}) => {
  const lastMessageRef = useRef(null);
  const [autoScrolled, setAutoScrolled] = useState(false);
  const [showEmoji, setShowEmoji] = useState(false);
  const [text, setText] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const [showPaperclip, setShowPaperclip] = useState(true);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const addEmoji = (event) => {
    const emojiData = event.emoji || event.native || event.unified; // Access based on your library's structure
    setInputtedMessage(inputtedMessage + emojiData);
  };
  const inputRef = useRef(null);

  const handleImageLoaded = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    if (!autoScrolled && lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
      setAutoScrolled(true);
    }
  }, [autoScrolled, messageHistory]);

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
  // console.log(messageHistory);

  const handleSendButtonClick = () => {
    setShowPaperclip(!selectedFile);
    if (!selectedFile) {
      sendMessageToAPI(inputtedMessage);
      setInputtedMessage(""); // Clear the input field after sending the message
    }
  };
  function isImage(fileUrl) {
    const imageExtensions = [".jpg", ".jpeg", ".png", ".gif"];
    return imageExtensions.some((ext) => fileUrl.toLowerCase().endsWith(ext));
  }

  const handleCancelClick = async (orderId) => {
    try {
      const formData = new FormData();
      formData.append("status", "cancel");

      await axios.put(
        `http://192.168.10.16:8000/api/update/chat/order/${orderId}`,
        formData
      );

      // Handle success
    } catch (error) {
      console.error("Error cancelling order:", error);
      // Handle error
    }
  };

  const handleAcceptClick = async (orderId) => {
    try {
      const formData = new FormData();
      formData.append("status", "accept");

      await axios.put(
        `http://192.168.10.16:8000/api/update/chat/order/${orderId}`,
        formData
      );

      // Handle success
    } catch (error) {
      console.error("Error accepting order:", error);
      // Handle error
    }
  };

  return (
    <div className="bg-[#FFFFFF] h-screen flex flex-col relative">
      <div className="bg-[#FFFFFF] flex-grow overflow-y-auto">
        <div className="flex justify-between items-center mx-4 bg-[#FFFFFF] my-5  rounded-lg  ">
          <div className="flex gap-x-3 bg-[#FFFFFF]">
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
        </div>
        <div className="bg-[#fff] px-4">
          <div className="mb-[8%]">
            {messageHistory.map((msg, index) => {
              console.log(msg.order);
              const senderName = msg.sender_id === 1 ? "User" : "Envobyte";
              const updatedAt = parseDate(msg.updated_at);
              const formattedDate = new Intl.DateTimeFormat("en-US", {
                month: "short",
                day: "2-digit",
                hour: "numeric",
                minute: "2-digit",
                hour12: true,
              }).format(updatedAt);
              const { order } = msg;

              return (
                <div
                  key={index}
                  className="flex flex-col"
                  ref={
                    index === messageHistory.length - 1 ? lastMessageRef : null
                  }
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
                          {isLoading && <p>Loading...</p>}
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
                            <p className="text-[#666666] text-[14px] pb-4">
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
                                <span>{order.revision}</span>{" "}
                                <span>Revision</span>
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
            })}
          </div>
          {/* Loading indicator */}
          {loading ? (
            <Loading />
          ) : (
            <div className="bg-[#FFFFFF  pb-8 flex w-[85%] items-center gap-5 px-10  fixed left-[14%] -bottom-6">
              <div className="w-[90%] relative">
                <input
                  ref={inputRef}
                  className="w-full border border-[#E2E2E2] rounded-md py-2.5 px-4"
                  type="text"
                  placeholder="Write a message..."
                  value={inputtedMessage}
                  onChange={(e) => {
                    setInputtedMessage(e.target.value);
                    setText(e.target.value);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      sendMessageToAPI(inputtedMessage);
                      setInputtedMessage("");
                      setSelectedFile("");
                    }
                  }}
                />

                {/* Attachment and Emoji icons */}
                <div className="flex gap-2 absolute right-3 top-[13px]">
                  <label htmlFor="file-upload" className="cursor-pointer">
                    {selectedFile ? (
                      <span>{selectedFile.name}</span>
                    ) : (
                      <span>
                        <GoPaperclip className="text-[20px]" />
                      </span>
                    )}
                  </label>
                  <input
                    id="file-upload"
                    type="file"
                    style={{ display: "none" }}
                    onChange={handleFileChange}
                    accept=".jpg, .jpeg, .png, .gif, .pdf, .xlsx, .xls, .txt, .zip, .docx, .rtf, .ppt" // Add accept attribute
                  />
                  <button onClick={() => setShowEmoji(!showEmoji)}>
                    <CiFaceSmile className="text-[20px]" />
                  </button>
                </div>
              </div>
              {/* Send button */}
              <div className="w-[8%]">
                <button
                  onClick={() => {
                    sendMessageToAPI(inputtedMessage);
                    setInputtedMessage("");
                    handleSendButtonClick(); // Call handleSendButtonClick function
                    setSelectedFile(""); // Clear the input field after sending the message
                  }}
                  className="w-full font-[600] bg-[#FF693B] border border-[#FF693B] text-white hover:text-[#FF693B] hover:bg-[#ffff] transition-all duration-200  text-[16px]  mx-[10%] py-2.5 rounded-[4px]"
                >
                  Send
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
              onEmojiSelect={(e) => {
                if (typeof e.preventDefault === "function") {
                  e.preventDefault(); // Call only if it exists
                }
                addEmoji(e); // Access emoji data from the event object (if necessary)
              }}
              maxFrequentRows={0}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderChat;
