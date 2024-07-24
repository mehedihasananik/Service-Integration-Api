"use client";
import React, { useEffect, useState } from "react";
import Container from "@/Components/Container/Container";
import Image from "next/image";
import Link from "next/link";
import UserLoading from "@/Components/Utilites/UserLoading/UserLoading";
import Service_PageHtml from "@/Components/Utilites/Service_PageHtml/Service_PageHtml";

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
          (item) => item.category_id === parseInt(selectedCategoryId)
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
    const uniqueServices = filteredServices;

    setServiceItems(uniqueServices);
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
      <Container>
        <div className="py-5 md:pt-8">
          <div className="text-center">
            <h2 className="text-[30px] md:text-[30px] lg:text-[48px] font-Raleway font-bold">
              Choose a <span className="text-[#FF693B]">service</span> that you
              need
            </h2>
          </div>
          <div className="pt-7">
            <div className="w-[100%] flex flex-col md:flex-row justify-center gap-x-10 gap-y-4 lg:gap-y-0">
              <div className="w-full md:w-[40%] lg:w-[25%]">
                <form>
                  <select
                    onChange={handleCategoryChange}
                    id="category"
                    className="cursor-pointer border border-gray-300 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                    type="search"
                    placeholder="What are you looking for?"
                    id="search"
                    className="text-[#C1C1C1] py-[13px] px-[10px] border border-gray-300 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={searchQuery}
                    onChange={handleSearchInputChange}
                    required
                  />
                  <button
                    type="submit"
                    className="absolute top-0 end-0 h-full p-2.5 text-sm font-medium text-[#64748B]"
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
            <div className="flex justify-center text-center text-gray-600 mt-10">
              <UserLoading />
            </div>
          ) : (
            <div
              className={`grid grid-cols-1 md:grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 justify-items-center place-items-center gap-x-8 pb-8 lg:gap-y-0 lg:gap-x-44 xxl:gap-x-40 4xl:gap-x-16 mt-5 md:mt-10 ${
                animate ? "fade-in" : ""
              }`}
            >
              {serviceItems.map((service, index) => (
                <Link key={index} href={`/services/${service?.slug}`}>
                  <div className="group h-[550px] xl:w-[296px] xxl:w-[296px] 2xl:w-[320px] shadow-lg rounded-md border border-[#E2E8F0] cursor-pointer mb-5 lg:mb-10">
                    <div className="flex flex-col">
                      <div className="bg-[#E2E8F0]">
                        <div>
                          <Image
                            width={700}
                            height={700}
                            className="w-full h-[304px] overflow-hidden rounded-t-md"
                            src={service?.image}
                            alt=""
                          />
                        </div>
                      </div>
                      <div>
                        <div className="px-3 group-hover:bg-[#FF693B] group-hover:text-white transition-all duration-200">
                          <h3 className="text-[20px] md:text-[18px] font-bold font-Raleway pt-5 pb-2 whitespace-nowrap">
                            {service.title}
                          </h3>
                          <p className="text-[14px] text-[#475569] group-hover:text-white transition-all duration-200">
                            {service.details.slice(0, 195)}...
                          </p>
                        </div>
                        <div className="flex group-hover:rounded-b-md items-center justify-between px-3 h-[50px] pt-10 pb-12 group-hover:bg-[#FF693B] transition-all duration-200">
                          <div className="font-Raleway">
                            <span className="font-bold text-[16px] text-[#1E293B] group-hover:text-white transition-all duration-200">
                              Start From
                            </span>
                          </div>
                          <div>
                            <h3 className="flex items-center space-x-[1px] font-Raleway text-[20px] font-bold text-[#0A2C8C] group-hover:text-white transition-all duration-200">
                              <span>$</span> <span>{service.start_price}</span>
                            </h3>
                          </div>
                          <div>
                            <button className="text-[14px] bg-[#FF693B] rounded-md px-8 py-[5px] text-white border border-[#ff693B] group-hover:bg-white group-hover:text-[#FF693B] transition-all duration-200">
                              View
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {serviceItems.length === 0 && !loading && (
            <div className="flex justify-center text-center text-gray-600 mt-0">
              <Image
                src={"/assets/data.gif"}
                width={500}
                height={500}
                alt="no data found"
              />
            </div>
          )}
        </div>
      </Container>
      {serviceLoading ? (
        ""
      ) : (
        <div className="max-w-[1520px] mx-auto px-[6%] md:px-[4%] lg:px-[8%] 4xl:px-[3%]">
          <Service_PageHtml serviceDetails={serviceDetails} />
        </div>
      )}
    </div>
  );
};

export default ServicesPageContent;
