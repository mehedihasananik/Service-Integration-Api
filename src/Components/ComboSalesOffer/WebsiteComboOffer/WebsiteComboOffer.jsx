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
  const [isLargeScreen, setIsLargeScreen] = useState(true); // Default to true for SSR

  const itemsPerPageLg = 6;
  const itemsPerPageSm = 1;

  const totalPagesLg = Math.ceil(fakeData.length / itemsPerPageLg);
  const totalPagesSm = fakeData.length;

  // Handle window resize and initial check
  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    // Initial check
    checkScreenSize();

    // Add event listener
    window.addEventListener("resize", checkScreenSize);

    // Cleanup
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const handleNavigation = useCallback(
    (newDirection) => {
      if (isAnimating) return;

      const maxPages = isLargeScreen ? totalPagesLg : totalPagesSm;
      const nextPage = currentPage + newDirection;
      if (nextPage < 0 || nextPage >= maxPages) return;

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
        className="flex flex-col justify-center items-center px-6 py-8 text-center text-white rounded-lg border border-white/20 bg-blue-700/20 backdrop-blur-lg"
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
          <img
            loading="lazy"
            src={item.imageSrc}
            alt={item.imageAlt}
            className="object-contain w-32 h-32"
          />
          <div className="flex flex-col w-full mt-4">
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="mt-2 text-sm text-gray-300">{item.subtitle}</p>
          </div>
          <button className="px-8 py-2 mt-4 text-sm font-medium text-white bg-blue-500 rounded-full hover:bg-blue-600 transition-colors">
            {item.buttonText}
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full px-4 py-8">
      <div className="text-center text-white mb-12">
        <p className="text-[16px] md:text-[16px] lg:text-[16px] font-normal leading-[24px] text-[#fff]  font-Jua ">
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
      <div className="hidden lg:block">
        <div
          className="transition-all duration-500 ease-out"
          style={{
            transform: `translateX(${direction * (isAnimating ? -5 : 0)}%)`,
            opacity: isAnimating ? 0.3 : 1,
          }}
        >
          <div className="grid grid-cols-3 gap-6">
            {fakeData
              .slice(
                currentPage * itemsPerPageLg,
                (currentPage + 1) * itemsPerPageLg
              )
              .map((item, index) => (
                <ServiceCard key={index} item={item} index={index} />
              ))}
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center items-center mt-5">
        <div className="bg-[#001246] lg:w-[8%] rounded-[30px]">
          <div className="flex justify-center items-center gap-4">
            <button
              onClick={() => handleNavigation(-1)}
              disabled={currentPage === 0 || isAnimating}
              className="p-2 rounded-full text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <span className="text-white">
              {currentPage + 1} / {isLargeScreen ? totalPagesLg : totalPagesSm}
            </span>
            <button
              onClick={() => handleNavigation(1)}
              disabled={
                currentPage ===
                  (isLargeScreen ? totalPagesLg - 1 : totalPagesSm - 1) ||
                isAnimating
              }
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
