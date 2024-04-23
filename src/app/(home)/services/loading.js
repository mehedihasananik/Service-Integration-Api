import ServiceLoading from "@/Components/Utilites/Loading/ServiceLoading";
import React from "react";

const loading = () => {
  return (
    <div className="grid grid-cols-1 md:grid md:grid-cols-2 lg:grid-cols-2  xl:grid-cols-4 justify-items-center place-items-center gap-8 pb-8 lg:gap-x-40 4xl:gap-x-16  mt-5 md:mt-10 ">
      {" "}
      <ServiceLoading />
      <ServiceLoading />
      <ServiceLoading />
      <ServiceLoading />
    </div>
  );
};

export default loading;
