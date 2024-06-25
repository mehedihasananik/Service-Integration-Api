import React from "react";
import OrderWebSocket from "../OrderDemo/OrderWebSocket";
import OrderRequirements from "@/Components/Utilites/OrderRequirements/OrderRequirements";

const OrderDelivery = () => {
  return (
    <div className="bg-[#FCFCFC] overflow-hidden flex flex-col-reverse md:flex-row justify-between">
      <div className=" md:w-[75%]">
        <OrderWebSocket />
      </div>
      <div className="hidden md:block md:w-[25%]">
        <OrderRequirements />
      </div>
    </div>
  );
};

export default OrderDelivery;
