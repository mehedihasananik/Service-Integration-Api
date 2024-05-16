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

const SOCKET_URL_ONE = "https://admin.envobyte.com/";
const socket = io(SOCKET_URL_ONE);

const FirstChat = ({
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

  const addEmoji = (e) => {
    const sym = e.unified.split("_");
    const codeArray = [];
    sym.forEach((el) => codeArray.push("0x" + el));
    let emoji = String.fromCodePoint(...codeArray);
    setInputtedMessage(inputtedMessage + emoji); // Update inputtedMessage with the selected emoji
    setText(inputtedMessage + emoji); // Update text state as well if needed
  };
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

  return (
    <div className="bg-[#FCFCFC] h-screen flex flex-col relative">
      <div className="bg-[#FCFCFC] flex-grow overflow-y-auto">
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
              console.log(msg);
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
                  className="w-full border border-[#E2E2E2] rounded-md py-2.5 px-4"
                  type="text"
                  placeholder="Write a message..."
                  value={inputtedMessage}
                  onChange={(e) => {
                    setInputtedMessage(e.target.value);
                    // Add your additional onChange functionality here
                    // For example:
                    setText(e.target.value);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault(); // Prevent default form submission behavior
                      sendMessageToAPI(inputtedMessage); // Send message on Enter key press
                      setInputtedMessage("");
                      setSelectedFile(""); // Clear input field after sending message
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
          <div className="md:px-14">
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

export default FirstChat;
