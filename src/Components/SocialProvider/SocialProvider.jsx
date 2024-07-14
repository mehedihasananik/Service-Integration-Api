"use client";
import { SessionProvider } from "next-auth/react";

const SocialProvider = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default SocialProvider;
