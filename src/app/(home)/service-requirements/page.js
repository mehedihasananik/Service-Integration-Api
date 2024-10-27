// app/service-requirements/page.jsx
"use client";
import ServiceRequirementContent from "@/Components/ServiceRequirementContent/ServiceRequirementContent";
import { useSearchParams } from "next/navigation";
import React from "react";

const ServiceRequirements = () => {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");

  return (
    <div>
      <ServiceRequirementContent sessionId={sessionId} />
    </div>
  );
};

export default ServiceRequirements;
