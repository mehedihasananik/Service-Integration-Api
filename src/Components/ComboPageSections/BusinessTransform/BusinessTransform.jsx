import Container from "@/Components/Container/Container";
import * as React from "react";
import { TiArrowRight } from "react-icons/ti";

export function BusinessTransform() {
  return (
    <Container>
      <div className="py-[5%]">
        <div className="hidden lg:block">
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
        <div className=" lg:hidden">
          <div className="bg-[#001C5F] rounded-lg">
            <div>
              <img
                className="w-full h-full rounded-t"
                src="/assets/singleGirl.png"
                alt=""
              />
            </div>
            <div className="p-5">
              <h2 className="text-white font-bold text-[22px] pb-3">
                Transform Your Business with Zero Hassle
              </h2>
              <div className="text-[14px] text-white space-y-3">
                <p>
                  We handle everything with marketing materials and support so
                  you can focus on growth
                </p>
                <p>
                  Our smooth, stress-free process creates solutions that drive
                  real results for your success.
                </p>
                <p>
                  Let’s build something great together—your success is our
                  priority from start to finish.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
