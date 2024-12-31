import { BusinessTransform } from "../ComboPageSections/BusinessTransform/BusinessTransform";
import ComboClientReview from "../ComboPageSections/ComboClientReview/ComboClientReview";

import ComboHeroSection from "../ComboPageSections/ComboHeroSection/ComboHeroSection";
import ComboPageFaq from "../ComboPageSections/ComboPageFaq/ComboPageFaq";
import ComboScheduleMetting from "../ComboPageSections/ComboScheduleMetting/ComboScheduleMetting";
import ShowcaseProjects from "../ComboPageSections/ShowcaseProjects/ShowcaseProjects";
import VideoSection from "../ComboPageSections/VideoSection/VideoSection";
import AllOffer from "./AllOffer";
import ComboLeadHeader from "./ComboLeadHeader";
import ComboLeadPortfolio from "./ComboLeadPortfolio";

const ComboLead = () => {
  return (
    <>
      <div className="relative">
        <div className="combo_hero overflow-hidden">
          <ComboLeadHeader />
          <ComboHeroSection />
        </div>
      </div>
      <div className="video-section pb-[10%] md:pb-[4%]">
        <VideoSection />
      </div>
      <div>
        <AllOffer />
      </div>

      <div className="review-section bg-[#FCFEFF] mt-[6%]">
        <ComboClientReview />
      </div>
      <div className="py-0">
        <ComboLeadPortfolio />
      </div>
      <div className="mt-[4%]">
        <ShowcaseProjects />
      </div>
      <div className="business-section">
        <BusinessTransform />
      </div>

      <div className="faq-section pt-[4%]">
        <ComboPageFaq title="Frequently Asked Questions" />
      </div>
      <div className="schedule-section appointmentBg py-5 pt-[2.7%] px-2 md:px-0">
        <ComboScheduleMetting />
      </div>
    </>
  );
};

export default ComboLead;
