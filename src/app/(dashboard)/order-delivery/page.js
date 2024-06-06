"use client";

import OrderWebSocket from "@/Components/PagesComponents/OrderDemo/OrderWebSocket";
import OrderRequirements from "@/Components/Utilites/OrderRequirements/OrderRequirements";
import IsAuth from "@/Components/isAuth/isAuth";
import React from "react";

const OrderDeliveryPage = () => {
  return (
    <div className="bg-[#FCFCFC] overflow-hidden flex justify-between">
      <div className="w-[75%]">
        <OrderWebSocket />
      </div>
      <div className="w-[25%]">
        <OrderRequirements />
      </div>
    </div>
  );
};

export default IsAuth(OrderDeliveryPage);
