"use client";
import React, { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

const SmoothScrollWrapper = ({ children }) => {
  const wrapperRef = useRef();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smooth easing
      direction: "vertical", // Can also be 'horizontal'
      smooth: true,
    });

    const onScroll = (time) => {
      lenis.raf(time);
      requestAnimationFrame(onScroll);
    };
    requestAnimationFrame(onScroll);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <div ref={wrapperRef}>{children}</div>;
};

export default SmoothScrollWrapper;
