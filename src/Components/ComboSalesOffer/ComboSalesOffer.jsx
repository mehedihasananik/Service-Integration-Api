import React from "react";
import SalesHeader from "./SalesHeader";
import SalesHeroSection from "./SalesHeroSection/SalesHeroSection";
import SalesAllOne from "./SalesAllOne/SalesAllOne";
import WebsiteComboOffer from "./WebsiteComboOffer/WebsiteComboOffer";
import AnswerSection from "./AnswerSection/AnswerSection";
import ComboPageFaq from "../ComboPageSections/ComboPageFaq/ComboPageFaq";
import SalesPricingPlans from "./SalesPricing/PricingPlans/SalesPricingPlans";
import { BusinessTransform } from "../ComboPageSections/BusinessTransform/BusinessTransform";
import ComboLeadPortfolio from "../ComboLead/ComboLeadPortfolio";
import SaleClients from "./SaleClients/SaleClients";
import SalesVideoSection from "./SalesVideoSection/SalesVideoSection";

const ComboSalesOffer = () => {
  return (
    <div>
      <div className="relative">
        <div className="sales_hero overflow-hidden">
          <SalesHeader />
          <SalesHeroSection />
        </div>
      </div>
      <div className="sales_video">
        <SalesVideoSection />
      </div>
      <div className="pt-10 lg:pt-0">
        <SalesAllOne />
      </div>
      <div id="combo" className="websiteComboOffer overflow-hidden">
        <WebsiteComboOffer />
      </div>

      <AnswerSection />
      <div className="pt-[2%] lg:pt-[0%] overflow-hidden">
        <SaleClients />
      </div>
      <div className="py-0">
        <ComboLeadPortfolio />
      </div>
      <div className="business-section  py-[5%] ">
        <BusinessTransform />
      </div>
      <div className="Sales-Pricing-section py-5 xl:py-0">
        <SalesPricingPlans />
      </div>
      <div className="faq-section pt-[4%]">
        <ComboPageFaq title="Frequently Asked Questions" />
      </div>
    </div>
  );
};

export default ComboSalesOffer;
