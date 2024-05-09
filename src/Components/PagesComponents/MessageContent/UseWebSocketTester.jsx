"use client";
// UseSocketIOTester.js
import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import FirstChat from "./FirstChat";

const SOCKET_URL_ONE = "http://192.168.10.16:8000";
const socket = io(SOCKET_URL_ONE);

const UseSocketIOTester = () => {
  const [messageHistory, setMessageHistory] = useState([]);
  const [inputtedMessage, setInputtedMessage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    socket.on("message", (data) => {
      setMessageHistory((prevMessages) => [...prevMessages, data]);
    });

    getMessageFromApi();

    const interval = setInterval(() => {
      getMessageFromApi();
    }, 3000);

    return () => {
      clearInterval(interval);
      socket.disconnect();
    };
  }, []);

  const sendMessageToAPI = async (message) => {
    try {
      const formData = new FormData();
      formData.append("sender_id", 1);
      formData.append("receiver_id", 18);
      formData.append("message", message);
      const response = await fetch("http://192.168.10.16:8000/api/save/chat", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setMessageHistory((prevMessages) => [
        ...prevMessages,
        { sender_id: 1, message: message },
      ]);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  const getMessageFromApi = async () => {
    try {
      const response = await fetch("http://192.168.10.16:8000/api/chat/list", {
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

      setMessageHistory(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  return (
    <div>
      <FirstChat
        messageHistory={messageHistory}
        inputtedMessage={inputtedMessage}
        setInputtedMessage={setInputtedMessage}
        sendMessageToAPI={sendMessageToAPI}
        loading={loading}
      />
    </div>
  );
};

export default UseSocketIOTester;
