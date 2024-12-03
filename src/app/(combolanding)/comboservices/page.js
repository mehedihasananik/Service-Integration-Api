import { BusinessTransform } from "@/Components/ComboPageSections/BusinessTransform/BusinessTransform";
import ComboBrands from "@/Components/ComboPageSections/ComboBrands/ComboBrands";
import ComboClientReview from "@/Components/ComboPageSections/ComboClientReview/ComboClientReview";
import ComboContact from "@/Components/ComboPageSections/ComboContact/ComboContact";
import ComboDeals from "@/Components/ComboPageSections/ComboDeals/ComboDeals";
import ComboHeader from "@/Components/ComboPageSections/ComboHeaderSections/ComboHeader";
import ComboHeroSection from "@/Components/ComboPageSections/ComboHeroSection/ComboHeroSection";
import ComboPortfolio from "@/Components/ComboPageSections/ComboPortfolio/ComboPortfolio";
import PricingPlans from "@/Components/ComboPageSections/PricingPlans/PricingPlans";
import ShowcaseProjects from "@/Components/ComboPageSections/ShowcaseProjects/ShowcaseProjects";
import VideoSection from "@/Components/ComboPageSections/VideoSection/VideoSection";
import ScheduleMeetingContent from "@/Components/ScheduleMeeting/ScheduleMeetingContent";
import HomePageFaqs from "@/Components/Utilites/HomePageFaqs/HomePageFaqs";
import { brandsApi } from "@/config/apis";
import { fetchData } from "@/config/fetchData";
import React from "react";

const LandingPage = async () => {
  return (
    <>
      <div className="relative">
        <div className="combo_hero overflow-hidden">
          <ComboHeader />
          <ComboHeroSection />
        </div>
      </div>
      <div className="">
        <VideoSection />
      </div>
      <div className="bg-[#FCFEFF]">
        <ComboClientReview />
      </div>

      <ComboPortfolio />
      <div className="comboDeals">
        <ComboDeals />
        <ShowcaseProjects />
      </div>
      <BusinessTransform />
      <PricingPlans />
      <div className="pt-10">
        <HomePageFaqs title="Frequently Asked Questions" />
      </div>
      <ComboContact />

      <div className="appointmentBg">
        <ScheduleMeetingContent />
      </div>
    </>
  );
};

export default LandingPage;
