"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import UserNotFound from "../Utilites/Loading/UserNotFound";

function IsAuth(Component) {
  return function IsAuthenticatedComponent(props) {
    const [userData, setUserData] = useState();
    const router = useRouter();

    useEffect(() => {
      const storedUserData = JSON.parse(sessionStorage.getItem("userData"));
      if (storedUserData) {
        // If userData is available, set it in state
        setUserData(storedUserData);
      } else {
        // If userData is not available, redirect to home page
        router.push("/");
      }
    }, [router]);

    // If userData is available, render the component
    if (userData) {
      return <Component {...props} />;
    }

    // If userData is not available, you can optionally render a loading state or null
    return <UserNotFound />; // Or loading state
  };
}

export default IsAuth;
