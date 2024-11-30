import Container from "@/Components/Container/Container";
import * as React from "react";
import { TiArrowRight } from "react-icons/ti";

export function BusinessTransform() {
  return (
    <Container>
      <div className="py-[5%]">
        <div className="businessTransformBg">
          <div className="w-[100%] flex ">
            <div className="md:w-[50%]"></div>
            <div className="md:w-[50%] text-white pt-[5%]">
              <div>
                <h2 className="text-[25px] md:text-[36px] font-bold md:w-[75%]">
                  Transform Your Business with Zero Hassle
                </h2>
                <div className="space-y-5 md:w-[75%] pt-[3%]">
                  <p className="combo_des text-white">
                    Don&apos;t just build a website—build a brand. Our 10-page
                    custom WordPress site comes with expert SEO, captivating
                    content, and standout branding, ensuring your business
                    leaves a lasting impression.
                  </p>
                  <p className="combo_des text-white">
                    Don&apos;t just build a website—build a brand. Our 10-page
                    custom WordPress site comes with expert SEO, captivating
                    content, and standout branding, ensuring your business
                    leaves a lasting impression.
                  </p>
                  <p className="combo_des text-white">
                    Don&apos;t just build a website—build a brand. Our 10-page
                    custom WordPress site comes with expert SEO, captivating
                    content, and standout branding, ensuring your business
                    leaves a lasting impression.
                  </p>
                </div>
                <button className="bg-[#FFFFFF] text-[#0A2C8C] text-[16px] mt-5 md:mt-7 px-4 py-2 flex items-center rounded-md">
                  <span> Let&apos;s build something amazing</span>
                  <span>
                    <TiArrowRight className="text-lg " />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
