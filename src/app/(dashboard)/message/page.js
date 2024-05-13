"use client";
import MessageContent from "@/Components/PagesComponents/MessageContent/MessageContent";
import IsAuth from "@/Components/isAuth/isAuth";
import React from "react";

const MessagePage = () => {
  return (
    <div className="bg-[#FCFCFC]">
      <MessageContent />
    </div>
  );
};

export default IsAuth(MessagePage);
