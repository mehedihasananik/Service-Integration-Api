import React from "react";
import ComboBrands from "../ComboBrands/ComboBrands";
import { fetchData } from "@/config/fetchData";
import { brandsApi } from "@/config/apis";
import VideoSectionItems from "./VideoSectionItems";

const VideoSection = async () => {
  let brands = await fetchData(brandsApi);

  return (
    <div className="relative">
      <div className="youtube_vdoSection absolute "></div>
      <div className="pt-[0%]">
        <ComboBrands brands={brands} />
      </div>
      <VideoSectionItems />
    </div>
  );
};

export default VideoSection;
