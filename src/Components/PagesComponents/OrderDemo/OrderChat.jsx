"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

import Loading from "@/Components/Utilites/Loading/Loading";
import { IoMdMore } from "react-icons/io";
import io from "socket.io-client";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import axios from "axios";
import OrderMessages from "./OrderComponents/OrderMessages";
import UploadingComponent from "./OrderComponents/UploadingComponent";

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
  const textareaRef = useRef(null);

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
  console.log(messageHistory);

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
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [inputtedMessage]);

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
          {/* messages & custom offer */}
          <div className="mb-[8%]">
            {messageHistory.map((msg, index) => {
              console.log(msg.delivery);
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
                <OrderMessages
                  key={index}
                  senderName={senderName}
                  formattedDate={formattedDate}
                  msg={msg}
                  isImage={isImage}
                  order={order}
                  index={index}
                  handleCancelClick={handleCancelClick}
                  handleAcceptClick={handleAcceptClick}
                  messageHistory={messageHistory}
                  lastMessageRef={lastMessageRef}
                  isLoading={isLoading}
                />
              );
            })}
          </div>
          {/* Text arean & input */}
          <UploadingComponent
            inputtedMessage={inputtedMessage}
            setInputtedMessage={setInputtedMessage}
            textareaRef={textareaRef}
            setText={setText}
            selectedFile={selectedFile}
            handleFileChange={handleFileChange}
            setShowEmoji={setShowEmoji}
            showEmoji={showEmoji}
            sendMessageToAPI={sendMessageToAPI}
            handleSendButtonClick={handleSendButtonClick} // Call handleSendButtonClick function
            setSelectedFile={setSelectedFile}
          />
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
