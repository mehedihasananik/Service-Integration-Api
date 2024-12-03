import Container from "@/Components/Container/Container";
import React from "react";
import ComboBrands from "../ComboBrands/ComboBrands";
import { fetchData } from "@/config/fetchData";
import { brandsApi } from "@/config/apis";

const VideoSection = async () => {
  let brands = await fetchData(brandsApi);
  return (
    <div className="relative">
      <div className="youtube_vdoSection absolute "></div>
      <div className="  pt-[0%]">
        <ComboBrands brands={brands} />
      </div>
      <Container>
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-[20px] md:text-[35px] lg:text-[48px] font-bold text-[#0A2C8C] mt-[5%]">
            Excellence at Every Step
          </h3>
          <p className="combo_des">
            Our experienced team of developers, designers, and marketers works
            together to deliver outstanding results.
          </p>
        </div>
        <div className="w-full flex justify-center my-8">
          <iframe
            width="1115"
            height="630"
            src="https://www.youtube.com/embed/N73NyNDq-ZY?si=W2VUBjMkee8TGkv6"
            title="YouTube video player"
            className="rounded-lg shadow-lg"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>{" "}
      </Container>
    </div>
  );
};

export default VideoSection;
