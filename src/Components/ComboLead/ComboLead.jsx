import { BusinessTransform } from "../ComboPageSections/BusinessTransform/BusinessTransform";
import ComboClientReview from "../ComboPageSections/ComboClientReview/ComboClientReview";
import ComboContact from "../ComboPageSections/ComboContact/ComboContact";
import ComboDeals from "../ComboPageSections/ComboDeals/ComboDeals";
import ComboHeader from "../ComboPageSections/ComboHeaderSections/ComboHeader";
import ComboHeroSection from "../ComboPageSections/ComboHeroSection/ComboHeroSection";
import ComboPageFaq from "../ComboPageSections/ComboPageFaq/ComboPageFaq";
import ComboPortfolio from "../ComboPageSections/ComboPortfolio/ComboPortfolio";
import PricingPlans from "../ComboPageSections/PricingPlans/PricingPlans";
import ShowcaseProjects from "../ComboPageSections/ShowcaseProjects/ShowcaseProjects";
import VideoSection from "../ComboPageSections/VideoSection/VideoSection";
import ScheduleMeetingContent from "../ScheduleMeeting/ScheduleMeetingContent";

const ComboLead = () => {
  return (
    <>
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
      <div className="py-10">
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
        <ScheduleMeetingContent />
      </div>
    </>
  );
};

export default ComboLead;
