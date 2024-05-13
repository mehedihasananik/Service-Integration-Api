"use client";
import DashBoardOrder from "@/Components/PagesComponents/DashBoardOrder/DashBoardOrder";
import IsAuth from "@/Components/isAuth/isAuth";
import React from "react";

const DashBoardOrderPage = () => {
  return (
    <div className="bg-[#FCFCFC]">
      <DashBoardOrder />
    </div>
  );
};

export default IsAuth(DashBoardOrderPage);
