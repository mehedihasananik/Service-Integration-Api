// OrderWebSocket.js
"use client";

import React, { useState, useLayoutEffect } from "react";
import {
  sendMessageToServer,
  fetchMessagesFromServer,
  disconnectSocket,
  setMessageHandler,
} from "./orderSocketManager";
import OrderChat from "./OrderChat";
import OrderRequirements from "@/Components/Utilites/OrderRequirements/OrderRequirements";

const OrderWebSocket = () => {
  const [messageHistory, setMessageHistory] = useState([]);
  const [inputtedMessage, setInputtedMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [selectedFile, setSelectedFile] = useState(null);
  const [attachments, setAttachments] = useState([]);

  useLayoutEffect(() => {
    const fetchInitialMessages = async () => {
      const messages = await fetchMessagesFromServer();
      setMessageHistory(messages);
      setLoading(false);
    };

    fetchInitialMessages();

    const handleMessage = (data) => {
      setMessageHistory((prevMessages) => [...prevMessages, data]);
    };

    setMessageHandler(handleMessage);

    const interval = setInterval(() => {
      fetchMessagesFromServer().then(setMessageHistory).catch(console.error);
    }, 3000);

    return () => {
      clearInterval(interval);
      disconnectSocket();
    };
  }, []);

  const handleSendMessage = async (message, files) => {
    try {
      if (message.trim() || files.length > 0) {
        const newMessage = await sendMessageToServer(message, files);
        setMessageHistory((prevMessages) => [...prevMessages, newMessage]);
        setInputtedMessage("");
        setSelectedFile(null);
        setAttachments([]);
      } else {
        // Handle empty message or file selection here
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div className="h-90vh overflow-hidden relative ">
      <div>
        <OrderChat
          messageHistory={messageHistory}
          inputtedMessage={inputtedMessage}
          setInputtedMessage={setInputtedMessage}
          handleSendMessage={handleSendMessage}
          loading={loading}
          setSelectedFile={setSelectedFile}
          selectedFile={selectedFile}
          attachments={attachments}
          setAttachments={setAttachments}
          setMessageHistory={setMessageHistory}
        />
      </div>
    </div>
  );
};

export default OrderWebSocket;
