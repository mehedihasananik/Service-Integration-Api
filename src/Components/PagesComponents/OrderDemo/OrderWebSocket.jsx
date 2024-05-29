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

const OrderWebSocket = () => {
  const [messageHistory, setMessageHistory] = useState([]);
  const [inputtedMessage, setInputtedMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [selectedFile, setSelectedFile] = useState(null);

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

  const handleSendMessage = async () => {
    try {
      const newMessage = await sendMessageToServer(
        inputtedMessage,
        selectedFile
      );
      setMessageHistory((prevMessages) => [...prevMessages, newMessage]);
      setInputtedMessage("");
      setSelectedFile(null);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div className="h-90vh overflow-hidden relative">
      <OrderChat
        messageHistory={messageHistory}
        inputtedMessage={inputtedMessage}
        setInputtedMessage={setInputtedMessage}
        sendMessageToAPI={handleSendMessage}
        loading={loading}
        setSelectedFile={setSelectedFile}
        selectedFile={selectedFile}
      />
    </div>
  );
};

export default OrderWebSocket;
