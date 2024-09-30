import PortfolioPage from "@/Components/PagesComponents/PortfolioPage/PortfolioPage";
import JsonLd from "@/Components/Utilites/JsonLd/JsonLd";
import { fetchMultipleData } from "@/config/fetchData";
import { generateCommonMetadata } from "@/config/generateMetadata";

// This function fetches all required data for the portfolio page
async function getPageData() {
  try {
    const [portfolios, portfoliosCategories, services] =
      await fetchMultipleData([
        "/sevice_portfolio_update",
        "/category",
        "/search_sevice_category/all",
      ]);

    return { portfolios, portfoliosCategories, services };
  } catch (error) {
    console.error("Error fetching page data:", error);
    throw error;
  }
}

export async function generateMetadata(parent) {
  const { portfolios } = await getPageData();
  return generateCommonMetadata(portfolios, parent);
}

const Portfolio = async () => {
  try {
    const { portfolios, portfoliosCategories, services } = await getPageData();

    return (
      <div className="max-w-[1520px] mx-auto px-[6%] md:px-[4%] lg:px-[2%] 4xl:px-[2%]">
        <JsonLd data={portfolios?.meta?.json_ld} />
        <PortfolioPage
          portfolios={portfolios.ServiceportfolioArray}
          portfoliosCategories={portfoliosCategories}
          services={services}
          serviceDetails={portfolios.page_content}
        />
      </div>
    );
  } catch (error) {
    console.error("Error rendering portfolio page:", error);
    return <div></div>;
  }
};

export default Portfolio;
