import AppPageContent from "@/Components/AppPageContent/AppPageContent";
import JsonLd from "@/Components/Utilites/JsonLd/JsonLd";
import { envobyteApps } from "@/config/apis";
import { fetchData } from "@/config/fetchData";
import { generateCommonMetadata } from "@/config/generateMetadata";

async function getPageData() {
  try {
    return await fetchData(envobyteApps);
  } catch (error) {
    console.error("Error fetching home page data:", error);
    throw error;
  }
}

export async function generateMetadata(parent) {
  const homeData = await getPageData();
  return generateCommonMetadata(homeData, parent);
}

const AppPage = async () => {
  const data = await getPageData();

  return (
    <div className="bg-[#fff] h-full">
      <>
        <JsonLd data={data.meta.jsonLd} />
        <AppPageContent appData={data.data} />
      </>
    </div>
  );
};

export default AppPage;
