import PortfolioHomeItems from "@/Components/Utilites/PortfolioHomeItems/PortfolioHomeItems";

async function portfolioServices() {
  const res = await fetch(
    `http://192.168.10.16:8000/api/sevice_portfolio_update`,
    {
      next: { revalidate: 10 },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

async function portfoliosCategoriesApi() {
  const res = await fetch(`http://192.168.10.16:8000/api/category`, {
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

async function servicesApi() {
  const res = await fetch(
    `http://192.168.10.16:8000/api/search_sevice_category/all`,
    {
      next: { revalidate: 10 },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const Portfolio = async () => {
  // Fetch data for the page
  const portfolios = await portfolioServices();
  const portfoliosCategories = await portfoliosCategoriesApi();
  const services = await servicesApi();

  return (
    <div className="max-w-[1520px] mx-auto px-[6%] md:px-[4%] lg:px-[1%] 4xl:px-[2%]">
      <PortfolioHomeItems
        portfolios={portfolios.ServiceportfolioArray}
        portfoliosCategories={portfoliosCategories}
        services={services}
        serviceDetails={portfolios.page_content}
      />
    </div>
  );
};

export default Portfolio;
