import Container from "@/Components/Container/Container";
import PortfolioHomeItems from "@/Components/Utilites/PortfolioHomeItems/PortfolioHomeItems";
import { apiEndpoint } from "@/config/config";

async function portfolioServices() {
  const res = await fetch(`${apiEndpoint}/sevice_portfolio_update`, {
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

async function portfoliosCategoriesApi() {
  const res = await fetch(`${apiEndpoint}/category`, {
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

async function servicesApi() {
  const res = await fetch(`${apiEndpoint}/search_sevice_category/all`, {
    next: { revalidate: 10 },
  });

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
  // console.log(portfolios);

  return (
    <Container>
      <PortfolioHomeItems
        portfolios={portfolios.ServiceportfolioArray}
        portfoliosCategories={portfoliosCategories}
        services={services}
        serviceDetails={portfolios.page_content}
      />
    </Container>
  );
};

export default Portfolio;
