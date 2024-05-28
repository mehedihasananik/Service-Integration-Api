"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import UserNotFound from "../Utilites/Loading/UserNotFound";

function IsAuth(Component) {
  return function IsAuthenticatedComponent(props) {
    const router = useRouter();

    const [userData, setUserData] = useState();

    useEffect(() => {
      setUserData(JSON.parse(localStorage.getItem("userData")));
    }, []);

    useEffect(() => {
      const storedUserData = JSON.parse(localStorage.getItem("userData"));
      if (!storedUserData) {
        // If userData is not available, redirect to home page
        router.push("/");
      }
    }, [router]);

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
