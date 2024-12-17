"use client";
import { TiArrowRight } from "react-icons/ti";
import {
  BookAppointmentButton,
  SeePricingButton,
} from "../ComboGroupBtn/ComboGroupBtn";
import { Link } from "react-scroll";

export function BusinessTransform() {
  return (
    <div className="max-w-[1505px] mx-auto px-[6%] md:px-[0%] xl:px-[4%] 4xl:px-[4%] ">
      <div className="pb-[1%]">
        <div>
          <div className="hidden lg:block px-2 xl:px-0">
            <div className="businessTransformBg">
              <div className="w-[100%] flex justify-evenly ">
                <div className="md:w-[50%]"></div>
                <div className="md:w-[50%] text-white pt-[5%] flex justify-end">
                  <div>
                    <h2 className="text-[25px] md:text-[36px] xl:w-[80%] font-Inter font-extrabold leading-tight">
                      Transform Your Business with Zero Hassle
                    </h2>
                    <div className="space-y-4 md:w-[80%] pt-[3%] combo_des text-[16px] font-normal">
                      <p className="combo_des text-white">
                        Don&apos;t just build a website—build a brand. Our
                        10-page custom WordPress site comes with expert SEO,
                        captivating content, and standout branding, ensuring
                        your business leaves a lasting impression.
                      </p>
                      <p className="combo_des text-white">
                        We&apos;re all about creating solutions that help you
                        succeed. Our process is smooth, straightforward, and
                        stress-free from start to finish. Let&apos;s build
                        something great together!
                      </p>
                      <p className="combo_des text-white">
                        With marketing materials and real-time support, we
                        handle everything, so you focus on growth. Invest in a
                        service that drives real results—your success is our
                        priority.
                      </p>
                      {/* &apos;t */}
                    </div>
                    <Link
                      to="pricing"
                      smooth={true}
                      duration={1000}
                      className="bg-[#FFFFFF] w-[40%] cursor-pointer  font-Inter font-normal text-[#0A2C8C] hover:bg-[#0A2C8C] hover:text-white text-[16px] mt-5 md:mt-7 px-4 py-2 flex justify-center items-center rounded-md transition-all"
                    >
                      <span> Let&apos;s build something amazing</span>
                      <span>
                        <TiArrowRight className="text-lg " />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" lg:hidden ">
            <div className="bg-[#001C5F] rounded-lg md:rounded-none">
              <div className="flex justify-center ">
                <img
                  className="w-[340px] h-[360px] rounded-t"
                  src="/assets/girl3.svg"
                  alt=""
                />
              </div>
              <div className="p-5 py-8 flex flex-col items-center">
                <h2 className="text-white font-bold text-[22px] pb-3">
                  Transform Your Business with Zero Hassle
                </h2>
                <div className="text-[14px] text-white space-y-2">
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
        <div className="flex flex-col md:flex-row justify-center text-[16px] font-bold gap-x-5 gap-y-3 md:gap-y-0 mt-5 md:mt-12">
          <SeePricingButton />
          <BookAppointmentButton />
        </div>
      </div>
    </div>
  );
}
