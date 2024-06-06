"use client";

import OrderWebSocket from "@/Components/PagesComponents/OrderDemo/OrderWebSocket";
import IsAuth from "@/Components/isAuth/isAuth";
import React from "react";

const OrderDeliveryPage = () => {
  return (
    <div className="bg-[#FCFCFC] overflow-hidden">
      <OrderWebSocket />
    </div>
  );
};

export default IsAuth(OrderDeliveryPage);
