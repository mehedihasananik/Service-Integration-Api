"use client";

import React, { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

export const SmoothScrollWrapper = ({ children }) => {
  const scrollRef = useRef(null);
  const locomotiveScrollRef = useRef(null);

  useEffect(() => {
    if (!scrollRef.current) return;

    locomotiveScrollRef.current = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      smoothMobile: true,
      resetNativeScroll: true,
      lerp: 0.08, // Reduced from 0.1 to minimize shake
      multiplier: 1.1, // Slightly reduced
      direction: "vertical",
      smartphone: {
        smooth: true,
        direction: "vertical",
      },
      tablet: {
        smooth: true,
        direction: "vertical",
      },
      class: "is-smooth-scroll", // Add a class for additional styling
      scrollFromAnywhere: true,
      touchMultiplier: 1.3,
      wheelMultiplier: 1,
      prevent: true, // Prevent default scrolling

      // New options to reduce shake
      inertia: 0.8, // Controls scroll momentum
      ease: 0.1, // Smooth easing
    });

    // Optional: Prevent over-scrolling and bounce effects
    const preventOverscroll = (e) => {
      e.preventDefault();
    };

    window.addEventListener("wheel", preventOverscroll, { passive: false });

    // Cleanup
    return () => {
      if (locomotiveScrollRef.current) {
        locomotiveScrollRef.current.destroy();
      }
      window.removeEventListener("wheel", preventOverscroll);
    };
  }, []);

  return (
    <div
      ref={scrollRef}
      data-scroll-container
      className="smooth-scroll-container"
    >
      {children}
    </div>
  );
};

// Optional: Scroll to section utility
export const useScrollToSection = () => {
  const scrollToSection = (sectionId, offset = -50) => {
    const element = document.getElementById(sectionId);
    const locomotiveScroll = new LocomotiveScroll({ smooth: true });

    if (element) {
      locomotiveScroll.scrollTo(element, {
        offset: offset,
        duration: 600, // Slightly reduced duration
        easing: [0.25, 0.1, 0.25, 1], // Smoother easing
      });
    }
  };

  return { scrollToSection };
};
