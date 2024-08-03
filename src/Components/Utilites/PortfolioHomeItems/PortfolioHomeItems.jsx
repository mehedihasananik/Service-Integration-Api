"use client";
import React, { useEffect, useState } from "react";
import { HiArrowSmallRight } from "react-icons/hi2";
import Loading from "@/Components/Utilites/Loading/Loading";
import Image from "next/image";
import Link from "next/link";
import { searchServiceApi } from "@/config/apis";

const PortfolioHomeItems = ({
  portfolios,
  portfoliosCategories,
  services: initialServices,
}) => {
  const [loading, setLoading] = useState(true);
  const [selectedServiceId, setSelectedServiceId] = useState(0);
  const [selectedCategoryId, setSelectedCategoryId] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [services, setServices] = useState(initialServices);
  const [filteredPortfolio, setFilteredPortfolio] = useState([]);
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

  const handleCategoryChange = async (categoryId) => {
    setSelectedCategoryId(categoryId);
    setSelectedServiceId(0);
    if (categoryId !== 0) {
      await fetchServices(categoryId);
    } else {
      setServices(initialServices);
    }
  };

  return (
    <div className="pt-8 lg:pt-10">
      <div className="text-center">
        <h1 className="text-[30px] md:text-[30px] lg:text-[48px] font-Raleway font-bold">
          Our Amazing Portfolio
        </h1>
        <div>Our beautiful work you need to know!</div>
      </div>
      <div className="flex justify-center pt-5">
        <div className="flex flex-wrap  gap-2">
          <button
            onClick={() => handleCategoryChange(0)}
            className={`px-4 py-2 rounded-full text-sm ${
              selectedCategoryId === 0
                ? "bg-[#FF693B] text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            All Categories
          </button>

          {portfoliosCategories.map((category) => (
            <button
              key={category.category_id}
              onClick={() => handleCategoryChange(category.category_id)}
              className={`px-4 py-2 rounded-full text-sm  ${
                selectedCategoryId === category.category_id
                  ? "bg-[#FF693B] text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {category.category_name}
            </button>
          ))}
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
                <>
                  <div className=" group rounded-[10px] overflow-hidden border border-[#CBD5E1] ">
                    <div className="portfolio-bgHover h-auto lg:h-[400px]  w-[100%]  cursor-pointer flex flex-col lg:flex-row bg-[#FFFFFF] rounded-[10px]">
                      <div className="md:w-1/2 h-full">
                        <Image
                          width={800}
                          height={500}
                          className="w-full 4xl:max-w-[345px] h-[400px]  rounded-l-[10px]"
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
                            {portfolio?.heading?.slice(120)}
                          </div>
                          <p className="text-[14px] text-[#666666] portfolio-textHover mb-4">
                            {portfolio.portfolio_summery.length > 300
                              ? portfolio.portfolio_summery.slice(0, 300) +
                                "..."
                              : portfolio.portfolio_summery}
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
                </>
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
    </div>
  );
};

export default PortfolioHomeItems;
