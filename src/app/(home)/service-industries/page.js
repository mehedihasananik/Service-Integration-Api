import Container from "@/Components/Container/Container";
import ServiceIndustriesContent from "@/Components/ServiceIndustriesContent/ServiceIndustriesContent";
import JsonLd from "@/Components/Utilites/JsonLd/JsonLd";
import UserLoading from "@/Components/Utilites/UserLoading/UserLoading";
import { apiEndpoint } from "@/config/config";
import { generateCommonMetadata } from "@/config/generateMetadata";
import React, { Suspense } from "react";

async function getPageData() {
  try {
    const res = await fetch(`${apiEndpoint}/service-industry`, {
      next: { revalidate: 120 },
    });
    if (!res.ok) throw new Error("Failed to fetch service industries");
    return res.json();
  } catch (error) {
    console.error("Error fetching page data:", error);
    throw error;
  }
}

export async function generateMetadata(parent) {
  const industriesData = await getPageData();
  return generateCommonMetadata(industriesData, parent);
}

export default async function ServiceIndustries() {
  try {
    const industriesData = await getPageData();

    return (
      <>
        <JsonLd data={industriesData?.meta?.json_ld} />
        <Suspense fallback={<UserLoading />}>
          <Container>
            <ServiceIndustriesContent
              details={industriesData.service_industry[0]}
              industries={industriesData.service_industry[0].items}
            />
          </Container>
        </Suspense>
      </>
    );
  } catch (error) {
    console.error("Error rendering service industries page:", error);
    return <div></div>;
  }
}
