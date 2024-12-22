"use client";
import React, { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

const SmoothScrollWrapper = ({ children }) => {
  const wrapperRef = useRef();
  const lenisRef = useRef();
  const scrollTimeoutRef = useRef(null);
  const rafRef = useRef(null);
  const lastWheelTime = useRef(Date.now());
  const wheelEventsRef = useRef([]);
  const velocityRef = useRef(0);
  const lastDirectionRef = useRef(0);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 2.4,
      easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.8, // Increased base speed
      smoothTouch: false,
      touchMultiplier: 2.5,
      infinite: false,
      orientation: "vertical",
      gestureOrientation: "vertical",
      normalizeWheel: true,
      stopMultiplier: 0.7,
    });

    lenisRef.current = lenis;

    const handleWheel = (event) => {
      const currentTime = Date.now();
      const timeSinceLastWheel = currentTime - lastWheelTime.current;
      lastWheelTime.current = currentTime;

      const currentDirection = Math.sign(event.deltaY);
      lastDirectionRef.current = currentDirection;

      wheelEventsRef.current.push({
        delta: Math.abs(event.deltaY),
        time: currentTime,
        direction: currentDirection,
      });

      wheelEventsRef.current = wheelEventsRef.current.filter(
        (e) => currentTime - e.time <= 80 // Shorter time window for faster response
      );

      // Enhanced velocity calculation
      const currentVelocity =
        wheelEventsRef.current.reduce((sum, event) => {
          const age = (currentTime - event.time) / 80;
          const weight = Math.pow(1 - age, 3); // Cubic weight for even more emphasis on recent events
          return sum + event.delta * weight * event.direction;
        }, 0) / wheelEventsRef.current.length;

      velocityRef.current = velocityRef.current * 0.4 + currentVelocity * 0.6; // More emphasis on new velocity

      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      const baseSpeed = 1.8; // Higher base speed
      const maxBoost = 20; // Much higher max speed
      const velocityFactor = Math.abs(velocityRef.current) / 30; // Even more sensitive

      // More aggressive speed boost
      let speedBoost =
        baseSpeed + Math.pow(velocityFactor, 2) * (maxBoost - baseSpeed);

      // Enhanced rapid wheel boost
      if (timeSinceLastWheel < 25) {
        // Even shorter threshold
        speedBoost *= 2.8; // Higher multiplier
      }

      // Additional boost for sustained fast scrolling
      if (wheelEventsRef.current.length > 2) {
        const avgDelta =
          wheelEventsRef.current.reduce((sum, e) => sum + e.delta, 0) /
          wheelEventsRef.current.length;
        if (avgDelta > 50) {
          // Lower threshold for boost
          speedBoost *= 2; // Higher multiplier
          if (avgDelta > 100) {
            speedBoost *= 1.5; // Extra boost for very fast scrolling
          }
        }
      }

      // Faster speed application
      const targetSpeed = speedBoost;
      const currentSpeed = lenis.options.wheelMultiplier;
      lenis.options.wheelMultiplier =
        currentSpeed + (targetSpeed - currentSpeed) * 0.8; // Faster speed transition

      scrollTimeoutRef.current = setTimeout(() => {
        wheelEventsRef.current = [];
        velocityRef.current = 0;

        if (lenis.options.wheelMultiplier !== baseSpeed) {
          const resetSpeed = () => {
            const currentSpeed = lenis.options.wheelMultiplier;
            const targetSpeed = baseSpeed;
            const newSpeed = currentSpeed + (targetSpeed - currentSpeed) * 0.2;
            lenis.options.wheelMultiplier = newSpeed;

            if (Math.abs(newSpeed - targetSpeed) > 0.01) {
              requestAnimationFrame(resetSpeed);
            } else {
              lenis.options.wheelMultiplier = targetSpeed;
              lenis.velocity = 0;
            }
          };

          requestAnimationFrame(resetSpeed);
        }
      }, 150);

      if (
        currentDirection !== Math.sign(velocityRef.current) &&
        Math.abs(velocityRef.current) > 0.1
      ) {
        velocityRef.current = 0;
        lenis.velocity = 0;
      }
    };

    wrapperRef.current?.addEventListener("wheel", handleWheel, {
      passive: true,
    });

    const animate = (time) => {
      lenis.raf(time);
      rafRef.current = requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);

    const handleBlur = () => {
      lenis.stop();
      wheelEventsRef.current = [];
      velocityRef.current = 0;
    };

    const handleFocus = () => {
      lenis.start();
    };

    window.addEventListener("blur", handleBlur);
    window.addEventListener("focus", handleFocus);

    return () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      window.removeEventListener("blur", handleBlur);
      window.removeEventListener("focus", handleFocus);
      wrapperRef.current?.removeEventListener("wheel", handleWheel);
      lenis.destroy();
    };
  }, []);

  return <div ref={wrapperRef}>{children}</div>;
};

export default SmoothScrollWrapper;
