"use client";
import React from "react";
import OnBoardingContent from "@/Components/OnBoardingContent/OnBoardingContent";
import { useSearchParams } from "next/navigation";

const OnBoarding = () => {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("order");

  return <OnBoardingContent orderId={orderId} />;
};

export default OnBoarding;
