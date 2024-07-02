"use client";

import React, { useState, useLayoutEffect } from "react";
import MessageChat from "./MessageChat";
import { fetchChatFromServer, sendChatToServer } from "./MessageSoketManager";

const MessageWebSocket = () => {
  const [messageHistory, setMessageHistory] = useState([]);
  const [inputtedMessage, setInputtedMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [selectedFile, setSelectedFile] = useState(null);
  const [attachments, setAttachments] = useState([]);
  const [isMediaLoading, setIsMediaLoading] = useState(false);

  useLayoutEffect(() => {
    const fetchInitialMessages = async () => {
      const messages = await fetchChatFromServer();
      setMessageHistory(messages);
      setLoading(false);
    };

    fetchInitialMessages();

    const interval = setInterval(() => {
      fetchChatFromServer().then(setMessageHistory).catch(console.error);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleSendMessage = async (message, files) => {
    try {
      if (message.trim() || files.length > 0) {
        setIsMediaLoading(true);
        const newMessage = await sendChatToServer(message, files);
        setMessageHistory((prevMessages) => [...prevMessages, newMessage]);
        setInputtedMessage("");
        setSelectedFile(null);
        setAttachments([]);
        setIsMediaLoading(false);
      } else {
        // Handle empty message or file selection here
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setIsMediaLoading(false);
    }
  };

  return (
    <div className="h-90vh overflow-hidden relative ">
      <div>
        <MessageChat
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
          isMediaLoading={isMediaLoading}
        />
      </div>
    </div>
  );
};

export default MessageWebSocket;
