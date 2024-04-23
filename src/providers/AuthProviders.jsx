"use client";
import React, { createContext } from "react";
import { dashboardMenus } from "./dashboardMenus";

export const AuthContext = createContext();

const AuthProviders = ({ children }) => {
  const user = { displayName: "Mehedi Anik" };

  const itemValues = {
    dashboardMenus,
    user,
  };

  return (
    <AuthContext.Provider value={itemValues}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
