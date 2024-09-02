"use client";
import React, { createContext, useState } from "react";
import { dashboardMenus } from "./dashboardMenus";
import { usePathname, useRouter } from "next/navigation";

export const AuthContext = createContext();

export function useItem() {
  return useContext(ItemContext);
}

const AuthProviders = ({ children }) => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState("");
  const [deliveryDetails, setDeliveryDetails] = useState(null);
  const [itemId, setItemId] = useState(null);
  const [customId, setCustomId] = useState(null);
  const [loading, setLoading] = useState(false);

  const orderID =
    typeof window !== "undefined"
      ? window.localStorage.getItem("orderID")
      : null;
  const userData =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("userData"))
      : null;
  // console.log(userData);
  const pathname = usePathname();

  // console.log(deliveryDetails);

  const itemValues = {
    dashboardMenus,
    pathname,
    currentPage,
    itemId,
    setItemId,
    deliveryDetails,
    userData,
    customId,
    setCustomId,
    orderID,
  };

  return (
    <AuthContext.Provider value={itemValues}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
