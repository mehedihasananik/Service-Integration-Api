import CheckoutPage from "@/Components/CheckoutPage/CheckoutPage";
import React, { Suspense } from "react";

const CheckOut = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CheckoutPage />
    </Suspense>
  );
};

export default CheckOut;
