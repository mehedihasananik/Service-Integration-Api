"use client";

import OrderSlider from "@/Components/Utilites/OrderSlider/OrderSlider";
import RelevantServices from "@/Components/Utilites/RelevantServices/RelevantServices";
import Questions from "@/Components/Home/Questions/Questions";
import Container from "@/Components/Container/Container";
import ServicePortolio from "@/Components/Utilites/ServicePortfolio/ServicePortolio";
import { useState } from "react";
import ServiceModal from "@/Components/Utilites/ServiceModal/ServiceModal";
import SinglePackage from "./SinglePackage";
import Link from "next/link";

const ServiceDetails = ({ service, sliders, packages }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Container>
        <div className="pt-3 pb-8">
          {/* title */}
          <div className="text-center font-Raleway pb-10">
            <h1 className="text-[#10F172A] text-[32px] md:text-[48px] font-bold capitalize">
              {service.sevice_items_name}
            </h1>
            <h3 className="text-[18px] font-medium">
              Discover <span className="text-[#FF693B]">The Perfect Plan</span>
            </h3>
          </div>
          {/* packages */}
          <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-3 gap-x-5 lg:gap-y-0 4xl:px-[10%]">
            {/* 1st package */}

            {packages.map((item) => {
              return (
                <SinglePackage
                  key={item.id}
                  item={item}
                  openModal={openModal}
                  setOpenModal={setOpenModal}
                />
              );
            })}
          </div>
          {/* custom projects */}
          <div className="flex flex-col lg:flex-row justify-center items-center py-14 gap-5 text-center">
            <h2 className="text-[20px] text-[#646464]">
              <span className="text-[#FF693B]">
                Have a complex or custom project?{" "}
              </span>{" "}
              Send details and get offer
            </h2>
            <button className="border border-[#FF693B] text-[#FF693B] text-[16px] font-medium px-10 py-2 rounded-[4px] hover:text-white hover:bg-[#FF693B] transition-all duration-300">
              Get Custom Offer
            </button>
          </div>
          {/* order Slider */}
          <OrderSlider sliders={sliders} />
          {/* description */}
          <div className="bg-[#FCFCFC] mt-4 p-4 md:p-7 rounded-lg text-justify">
            <h2 className="text-[24px] font-bold font-Raleway text-[#333333]">
              Description
            </h2>
            <p className="text-[16px] text-[#666] pt-2">
              Lorem ipsum dolor sit amet consectetur. Eget egestas lectus sit
              velit vitae diam mollis tellus adipiscing. Arcu netus orci eu
              blandit quis arcu ut massa diam. Adipiscing consequat enim lacus
              in. Diam consequat proin cras cursus. Ultrices purus nunc integer
              amet ultrices. Tortor ut tempus feugiat ut. Semper purus sagittis
              sit tortor. Lorem ipsum dolor sit amet consectetur. Eget egestas
              lectus sit velit vitae diam mollis tellus adipiscing. Arcu netus
              orci eu blandit quis arcu ut massa diam. Adipiscing consequat enim
              lacus in. Diam consequat proin cras cursus. Ultrices purus nunc
              integer amet ultrices. Tortor ut tempus feugiat ut. Semper purus
              sagittis sit tortor. Lorem ipsum dolor sit amet consectetur. Eget
              egestas lectus sit velit vitae diam mollis tellus adipiscing. Arcu
              netus orci eu blandit quis arcu ut massa diam. Adipiscing
              consequat enim lacus in. Diam consequat proin cras cursus.
              Ultrices purus nunc integer amet ultrices. Tortor ut tempus
              feugiat ut. Semper purus sagittis sit tortor.
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
        <div className="pl-[3%]">
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
      <Container>
        {/* relevant services */}
        <RelevantServices />
      </Container>

      <div>
        <Questions
          title="Frequently Asked Questions"
          className="bg-[#F8FAFC]"
        />
      </div>
      <ServiceModal openModal={openModal} setOpenModal={setOpenModal} />
    </>
  );
};

export default ServiceDetails;
