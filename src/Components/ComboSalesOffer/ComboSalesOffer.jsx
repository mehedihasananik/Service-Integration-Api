import React from "react";
import SalesAllOne from "./SalesAllOne/SalesAllOne";
import WebsiteComboOffer from "./WebsiteComboOffer/WebsiteComboOffer";
import AnswerSection from "./AnswerSection/AnswerSection";
import SalesPricingPlans from "./SalesPricing/PricingPlans/SalesPricingPlans";
import SaleClients from "./SaleClients/SaleClients";
import SalesVideoSection from "./SalesVideoSection/SalesVideoSection";
import ComboSalesPortfolio from "./ComboSalesPortfolio/ComboSalesPortfolio";
import { SalesBusinessTransform } from "./SalesBusinessTransform/SalesBusinessTransform";
import SalesPageFaq from "./SalesPageFaq/SalesPageFaq";
import SalesHeader1 from "./SalesHeroSection/SalesHeader1";
import SalesHeroSection1 from "./SalesHeroSection/SalesHeroSection1";
import SalesHeroSection from "./SalesHeroSection/SalesHeroSection";

const ComboSalesOffer = () => {
  return (
    <div>
      <div className="relative">
        <div className="sales_hero1 overflow-hidden">
          <SalesHeader1 />
          <div className="hidden xl:block">
            <SalesHeroSection1 />
          </div>
          <div className="xl:hidden">
            <SalesHeroSection />
          </div>
        </div>
      </div>

      <div className=" ">
        <SalesVideoSection />
      </div>
      <div className="pt-10 lg:pt-[3%]">
        <SalesAllOne />
      </div>
      <div id="combo" className="websiteComboOffer overflow-hidden">
        <WebsiteComboOffer />
      </div>

      <div className="px-[5%] md:px-[3%] lg:px-[0%]">
        <AnswerSection />
      </div>
      <div className="pt-[2%] lg:pt-[0%] lg:pb-[0%] overflow-hidden">
        <SaleClients />
      </div>
      <div className="py-0">
        <ComboSalesPortfolio />
      </div>
      <div className="business-section  py-[5%] ">
        <SalesBusinessTransform />
      </div>
      <div className="Sales-Pricing-section pb-5  xl:pb-0 md:py-5 xl:py-0">
        <SalesPricingPlans />
      </div>
      <div className="sale-faq-section pt-[4%]">
        <SalesPageFaq title="Frequently Asked Questions" />
      </div>
    </div>
  );
};

export default ComboSalesOffer;
