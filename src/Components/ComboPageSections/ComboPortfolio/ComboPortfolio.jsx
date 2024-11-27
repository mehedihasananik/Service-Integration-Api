import Container from "@/Components/Container/Container";
import React from "react";
import ComboPortfolioSlider from "./ComboPortfolioSlider";
import { fetchData } from "@/config/fetchData";
import { servicesApi, updatePortfolio } from "@/config/apis";

const ComboPortfolio = async () => {
  let { ServiceportfolioArray } = await fetchData(updatePortfolio);

  return (
    <Container>
      <div>
        <h2 className="combo_title">Check Out Our Portfolio</h2>
        <p className="combo_des text-center">
          Portfolio That Reflects Our Expertise Explore our innovative,
          user-driven solutions that drive success and help achieve your goals.
        </p>
      </div>

      <ComboPortfolioSlider services={ServiceportfolioArray} />
    </Container>
  );
};

export default ComboPortfolio;
