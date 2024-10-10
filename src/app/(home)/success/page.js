import SuccessComponent from "@/Components/SuccessComponent/SuccessComponent";
import React, { Suspense } from "react";

const SuccessPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SuccessComponent />
    </Suspense>
  );
};

export default SuccessPage;
