"use client";

import React, { useState, useEffect } from "react";
import {
  sendMessageToServer,
  fetchMessagesFromServer,
} from "./orderSocketManager";
import OrderChat from "./OrderChat";

const OrderWebSocket = () => {
  const [messageHistory, setMessageHistory] = useState([]);
  const [inputtedMessage, setInputtedMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [selectedFile, setSelectedFile] = useState(null);
  const [attachments, setAttachments] = useState([]);
  const [isImageSending, setIsImageSending] = useState(false);

  useEffect(() => {
    const fetchInitialMessages = async () => {
      const messages = await fetchMessagesFromServer();
      setMessageHistory(messages);
      setLoading(false);
    };

    fetchInitialMessages();

    const interval = setInterval(() => {
      fetchMessagesFromServer().then(setMessageHistory).catch(console.error);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleSendMessage = async (message, files) => {
    try {
      if (files.length > 0) {
        setIsImageSending(true);
      }

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
    } finally {
      if (files.length > 0) {
        setIsImageSending(false);
      }
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
          isImageSending={isImageSending}
        />
      </div>
    </div>
  );
};

export default OrderWebSocket;
