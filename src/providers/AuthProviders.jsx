"use client";
import React, { createContext, useEffect, useState } from "react";
import { dashboardMenus } from "./dashboardMenus";
import { usePathname, useRouter } from "next/navigation";

export const AuthContext = createContext();

export function useItem() {
  return useContext(ItemContext);
}

const AuthProviders = ({ children }) => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState("");
  const [itemId, setItemId] = useState(null);

  const user = { displayName: "Mehedi Anik" };
  const pathname = usePathname();

  const itemValues = {
    dashboardMenus,
    user,
    pathname,
    currentPage,
    itemId,
    setItemId,
  };

  return (
    <AuthContext.Provider value={itemValues}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
