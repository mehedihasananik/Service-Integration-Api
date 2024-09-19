import React from "react";
import AppBanner from "../Utilites/AppContents/AppBanner";
import StatsSection from "../Utilites/AppContents/StatsSection";
import AppSection from "../Utilites/AppContents/AppSection";
import ServicePromotion from "../Utilites/AppContents/ServicePromotion";
import BusinessConsultingHero from "../Utilites/AppContents/BusinessConsultingHero";

const AppPageContent = () => {
  return (
    <div className="pb-[5%]">
      <AppBanner />
      <StatsSection />
      <AppSection />
      <ServicePromotion />
      <BusinessConsultingHero />
    </div>
  );
};

export default AppPageContent;
