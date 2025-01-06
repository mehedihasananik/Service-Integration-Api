import React from "react";
import { fetchData } from "@/config/fetchData";
import ComboPortfolioSlider2 from "../ComboPageSections/ComboPortfolio/ComboPortfolioSlider2";
import ComboPortfolioSlider1 from "../ComboPageSections/ComboPortfolio/ComboPortfolioSlider1";
import { ComboLeadBookBtn } from "./ComboLeadButtons/ComboLeadBookBtn";
import { envobyteComboLead } from "@/config/apis";
import ConditionBtn from "../ComboPageSections/ConditionalBtn/ConditionBtn";

async function getPageData() {
  try {
    return await fetchData(envobyteComboLead);
  } catch (error) {
    console.error("Error fetching home page data:", error);
    throw error;
  }
}

const ComboLeadPortfolio = async () => {
  const portfolio = await getPageData();

  return (
    <div id="portfolio">
      <div>
        <h2 className="combo_title pt-6 md:pt-[3.5%]">
          Checkout Our Portfolio
        </h2>
        <div className="flex justify-center pt-4 md:pt-0 pb-10">
          <p className="combo_des text-center px-[2%] lg:px-0 lg:w-[35%] font-medium text-[#6D758F] font-Inter text-base  leading-6 ">
            Portfolio That Reflects Our Expertise Explore our innovative,
            user-driven solutions that drive success and help achieve your
            goals.
          </p>
        </div>
      </div>
      <div className="">
        <ComboPortfolioSlider2 portfolio={portfolio} />
        <ComboPortfolioSlider1 portfolio={portfolio} />
      </div>
      {/* <div className="block md:hidden">
        <ComboPortfolioSliderSm2 portfolio={portfolio} />
        <ComboPortfolioSliderSm1 portfolio={portfolio} />
      </div> */}
      <div className="">
        <div className="w-[100%] flex justify-center items-center pt-[1%]">
          <ComboLeadBookBtn />
        </div>
      </div>
    </div>
  );
};

export default ComboLeadPortfolio;
