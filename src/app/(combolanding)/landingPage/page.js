import ComboBrands from "@/Components/ComboPageSections/ComboBrands/ComboBrands";
import ComboClientReview from "@/Components/ComboPageSections/ComboClientReview/ComboClientReview";
import ComboHeader from "@/Components/ComboPageSections/ComboHeaderSections/ComboHeader";
import ComboHeroSection from "@/Components/ComboPageSections/ComboHeroSection/ComboHeroSection";
import ComboPortfolio from "@/Components/ComboPageSections/ComboPortfolio/ComboPortfolio";
import ScheduleMeetingContent from "@/Components/ScheduleMeeting/ScheduleMeetingContent";
import HomePageFaqs from "@/Components/Utilites/HomePageFaqs/HomePageFaqs";
import { brandsApi } from "@/config/apis";
import { fetchData } from "@/config/fetchData";
import React from "react";

const LandingPage = async () => {
  let brands = await fetchData(brandsApi);
  return (
    <div>
      <div className="combo_hero">
        <ComboHeader />
        <ComboHeroSection />
      </div>
      <ComboBrands brands={brands} />
      <ComboClientReview />
      <div>
        <ComboPortfolio />
      </div>
      <div className="faqBookbg">
        <HomePageFaqs title="Questions Looks Here" />

        <ScheduleMeetingContent />
      </div>
    </div>
  );
};

export default LandingPage;
