"use client";
import RelevantServices from "@/Components/Utilites/RelevantServices/RelevantServices";
import Container from "@/Components/Container/Container";
import ServicePortolio from "@/Components/Utilites/ServicePortfolio/ServicePortolio";
import { useEffect, useState } from "react";
import SinglePackage from "./SinglePackage";
import OrderSliderLg from "@/Components/Utilites/OrderSlider/OrderSliderLg";
import OrderSliderSm from "@/Components/Utilites/OrderSlider/OrderSliderSm";
import QuestionService from "@/Components/Home/Questions/QuestionService";
import SinglePackageSm from "./SinglePackageSm";
import ContactModal from "@/Components/Utilites/ContactModal/ContactModal";
import Global_PageHtml from "@/Components/Utilites/Global_PageHtml/Global_PageHtml";
import ServiceFeatures from "@/Components/Utilites/ServiceFeatures/ServiceFeatures";
import GlobalButtonColored from "@/Components/Utilites/GlobalButton/GlobalButtonColored";

const ServiceDetails = ({ service, sliders, packages }) => {
  const [openModal, setOpenModal] = useState(false);

  const height = packages[2].package_details.length;

  const serviceName = service?.service_details[0]?.sevice_items_name;
  console.log(service);

  useEffect(() => {
    if (service && packages) {
      window.dataLayer = window.dataLayer || [];
      const dataLayerObject = {
        event: "view_item",
        ecommerce: {
          currency: "USD",
          items: [
            {
              item_id: service.service_details[0].sevice_items_id || "", // Your service ID
              item_name: serviceName || "",
              packages: packages.map((pkg) => ({
                package_id: pkg.id,
                package_name: pkg.package_name,
                description: pkg.package_details, // Or specific details if available
                price: Number(pkg.package_price),
                price_period: "monthly", // Or "one-time" based on pricing structure
              })),
            },
          ],
        },
        "gtm.uniqueEventId": Date.now(),
      };

      window.dataLayer.push(dataLayerObject);

      // Log the dataLayer object to the console
      console.log("Data Layer Object:", dataLayerObject);
    }
  }, [service, packages]);

  return (
    <>
      {" "}
      <Container>
        <div className="heading-space">
          {/* title */}
          <div className="text-center font-Raleway pb-[1.75rem]">
            <h1 className="text-[#10F172A] text-[32px] md:text-[48px] font-bold capitalize">
              {serviceName}
            </h1>
            <h3 className="text-[18px] font-medium">
              Discover <span className="text-[#FF693B]">The Perfect Plan</span>
            </h3>
          </div>
          {/* packages */}
          <div className="hidden grid-cols-1 gap-y-10 lg:grid  lg:grid-cols-3 gap-x-5 lg:gap-y-0 4xl:px-[10%] 6xl:px-[0%]   ">
            {packages.map((item) => {
              return (
                <SinglePackage
                  key={item?.id}
                  item={item}
                  openModal={openModal}
                  setOpenModal={setOpenModal}
                  height={height}
                  serviceName={serviceName}
                />
              );
            })}
          </div>
          <div className=" grid-cols-1 lg:hidden space-y-5  ">
            {packages.map((item) => {
              return (
                <SinglePackageSm
                  key={item?.id}
                  item={item}
                  openModal={openModal}
                  setOpenModal={setOpenModal}
                  serviceName={serviceName}
                />
              );
            })}
          </div>

          {/* custom projects */}

          <div className="flex flex-col lg:flex-row justify-center items-center py-8 gap-5 text-center mt-[20px]">
            <h2 className="text-[20px] text-[#646464]">
              <span className="text-[#FF693B]">
                Have a complex or custom project?{" "}
              </span>{" "}
              Let&apos;s discuss
            </h2>
            <GlobalButtonColored
              path={"/schedule-meeting"}
              title={"Book An Appointment"}
              className="btn btn-primary md:w-[20%] text-center "
            />
          </div>

          {/* order Slider */}

          <OrderSliderLg sliders={sliders} />
          <OrderSliderSm sliders={sliders} />
          {/* service features */}
          <ServiceFeatures features={service.features_table} />
          {/* description */}
          <div className="bg-[#FCFCFC] mt-4 p-4 md:p-7 rounded-lg text-justify">
            {/* <h2 className="text-[24px] font-bold font-Raleway text-[#333333]">
              Description
            </h2> */}

            <div className="text-[16px] text-[#666] pt-2 single_description">
              <Global_PageHtml
                serviceDetails={service?.service_details[0]?.text}
              />
            </div>
          </div>

          {/* questions */}
        </div>
      </Container>
      {/* portfolios*/}
      <div>
        <div>
          <ServicePortolio portfolios={service?.portfolio} />
        </div>
      </div>
      <div className="max-w-[1520px] mx-auto px-[6%] md:px-[4%] lg:px-[4%] xxl:px-[4%] 2xl:px-[4%] 4xl:px-[0%]">
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
      {/* <ServiceModal openModal={openModal} setOpenModal={setOpenModal} /> */}
      <ContactModal openModal={openModal} setOpenModal={setOpenModal} />
    </>
  );
};

export default ServiceDetails;
