import RequirementContent from "@/Components/PagesComponents/RequirementContent/RequirementContent";
import { singleRequirement } from "@/config/apis";

import React from "react";

async function getRequireContent(id) {
  const res = await fetch(`${singleRequirement}/${id}`, {
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const SingleRequireMent = async ({ params }) => {
  const { requirements, service_title } = await getRequireContent(params.id);

  const requirementId = params.id;

  return (
    <div>
      <RequirementContent
        requireMent={requirements}
        requirementId={requirementId}
        service_title={service_title}
      />
    </div>
  );
};

export default SingleRequireMent;
