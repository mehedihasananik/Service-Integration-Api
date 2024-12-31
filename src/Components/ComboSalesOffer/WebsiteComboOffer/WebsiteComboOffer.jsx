"use client";
import React, { useState } from "react";
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

  // For large screens: 6 items per page (2 rows x 3 columns)
  // For small screens: 1 item per page (1 row x 1 column)
  const itemsPerPageLg = 6;
  const itemsPerPageSm = 1;

  const totalPagesLg = Math.ceil(fakeData.length / itemsPerPageLg);
  const totalPagesSm = fakeData.length;

  const handlePrevious = () => {
    setCurrentPage((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(totalPagesSm - 1, prev + 1));
  };

  const ServiceCard = ({ item }) => (
    <div
      className="flex flex-col justify-center items-center px-6 py-8 text-center text-white rounded-lg border border-white/20 bg-blue-700/20 backdrop-blur-lg"
      style={{
        background: "rgba(49, 88, 199, 0.20)",
        backdropFilter: "blur(36px)",
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

  return (
    <div className="w-full px-4 py-8 bg-gray-900">
      <div className="text-center text-white mb-12">
        <p className="text-lg font-medium mb-2">Check what's included</p>
        <h2 className="text-3xl lg:text-5xl font-bold">Website Combo Offer</h2>
      </div>

      {/* Mobile View (< lg screens) */}
      <div className="lg:hidden">
        <div className="relative">
          <ServiceCard item={fakeData[currentPage]} />
        </div>
      </div>

      {/* Desktop View (≥ lg screens) */}
      <div className="hidden lg:block">
        <div className="grid grid-cols-3 gap-6">
          {fakeData
            .slice(
              currentPage * itemsPerPageLg,
              (currentPage + 1) * itemsPerPageLg
            )
            .map((item, index) => (
              <ServiceCard key={index} item={item} />
            ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center items-center gap-4 mt-8">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 0}
          className="p-2 rounded-full bg-blue-500 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-600 transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <span className="text-white">
          {currentPage + 1} /{" "}
          {window.innerWidth >= 1024 ? totalPagesLg : totalPagesSm}
        </span>
        <button
          onClick={handleNext}
          disabled={
            currentPage ===
            (window.innerWidth >= 1024 ? totalPagesLg - 1 : totalPagesSm - 1)
          }
          className="p-2 rounded-full bg-blue-500 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-600 transition-colors"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default WebsiteComboOffer;
