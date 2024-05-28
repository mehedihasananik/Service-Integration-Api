import { useRouter } from "next/navigation";
import { useEffect } from "react";

const ProtectedRoute = (WrappedComponent, redirectTo = "/") => {
  const Wrapper = (props) => {
    const router = useRouter();

    useEffect(() => {
      const userData = sessionStorage.getItem("userData");

      // If userData doesn't exist, redirect to the specified path
      if (!userData && router.pathname !== redirectTo) {
        router.replace(redirectTo); // Redirect to the specified path immediately
      }
    }, []);

    // Render the wrapped component only if userData exists
    return sessionStorage.getItem("userData") ? (
      <WrappedComponent {...props} />
    ) : null;
  };

  return Wrapper;
};

export default ProtectedRoute;
