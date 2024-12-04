"use client";
import React, { useEffect, useState } from "react";
import { HiArrowSmallRight } from "react-icons/hi2";
import Loading from "@/Components/Utilites/Loading/Loading";
import Image from "next/image";
import Link from "next/link";
import { searchServiceApi } from "@/config/apis";
import GlobalButtonColored from "../GlobalButton/GlobalButtonColored";

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
    <div className="pt-4 lg:pt-3 ">
      <div className="text-center">
        <h2 className="headings text-center pb-2 md:pb-2">
          Our Amazing Portfolio
        </h2>
        <p className="text-paragraph">Our beautiful work you need to know!</p>
      </div>
      <div className="flex justify-center pt-4">
        <div className="grid grid-cols-2 md:grid-cols-6  lg:grid-cols-6 gap-5 md:gap-2">
          <button
            onClick={() => handleCategoryChange(0)}
            className={`px-4 py-2 rounded-lg xl:rounded-full text-[14px] md:text-[16px] ${
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
              className={`px-4 py-2 rounded-lg xl:rounded-full text-[14px] md:text-[16px]  ${
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
            className={`grid grid-cols-1 md:grid-cols-2  gap-8 4xl:gap-10 justify-between pt-10 pb-5 ${
              animate ? "fade-in" : ""
            }`}
          >
            {filteredPortfolio.slice(0, 4).map((portfolio) => (
              <Link
                key={portfolio.id + "-" + portfolio.slug}
                href={`/portfolio/${portfolio?.slug}`}
              >
                <>
                  <div className="group rounded-lg overflow-hidden border border-[#CBD5E1]">
                    <div className="portfolio-bgHover w-full cursor-pointer flex flex-col xl:flex-row bg-white rounded-lg">
                      <div className="w-full xl:w-1/2">
                        <div className="relative w-full lg:aspect-[330/370] h-[270px] md:h-[400px] lg:w-[345px]  lg:h-[370px] overflow-hidden">
                          <Image
                            src={portfolio?.image}
                            fill // Replaces layout="fill"
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 330px" // Sizes based on container dimensions and breakpoints
                            style={{ objectFit: "cover" }} // Replaces objectFit="cover"
                            quality={80}
                            className="rounded-t-lg xl:rounded-l-lg lg:rounded-tr-none"
                            alt={portfolio?.alt_text || "Portfolio image"}
                          />
                        </div>
                      </div>

                      <div className="w-full xl:w-1/2 p-4 lg:p-6 flex flex-col justify-center items-center">
                        <div className="text-center w-full">
                          <h4 className="text-headingCaption text-[#999999] mb-2 portfolio-textHover">
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
                          <div className="text-base lg:text-lg font-bold font-Raleway text-[#333333] portfolio-textHover line-clamp-2 lg:line-clamp-2 mb-3">
                            {portfolio?.heading?.slice(0, 120)}
                          </div>
                          <p className="text-paragraphSmall text-grayish portfolio-textHover mb-4 line-clamp-4 lg:line-clamp-[8]">
                            {portfolio.portfolio_summery}
                          </p>
                          <div className="flex justify-center items-center gap-2 text-[#FF693B] font-bold portfolio-textHover">
                            <button className="text-sm lg:text-base">
                              Read More
                            </button>
                            <span className="w-5">
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
        <div className="text-center mt-3 mb-6   md:mt-10 md:mb-8">
          <GlobalButtonColored
            path={"/portfolio"}
            title={"View All Portfolio"}
            className="btn btn-primary md:w-[50%] text-center "
          />
        </div>
        {filteredPortfolio.length === 0 && !loading && (
          <div className="flex justify-center text-center text-gray-600 mt-5 md:mt-10">
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
