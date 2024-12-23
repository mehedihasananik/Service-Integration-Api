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
import ComboScheduleMetting from "../ComboScheduleMetting/ComboScheduleMetting";

const ComboHome = () => {
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
    </>
  );
};

export default ComboHome;
