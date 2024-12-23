"use client";
import React, { useEffect, useRef, useState } from "react";

const ScrollAnimationWrapper = ({ children }) => {
  const sectionsRef = useRef([]);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState("down");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollDirection(currentScrollY > lastScrollY ? "down" : "up");
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && scrollDirection === "down") {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.2 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, [scrollDirection]);

  // Process children without React.Children.map
  const renderChildren = () => {
    // Ensure children is iterable (e.g., handle single or multiple elements)
    const childArray = Array.isArray(children) ? children : [children];

    return childArray.map((child, index) => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child, {
          ref: (el) => {
            if (el) sectionsRef.current[index] = el;
          },
          className: `${child.props.className || ""} section preload`,
        });
      }

      console.warn("Invalid child detected in ScrollAnimationWrapper:", child);
      return (
        <div key={index} className="invalid-child-wrapper">
          Invalid Child
        </div>
      );
    });
  };

  return <>{renderChildren()}</>;
};

export default ScrollAnimationWrapper;
