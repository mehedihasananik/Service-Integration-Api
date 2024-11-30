import { BusinessTransform } from "@/Components/ComboPageSections/BusinessTransform/BusinessTransform";
import ComboBrands from "@/Components/ComboPageSections/ComboBrands/ComboBrands";
import ComboClientReview from "@/Components/ComboPageSections/ComboClientReview/ComboClientReview";
import ComboContact from "@/Components/ComboPageSections/ComboContact/ComboContact";
import ComboDeals from "@/Components/ComboPageSections/ComboDeals/ComboDeals";
import ComboHeader from "@/Components/ComboPageSections/ComboHeaderSections/ComboHeader";
import ComboHeroSection from "@/Components/ComboPageSections/ComboHeroSection/ComboHeroSection";
import ComboPortfolio from "@/Components/ComboPageSections/ComboPortfolio/ComboPortfolio";
import ShowcaseProjects from "@/Components/ComboPageSections/ShowcaseProjects/ShowcaseProjects";
import ScheduleMeetingContent from "@/Components/ScheduleMeeting/ScheduleMeetingContent";
import HomePageFaqs from "@/Components/Utilites/HomePageFaqs/HomePageFaqs";
import { brandsApi } from "@/config/apis";
import { fetchData } from "@/config/fetchData";
import React from "react";

const LandingPage = async () => {
  let brands = await fetchData(brandsApi);
  return (
    <>
      <div className="relative">
        <div className="combo_hero">
          <ComboHeader />
          <ComboHeroSection />
        </div>
        <div className="bg-[#fff] pb-5 pt-[0%]">
          <ComboBrands brands={brands} />
        </div>
      </div>
      <ComboClientReview />
      <ComboPortfolio />
      <div className="comboDeals">
        <ComboDeals />
        <ShowcaseProjects />
      </div>
      <BusinessTransform />

      <ComboContact />
      <div className="pt-10">
        <HomePageFaqs title="Frequently Asked Questions" />
      </div>
      <div className="appointmentBg">
        <ScheduleMeetingContent />
      </div>
    </>
  );
};

export default LandingPage;
