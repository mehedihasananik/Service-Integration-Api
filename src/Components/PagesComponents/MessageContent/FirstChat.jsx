"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { GoPaperclip } from "react-icons/go";
import { CiFaceSmile } from "react-icons/ci";
import Loading from "@/Components/Utilites/Loading/Loading";
import { IoMdMore } from "react-icons/io";
import io from "socket.io-client";

const SOCKET_URL_ONE = "https://admin.envobyte.com/";
const socket = io(SOCKET_URL_ONE);

const FirstChat = ({
  messageHistory,
  inputtedMessage,
  setInputtedMessage,
  sendMessageToAPI,
  loading,
}) => {
  const lastMessageRef = useRef(null);
  const [autoScrolled, setAutoScrolled] = useState(false);

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
  console.log(messageHistory);

  return (
    <div className="bg-[#FCFCFC]">
      <div>
        <div className="flex justify-between items-center px-4 bg-[#FFFFFF] my-5  rounded-lg  ">
          <div className="flex gap-x-3 ">
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
          {messageHistory.map((msg, index) => {
            const senderName = msg.sender_id === 1 ? "User" : "Admin";
            const updatedAt = parseDate(msg.updated_at);
            const formattedDate = new Intl.DateTimeFormat("en-US", {
              month: "short",
              day: "2-digit",
              hour: "numeric",
              minute: "2-digit",
              hour12: true,
            }).format(updatedAt);

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
                    <p className="text-[14px] font-Raleway font-[500] text-[#666666]">
                      <span> {msg.message}</span>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
          {/* Loading indicator */}
          {loading ? (
            <Loading />
          ) : (
            <div className="bg-[#FFFFFF  pb-8 flex w-full items-center gap-5 px-10 ">
              <div className="w-[90%] relative">
                <input
                  className="w-full border border-[#E2E2E2] rounded-md py-2.5 px-4"
                  type="text"
                  placeholder="Write a message..."
                  value={inputtedMessage}
                  onChange={(e) => setInputtedMessage(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault(); // Prevent default form submission behavior
                      sendMessageToAPI(inputtedMessage); // Send message on Enter key press
                      setInputtedMessage(""); // Clear input field after sending message
                    }
                  }}
                />
                {/* Attachment and Emoji icons */}
                <div className="flex gap-2 absolute right-3 top-[13px]">
                  <button>
                    <GoPaperclip className="text-[20px]" />
                  </button>
                  <button>
                    <CiFaceSmile className="text-[20px]" />
                  </button>
                  {/* File upload input (hidden) */}
                  <input type="file" style={{ display: "none" }} />
                </div>
              </div>
              {/* Send button */}
              <div className="w-[10%]">
                <button
                  onClick={() => {
                    sendMessageToAPI(inputtedMessage);
                    setInputtedMessage(""); // Clear the input field after sending the message
                  }}
                  className="w-full font-[600] bg-[#FF693B] border border-[#FF693B] text-white hover:text-[#FF693B] hover:bg-[#ffff] transition-all duration-200  text-[16px]  mx-[10%] py-2.5 rounded-[4px]"
                >
                  Send
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FirstChat;
