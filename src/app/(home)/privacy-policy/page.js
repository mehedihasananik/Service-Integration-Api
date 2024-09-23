import Global_PageHtml from "@/Components/Utilites/Global_PageHtml/Global_PageHtml";
import JsonLd from "@/Components/Utilites/JsonLd/JsonLd";
import { fetchData } from "@/config/fetchData";
import { generateCommonMetadata } from "@/config/generateMetadata";

import React from "react";

async function getPageData() {
  try {
    return await fetchData("/privacy_policy");
  } catch (error) {
    console.error("Error fetching privacy policy data:", error);
    throw error;
  }
}

export async function generateMetadata(parent) {
  const privacyData = await getPageData();
  return generateCommonMetadata(privacyData, parent);
}

const PrivacyPolicy = async () => {
  try {
    const privacyData = await getPageData();

    return (
      <>
        <JsonLd data={privacyData?.meta?.json_ld} />
        <div className="max-w-[1520px] mx-auto px-[2%] md:px-[4%] xl:px-[8%] 4xl:px-[4%]">
          <div className="bg-gray-100 mt-5 md:px-5 md:pt-5 md:pb-8 overflow-hidden pageHtml">
            <Global_PageHtml serviceDetails={privacyData.page_content} />
          </div>
        </div>
      </>
    );
  } catch (error) {
    console.error("Error rendering privacy policy page:", error);
    return <div>Error loading privacy policy. Please try again later.</div>;
  }
};

export default PrivacyPolicy;
