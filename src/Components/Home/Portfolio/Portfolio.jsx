import PortfolioHomeItems from "@/Components/Utilites/PortfolioHomeItems/PortfolioHomeItems";
import { apiEndpoint } from "@/config/config";
import { fetchMultipleData } from "@/config/fetchData";

const Portfolio = async () => {
  const [portfolios, portfoliosCategories, services] = await fetchMultipleData([
    `${apiEndpoint}/sevice_portfolio_update`,
    `${apiEndpoint}/category`,
    `${apiEndpoint}/search_sevice_category/all`,
  ]);

  return (
    <div className="max-w-[1520px] mx-auto px-[6%] md:px-[4%] lg:px-[2%] xl:px-[2%] 4xl:px-[2%]">
      <PortfolioHomeItems
        portfolios={portfolios?.ServiceportfolioArray}
        portfoliosCategories={portfoliosCategories}
        services={services}
        serviceDetails={portfolios?.page_content}
      />
    </div>
  );
};

export default Portfolio;
