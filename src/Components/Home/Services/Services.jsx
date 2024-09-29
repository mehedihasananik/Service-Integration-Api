import ServicesHomeItems from "@/Components/Utilites/ServicesHomeItems/ServicesHomeItems";
import { servicesApi } from "@/config/apis";
import { fetchData } from "@/config/fetchData";

// data fetching from server side
async function getServiceItems() {
  return fetchData(`${servicesApi}`); // Use fetchData instead
}

const Services = async () => {
  // getting the server data
  const serviceItems = await getServiceItems();
  // console.log(serviceItems.ServiceItemsArray);

  return (
    <div className="overflow-hidden pt-4 md:pt-0 ">
      <ServicesHomeItems
        services={serviceItems.ServiceItemsArray}
        details={serviceItems.service_details}
      />
    </div>
  );
};

export default Services;
