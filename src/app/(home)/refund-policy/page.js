import Container from "@/Components/Container/Container";
import Global_PageHtml from "@/Components/Utilites/Global_PageHtml/Global_PageHtml";
import JsonLd from "@/Components/Utilites/JsonLd/JsonLd";
import { fetchData } from "@/config/fetchData";
import { generateCommonMetadata } from "@/config/generateMetadata";

import React from "react";

async function getPageData() {
  try {
    return await fetchData("/refund_policy");
  } catch (error) {
    console.error("Error fetching refund policy data:", error);
    throw error;
  }
}

export async function generateMetadata(parent) {
  const refundData = await getPageData();
  return generateCommonMetadata(refundData, parent);
}

const RefundPolicy = async () => {
  try {
    const refundData = await getPageData();

    return (
      <>
        <JsonLd data={refundData?.meta?.json_ld} />
        <div className="max-w-[1520px] mx-auto px-[0%] md:px-[4%] xl:px-[8%] 4xl:px-[4%]">
          <div className="bg-gray-100 px-[1%] md:px-8 mt-5 md:pb-8 md:pt-5 pageHtml">
            <Global_PageHtml serviceDetails={refundData.page_content} />
          </div>
        </div>
      </>
    );
  } catch (error) {
    console.error("Error rendering refund policy page:", error);
    return <div>Error loading refund policy. Please try again later.</div>;
  }
};

export default RefundPolicy;
