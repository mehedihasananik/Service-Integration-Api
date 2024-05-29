"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import UserNotFound from "../Utilites/Loading/UserNotFound";

function IsAuth(Component) {
  return function IsAuthenticatedComponent(props) {
    const router = useRouter();

    const userDataString =
      typeof window !== "undefined"
        ? window.localStorage.getItem("userData")
        : null;
    const userData = userDataString ? JSON.parse(userDataString) : null;

    if (!userData) {
      // If userData is not available, redirect to home page
      router.push("/");
    }

    // If userData is available, render the component
    if (userData) {
      return <Component {...props} />;
    } else {
      // If userData is not available, render UserNotFound component
      return <UserNotFound />;
    }
  };
}

export default IsAuth;
