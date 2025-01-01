"use client";
import { ComboLeadBookBtn } from "@/Components/ComboLead/ComboLeadButtons/ComboLeadBookBtn";
import { SalesPricingBtn } from "@/Components/ComboSalesOffer/SalesBtn/SalesBtn";
import React, { useEffect, useState } from "react";

const ConditionBtn = () => {
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    // Use window.location.pathname to get the current route
    const path = window?.location?.pathname.replace(/\/$/, ""); // Remove trailing slash
    setCurrentPath(path);
  }, []);
  return (
    <div>
      <div>
        {currentPath === "/combo-offer-lead" ? (
          <div className="pt-5">
            <div className="w-[30%]">
              <ComboLeadBookBtn />
            </div>
          </div>
        ) : currentPath === "/combo-offer-sale" ? (
          <div className="flex justify-center pt-4">
            <div className="  ">
              <SalesPricingBtn />
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ConditionBtn;
