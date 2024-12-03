import Container from "@/Components/Container/Container";
import React from "react";
import ComboBrands from "../ComboBrands/ComboBrands";
import { fetchData } from "@/config/fetchData";
import { brandsApi } from "@/config/apis";
import {
  BookAppointmentButton,
  SeePricingButton,
} from "../ComboGroupBtn/ComboGroupBtn";

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
          <div>
            <p className="combo_des text-center pt-3 lg:w-[80%]">
              Our experienced team of developers, designers, and marketers works
              together to deliver outstanding results.
            </p>
          </div>
        </div>
        <div className="w-full hidden md:flex justify-center my-8">
          <iframe
            width="1120"
            height="630"
            src="https://www.youtube.com/embed/N73NyNDq-ZY?si=W2VUBjMkee8TGkv6"
            title="YouTube video player"
            className="rounded-lg shadow-lg"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
        <div className="w-full flex md:hidden justify-center my-8">
          <iframe
            width="1120"
            height="200"
            src="https://www.youtube.com/embed/N73NyNDq-ZY?si=W2VUBjMkee8TGkv6"
            title="YouTube video player"
            className="rounded-lg shadow-lg"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
        <div className="flex justify-center text-[16px] font-bold gap-x-5">
          <SeePricingButton />
          <BookAppointmentButton />
        </div>
      </Container>
    </div>
  );
};

export default VideoSection;
