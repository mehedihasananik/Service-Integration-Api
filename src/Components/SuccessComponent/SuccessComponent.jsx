"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { successApi } from "@/config/apis";
import { Check, Loader2 } from "lucide-react";

const StatusContainer = ({ children }) => (
  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-2 md:px-0 ">
    <div className="w-full max-w-sm md:max-w-lg lg:max-w-xl mx-auto">
      <div className="relative bg-white/70 backdrop-blur-xl md:rounded-2xl md:shadow-2xl border md:border-white/30 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent" />
        <div className="relative p-6 md:p-10 lg:p-12">
          <div className="flex flex-col items-center space-y-2 md:space-y-6">
            {children}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const LoadingSpinner = () => (
  <div className="transform scale-100 lg:scale-150 my-4">
    <div className="relative w-[40px] h-[40px] md:w-[50px] md:h-[50px]">
      <div className="absolute inset-0 rounded-full border-4 border-blue-500/30 border-t-blue-500 animate-spin" />
    </div>
  </div>
);

const SuccessCheckmark = () => (
  <div className="transform scale-100 lg:scale-150 my-4">
    <div className="relative">
      <div className="w-[40px]  h-[40px] md:w-[50px] md:h-[50px] bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center p-1">
        <Check
          className="w-8 h-8 md:w-16 md:h-16 text-white transform scale-125 p-1.5"
          strokeWidth={3}
        />
      </div>
    </div>
  </div>
);

const CountdownTimer = ({ seconds }) => (
  <span className="inline-flex items-center justify-center w-8 h-8 md:w-12 md:h-12 rounded-full bg-[#FF693B] text-white text-lg md:text-2xl font-bold shadow-lg animate-pulse">
    {seconds}
  </span>
);

const ProgressBar = ({ progress }) => (
  <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden mt-4">
    <div
      className="h-full bg-[#FF693B] transition-all duration-1000 ease-out relative"
      style={{ width: `${progress}%` }}
    >
      <div className="absolute inset-0 bg-white/20 animate-shimmer" />
    </div>
  </div>
);

const FadeOutOverlay = ({ show }) => (
  <div
    className={`fixed inset-0 bg-white transition-all duration-1000 ${
      show ? "opacity-100 z-50" : "opacity-0 -z-10"
    }`}
  />
);

const CustomButton = ({
  children,
  onClick,
  variant = "primary",
  className = "",
}) => {
  const baseStyles =
    "group relative w-full md:w-[70%] text-base font-semibold py-3 px-6 rounded-lg shadow-lg transition-all duration-500 overflow-hidden";
  const variants = {
    primary: "bg-[#FF693B] hover:bg-[#e55934] text-white",
    outline: "border-2 border-red-200 text-red-500 hover:bg-red-50 bg-white",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      <div className="absolute inset-0 bg-white/20 transform translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
      <div className="relative">{children}</div>
    </button>
  );
};

const SuccessComponent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [countdown, setCountdown] = useState(10);
  const [showFadeOut, setShowFadeOut] = useState(false);
  const [progress, setProgress] = useState(0);
  const [orderId, setOrderId] = useState(null);

  useEffect(() => {
    if (!sessionId) {
      setLoading(false);
      setError("No session ID provided");
      return;
    }
    setLoading(true);
  }, [sessionId]);

  useEffect(() => {
    let progressInterval;
    if (loading) {
      progressInterval = setInterval(() => {
        setProgress((prev) => (prev >= 90 ? 90 : prev + 10));
      }, 500);
    }
    return () => clearInterval(progressInterval);
  }, [loading]);

  useEffect(() => {
    let countdownTimer;
    if (successMessage && countdown > 0) {
      countdownTimer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    } else if (successMessage && countdown === 0) {
      setShowFadeOut(true);
      setTimeout(() => {
        // Check if orderId exists, navigate accordingly
        if (orderId) {
          router.push(`/onboarding?order=${orderId}`);
        } else {
          router.push("/service-requirements");
        }
      }, 1000);
    }
    return () => clearInterval(countdownTimer);
  }, [successMessage, countdown, router, orderId]);

  useEffect(() => {
    const postSuccessData = async () => {
      if (!sessionId) return;

      try {
        const response = await fetch(`${successApi}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            session_id: sessionId,
            payment_status: "paid",
          }),
        });

        if (!response.ok) {
          throw new Error("Failed to process payment");
        }

        const result = await response.json();
        console.log(result);
        setSuccessMessage(result.success);
        setOrderId(result.order_id);
        setProgress(100);
        // Prepare transaction data for dataLayer
        const dataLayerData = {
          event: "purchase",
          ecommerce: {
            currency: "USD",
            transaction_id: result.transaction_id,
            affiliation: "", // Static default if not available
            value: parseFloat(result.package.package_price) || 0,
            tax: 0, // Static default as tax isn't provided
            shipping: 0, // Static default as shipping isn't provided
            coupon: "", // Static default if no coupon applied
            items: [
              {
                item_id: result?.package?.id,
                item_name: result?.service_name || "Default Service Name",
                sku: result.package.id, // Assuming item_id acts as SKU
                price: parseFloat(result.package.package_price) || 0,
                stocklevel: null, // Static default as stocklevel isn't provided
                stockstatus: "instock", // Static default if stock status not available
                google_business_vertical: "retail", // Static value if not available
                id: result.package.id,
                quantity: 1,
              },
            ],
            name: result?.name,
            email: result?.email,
            address: result?.customer?.address,
          },
          gtm: { uniqueEventId: new Date().getTime() },
        };

        // Push transaction data to dataLayer
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push(dataLayerData);

        // Log the specific data being pushed
        console.log("Data being pushed to dataLayer:", dataLayerData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (sessionId) {
      postSuccessData();
    }
  }, [sessionId]);

  return (
    <main className="h-[60vh] md:h-[70vh] w-full relative overflow-hidden">
      <FadeOutOverlay show={showFadeOut} />

      {loading && (
        <StatusContainer>
          <LoadingSpinner />
          <h2 className="text-xl md:text-3xl font-bold text-gray-700 mt-6 text-center">
            Processing your payment
          </h2>
          <p className="text-base md:text-xl text-gray-500 text-center mt-3">
            Please wait while we confirm your transaction...
          </p>
          <div className="w-full mt-6">
            <ProgressBar progress={progress} />
          </div>
        </StatusContainer>
      )}

      {!loading && successMessage && (
        <StatusContainer>
          <SuccessCheckmark />
          <div className="text-center space-y-4 mt-6">
            <h1 className="text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FF693B] to-[#e55934]">
              Payment Successful!
            </h1>
            <p className="text-base md:text-xl text-gray-600 px-4">
              Thank you for your order. Your transaction has been completed
              successfully.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center md:gap-2 text-base md:text-xl text-gray-600 mt-6">
            <span className="text-[14px] md:text-[18px]">
              Redirecting to requirement page within
            </span>
            <div className="flex items-center gap-2">
              <CountdownTimer seconds={countdown} />
              <span className="text-[14px] md:text-[18px]">seconds</span>
            </div>
          </div>

          <div className="w-full text-center mt-6">
            {orderId ? (
              <button
                className="btn btn-primary text-center mt-4"
                onClick={() => router.push(`/onboarding?order=${orderId}`)}
              >
                Continue to Requirements
              </button>
            ) : (
              <button
                className="btn btn-primary text-center mt-4"
                onClick={() => router.push(`/service-requirements`)}
              >
                Continue to Requirements
              </button>
            )}
          </div>
        </StatusContainer>
      )}

      {!loading && error && (
        <StatusContainer>
          <div className="text-center space-y-4 w-full px-4">
            <div className="bg-red-50 p-6 rounded-xl">
              <p className="text-xl font-bold text-red-500 mb-3">
                Error: {error}
              </p>
              <p className="text-base text-red-400">
                Please try again or contact support if the issue persists.
              </p>
            </div>
            <CustomButton
              onClick={() => router.push("/services")}
              variant="outline"
            >
              Contact Support
            </CustomButton>
          </div>
        </StatusContainer>
      )}
    </main>
  );
};

export default SuccessComponent;
