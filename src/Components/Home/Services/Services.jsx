import ServicesHomeItems from "@/Components/Utilites/ServicesHomeItems/ServicesHomeItems";
import { servicesApi } from "@/config/apis";

// data fetching from server side
async function getServiceItems() {
  const res = await fetch(`https://v2admin.envobyte.com/api/sevice_items`, {
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
// async function getServiceItems() {
//   const res = await fetch(`${servicesApi}`, {
//     next: { revalidate: 10 },
//   });

//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }
//   return res.json();
// }

const Services = async () => {
  // getting the server data
  const serviceItems = await getServiceItems();
  // console.log(serviceItems.service_items);

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
