// components/withAuthRedirect.js
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const withAuthRedirect = (WrappedComponent) => {
  const Wrapper = (props) => {
    const [isClient, setIsClient] = useState(false);
    const router = useRouter();

    useEffect(() => {
      // Ensure this code runs only on the client
      setIsClient(true);

      if (isClient) {
        const userData = JSON.parse(localStorage.getItem("userData"));
        if (userData) {
          router.push("/dashboard");
        }
      }
    }, [isClient, router]);

    return isClient && !localStorage.getItem("userData") ? (
      <WrappedComponent {...props} />
    ) : null;
  };

  return Wrapper;
};

export default withAuthRedirect;
