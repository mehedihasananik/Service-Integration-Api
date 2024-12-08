import ComboHome from "@/Components/ComboPageSections/ComboHome/ComboHome";
import JsonLd from "@/Components/Utilites/JsonLd/JsonLd";
import { fetchData } from "@/config/fetchData";
import { generateCommonMetadata } from "@/config/generateMetadata";

async function getPageData() {
  try {
    return await fetchData("/comboservices");
  } catch (error) {
    console.error("Error fetching home page data:", error);
    throw error;
  }
}

export async function generateMetadata(parent) {
  const homeData = await getPageData();
  return generateCommonMetadata(homeData, parent);
}

const ComboOfferPage = async () => {
  const homeData = await getPageData();

  return (
    <>
      <JsonLd data={homeData?.meta?.jsonLd} />
      <ComboHome homeData={homeData} />
    </>
  );
};

export default ComboOfferPage;
