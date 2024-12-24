import ComboLead from "@/Components/ComboLead/ComboLead";
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

const ComboLeadPage = async () => {
  const homeData = await getPageData();

  return (
    <>
      <ComboLead homeData={homeData} />
    </>
  );
};

export default ComboLeadPage;
