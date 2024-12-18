import React from "react";
import AppBanner from "../Utilites/AppContents/AppBanner";
import StatsSection from "../Utilites/AppContents/StatsSection";
import AppSection from "../Utilites/AppContents/AppSection";
import ServicePromotion from "../Utilites/AppContents/ServicePromotion";
import BusinessConsultingHero from "../Utilites/AppContents/BusinessConsultingHero";
import ContactSection from "../Utilites/AppContents/ContactUs";
import AppHeader from "../Utilites/AppContents/AppHeader";

const AppPageContent = ({ appData }) => {
  return (
    <div>
      <div className="app_heroSection">
        <AppHeader />
        <AppBanner appData={appData.hero} />
      </div>

      <StatsSection stats={appData.apps_data} />
      <AppSection apps={appData.apps} />
      <ServicePromotion featuredServices={appData.services} />
      <BusinessConsultingHero />
      <div className="mt-0">
        {" "}
        <ContactSection contact={appData.contact} />
      </div>
    </div>
  );
};

export default AppPageContent;
