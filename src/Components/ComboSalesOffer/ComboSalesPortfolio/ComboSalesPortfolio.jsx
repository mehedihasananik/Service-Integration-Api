import ComboPortfolioSlider1 from "@/Components/ComboPageSections/ComboPortfolio/ComboPortfolioSlider1";
import ComboPortfolioSlider2 from "@/Components/ComboPageSections/ComboPortfolio/ComboPortfolioSlider2";
import ConditionBtn from "@/Components/ComboPageSections/ConditionalBtn/ConditionBtn";
import { envobyteComboLead } from "@/config/apis";
import { fetchData } from "@/config/fetchData";

async function getPageData() {
  try {
    return await fetchData(envobyteComboLead);
  } catch (error) {
    console.error("Error fetching home page data:", error);
    throw error;
  }
}

const ComboSalesPortfolio = async () => {
  const portfolio = await getPageData();

  return (
    <div id="portfolio">
      <div className="py-[2%] pt-[5%]">
        <h3 className="text-[16px] md:text-[18px] lg:text-[18px] font-normal leading-[24px] text-[#FF693B] font-Jua lg:pb-6 text-center">
          Website portfolio
        </h3>
        <h2 className="font-Inter text-[#001246] text-[20px] lg:text-[48px] font-bold leading-[24px] tracking-[0.96px] text-center">
          Check Our Previous Work
        </h2>
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
        <ConditionBtn />
      </div>
    </div>
  );
};

export default ComboSalesPortfolio;
