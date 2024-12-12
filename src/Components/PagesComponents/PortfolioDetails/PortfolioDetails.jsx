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
    const handleContextMenu = (e) => {
      e.preventDefault();
    };
    document.addEventListener("contextmenu", handleContextMenu);
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  // Disable keyboard shortcuts
  // useEffect(() => {
  //   const handleKeyDown = (e) => {
  //     if (
  //       (e.ctrlKey &&
  //         (e.keyCode === 67 ||
  //           e.keyCode === 86 ||
  //           e.keyCode === 85 ||
  //           e.keyCode === 117)) ||
  //       e.keyCode === 123
  //     ) {
  //       e.preventDefault();
  //       return false;
  //     }
  //   };
  //   document.addEventListener("keydown", handleKeyDown);
  //   return () => {
  //     document.removeEventListener("keydown", handleKeyDown);
  //   };
  // }, []);

  return (
    <div className="bg-[#fff]]">
      <Container>
        <div className="heading-space">
          <h1 className="text-[20px] md:text-[30px] lg:text-[54px] font-Raleway font-bold lg:leading-[63.4px] text-[#000000] text-center pb-3 lg:pb-0 pt-5 md:pt-0">
            {basic?.title}
          </h1>
          <div className="text-[18px] font-Roboto text-[#333333] md:leading-[27px] md:text-left py-3 md:pt-5 md:py-5">
            {basic?.portfolio_summery}
          </div>

          {details.map((portfolio) => (
            <div key={portfolio?.id} className="relative space-y-0">
              <div
                className={`aspect-w-16 aspect-h-9 relative overflow-hidden ${
                  !imagesLoaded[portfolio.id] ? "bg-gray-200" : ""
                }`}
              >
                {!imagesLoaded[portfolio.id] && (
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-gray-300 to-gray-100 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-gradient-to-r 
                        from-transparent 
                        via-white/70 
                        to-transparent 
                        animate-skeleton-wave
                        skew-x-12
                        shadow-lg"
                    ></div>
                  </div>
                )}
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
        <div className=" portfolio_text single_description">
          <Global_PageHtml serviceDetails={basic?.details} />
        </div>
      </Container>

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
    </div>
  );
};

export default PortfolioDetails;
