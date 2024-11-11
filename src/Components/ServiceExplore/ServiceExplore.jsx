import { servicesApi } from "@/config/apis";
import { fetchData } from "@/config/fetchData";
import React, { Suspense } from "react";
import ServiceExploreContents from "./ServiceExploreContents";
import UserLoading from "../Utilites/UserLoading/UserLoading";

const ServiceExplore = async () => {
  let serviceItems = await fetchData(servicesApi);

  return (
    <Suspense fallback={<UserLoading />}>
      <ServiceExploreContents services={serviceItems.ServiceItemsArray} />
    </Suspense>
  );
};

export default ServiceExplore;
