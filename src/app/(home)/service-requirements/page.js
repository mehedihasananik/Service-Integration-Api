"use client";
import ServiceRequirementContent from "@/Components/ServiceRequirementContent/ServiceRequirementContent";
import UserLoading from "@/Components/Utilites/UserLoading/UserLoading";
import { useSearchParams } from "next/navigation";
import React, { Suspense } from "react";

// Create a separate component for the content that uses useSearchParams
const ServiceRequirementsContent = () => {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");

  return <ServiceRequirementContent sessionId={sessionId} />;
};

// Main page component with Suspense boundary
const ServiceRequirements = () => {
  return (
    <div>
      <Suspense fallback={<UserLoading />}>
        <ServiceRequirementsContent />
      </Suspense>
    </div>
  );
};

export default ServiceRequirements;
