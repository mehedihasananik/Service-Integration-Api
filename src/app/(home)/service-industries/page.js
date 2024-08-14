import Container from "@/Components/Container/Container";
import ServiceIndustriesContent from "@/Components/ServiceIndustriesContent/ServiceIndustriesContent";
import React from "react";

async function fetchIndustries() {
  const res = await fetch(
    "https://v2admin.envobyte.shop/api/service-industry",
    {
      next: { revalidate: 10 },
    }
  );
  if (!res.ok) throw new Error("Failed to fetch brands");
  return res.json();
}

const ServiceIndustries = async () => {
  const industries = await fetchIndustries();
  console.log(industries[0].title);

  return (
    <Container>
      <ServiceIndustriesContent
        details={industries[0]}
        industries={industries[0].items}
      />
    </Container>
  );
};

export default ServiceIndustries;
