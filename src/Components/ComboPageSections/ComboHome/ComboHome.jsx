"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ComboHeader from "../ComboHeaderSections/ComboHeader";
import ComboHeroSection from "../ComboHeroSection/ComboHeroSection";
import VideoSection from "../VideoSection/VideoSection";
import ComboClientReview from "../ComboClientReview/ComboClientReview";
import ComboPortfolio from "../ComboPortfolio/ComboPortfolio";
import ComboDeals from "../ComboDeals/ComboDeals";
import ShowcaseProjects from "../ShowcaseProjects/ShowcaseProjects";
import { BusinessTransform } from "../BusinessTransform/BusinessTransform";
import PricingPlans from "../PricingPlans/PricingPlans";
import ComboPageFaq from "../ComboPageFaq/ComboPageFaq";
import ComboContact from "../ComboContact/ComboContact";
import SmoothScrollWrapper from "../SmoothScrollWrapper/SmoothScrollWrapper";
import ComboScheduleMetting from "../ComboScheduleMetting/ComboScheduleMetting";

gsap.registerPlugin(ScrollTrigger);

const ComboHome = () => {
  useEffect(() => {
    const riseFromBottomAnimation = (selector) => {
      gsap.fromTo(
        selector,
        {
          opacity: 0,
          y: 100, // Start 100px below
        },
        {
          opacity: 1,
          y: 0, // End at original position
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: selector,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );
    };

    // Apply the animation to each section
    const sections = [
      ".combo_hero",
      ".video-section",
      ".review-section",
      ".portfolio-section",
      ".comboDeals",
      ".business-section",
      ".pricing-section",
      ".faq-section",
      ".contact-section",
      ".schedule-section",
    ];

    sections.forEach((section) => riseFromBottomAnimation(section));

    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }, []);

  return (
    <SmoothScrollWrapper>
      <div className="relative">
        <div className="combo_hero overflow-hidden">
          <ComboHeader />
          <ComboHeroSection />
        </div>
      </div>
      <div className="video-section pb-4 md:pb-0">
        <VideoSection />
      </div>
      <div className="review-section bg-[#FCFEFF]">
        <ComboClientReview />
      </div>
      <div className="portfolio-section">
        <ComboPortfolio />
      </div>
      <div className="comboDeals">
        <ComboDeals />
        <ShowcaseProjects />
      </div>
      <div className="business-section">
        <BusinessTransform />
      </div>
      <div className="pricing-section">
        <PricingPlans />
      </div>
      <div className="faq-section pt-[0%]">
        <ComboPageFaq title="Frequently Asked Questions" />
      </div>
      <div className="contact-section">
        <ComboContact />
      </div>
      <div className="schedule-section appointmentBg py-5 pt-[2.7%] px-2 md:px-0">
        <ComboScheduleMetting />
      </div>
    </SmoothScrollWrapper>
  );
};

export default ComboHome;
