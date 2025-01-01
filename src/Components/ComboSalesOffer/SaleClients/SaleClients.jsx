import React from "react";
import SaleClientsItem from "./SaleClientsItem";
import { fetchData } from "@/config/fetchData";
import { testimonials_itemsApi } from "@/config/apis";

async function getPageData() {
  try {
    return await fetchData(testimonials_itemsApi);
  } catch (error) {
    console.error("Error fetching home page data:", error);
    throw error;
  }
}

const SaleClients = async () => {
  const homeData = await getPageData();

  return (
    <div>
      <SaleClientsItem content={homeData.items} />
    </div>
  );
};

export default SaleClients;
