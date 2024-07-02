import ServiceDetails from "@/Components/PagesComponents/ServiceDetails/ServiceDetails";
import { Suspense } from "react";

const SinglePage = ({ params }) => {
  return (
    <>
      <Suspense>
        <ServiceDetails id={params?.id} />
      </Suspense>
    </>
  );
};

export default SinglePage;
