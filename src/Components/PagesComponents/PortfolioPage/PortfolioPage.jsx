"use client";
import React, { useEffect, useState } from "react";
import { HiArrowSmallRight } from "react-icons/hi2";
import Loading from "@/Components/Utilites/Loading/Loading";
import Image from "next/image";
import Link from "next/link";
import { searchServiceApi } from "@/config/apis";
import Service_PageHtml from "@/Components/Utilites/Service_PageHtml/Service_PageHtml";

const truncateText = (text, limit) => {
  if (text.length <= limit) return text;
  return text.slice(0, limit) + "...";
};

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
  const [filteredPortfolio, setFilteredPortfolio] = useState(portfolios);
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
    setLoading(false);
    setAnimate(true);
  }, [selectedCategoryId, selectedServiceId, searchQuery, portfolios]);

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
    <div className="pt-8 lg:pt-10">
      <div className="text-center lg:text-left text-[#0F172A] text-[30px] lg:text-[48px] font-Raleway font-semibold">
        <h3>Our Amazing Portfolio</h3>
      </div>
      <div className="grid grid-cols-1 md:space-x-3 lg:space-x-20 space-y-5 md:space-y-0 md:grid-cols-3 mt-10">
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
                  className="text-[#434348] text-[16px]"
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
            className={`grid grid-cols-1 md:grid-cols-2 gap-8 4xl:gap-10 justify-between pt-10 pb-5 ${
              animate ? "fade-in" : ""
            }`}
          >
            {filteredPortfolio.map((portfolio) => (
              <Link
                key={portfolio.id + "-" + portfolio.slug}
                href={`/portfolio/${portfolio?.slug}`}
              >
                <div className="hidden lg:block group rounded-[10px] overflow-hidden border border-[#CBD5E1] ">
                  <div className="portfolio-bgHover h-auto lg:h-[400px]  w-[100%]  cursor-pointer flex flex-col lg:flex-row bg-[#FFFFFF] rounded-[10px]">
                    <div className="w-1/2 h-full">
                      <Image
                        width={800}
                        height={500}
                        className="4xl:max-w-[345px] h-[400px]  rounded-l-[10px]"
                        src={portfolio?.image}
                        alt=""
                      />
                    </div>

                    <div className="w-full lg:w-1/2 p-4  mt-0 lg:p-6 flex flex-col lg:justify-center 4xl:justify-center items-center">
                      <div className="text-center w-full">
                        <h4 className="text-[14px] text-[#999999] mb-2 portfolio-textHover">
                          {portfolio?.service_name
                            .slice(0, 3)
                            .map((service, index) => (
                              <span key={index}>
                                {index > 0 && (
                                  <>
                                    ,<br />
                                  </>
                                )}
                                {service}
                              </span>
                            ))}
                        </h4>
                        <div className="text-[16px] font-bold font-Raleway text-[#333333] portfolio-textHover line-clamp-3 mb-3">
                          {truncateText(portfolio?.heading, 120)}
                        </div>
                        <p className="text-[14px] text-[#666666] portfolio-textHover mb-4">
                          {portfolio.text.length > 300
                            ? portfolio.text.slice(0, 300) + "..."
                            : portfolio.text}
                        </p>
                        <div className="flex justify-center items-center gap-2 text-[#FF693B] font-bold portfolio-textHover">
                          <button className="text-[14px]">Read More</button>
                          <span className="w-[19px]">
                            <HiArrowSmallRight className="text-xl" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="block lg:hidden group rounded-[10px] overflow-hidden border border-[#CBD5E1]">
                  <div className="portfolio-bgHover h-auto md:h-[650px] lg:h-[400px] w-full cursor-pointer flex flex-col lg:flex-row bg-[#FFFFFF] rounded-[10px]">
                    <div className="w-full lg:w-1/2 h-[200px] md:h-[300px] lg:h-full">
                      <Image
                        width={800}
                        height={500}
                        className="w-full h-full object-cover rounded-t-[10px] lg:rounded-l-[10px] lg:rounded-tr-none"
                        src={portfolio?.image}
                        alt=""
                      />
                    </div>

                    <div className="w-full lg:w-1/2 p-4 md:p-5 lg:p-6 flex flex-col justify-start md:justify-center items-center h-[calc(100%-200px)] md:h-[300px] lg:h-full">
                      <div className="text-center w-full">
                        <h4 className="text-[14px] text-[#999999] mb-2 portfolio-textHover md:mt-10 lg:mt-0">
                          {portfolio?.service_name
                            .slice(0, 3)
                            .map((service, index) => (
                              <span key={index}>
                                {index > 0 && ", "}
                                {service}
                              </span>
                            ))}
                        </h4>
                        <div className="text-[16px] md:text-[18px] font-bold font-Raleway text-[#333333] portfolio-textHover line-clamp-3 mb-3">
                          {truncateText(portfolio?.heading, 120)}
                        </div>
                        <p className="text-[14px] md:text-[15px] text-[#666666] portfolio-textHover mb-4">
                          {truncateText(portfolio.text, 300)}
                        </p>
                        <div className="flex justify-center items-center gap-2 text-[#FF693B] font-bold portfolio-textHover">
                          <button className="text-[14px] md:text-[15px]">
                            Read More
                          </button>
                          <span className="w-[19px]">
                            <HiArrowSmallRight className="text-xl" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
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
      <Service_PageHtml serviceDetails={serviceDetails} />
    </div>
  );
};

export default PortfolioPage;
