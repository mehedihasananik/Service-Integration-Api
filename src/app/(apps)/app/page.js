import AppPageContent from "@/Components/AppPageContent/AppPageContent";
import { envobyteApps } from "@/config/apis";
import { fetchData } from "@/config/fetchData";

async function getPageData() {
  try {
    return await fetchData(envobyteApps);
  } catch (error) {
    console.error("Error fetching home page data:", error);
    throw error;
  }
}

const AppPage = async () => {
  const { data: appData } = await getPageData();

  return (
    <div className="bg-[#fff] h-full">
      <>
        <AppPageContent appData={appData} />
      </>
    </div>
  );
};

export default AppPage;
