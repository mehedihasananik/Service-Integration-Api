import React from "react";
import AppBanner from "../Utilites/AppContents/AppBanner";
import StatsSection from "../Utilites/AppContents/StatsSection";
import AppSection from "../Utilites/AppContents/AppSection";
import ServicePromotion from "../Utilites/AppContents/ServicePromotion";
import BusinessConsultingHero from "../Utilites/AppContents/BusinessConsultingHero";
import ContactSection from "../Utilites/AppContents/ContactUs";

const AppPageContent = ({ appData }) => {
  return (
    <div>
      <AppBanner appData={appData.hero} />
      <StatsSection stats={appData.apps_data} />
      <AppSection apps={appData.apps} />
      <ServicePromotion featuredServices={appData.services} />
      <BusinessConsultingHero business={appData.business} />
      <div className="mt-10">
        {" "}
        <ContactSection contact={appData.contact} />
      </div>
    </div>
  );
};

export default AppPageContent;
