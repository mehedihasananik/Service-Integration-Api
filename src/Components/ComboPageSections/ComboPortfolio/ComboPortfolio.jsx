import Container from "@/Components/Container/Container";
import React from "react";
import ComboPortfolioSlider from "./ComboPortfolioSlider";
import { fetchData } from "@/config/fetchData";
import { comboPortfolioApi, updatePortfolio } from "@/config/apis";
import {
  BookAppointmentButton,
  SeePricingButton,
} from "../ComboGroupBtn/ComboGroupBtn";

const ComboPortfolio = async () => {
  let { ServiceportfolioArray } = await fetchData(comboPortfolioApi);

  return (
    <>
      <div id="portfolio">
        <h2 className="combo_title">Checkout Our Portfolio</h2>
        <div className="flex justify-center pt-4 md:pt-0">
          <p className="combo_des text-center px-[2%] lg:px-0 lg:w-[35%] font-medium">
            Portfolio That Reflects Our Expertise Explore our innovative,
            user-driven solutions that drive success and help achieve your
            goals.
          </p>
        </div>
      </div>

      <ComboPortfolioSlider services={ServiceportfolioArray} />
      <Container>
        <div className="flex flex-col md:flex-row justify-center text-[16px] font-bold mt-[4%] md:mt-0 gap-x-5 gap-y-5 md:gap-y-0">
          <SeePricingButton />
          <BookAppointmentButton />
        </div>
      </Container>
    </>
  );
};

export default ComboPortfolio;
