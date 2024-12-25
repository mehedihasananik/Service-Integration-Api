import React from "react";
import ComboBrands from "../ComboBrands/ComboBrands";
import { fetchData } from "@/config/fetchData";
import SubVideoSection from "./SubVideoSection";
import { brandsApi } from "@/config/apis";

const VideoSection = async () => {
  let brands = await fetchData(brandsApi);

  return (
    <div className="relative">
      <div className="youtube_vdoSection absolute "></div>
      <div className="  pt-[0%]">
        <ComboBrands brands={brands} />
      </div>
      <SubVideoSection />
    </div>
  );
};

export default VideoSection;
