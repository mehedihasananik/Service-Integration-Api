import ServiceDetails from "@/Components/PagesComponents/ServiceDetails/ServiceDetails";
import UserLoading from "@/Components/Utilites/UserLoading/UserLoading";
import {
  singeServiceDetails,
  singleService_package,
  singleSliderPageDetails,
} from "@/config/apis";
import { Suspense } from "react";

const SinglePage = async ({ params }) => {
  // console.log(params.id);
  // Fetch data for the page
  const service = await fetch(`${singeServiceDetails}/${params?.id}`).then(
    (res) => res?.json()
  );
  const sliders = await fetch(`${singleSliderPageDetails}/${params?.id}`).then(
    (res) => res?.json()
  );
  const packages = await fetch(`${singleService_package}/${params?.id}`).then(
    (res) => res?.json()
  );
  // console.log(`${singleSliderPageDetails}/${params?.id}`);
  return (
    <>
      <Suspense fallback={<UserLoading />}>
        <ServiceDetails
          service={service}
          sliders={sliders}
          packages={packages}
        />
      </Suspense>
    </>
  );
};

export default SinglePage;
