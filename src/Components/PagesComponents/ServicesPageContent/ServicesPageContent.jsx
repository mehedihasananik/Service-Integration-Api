"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Global_PageHtml from "@/Components/Utilites/Global_PageHtml/Global_PageHtml";
import ServicePageItems from "./ServicePageItems";
import Loading from "@/Components/Utilites/Loading/Loading";

const ServicesPageContent = ({
  serviceCategories,
  services,
  serviceDetails,
}) => {
  const [loading, setLoading] = useState(true);
  const [serviceLoading, setServiceLoading] = useState(true);
  const [selectedCategoryId, setSelectedCategoryId] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [serviceItems, setServiceItems] = useState([]);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setLoading(false);
  }, []);

  useEffect(() => {
    if (animate) {
      const timer = setTimeout(() => setAnimate(false), 500);
      return () => clearTimeout(timer);
    }
  }, [animate]);

  useEffect(() => {
    const filterServices = () => {
      let filteredServices = services;

      if (selectedCategoryId) {
        filteredServices = filteredServices.filter(
          (item) => item.category_id === selectedCategoryId
        );
      }

      if (searchQuery) {
        filteredServices = filteredServices.filter((service) =>
          service.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
      }

      return filteredServices;
    };

    setServiceLoading(true);
    const filteredServices = filterServices();
    setServiceItems(filteredServices);
    setServiceLoading(false);
    setAnimate(true);
  }, [selectedCategoryId, searchQuery, services]);

  const handleCategoryChange = (e) => {
    setSelectedCategoryId(e.target.value);
  };

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="service_section overflow-hidden">
      <div className="max-w-[1520px] mx-auto px-[6%] md:px-[4%] lg:px-0 xl:px-[8%] 4xl:px-[4%]">
        <div className="py-5 md:py-0 md:pt-8">
          <div className="text-center">
            <h1 className="headings">
              Choose a <span className="text-primary">service</span> that you
              need
            </h1>
          </div>
          <div className="pt-7">
            <div className="w-[100%] flex flex-col md:flex-row justify-center gap-x-10 gap-y-0 lg:gap-y-0">
              <div className="w-full md:w-[40%] lg:w-[25%]">
                <form>
                  <select
                    onChange={handleCategoryChange}
                    id="category"
                    className="cursor-pointer border border-gray-300 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-3 md:mb-0"
                  >
                    <option value="">Select Category</option>
                    {serviceCategories.map((category) => (
                      <option
                        key={category.category_id}
                        value={category.category_id}
                        className="text-[#434348] text-[16px]"
                      >
                        {category.category_name}
                      </option>
                    ))}
                  </select>
                </form>
              </div>
              <div className="w-full md:w-[40%] lg:w-[25%]">
                <div className="relative w-full">
                  <input
                    type="text"
                    placeholder="What are you looking for?"
                    id="search"
                    className="text-grayish py-[17px] px-[10px] border border-gray-300 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={searchQuery}
                    onChange={handleSearchInputChange}
                    required
                  />
                  <button
                    type="submit"
                    className="absolute top-0 end-0 h-full p-2.5 text-sm font-medium text-grayish"
                  >
                    <svg
                      className="w-4 h-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                    <span className="sr-only">Search</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {serviceLoading ? (
            <div className="flex justify-center text-center text-grayish mt-10">
              <Loading />
            </div>
          ) : (
            <div
              className={`grid grid-cols-1 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xll:grid-cols-4 justify-items-center place-items-center gap-x-8 pb-4 lg:gap-y-0 lg:gap-x-0 xxl:gap-x-40 4xl:gap-x-16 mt-5 md:mt-10 ${
                animate ? "fade-in" : ""
              }`}
            >
              {serviceItems.map((service, index) => (
                <Link key={index} href={`/services/${service?.slug}`}>
                  <ServicePageItems {...service} />
                </Link>
              ))}
            </div>
          )}

          {serviceItems.length === 0 && !loading && (
            <div className="flex justify-center text-center text-grayish mt-0">
              <Image
                src={"/assets/data.gif"}
                width={500}
                height={500}
                alt="no data found"
              />
            </div>
          )}
        </div>
      </div>
      {serviceLoading ? (
        ""
      ) : (
        <div className="max-w-[1520px] mx-auto px-[6%] md:px-[4%] lg:px-[8%] 4xl:px-[3%] servicePage_content">
          <Global_PageHtml serviceDetails={serviceDetails} />
        </div>
      )}
    </div>
  );
};

export default ServicesPageContent;
