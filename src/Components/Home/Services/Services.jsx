import ServicesHomeItems from "@/Components/Utilites/ServicesHomeItems/ServicesHomeItems";
import { servicesApi } from "@/config/apis";
import { fetchData } from "@/config/fetchData";

const Services = async () => {
  let serviceItems = await fetchData(servicesApi);

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
