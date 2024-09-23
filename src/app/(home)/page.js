import HomePage from "@/Components/Home/HomePage";
import JsonLd from "@/Components/Utilites/JsonLd/JsonLd";
import { fetchData } from "@/config/fetchData";
import { generateCommonMetadata } from "@/config/generateMetadata";

async function getPageData() {
  try {
    return await fetchData("/home_banner");
  } catch (error) {
    console.error("Error fetching home page data:", error);
    throw error;
  }
}

export async function generateMetadata(parent) {
  const homeData = await getPageData();
  return generateCommonMetadata(homeData, parent);
}

export default async function Home() {
  try {
    const homeData = await getPageData();

    return (
      <main>
        <JsonLd data={homeData?.meta?.json_ld} />
        <HomePage homeData={homeData} />
      </main>
    );
  } catch (error) {
    console.error("Error rendering home page:", error);
    return <div>Error loading home page. Please try again later.</div>;
  }
}
