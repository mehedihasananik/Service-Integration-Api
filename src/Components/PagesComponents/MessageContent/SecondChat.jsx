"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const SecondChat = () => {
  const [messageHistory, setMessageHistory] = useState([]);

  const getMessageFromApi = async () => {
    try {
      const response = await fetch("https://admin.envobyte.com/api/chat/list", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sender_id: 18,
          receiver_id: 1,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch messages");
      }

      const data = await response.json();

      // Update UI immediately after fetching messages
      setMessageHistory(data);
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  useEffect(() => {
    // Call getMessageFromApi when the component mounts
    getMessageFromApi();
  }, []);
  console.log(messageHistory);

  return (
    <div>
      {" "}
      {messageHistory.map((msg, index) => {
        const senderName = msg.sender_id === 1 ? "User" : "Admin";

        // Function to parse timestamp into a Date object
        const parseDate = (timestamp) => {
          if (!timestamp) return null; // Defensive check for undefined timestamp
          const date = new Date(timestamp);
          if (isNaN(date)) {
            // Try parsing with removing 'T' in ISO 8601 format
            return new Date(timestamp.replace("T", " "));
          }
          return date;
        };

        // Convert the updated_at timestamp to a Date object
        const updatedAt = parseDate(msg.updated_at);

        if (!updatedAt) return null; // Skip rendering if updatedAt is null

        // Format the date
        const formattedDate = new Intl.DateTimeFormat("en-US", {
          month: "short",
          day: "2-digit",
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        }).format(updatedAt);

        return (
          <div key={index}>
            <h1 className="font-bold text-lg">
              <div className="flex space-x-4">
                <div>
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
                <div>
                  <div className="flex space-x-4">
                    <div className="text-[14px] font-Raleway font-[600] text-[#333333]">
                      <span>{senderName}</span>
                    </div>{" "}
                    <span className="text-[#7B7B7B font-Raleway text-[12px]">
                      {formattedDate}
                    </span>
                  </div>
                  <p className="text-[14px] font-Raleway font-[500] text-[#666666]">
                    <span> {msg.message}</span>
                  </p>
                  {msg?.attachment && (
                    <Image
                      className="w-[54px] h-54px]"
                      src={`http://192.168.10.16:8000/chat/attachment/${msg.attachment}`}
                      width={100}
                      height={100}
                      alt="avater"
                    />
                  )}
                </div>
              </div>
            </h1>
          </div>
        );
      })}
    </div>
  );
};

export default SecondChat;
