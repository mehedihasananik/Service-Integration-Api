import Container from "@/Components/Container/Container";
import ServiceIndustriesContent from "@/Components/ServiceIndustriesContent/ServiceIndustriesContent";
import { apiEndpoint } from "@/config/config";

export const metadata = {
  title: "Service Industries | Envobyte",
  description:
    "Discover Envobyte's tailored solutions for service industries. From technology and digital transformation to marketing and customer support, we empower businesses to excel",
};

async function fetchIndustries() {
  const res = await fetch(`${apiEndpoint}/service-industry`, {
    next: { revalidate: 10 },
  });
  if (!res.ok) throw new Error("Failed to fetch brands");
  return res.json();
}

const ServiceIndustries = async () => {
  const { service_industry } = await fetchIndustries();
  // console.log(industries[0].title);

  return (
    <Container>
      <ServiceIndustriesContent
        details={service_industry[0]}
        industries={service_industry[0].items}
      />
    </Container>
  );
};

export default ServiceIndustries;
