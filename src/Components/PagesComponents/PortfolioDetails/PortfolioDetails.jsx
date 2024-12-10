"use client";
import { useState, useEffect } from "react";
import Container from "@/Components/Container/Container";
import RelevantPortfolio from "@/Components/Utilites/RelevantServices/RelevantPortfolio";
import Link from "next/link";
import Image from "next/image";
import Global_PageHtml from "@/Components/Utilites/Global_PageHtml/Global_PageHtml";

const PortfolioDetails = ({ singlePortfolioItem }) => {
  const { basic, details, relevant } = singlePortfolioItem;
  const [imagesLoaded, setImagesLoaded] = useState({});

  const handleContextMenu = (e) => {
    e.preventDefault();
  };

  const handleImageLoad = (id) => {
    setImagesLoaded((prev) => ({ ...prev, [id]: true }));
  };

  // Disable right-click
  useEffect(() => {
    document.addEventListener("contextmenu", handleContextMenu);
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  const SkeletonLoader = () => (
    <div className="skeleton-container">
      <div className="skeleton-wrapper">
        <div className="skeleton-image-wrapper">
          <div className="skeleton-image-overlay">
            <div className="skeleton-image-content">
              <div className="skeleton-image-placeholder">
                <svg
                  className="skeleton-placeholder-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <circle cx="8.5" cy="8.5" r="1.5"></circle>
                  <polyline points="21 15 16 10 5 21"></polyline>
                </svg>
              </div>
              <div className="skeleton-loading-bars">
                <div className="skeleton-loading-bar"></div>
                <div className="skeleton-loading-bar w-3/4"></div>
                <div className="skeleton-loading-bar w-1/2"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="skeleton-caption">
          <div className="skeleton-caption-line"></div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-[#fff]">
      <Container>
        <div className="heading-space">
          <h1 className="text-[20px] md:text-[30px] lg:text-[54px] font-Raleway font-bold lg:leading-[63.4px] text-[#000000] text-center pb-3 lg:pb-0 pt-5 md:pt-0">
            {basic?.title}
          </h1>
          <div className="text-[18px] font-Roboto text-[#333333] md:leading-[27px] md:text-left py-3 md:pt-5 md:py-5">
            {basic?.portfolio_summery}
          </div>

          {details.map((portfolio) => (
            <div key={portfolio?.id} className="relative space-y-0 mb-6">
              <div className="relative aspect-w-16 aspect-h-9">
                {!imagesLoaded[portfolio.id] && <SkeletonLoader />}
                <Image
                  height={800}
                  width={1000}
                  onContextMenu={handleContextMenu}
                  className={`transition-opacity duration-300 md:w-full md:h-[auto] ${
                    imagesLoaded[portfolio.id] ? "opacity-100" : "opacity-0"
                  }`}
                  alt={portfolio.alt_text}
                  src={portfolio.image}
                  onLoad={() => handleImageLoad(portfolio.id)}
                  quality={100}
                />
              </div>
              <h3 className="text-gray-500 text-[18px] md:text-[20px] font-Raleway font-semibold text-center pt-1 pb-3 md:pt-2 md:pb-5">
                {portfolio.caption_text}
              </h3>
            </div>
          ))}
        </div>
        <div className="portfolio_text single_description">
          <Global_PageHtml serviceDetails={basic?.details} />
        </div>
      </Container>

      {/* Rest of the component remains the same */}
      <div className="text-center bg-[#FF693B08] py-8 md:py-14 md:pb-16">
        <h2 className="text-[20px] md:text-[32px] lg:text-[45px] text-[#111111] lg:leading-[101px] font-semibold pb-4 md:pb-3">
          Let&apos;s Choose Us for Your Next Project
        </h2>
        <Link
          href="/#projectDetails"
          className="bg-[#FF693B] text-[16px] border border-[#FF693B] md:text-[18px] font-Poppins text-white px-5 py-2 md:px-8 md:py-3 rounded-lg transition-all duration-300 hover:bg-[#fff] hover:text-[#FF693B]"
        >
          Contact Us
        </Link>
      </div>
      <div className="bg-[#fff] py-5 md:pt-3 md:pb-10">
        <div className="max-w-[1520px] mx-auto px-[6%] md:px-[4%] xl:px-[8%] 2xl:px-[2%]  4xl:px-[2%]">
          <RelevantPortfolio singlePortfolioItem={singlePortfolioItem} />
        </div>
      </div>

      {/* Skeleton Styles */}
      <style jsx>{`
        .skeleton-container {
          @apply w-full relative;
        }

        .skeleton-wrapper {
          @apply w-full rounded-lg overflow-hidden;
        }

        .skeleton-image-wrapper {
          @apply relative aspect-w-16 aspect-h-9 bg-gray-100;
        }

        .skeleton-image-overlay {
          @apply absolute inset-0 flex items-center justify-center;
        }

        .skeleton-image-content {
          @apply w-full h-full flex flex-col items-center justify-center space-y-4 p-4;
        }

        .skeleton-image-placeholder {
          @apply w-24 h-24 text-gray-300 opacity-50;
        }

        .skeleton-placeholder-icon {
          @apply w-full h-full;
        }

        .skeleton-loading-bars {
          @apply w-full space-y-2 mt-4;
        }

        .skeleton-loading-bar {
          @apply h-3 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-full animate-pulse;
        }

        .skeleton-caption {
          @apply flex justify-center items-center py-4;
        }

        .skeleton-caption-line {
          @apply w-1/2 h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-full animate-pulse;
        }
      `}</style>
    </div>
  );
};

export default PortfolioDetails;
