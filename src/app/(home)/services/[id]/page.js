import ServiceDetails from "@/Components/PagesComponents/ServiceDetails/ServiceDetails";
import JsonLd from "@/Components/Utilites/JsonLd/JsonLd";
import UserLoading from "@/Components/Utilites/UserLoading/UserLoading";
import {
  singeServiceDetails,
  singleService_package,
  singleSliderPageDetails,
} from "@/config/apis";
import { generateCommonMetadata } from "@/config/generateMetadata";
import { Suspense } from "react";

// This function will fetch all required data for the page
async function getPageData(id) {
  try {
    // Updated fetch calls with 120-second revalidation
    const fetchOptions = {
      next: { revalidate: 120 },
    };

    const serviceResponse = await fetch(
      `${singeServiceDetails}/${id}`,
      fetchOptions
    );
    const slidersResponse = await fetch(
      `${singleSliderPageDetails}/${id}`,
      fetchOptions
    );
    const packagesResponse = await fetch(
      `${singleService_package}/${id}`,
      fetchOptions
    );

    if (!serviceResponse.ok || !slidersResponse.ok || !packagesResponse.ok) {
      throw new Error("Failed to fetch one or more resources");
    }

    const service = await serviceResponse.json();
    const sliders = await slidersResponse.json();
    const packages = await packagesResponse.json();

    return { service, sliders, packages };
  } catch (error) {
    console.error("Error fetching page data:", error);
    throw error;
  }
}

export async function generateMetadata({ params }, parent) {
  const { service } = await getPageData(params.id);
  return generateCommonMetadata(service, parent);
}

const SinglePage = async ({ params }) => {
  try {
    const { service, sliders, packages } = await getPageData(params.id);

    return (
      <>
        <JsonLd data={service?.meta?.json_ld} />
        <Suspense fallback={<UserLoading />}>
          <ServiceDetails
            service={service}
            sliders={sliders}
            packages={packages}
          />
        </Suspense>
      </>
    );
  } catch (error) {
    console.error("Error rendering page:", error);
    return <div>Error loading page. Please try again later.</div>;
  }
};

export default SinglePage;
