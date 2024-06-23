"use client";

import OrderDelivery from "@/Components/PagesComponents/OrderDelivery/OrderDelivery";
import IsAuth from "@/Components/isAuth/isAuth";
import React from "react";

const OrderDeliveryPage = () => {
  return (
    <>
      <OrderDelivery />
    </>
  );
};

export default IsAuth(OrderDeliveryPage);
