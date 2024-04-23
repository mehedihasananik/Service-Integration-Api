"use client";
import React, { useEffect, useState } from "react";
import { HiArrowSmallRight } from "react-icons/hi2";
import Loading from "@/Components/Utilites/Loading/Loading";
import Image from "next/image";
import Link from "next/link";
import { searchServiceApi } from "@/config/apis";

const PortfolioPage = ({
  portfolioCategories,
  services,
  serviceCategories: initialServiceCategories, // Rename to avoid naming conflict
}) => {
  const [loading, setLoading] = useState(true);
  const [selectedServiceId, setSelectedServiceId] = useState(0);
  const [selectedCategoryId, setSelectedCategoryId] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [serviceCategories, setServiceCategories] = useState(
    initialServiceCategories
  ); // Define state

  const fetchServiceCategories = async (selectedValue) => {
    try {
      const response = await fetch(`${searchServiceApi}/${selectedValue}`);
      const data = await response.json();
      // Update serviceCategories with the fetched data
      setServiceCategories(data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const fetchDataAsync = async () => {
    try {
      // Data already passed as props, no need to fetch again
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDataAsync();
  }, []);

  const handleServiceChange = async (e) => {
    const selectedValue = parseInt(e.target.value);
    setSelectedServiceId(selectedValue);
    if (selectedValue !== 0) {
      await fetchServiceCategories(selectedValue);
    } else {
      // If selectedValue is 0, reset serviceCategories to its initial value
      setServiceCategories(initialServiceCategories);
    }
  };

  const handleCategoryChange = (e) => {
    const selectedCategoryId = parseInt(e.target.value);
    setSelectedCategoryId(selectedCategoryId);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // You can implement search logic here
    console.log("Search Query:", searchQuery);
  };

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredPortfolio = portfolioCategories.filter(
    (item) =>
      (selectedServiceId === 0 || item.service_id === selectedServiceId) &&
      (selectedCategoryId === 0 || item.category_id === selectedCategoryId) &&
      item.heading.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="pt-8 lg:pt-10">
      <div className="text-center lg:text-left text-[#0F172A] text-[32px] lg:text-[48px] font-Raleway font-semibold">
        <h3>Our Amazing Portfolio</h3>
      </div>
      <div className="grid grid-cols-1 md:space-x-3 lg:space-x-20 space-y-5 md:space-y-0 md:grid-cols-3 mt-10">
        <div>
          <form className="max-w-sm">
            <select
              onChange={handleServiceChange}
              id="logo"
              className="cursor-pointer border border-gray-300 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              defaultValue={0}
            >
              <option value={0}>Select Category</option>
              {services.slice(1, 100).map((service) => (
                <option
                  key={service.service_id}
                  value={service.service_id}
                  className="text-[#434348] text-[16px]"
                >
                  {service.service_name}
                </option>
              ))}
            </select>
          </form>
        </div>
        <div>
          <form className="max-w-sm">
            <select
              onChange={handleCategoryChange}
              id="categories"
              className="cursor-pointer border border-gray-300 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value={0}>Select Service</option>
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
        <div>
          <>
            <div className="relative w-full">
              <input
                type="search"
                placeholder="What are you looking for?"
                id="search"
                value={searchQuery}
                onChange={handleSearchInputChange}
                className="text-[#C1C1C1] py-[13px] px-[10px] border border-gray-300 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
              <button
                type="submit"
                onClick={handleSearchSubmit}
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
          </>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-between pt-10 pb-5 ">
          {loading ? (
            <div>
              <Loading />
            </div>
          ) : (
            <>
              {filteredPortfolio.map((portfolio) => (
                <Link key={portfolio.id} href={`/portfolio/${portfolio.slug}`}>
                  <div className="group">
                    <div className="portfolio-bgHover cursor-pointer flex flex-col xl:flex-row justify-between bg-[#FFFFFF] rounded-xl border border-[#CBD5E1]">
                      <div>
                        <Image
                          width={800}
                          height={262}
                          className="w-full lg:w-[400px] h-[420px] object-cover rounded-l"
                          src={portfolio.image}
                          alt=""
                        />
                      </div>
                      <div className="flex flex-col justify-center items-center p-3 md:py-0 2xl:px-10">
                        <div className="text-center">
                          <h4 className="text-[14px] text-[#999999] pt-3 pb-3 md:pt-0 md:pb-6 portfolio-textHover">
                            {portfolio.service_name[0].service_name}
                          </h4>
                          <h3 className="text-[16px] font-bold font-Raleway text-[#333333] portfolio-textHover">
                            {portfolio.heading}
                          </h3>
                          <p className="w-[250px] text-[14px] text-[#666666] py-3 portfolio-textHover">
                            {portfolio.text}
                          </p>
                        </div>
                        <div className="group flex justify-center items-center gap-2 text-[#FF693B] font-bold mt-5 portfolio-textHover pb-6 lg:pb-0">
                          <button className="text-[14px]">Read More</button>
                          <span className="w-[19px] font-bold">
                            <HiArrowSmallRight className="text-xl" />
                          </span>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </>
          )}
        </div>
        {filteredPortfolio.length === 0 && !loading && (
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
    </div>
  );
};

export default PortfolioPage;
