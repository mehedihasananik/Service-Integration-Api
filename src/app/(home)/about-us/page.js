import AboutUsContent from "@/Components/PagesComponents/AboutUsContent/AboutUsContent";
import JsonLd from "@/Components/Utilites/JsonLd/JsonLd";
import { aboutUsApi, aboutUsItemApi } from "@/config/apis";
import { fetchMultipleData } from "@/config/fetchData";
import { generateCommonMetadata } from "@/config/generateMetadata";

import React from "react";

async function getPageData() {
  try {
    const [aboutUsData, aboutUsItemData] = await fetchMultipleData([
      aboutUsApi,
      aboutUsItemApi,
    ]);

    return { aboutUsData, aboutUsItemData };
  } catch (error) {
    console.error("Error fetching page data:", error);
    throw error;
  }
}

export async function generateMetadata(parent) {
  const { aboutUsData } = await getPageData();
  return generateCommonMetadata(aboutUsData, parent);
}

const AboutUsPage = async () => {
  try {
    const { aboutUsData, aboutUsItemData } = await getPageData();

    return (
      <>
        <JsonLd data={aboutUsData?.meta?.json_ld} />
        <AboutUsContent
          aboutDetails={aboutUsData?.aboutUs}
          singleAboutDetails={aboutUsItemData}
          aboutTeam={aboutUsData?.ourTeam}
        />
      </>
    );
  } catch (error) {
    console.error("Error rendering about us page:", error);
    return <div></div>;
  }
};

export default AboutUsPage;
