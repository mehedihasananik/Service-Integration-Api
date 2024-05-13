"use client";
import ManageOrder from "@/Components/PagesComponents/ManageOrder/ManageOrder";
import IsAuth from "@/Components/isAuth/isAuth";
import React from "react";

const ManageOrderPage = () => {
  return (
    <div className="bg-[#FCFCFC]">
      <ManageOrder />
    </div>
  );
};

export default IsAuth(ManageOrderPage);
