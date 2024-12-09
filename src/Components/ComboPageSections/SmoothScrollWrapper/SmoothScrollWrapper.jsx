"use client";

import React, { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import { useRouter } from "next/navigation";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const SmoothScrollWrapper = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;

      const scroller = new LocomotiveScroll({
        el: document.querySelector("[data-scroll-container]"),
        smooth: true,
        multiplier: 1,
        class: "is-revealed",
        reloadOnContextChange: true,
        touchMultiplier: 2,
        smoothMobile: true,
        smartphone: {
          smooth: true,
        },
        tablet: {
          smooth: true,
        },
      });

      // Update ScrollTrigger when locomotive scroll updates
      scroller.on("scroll", () => {
        ScrollTrigger.update();
      });

      // Tell ScrollTrigger to use these proxy methods
      ScrollTrigger.scrollerProxy("[data-scroll-container]", {
        scrollTop(value) {
          return arguments.length
            ? scroller.scrollTo(value, { duration: 0 })
            : scroller.scroll.y;
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          };
        },
        pinType: document.querySelector("[data-scroll-container]").style
          .transform
          ? "transform"
          : "fixed",
      });

      ScrollTrigger.defaults({ scroller: "[data-scroll-container]" });

      // Handle route changes
      router.events?.on("routeChangeStart", () => {
        scroller.destroy();
      });

      // Handle window resize
      const handleResize = () => {
        scroller.update();
      };

      window.addEventListener("resize", handleResize);

      // Force update after small delay to ensure all content is loaded
      setTimeout(() => {
        scroller.update();
        ScrollTrigger.refresh();
      }, 500);

      return () => {
        scroller.destroy();
        ScrollTrigger.getAll().forEach((t) => t.kill());
        window.removeEventListener("resize", handleResize);
      };
    })();
  }, [router]);

  return (
    <main data-scroll-container className=" w-full  overflow-hidden">
      {children}
    </main>
  );
};
