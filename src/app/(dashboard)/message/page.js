"use client";

import MessageWebSocket from "@/Components/PagesComponents/MessageWebContent/MessageWebSocket";
import OrderRequirements from "@/Components/Utilites/OrderRequirements/OrderRequirements";
import IsAuth from "@/Components/isAuth/isAuth";
import React from "react";

const OrderDeliveryPage = () => {
  return (
    <div className="bg-[#FCFCFC] overflow-hidden flex justify-between">
      <div className="w-[100%]">
        <MessageWebSocket />
      </div>
    </div>
  );
};

export default IsAuth(OrderDeliveryPage);
