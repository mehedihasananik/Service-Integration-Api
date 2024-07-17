import PortfolioDetails from "@/Components/PagesComponents/PortfolioDetails/PortfolioDetails";
import { singlePortfolio } from "@/config/apis";

const SinglePage = async ({ params }) => {
  const singlePortfolioItem = await fetch(
    `http://192.168.10.14:8000/api/portfolio_details/${params?.id}`
  ).then((res) => res?.json());

  return (
    <div>
      <PortfolioDetails singlePortfolioItem={singlePortfolioItem} />
    </div>
  );
};

export default SinglePage;
