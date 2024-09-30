import ServicesPageContent from "@/Components/PagesComponents/ServicesPageContent/ServicesPageContent";
import JsonLd from "@/Components/Utilites/JsonLd/JsonLd";
import UserLoading from "@/Components/Utilites/UserLoading/UserLoading";
import { allsServiceItemsApi, serviceListApi } from "@/config/apis";
import { fetchMultipleData } from "@/config/fetchData";

import { generateCommonMetadata } from "@/config/generateMetadata";
import React, { Suspense } from "react";

// This function fetches all required data for the services page
async function getPageData() {
  try {
    const [serviceCategories, servicesData] = await fetchMultipleData([
      serviceListApi,
      allsServiceItemsApi,
    ]);

    return { serviceCategories, servicesData };
  } catch (error) {
    console.error("Error fetching page data:", error);
    throw error;
  }
}

export async function generateMetadata(parent) {
  const { servicesData } = await getPageData();
  return generateCommonMetadata(servicesData, parent);
}

export default async function ServicesPage() {
  try {
    const { serviceCategories, servicesData } = await getPageData();
    return (
      <>
        <JsonLd data={servicesData?.meta?.json_ld} />
        <Suspense fallback={<UserLoading />}>
          <ServicesPageContent
            serviceCategories={serviceCategories}
            services={servicesData.ServiceItemsArray}
            serviceDetails={servicesData?.page_content}
          />
        </Suspense>
      </>
    );
  } catch (error) {
    console.error("Error rendering services page:", error);
    return <div></div>;
  }
}
