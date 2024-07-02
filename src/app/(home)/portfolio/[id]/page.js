import PortfolioDetails from "@/Components/PagesComponents/PortfolioDetails/PortfolioDetails";
import { Suspense } from "react";

const SinglePage = ({ params }) => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <PortfolioDetails id={params?.id} />
      </Suspense>
    </div>
  );
};

export default SinglePage;
