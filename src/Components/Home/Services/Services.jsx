import ServicesHomeItems from "@/Components/Utilites/ServicesHomeItems/ServicesHomeItems";
import "../../../app/globals.css";
import { servicesApi } from "@/config/apis";

async function getServiceItems() {
  const res = await fetch(`${servicesApi}`, {
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const Services = async () => {
  const serviceItems = await getServiceItems();

  return (
    <div className="overflow-hidden">
      <ServicesHomeItems services={serviceItems} />
    </div>
  );
};

export default Services;
