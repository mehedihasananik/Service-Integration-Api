import React from "react";
import OrderWebSocket from "../OrderDemo/OrderWebSocket";
import OrderRequirements from "@/Components/Utilites/OrderRequirements/OrderRequirements";

const OrderDelivery = () => {
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

export default OrderDelivery;
