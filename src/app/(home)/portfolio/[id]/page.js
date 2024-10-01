import PortfolioDetails from "@/Components/PagesComponents/PortfolioDetails/PortfolioDetails";
import JsonLd from "@/Components/Utilites/JsonLd/JsonLd";
import { fetchData } from "@/config/fetchData";
import { generateCommonMetadata } from "@/config/generateMetadata";

// This function fetches the portfolio item data
async function getPortfolioItemData(id) {
  try {
    return await fetchData(`/portfolio_details/${id}`);
  } catch (error) {
    console.error("Error fetching portfolio item data:", error);
    throw error;
  }
}

export async function generateMetadata({ params }, parent) {
  const portfolioItem = await getPortfolioItemData(params.id);
  return generateCommonMetadata(portfolioItem, parent);
}

const SinglePage = async ({ params }) => {
  try {
    const singlePortfolioItem = await getPortfolioItemData(params.id);

    return (
      <div>
        <JsonLd data={singlePortfolioItem?.meta?.json_ld} />
        <PortfolioDetails singlePortfolioItem={singlePortfolioItem} />
      </div>
    );
  } catch (error) {
    console.error("Error rendering portfolio item page:", error);
    return <div></div>;
  }
};

export default SinglePage;
