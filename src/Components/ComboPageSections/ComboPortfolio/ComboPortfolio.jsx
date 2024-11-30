import Container from "@/Components/Container/Container";
import React from "react";
import ComboPortfolioSlider from "./ComboPortfolioSlider";
import { fetchData } from "@/config/fetchData";
import { updatePortfolio } from "@/config/apis";

const ComboPortfolio = async () => {
  let { ServiceportfolioArray } = await fetchData(updatePortfolio);

  return (
    <>
      <div>
        <h2 className="combo_title">CheckOut Our Portfolio</h2>
        <div className="flex justify-center">
          <p className="combo_des text-center md:w-[33%]">
            Portfolio That Reflects Our Expertise Explore our innovative,
            user-driven solutions that drive success and help achieve your
            goals.
          </p>
        </div>
      </div>

      <ComboPortfolioSlider services={ServiceportfolioArray} />
    </>
  );
};

export default ComboPortfolio;
