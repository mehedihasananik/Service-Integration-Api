"use client";
import UseWebSocketTester from "@/Components/PagesComponents/MessageContent/UseWebSocketTester";
import IsAuth from "@/Components/isAuth/isAuth";

import React from "react";

const Chat = () => {
  return (
    <div className="px-[2%] bg-[#FCFCFC] h-screen flex flex-col">
      <div className="flex-grow overflow-y-auto">
        <UseWebSocketTester />
      </div>
    </div>
  );
};

export default IsAuth(Chat);
