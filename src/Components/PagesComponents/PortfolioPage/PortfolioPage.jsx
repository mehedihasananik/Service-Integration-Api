"use client";
import React, { useEffect, useState } from "react";
import Loading from "@/Components/Utilites/Loading/Loading";
import Image from "next/image";
import Link from "next/link";
import { searchServiceApi } from "@/config/apis";
import Global_PageHtml from "@/Components/Utilites/Global_PageHtml/Global_PageHtml";
import PortfolioPageItems from "./PortfolioPageItems";

const PortfolioPage = ({
  portfolios,
  portfoliosCategories,
  services: initialServices,
  serviceDetails,
}) => {
  const [loading, setLoading] = useState(true);
  const [selectedServiceId, setSelectedServiceId] = useState(0);
  const [selectedCategoryId, setSelectedCategoryId] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [services, setServices] = useState(initialServices);
  const [filteredPortfolio, setFilteredPortfolio] = useState([]);
  const [displayedPortfolio, setDisplayedPortfolio] = useState([]);
  const [animate, setAnimate] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16;

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
    const filterPortfolios = () => {
      return portfolios.filter((item) => {
        const categoryMatch =
          selectedCategoryId === 0 ||
          item.category_id.includes(selectedCategoryId.toString());
        const serviceMatch =
          selectedServiceId === 0 ||
          item.service_id.includes(selectedServiceId.toString());
        const searchMatch = item.heading
          .toLowerCase()
          .includes(searchQuery.toLowerCase());
        return categoryMatch && serviceMatch && searchMatch;
      });
    };

    setLoading(true);
    const filtered = filterPortfolios();
    setFilteredPortfolio(filtered);
    setCurrentPage(1);
    updateDisplayedPortfolio(filtered, 1);
    setLoading(false);
    setAnimate(true);
  }, [selectedCategoryId, selectedServiceId, searchQuery, portfolios]);

  const updateDisplayedPortfolio = (items, page) => {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setDisplayedPortfolio(items.slice(0, endIndex));
  };

  const handleLoadMore = () => {
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
    updateDisplayedPortfolio(filteredPortfolio, nextPage);
  };

  const fetchServices = async (categoryId) => {
    try {
      const response = await fetch(`${searchServiceApi}/${categoryId}`);
      if (!response.ok) {
        throw new Error("Failed to fetch services");
      }
      const data = await response.json();
      setServices(data);
    } catch (error) {
      console.error("Error fetching services:", error);
    }
  };

  const handleCategoryChange = async (e) => {
    const categoryId = parseInt(e.target.value);
    setSelectedCategoryId(categoryId);
    setSelectedServiceId(0);
    if (categoryId !== 0) {
      await fetchServices(categoryId);
    } else {
      setServices(initialServices);
    }
  };

  const handleServiceChange = (e) => {
    setSelectedServiceId(parseInt(e.target.value));
  };

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="pt-8 lg:pt-8">
      <div className="text-center">
        <h1 className="headings">
          Our Amazing <span className="text-primary">Portfolio</span>
        </h1>
      </div>
      <div className="grid grid-cols-1 md:space-x-3 lg:space-x-20 space-y-3 md:space-y-0 md:grid-cols-3 mt-10">
        <div>
          <form className="max-w-sm">
            <select
              onChange={handleCategoryChange}
              id="categories"
              className="cursor-pointer border border-gray-300 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={selectedCategoryId}
            >
              <option value={0}>Select Category</option>
              {portfoliosCategories.map((category) => (
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
          <form className="max-w-sm">
            <select
              onChange={handleServiceChange}
              id="services"
              className="cursor-pointer border border-gray-300 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={selectedServiceId}
            >
              <option value={0}>Select Service</option>
              {services.map((service) => (
                <option
                  key={service.id}
                  value={service.id}
                  className="text-blackish text-[16px]"
                >
                  {service.service_name}
                </option>
              ))}
            </select>
          </form>
        </div>
        <div>
          <div className="relative w-full">
            <input
              type="text"
              placeholder="What are you looking for?"
              id="search"
              value={searchQuery}
              onChange={handleSearchInputChange}
              className="
              text-dark-800 
              placeholder-slate-950 
              bg-white 
              border border-gray-300
              text-sm rounded-lg 
              focus:ring-blue-500 focus:border-blue-500 
              block w-full 
              pt-[18px] pb-[18px] px-[10px] 
              dark:bg-blue-900 
              dark:border-blue-600 
              dark:placeholder-blue-300 
              dark:text-blue-100 
              dark:focus:ring-blue-500 
              dark:focus:border-blue-400"
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
      <div>
        {loading ? (
          <div className="flex justify-center text-center text-gray-600 mt-10">
            <Loading />
          </div>
        ) : (
          <div
            className={`grid grid-cols-1 md:grid-cols-2 gap-8 4xl:gap-10 justify-between pt-5 md:pt-10 pb-5 ${
              animate ? "fade-in" : ""
            }`}
          >
            {displayedPortfolio.map((portfolio) => (
              <Link
                key={portfolio.id + "-" + portfolio.slug}
                href={`/portfolio/${portfolio?.slug}`}
              >
                <PortfolioPageItems portfolio={portfolio} />
              </Link>
            ))}
          </div>
        )}
        {displayedPortfolio.length < filteredPortfolio.length && (
          <div className="flex justify-center mt-5">
            <button
              onClick={handleLoadMore}
              className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary transition-colors duration-300"
            >
              Load More
            </button>
          </div>
        )}
        {filteredPortfolio.length === 0 && !loading && (
          <div className="flex justify-center text-center text-gray-600 mt-0">
            <Image
              src={"/assets/data.gif"}
              width={500}
              height={500}
              alt="no data found"
              quality={80}
            />
          </div>
        )}
      </div>
      {loading ? (
        ""
      ) : (
        <div className="single_description">
          <Global_PageHtml serviceDetails={serviceDetails} />
        </div>
      )}
    </div>
  );
};

export default PortfolioPage;
