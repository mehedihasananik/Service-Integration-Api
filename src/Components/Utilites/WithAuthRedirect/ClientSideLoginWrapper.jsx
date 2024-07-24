"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ClientSideLoginWrapper({ children }) {
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (userData) {
      router.push("/dashboard");
    }
  }, [router]);

  if (!isClient) {
    return null; // or a loading spinner
  }

  return children;
}
