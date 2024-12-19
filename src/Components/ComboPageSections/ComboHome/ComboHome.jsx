import React from "react";
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
import ScheduleMeetingContent from "@/Components/ScheduleMeeting/ScheduleMeetingContent";
import { Footer } from "@/Components";
import SmoothScrollWrapper from "../SmoothScrollWrapper/SmoothScrollWrapper";
import ComboScheduleMetting from "../ComboScheduleMetting/ComboScheduleMetting";

const ComboHome = () => {
  return (
    <SmoothScrollWrapper>
      <div className="relative">
        <div className="combo_hero overflow-hidden">
          <ComboHeader />
          <ComboHeroSection />
        </div>
      </div>
      <div className="pb-4 md:pb-0">
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
      <div className="pt-[0%]">
        <ComboPageFaq title="Frequently Asked Questions" />
      </div>
      <ComboContact />
      <div className="appointmentBg  py-5 pt-[2.7%] px-2 md:px-0">
        <ComboScheduleMetting />
      </div>
      <Footer />
    </SmoothScrollWrapper>
  );
};

export default ComboHome;
