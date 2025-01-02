"use client";
import React, { useState, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const WebsiteComboOffer = () => {
  const fakeData = [
    {
      imageSrc: "/assets/websiteLogo1.svg",
      imageAlt: "WordPress Website",
      title: "WordPress Website",
      subtitle: "Design & Development",
      buttonText: "Included",
    },
    {
      imageSrc: "/assets/websiteLogo2.svg",
      imageAlt: "Content Writing",
      title: "Content Writing",
      subtitle: "For entire project",
      buttonText: "Included",
    },
    {
      imageSrc: "/assets/websiteLogo3.svg",
      imageAlt: "Sample Image 3",
      title: "Professional Logo",
      subtitle: "Create brand identity",
      buttonText: "Included",
    },
    {
      imageSrc: "/assets/websiteLogo4.svg",
      imageAlt: "Sample Image 4",
      title: "Custom Graphics",
      subtitle: "According to your business.",
      buttonText: "Included",
    },
    {
      imageSrc: "/assets/websiteLogo5.svg",
      imageAlt: "Sample Image 5",
      title: "Website Maintenance",
      subtitle: "Zero Hassle Business",
      buttonText: "Included",
    },
    {
      imageSrc: "/assets/websiteLogo6.svg",
      imageAlt: "Sample Image 6",
      title: "Monthly SEO",
      subtitle: "Rank #1 on google ",
      buttonText: "Included",
    },
    {
      imageSrc: "/assets/websiteLogo7.svg",
      imageAlt: "Sample Image 7",
      title: "Brand Marketing",
      subtitle: "From start to end",
      buttonText: "Included",
    },
    {
      imageSrc: "/assets/websiteLogo8.svg",
      imageAlt: "Sample Image 8",
      title: "Social Media Post",
      subtitle: "Full Social kit",
      buttonText: "Included",
    },
    {
      imageSrc: "/assets/websiteLogo9.svg",
      imageAlt: "Sample Image 9",
      title: "Animated Video",
      subtitle: "Explain Your Business",
      buttonText: "Included",
    },
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState(0);
  const [isLargeScreen, setIsLargeScreen] = useState(true);

  const itemsPerPageLg = 6;
  const itemsPerPageSm = 1;
  const totalPagesSm = fakeData.length;
  const totalPagesLg = 2; // Now we only have 2 pages: first page (1-6) and second page (7-9 + 1-3)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const handleNavigation = useCallback(
    (newDirection) => {
      if (isAnimating) return;

      const maxPages = isLargeScreen ? totalPagesLg : totalPagesSm;
      let nextPage = currentPage + newDirection;

      if (isLargeScreen) {
        // For large screens, cycle between 0 and 1
        if (nextPage < 0) {
          nextPage = totalPagesLg - 1;
        } else if (nextPage >= totalPagesLg) {
          nextPage = 0;
        }
      } else {
        // For small screens, keep the original bounds
        if (nextPage < 0 || nextPage >= maxPages) return;
      }

      setIsAnimating(true);
      setDirection(newDirection);

      setTimeout(() => {
        setCurrentPage(nextPage);
        setTimeout(() => {
          setIsAnimating(false);
        }, 50);
      }, 400);
    },
    [currentPage, totalPagesLg, totalPagesSm, isAnimating, isLargeScreen]
  );

  const ServiceCard = ({ item, index }) => {
    const delay = `${index * 50}ms`;

    return (
      <div
        className="h-[358px] flex flex-col justify-center items-center px-6 py-8 text-center text-white rounded-[4px] border border-white/20 bg-blue-700/20 backdrop-blur-lg"
        style={{
          background: "rgba(49, 88, 199, 0.20)",
          backdropFilter: "blur(36px)",
          opacity: isAnimating ? 0 : 1,
          transform: `translateY(${isAnimating ? "20px" : "0"})`,
          transition: "all 500ms ease-out",
          transitionDelay: delay,
        }}
      >
        <div className="flex flex-col justify-center items-center w-full max-w-[228px]">
          <img loading="lazy" src={item.imageSrc} alt={item.imageAlt} />
          <div className="flex flex-col w-full mt-4">
            <h3 className="font-Inter text-[20px] font-semibold leading-[42px]">
              {item.title}
            </h3>
            <p className="font-Inter text-[16px] font-normal">
              {item.subtitle}
            </p>
          </div>
          <button className="w-[180px] py-2.5 mt-4 text-[14px] font-normal text-white bg-[#0C89FF] rounded-[30px] hover:bg-blue-600 transition-colors">
            {item.buttonText}
          </button>
        </div>
      </div>
    );
  };

  const getLargeScreenItems = () => {
    if (currentPage === 0) {
      // First page: Show items 1-6
      return fakeData.slice(0, 6);
    } else {
      // Second page: Show items 7-9 + 1-3
      const lastThreeItems = fakeData.slice(6, 9);
      const firstThreeItems = fakeData.slice(0, 3);
      return [...lastThreeItems, ...firstThreeItems];
    }
  };

  const getCounterText = () => {
    if (isLargeScreen) {
      // For large screens, show 6/9 on first page and 9/9 on second page
      return currentPage === 0 ? "6/9" : "9/9";
    }
    // For mobile, show current item number
    return `${currentPage + 1}/${totalPagesSm}`;
  };

  return (
    <div className="w-full px-[3%] py-8">
      <div className="text-center text-white mb-12">
        <p className="text-[16px] md:text-[16px] lg:text-[16px] font-normal leading-[24px] text-[#fff] font-Jua pb-4">
          Check what's included
        </p>
        <h2 className="text-3xl lg:text-5xl font-bold">Website Combo Offer</h2>
      </div>

      {/* Mobile View (< lg screens) */}
      <div className="lg:hidden">
        <div
          className="transition-all duration-500 ease-out"
          style={{
            transform: `translateX(${direction * (isAnimating ? -5 : 0)}%)`,
            opacity: isAnimating ? 0.3 : 1,
          }}
        >
          <ServiceCard item={fakeData[currentPage]} index={0} />
        </div>
      </div>

      {/* Desktop View (≥ lg screens) */}
      <div className="hidden lg:block h-[740px]">
        <div
          className="transition-all duration-500 ease-out"
          style={{
            transform: `translateX(${direction * (isAnimating ? -5 : 0)}%)`,
            opacity: isAnimating ? 0.3 : 1,
          }}
        >
          <div className="grid grid-cols-3 gap-8">
            {getLargeScreenItems().map((item, index) => (
              <ServiceCard
                key={`${item.title}-${index}`}
                item={item}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center items-center mt-10">
        <div className="bg-[#001246] lg:w-[8%] rounded-[30px] py-1">
          <div className="flex justify-center items-center gap-4 h-[30px]">
            <button
              onClick={() => handleNavigation(-1)}
              disabled={!isLargeScreen && currentPage === 0}
              className="p-2 rounded-full text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <span className="text-white font-Inter text-[12px] font-normal leading-[42px]">
              {getCounterText()}
            </span>
            <button
              onClick={() => handleNavigation(1)}
              disabled={!isLargeScreen && currentPage === totalPagesSm - 1}
              className="p-2 rounded-full text-[#0A7AE8] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsiteComboOffer;
