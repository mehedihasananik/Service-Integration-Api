"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import OnBoardingContent from "@/Components/OnBoardingContent/OnBoardingContent";
import { Loader2 } from "lucide-react";

// Separate component to handle the search params logic
const OnBoardingWrapper = () => {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("order");

  if (!orderId) {
    return (
      <div className="notfound">
        <div className="min-h-screen flex flex-grow items-center justify-center">
          <div className="rounded-lg p-8 text-center shadow-xl">
            <h1 className="mb-4 text-4xl font-bold">404</h1>
            <p className="text-gray-600">
              Oops! The page you are looking for could not be found.
            </p>
            <a
              href="/"
              className="mt-4 inline-block rounded bg-[#FF693B] px-4 py-2 font-semibold text-white hover:bg-white hover:text-[#FF693B] border transition-all duration-300"
            >
              Go back to Home
            </a>
          </div>
        </div>
      </div>
    );
  }

  return <OnBoardingContent orderId={orderId} />;
};

// Loading component for Suspense fallback
const LoadingComponent = () => {
  return (
    <div className="flex items-center justify-center min-h-[400px]">
      <Loader2 className="w-8 h-8 text-[#FF693B] animate-spin" />
    </div>
  );
};

// Main component with Suspense boundary
const OnBoarding = () => {
  return (
    <Suspense fallback={<LoadingComponent />}>
      <OnBoardingWrapper />
    </Suspense>
  );
};

export default OnBoarding;
