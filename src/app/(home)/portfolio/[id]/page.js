import PortfolioDetails from "@/Components/PagesComponents/PortfolioDetails/PortfolioDetails";

const SinglePage = async ({ params }) => {
  const singlePortfolioItem = await fetch(
    `https://admin.envobyte.com/api/portfolio_details/${params?.id}`
  ).then((res) => res?.json());

  return (
    <div>
      <h3>{params?.id}</h3>
      <PortfolioDetails singlePortfolioItem={singlePortfolioItem} />
    </div>
  );
};

export default SinglePage;
