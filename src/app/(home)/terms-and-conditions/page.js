import Global_PageHtml from "@/Components/Utilites/Global_PageHtml/Global_PageHtml";
import JsonLd from "@/Components/Utilites/JsonLd/JsonLd";
import { fetchData } from "@/config/fetchData";
import { generateCommonMetadata } from "@/config/generateMetadata";
import React from "react";

async function getPageData() {
  try {
    return await fetchData("/terms_condition");
  } catch (error) {
    console.error("Error fetching terms and conditions data:", error);
    throw error;
  }
}

export async function generateMetadata(parent) {
  const termsData = await getPageData();
  return generateCommonMetadata(termsData, parent);
}

const Terms = async () => {
  try {
    const termsData = await getPageData();

    return (
      <>
        <JsonLd data={termsData?.meta?.json_ld} />
        <div className="max-w-[1520px] mx-auto px-[0%] md:px-[4%] xl:px-[8%] 4xl:px-[4%]">
          <div className="bg-gray-100 mt-5 md:px-10 pageHtml">
            <div className="container mx-auto px-4 py-3 md:py-8">
              <Global_PageHtml serviceDetails={termsData.page_content} />
            </div>
          </div>
        </div>
      </>
    );
  } catch (error) {
    console.error("Error rendering terms and conditions page:", error);
    return (
      <div>Error loading terms and conditions. Please try again later.</div>
    );
  }
};

export default Terms;
