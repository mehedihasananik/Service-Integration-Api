"use client";

import RelevantServices from "@/Components/Utilites/RelevantServices/RelevantServices";
import Container from "@/Components/Container/Container";
import ServicePortolio from "@/Components/Utilites/ServicePortfolio/ServicePortolio";
import { useState } from "react";
import ServiceModal from "@/Components/Utilites/ServiceModal/ServiceModal";
import SinglePackage from "./SinglePackage";
import Link from "next/link";
import OrderSliderLg from "@/Components/Utilites/OrderSlider/OrderSliderLg";
import OrderSliderSm from "@/Components/Utilites/OrderSlider/OrderSliderSm";
import QuestionService from "@/Components/Home/Questions/QuestionService";

const ServiceDetails = ({ service, sliders, packages }) => {
  const [openModal, setOpenModal] = useState(false);

  const height = packages[2].package_details.length;

  return (
    <>
      {" "}
      <Container>
        <div className="pt-3 pb-8">
          {/* title */}
          <div className="text-center font-Raleway pb-10">
            <h1 className="text-[#10F172A] text-[32px] md:text-[48px] font-bold capitalize">
              {service?.service_details[0]?.sevice_items_name}
            </h1>
            <h3 className="text-[18px] font-medium">
              Discover <span className="text-[#FF693B]">The Perfect Plan</span>
            </h3>
          </div>
          {/* packages */}
          <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-3 gap-x-5 lg:gap-y-0 4xl:px-[10%] 6xl:px-[0%] ">
            {packages.map((item) => {
              return (
                <SinglePackage
                  key={item?.id}
                  item={item}
                  openModal={openModal}
                  setOpenModal={setOpenModal}
                  height={height}
                />
              );
            })}
          </div>
          {/* custom projects */}

          <div className="flex flex-col lg:flex-row justify-center items-center py-14 gap-5 text-center mt-[20px]">
            <h2 className="text-[20px] text-[#646464]">
              <span className="text-[#FF693B]">
                Have a complex or custom project?{" "}
              </span>{" "}
              Send details and get offer
            </h2>
            <Link href={"/#projectDetails"}>
              <button className="border border-[#FF693B] text-[#FF693B] text-[16px] font-medium px-10 py-2 rounded-[4px] hover:text-white hover:bg-[#FF693B] transition-all duration-300">
                Get Custom Offer
              </button>
            </Link>
          </div>

          {/* order Slider */}
          <OrderSliderLg sliders={sliders} />
          <OrderSliderSm sliders={sliders} />
          {/* description */}
          <div className="bg-[#FCFCFC] mt-4 p-4 md:p-7 rounded-lg text-justify">
            <h2 className="text-[24px] font-bold font-Raleway text-[#333333]">
              Description
            </h2>
            <p className="text-[16px] text-[#666] pt-2">
              {service?.service_details[0]?.text}
            </p>
          </div>

          {/* questions */}
        </div>
      </Container>
      {/* portfolios*/}
      <div>
        <div className="text-center py-3 md:py-5">
          <h2 className="text-[32px] md:text-[48px] text-[#0F172A] font-bold font-Raleway">
            Portfolio&apos;s{" "}
          </h2>
        </div>
        <div className="lg:px-[3%] xxl:px-[0%] xxl:pl-[3%]">
          <ServicePortolio />
        </div>
      </div>
      <div className="flex justify-center py-10">
        <Link
          href={"/portfolio"}
          className="text-[16px] bg-[#FF693B] px-11 py-3 text-white rounded-xl border border-[#FF693B]  hover:bg-white hover:text-[#FF693B] transition-all duration-300"
        >
          See More
        </Link>
      </div>
      <div className="max-w-[1520px] mx-auto px-[6%] md:px-[4%] lg:px-[8%] 4xl:px-[0%]">
        {/* relevant services */}
        <RelevantServices service={service} />
      </div>
      <div className="bg-[#F8FAFC]">
        <QuestionService
          service={service}
          title="Frequently Asked Questions"
          className="bg-[#F8FAFC]"
        />
      </div>
      <ServiceModal openModal={openModal} setOpenModal={setOpenModal} />
    </>
  );
};

export default ServiceDetails;
