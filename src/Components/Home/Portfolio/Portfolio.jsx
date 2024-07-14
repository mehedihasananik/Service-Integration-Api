import PortfolioHomeItems from "@/Components/Utilites/PortfolioHomeItems/PortfolioHomeItems";
import { serviceApi, serviceListApi, sevice_portfolioApi } from "@/config/apis";
import React from "react";

// portfolio all api fetching from server side

async function getPortfolioContent() {
  try {
    const [res1, res2] = await Promise.all([
      fetch(`${sevice_portfolioApi}`, { next: { revalidate: 10 } }),
      fetch(`${serviceListApi}`, { next: { revalidate: 10 } }),
    ]);

    if (!res1?.ok || !res2?.ok) {
      throw new Error("Failed to fetch data");
    }

    const data1 = await res1?.json();
    const data2 = await res2?.json();

    return { data1, data2 };
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

const Portfolio = async () => {
  // getting data successfully
  const { data1, data2 } = await getPortfolioContent();
  console.log(data1);

  return (
    <div>
      <PortfolioHomeItems portfolios={data1} services={data2} />
    </div>
  );
};

export default Portfolio;
