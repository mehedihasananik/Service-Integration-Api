"use client";
import React, { useState, useCallback, useEffect } from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

const SaleClientsItem = ({ content }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState(0);
  const [isLargeScreen, setIsLargeScreen] = useState(true);

  const itemsPerPage = {
    lg: 6, // 2 rows x 3 columns for large screens
    sm: 1, // 1 row x 1 column for smaller screens
  };

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
      // Reset to first page on screen size change to prevent invalid indices
      setCurrentPage(0);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getCurrentItems = useCallback(
    (pageIndex) => {
      const itemsCount = isLargeScreen ? itemsPerPage.lg : itemsPerPage.sm;
      const totalPages = Math.ceil(content.length / itemsCount);

      // Create a normalized page index that wraps around
      const normalizedIndex =
        ((pageIndex % totalPages) + totalPages) % totalPages;

      if (isLargeScreen) {
        // For large screens, get 6 items
        let start = (normalizedIndex * itemsCount) % content.length;
        let items = [];
        for (let i = 0; i < itemsCount; i++) {
          const index = (start + i) % content.length;
          items.push(content[index]);
        }
        return items;
      } else {
        // For small screens, get single item with wrapping
        const index = normalizedIndex % content.length;
        return [content[index]];
      }
    },
    [content, isLargeScreen]
  );

  const handleNavigation = useCallback(
    (newDirection) => {
      if (isAnimating) return;

      setIsAnimating(true);
      setDirection(newDirection);

      setTimeout(() => {
        setCurrentPage((prev) => {
          const totalPages = Math.ceil(
            content.length / (isLargeScreen ? itemsPerPage.lg : itemsPerPage.sm)
          );
          let nextPage = prev + newDirection;

          // Wrap around for infinite scrolling
          if (nextPage < 0) {
            nextPage = totalPages - 1;
          } else if (nextPage >= totalPages) {
            nextPage = 0;
          }

          return nextPage;
        });

        setTimeout(() => {
          setIsAnimating(false);
        }, 50);
      }, 400);
    },
    [content.length, isLargeScreen, isAnimating]
  );

  const TestimonialCard = ({
    logoSrc,
    testimonialText,
    authorImage,
    authorName,
    authorRole,
    index,
  }) => {
    const delay = `${index * 50}ms`;

    return (
      <div
        className="flex overflow-hidden flex-col px-6 pt-6 pb-7 rounded-lg border border-white border-solid bg-white bg-opacity-80 w-full lg:max-w-[313px] shadow-[-2px_2px_17px_rgba(0,0,0,0.06)] transition-all duration-500"
        style={{
          opacity: isAnimating ? 0 : 1,
          transform: `translateY(${isAnimating ? "20px" : "0"})`,
          transitionDelay: delay,
        }}
      >
        <div className="flex flex-col items-start w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/e7a246693dbe47b68ba0a6f099060cf8/8f6ba71be2e98ac5210fa4aeeb4fdea74ea88007916d5b544a652af9e34e8bef?apiKey=5dfe0fed099d4e7fb78a3e68f506b2af&"
            alt="Company logo"
            className="object-contain max-w-full aspect-[5] w-[120px]"
          />
          <div className="self-stretch mt-4 text-sm leading-6 text-neutral-700 line-clamp-3">
            {testimonialText}
          </div>
          <div className="flex gap-2 items-center mt-4">
            <img
              loading="lazy"
              src={authorImage}
              alt={`${authorName} profile picture`}
              className="object-contain shrink-0 self-stretch my-auto w-12 rounded-full aspect-square"
            />
            <div className="flex flex-col self-stretch my-auto">
              <div className="text-base font-semibold leading-none text-sky-950">
                {authorName}
              </div>
              <div className="mt-4 text-sm leading-none text-sky-950 text-opacity-30">
                {authorRole}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="SaleClients_Section w-full">
      <div
        style={{
          borderRadius: "2px",
          border: "1px solid #FFF",
          background: "rgba(255, 255, 255, 0.60)",
          backdropFilter: "blur(36px)",
        }}
        className="flex flex-col items-center justify-center py-[3%] overflow-hidden w-full xl:w-[1240px] mx-auto px-4 lg:px-0"
      >
        <div className="text-center mb-10">
          <h3 className="text-[16px] md:text-[16px] lg:text-[18px] font-normal leading-[24px] text-[#FF693B] font-Jua pb-4">
            Client Reviews
          </h3>
          <h2 className="text-[#001246] text-[30px] lg:text-[48px] font-bold leading-[24px] tracking-[0.96px]">
            Our Proud Clients
          </h2>
        </div>
        <div className="w-full max-w-[1200px]">
          <div
            className="transition-all duration-500 ease-out"
            style={{
              transform: `translateX(${direction * (isAnimating ? -5 : 0)}%)`,
              opacity: isAnimating ? 0.3 : 1,
            }}
          >
            <div
              className={`grid grid-cols-1 ${
                isLargeScreen ? "lg:grid-cols-3 lg:grid-rows-2" : ""
              } gap-4 justify-items-center`}
            >
              {getCurrentItems(currentPage).map((testimonial, index) => (
                <TestimonialCard
                  key={`${testimonial.id}-${currentPage}-${index}`}
                  logoSrc={testimonial.image}
                  testimonialText={testimonial.message}
                  authorImage={testimonial.image}
                  authorName={testimonial.name}
                  authorRole={testimonial.designation}
                  index={index}
                />
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-x-3 mt-[4%]">
            <button
              onClick={() => handleNavigation(-1)}
              disabled={isAnimating}
              className="px-3 py-2 rounded-[6px] bg-white disabled:opacity-50 border border-[#4580FF] transition-all duration-300 hover:bg-gray-50 active:scale-95"
            >
              <GrFormPrevious className="text-[20px] text-[#4580FF]" />
            </button>
            <button
              onClick={() => handleNavigation(1)}
              disabled={isAnimating}
              className="px-3 py-2 rounded-[6px] bg-[#0C89FF] disabled:opacity-50 border border-[#4580FF] text-white transition-all duration-300 hover:bg-[#0972d3] active:scale-95"
            >
              <GrFormNext
                className="text-white text-[20px]"
                style={{ color: "white" }}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaleClientsItem;
