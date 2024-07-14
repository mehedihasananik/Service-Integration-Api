"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import LoginPage from "@/app/(home)/login/page";

const ProtectedLogin = () => {
  const router = useRouter();

  useEffect(() => {
    // Check if user is logged in
    const userData = JSON.parse(localStorage.getItem("userData"));
    console.log(userData);
    if (userData) {
      // If user is logged in, redirect to dashboard
      router.push("/dashboard");
    }
  }, [router]);

  // If user is not logged in, render the Login component
  return <LoginPage />;
};

export default ProtectedLogin;
