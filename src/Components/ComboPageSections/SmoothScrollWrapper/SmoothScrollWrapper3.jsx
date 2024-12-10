"use client";

import React, { useEffect, useRef } from "react";

const SmoothScrollWrapper3 = ({ children }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = containerRef.current;
    let currentScroll = 0;
    let targetScroll = 0;
    let isScrolling = false;

    const ease = 0.1; // Adjust for smoothness (lower values = smoother)

    const smoothScrolling = () => {
      currentScroll += (targetScroll - currentScroll) * ease;
      scrollContainer.style.transform = `translateY(-${currentScroll}px)`;

      if (Math.abs(targetScroll - currentScroll) > 0.5) {
        requestAnimationFrame(smoothScrolling);
      } else {
        isScrolling = false;
      }
    };

    const handleWheel = (event) => {
      targetScroll += event.deltaY;

      // Clamp targetScroll to prevent overscroll
      targetScroll = Math.max(
        0,
        Math.min(
          targetScroll,
          scrollContainer.scrollHeight - window.innerHeight
        )
      );

      if (!isScrolling) {
        isScrolling = true;
        requestAnimationFrame(smoothScrolling);
      }
    };

    const handleResize = () => {
      targetScroll = 0;
      currentScroll = 0;
      scrollContainer.style.transform = `translateY(0px)`;
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
      }}
    >
      <div
        ref={containerRef}
        style={{
          willChange: "transform",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default SmoothScrollWrapper3;
