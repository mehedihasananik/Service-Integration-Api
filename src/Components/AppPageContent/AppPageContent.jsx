import React from "react";
import AppBanner from "../Utilites/AppContents/AppBanner";
import StatsSection from "../Utilites/AppContents/StatsSection";
import AppSection from "../Utilites/AppContents/AppSection";
import ServicePromotion from "../Utilites/AppContents/ServicePromotion";
import KeyFeatures from "../Utilites/AppContents/KeyFeatures";

const AppPageContent = () => {
  return (
    <div className="pb-[10%]">
      <AppBanner />
      <StatsSection />
      <AppSection />
      <ServicePromotion />
      <KeyFeatures />
    </div>
  );
};

export default AppPageContent;
