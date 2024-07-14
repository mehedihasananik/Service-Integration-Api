// components/withAuthRedirect.js
"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const withAuthRedirect = (WrappedComponent) => {
  const Wrapper = (props) => {
    const router = useRouter();

    useEffect(() => {
      // Check if user is logged in
      const userData = JSON.parse(localStorage.getItem("userData"));
      if (userData) {
        // If user is logged in, redirect to dashboard
        router.push("/dashboard");
      }
    }, [router]);

    // Render the wrapped component only if user is not logged in
    const userData = JSON.parse(localStorage.getItem("userData"));
    return !userData ? <WrappedComponent {...props} /> : null;
  };

  return Wrapper;
};

export default withAuthRedirect;
