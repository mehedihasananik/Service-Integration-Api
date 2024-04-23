"use client";
import React, { createContext, useEffect, useState } from "react";
import { dashboardMenus } from "./dashboardMenus";
import { usePathname, useRouter } from "next/navigation";

export const AuthContext = createContext();

const AuthProviders = ({ children }) => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState("");

  const user = { displayName: "Mehedi Anik" };
  const pathname = usePathname();

  const itemValues = {
    dashboardMenus,
    user,
    pathname,
    currentPage,
  };

  return (
    <AuthContext.Provider value={itemValues}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
