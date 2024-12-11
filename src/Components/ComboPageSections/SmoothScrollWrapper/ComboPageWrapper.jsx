"use client";
import React, { useState, useEffect, useRef } from "react";

const ComboPageWrapper = ({ children }) => {
  const containerRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (event) => {
      // Prevent default scrolling
      event.preventDefault();

      // Avoid multiple simultaneous scroll events
      if (isScrolling) return;

      // Determine scroll direction and amount
      const delta = event.deltaY;

      // Calculate the height of the container
      const containerHeight = container.clientHeight;

      // Calculate the current scroll position
      const currentScrollTop = container.scrollTop;

      // Determine the target scroll position
      let targetScrollTop;
      if (delta > 0) {
        // Scrolling down
        targetScrollTop = Math.min(
          currentScrollTop + containerHeight,
          container.scrollHeight - containerHeight
        );
      } else {
        // Scrolling up
        targetScrollTop = Math.max(currentScrollTop - containerHeight, 0);
      }

      // Perform smooth scrolling
      setIsScrolling(true);
      container.scrollTo({
        top: targetScrollTop,
        behavior: "smooth",
      });

      // Reset scrolling state after animation
      setTimeout(() => {
        setIsScrolling(false);
      }, 100); // Matches typical smooth scroll duration
    };

    // Add event listener
    container.addEventListener("wheel", handleWheel, { passive: false });

    // Cleanup event listener
    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, [isScrolling]);

  return (
    <div
      ref={containerRef}
      className="w-full h-[100vh] overflow-y-scroll scroll-smooth"
      style={{
        scrollSnapType: "y mandatory",
        overscrollBehavior: "contain",
      }}
    >
      {children}
    </div>
  );
};

export default ComboPageWrapper;
