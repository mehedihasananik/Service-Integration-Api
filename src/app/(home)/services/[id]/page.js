"use client";
import { useEffect, useState } from "react";
import ServiceDetails from "@/Components/PagesComponents/ServiceDetails/ServiceDetails";
import UserLoading from "@/Components/Utilites/UserLoading/UserLoading";
import {
  singeServiceDetails,
  singleService_package,
  singleSliderPageDetails,
} from "@/config/apis";

const SinglePage = ({ params }) => {
  const [service, setService] = useState(null);
  const [sliders, setSliders] = useState(null);
  const [packages, setPackages] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const serviceResponse = await fetch(
          `${singeServiceDetails}/${params?.id}`
        );
        const serviceData = await serviceResponse.json();

        const slidersResponse = await fetch(
          `${singleSliderPageDetails}/${params?.id}`
        );
        const slidersData = await slidersResponse.json();

        const packagesResponse = await fetch(
          `${singleService_package}/${params?.id}`
        );
        const packagesData = await packagesResponse.json();

        setService(serviceData);
        setSliders(slidersData);
        setPackages(packagesData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [params?.id]);

  if (loading) {
    return <UserLoading />;
  }

  return (
    <ServiceDetails
      service={service}
      sliders={sliders}
      packages={packages}
      id={params?.id}
    />
  );
};

export default SinglePage;
