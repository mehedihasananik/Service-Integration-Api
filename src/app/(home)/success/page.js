import SuccessComponent from "@/Components/SuccessComponent/SuccessComponent";
import UserLoading from "@/Components/Utilites/UserLoading/UserLoading";
import { Suspense } from "react";

export const metadata = {
  title: "Payment Success",
  description: "This is a page for Payment Success ",
};

const SuccessPage = () => {
  return (
    <Suspense fallback={<UserLoading />}>
      <SuccessComponent />
    </Suspense>
  );
};

export default SuccessPage;
