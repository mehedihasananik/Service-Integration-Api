"use client";
import OrderDelivery from "@/Components/PagesComponents/OrderDelivery/OrderDelivery";
import IsAuth from "@/Components/isAuth/isAuth";
import React from "react";

const OrderDeliveryPage = () => {
  return (
    <div className="bg-[#FCFCFC]">
      <OrderDelivery />
    </div>
  );
};

export default IsAuth(OrderDeliveryPage);
