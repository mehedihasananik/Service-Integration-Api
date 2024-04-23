"use client";
import Container from "@/Components/Container/Container";
import { fetchData } from "@/config/apiRequests.js";
import { brandsApi } from "@/config/apis";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Brands = () => {
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiUrl = `${brandsApi}`;

    fetchData(apiUrl) // Default method is 'GET'
      .then((data) => {
        setBrands(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="bg-[#F8FAFC] ">
      <Container>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-2 lg:gap-0 py-5 lg:py-2">
          {/* left side */}
          <div className="w-full text-center lg:text-left lg:w-[40%] font-Montserrat text-[#475569] text-[20px] font-bold">
            TRUSTED BY GLOBAL BRANDS
          </div>
          {/* right side */}
          <div className=" w-full lg:w-[60%] lg:flex lg:justify-end ">
            {loading ? (
              <>
                {/* loading */}
                <div
                  role="status"
                  className="py-[5%]  animate-pulse space-y-0 md:space-x-8 w-[50%] flex gap-x-10 items-center lg:justify-end"
                >
                  <div className="w-full ">
                    <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-4"></div>
                    <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-4"></div>
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* brands logo */}
                <div className="w-[100%]  flex sm:gap-x-3 lsm:gap-x-5 lg:gap-x-10 justify-center items-center lg:justify-end">
                  {brands?.map((brand) => {
                    return (
                      <Image
                        key={brand.id}
                        width={1000}
                        height={1000}
                        className="w-[60px] h-[50px] md:w-[101px] md:h-[70px] "
                        src={brand.logo}
                        alt=""
                        onContextMenu={(e) => e.preventDefault()}
                      />
                    );
                  })}
                </div>
              </>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Brands;
