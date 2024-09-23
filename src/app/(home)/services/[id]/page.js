import ServiceDetails from "@/Components/PagesComponents/ServiceDetails/ServiceDetails";
import JsonLd from "@/Components/Utilites/JsonLd/JsonLd";
import UserLoading from "@/Components/Utilites/UserLoading/UserLoading";
import {
  singeServiceDetails,
  singleService_package,
  singleSliderPageDetails,
} from "@/config/apis";
import { fetchMultipleData } from "@/config/fetchData";
import { generateCommonMetadata } from "@/config/generateMetadata";
import { Suspense } from "react";

// This function will fetch all required data for the page
async function getPageData(id) {
  try {
    const [service, sliders, packages] = await fetchMultipleData([
      `${singeServiceDetails}/${id}`,
      `${singleSliderPageDetails}/${id}`,
      `${singleService_package}/${id}`,
    ]);

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
