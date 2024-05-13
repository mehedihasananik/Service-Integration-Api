"use client";
import UseWebSocketTester from "@/Components/PagesComponents/MessageContent/UseWebSocketTester";
import IsAuth from "@/Components/isAuth/isAuth";
import React from "react";

const Chat = () => {
  return (
    <div className="px-[2%]">
      <UseWebSocketTester />
    </div>
  );
};

export default IsAuth(Chat);
