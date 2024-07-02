import PortfolioDetails from "@/Components/PagesComponents/PortfolioDetails/PortfolioDetails";
import { Suspense } from "react";

const SinglePage = ({ params }) => {
  return (
    <>
      <Suspense>
        <PortfolioDetails id={params?.id} />
      </Suspense>
    </>
  );
};

export default SinglePage;
