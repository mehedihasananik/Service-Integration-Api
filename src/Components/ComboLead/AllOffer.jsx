import React from "react";
import Container from "../Container/Container";

const AllOffer = () => {
  // List of services
  const services = [
    {
      icon: "/assets/offer1.png",
      title: (
        <>
          10-Page WordPress <br /> Website
        </>
      ),
    },
    {
      icon: "/assets/offer2.png",
      title: (
        <>
          Content <br /> Writing
        </>
      ),
    },
    {
      icon: "/assets/offer3.png",
      title: (
        <>
          Professional <br /> Logo
        </>
      ),
    },
    {
      icon: "/assets/offer4.png",
      title: (
        <>
          Brand <br /> Guideline
        </>
      ),
    },
    {
      icon: "/assets/offer5.png",
      title: (
        <>
          Monthly <br /> SEO
        </>
      ),
    },
    {
      icon: "/assets/offer6.png",
      title: (
        <>
          Animated <br /> Video
        </>
      ),
    },
    {
      icon: "/assets/offer7.png",
      title: (
        <>
          Custom <br /> Graphics
        </>
      ),
    },
    {
      icon: "/assets/offer8.png",
      title: (
        <>
          Social Media <br /> Kit
        </>
      ),
    },
    {
      icon: "/assets/offer9.png",
      title: (
        <>
          3-Months Website <br /> Maintenance
        </>
      ),
    },
  ];

  return (
    <>
      <div className="all-offer-section">
        {/* Main Section For Lg*/}
        <div className="relative hidden lg:block">
          <Container>
            <div className="w-[100%] h-[750px] flex justify-center  text-white">
              <div className="w-[50%] pl-[3%] lg:pt-[17%]">
                <div>
                  <h2 className="text-[#fff] md:text-[30px] lg:text-[48px] font-semibold font-Inter pb-[4%] leading-[24px]">
                    Website Combo Offer
                  </h2>
                  <h4 className="text-[#FF693B] text-[20px] lg:text-[32px] font-medium leading-[24px] tracking-[0.64px] pb-[2%] font-Inter">
                    9-in-one
                  </h4>
                  <div className="space-y-5 pb-[4%]">
                    <p className="font-Inter text-[20px] font-[300] leading-[34px] tracking-[-0.0.04px] self-stretch text-white [leading-trim:both] [text-edge:cap] [font-feature-settings:'liga'_off,'clig'_off]  text-xl ">
                      Dominate the digital world with our power-packed website
                      combo! Ignite your brand, skyrocket visibility, and
                      captivate your audience like never before.
                    </p>
                    <p className="font-Inter text-[20px] font-[300]  leading-[34px] tracking-[-0.0.04px]">
                      Take charge today—stand out, grow faster, and make an
                      unforgettable impact online!
                    </p>
                  </div>
                </div>
                <div>
                  <button className="font-Inter text-[16px] font-semibold bg-[#FF693B] leading-[20px] border-none border cursor-pointer hover:border-[#FF693B] text-white hover:bg-[#fff] hover:text-[#FF693B] py-3 px-5 md:py-4 md:px-[3%] flex justify-center items-center rounded-md transition-all duration-300 ${className}">
                    Book an appointment
                  </button>
                </div>
              </div>
              <div className="w-[50%]"></div>
            </div>
          </Container>
          <div className="">
            <div className="absolute left-2 -bottom-[17%]  3xll:-bottom-[17%] 4xl:-bottom-[14%] text-white">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-9 gap-1 px-6 lg:px-6">
                {services.map((service, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className="w-[112px] h-[112px] rounded-full flex justify-center items-center">
                      <img
                        src={service.icon}
                        alt={service.title}
                        className="w-[100%] h-[100%]"
                      />
                    </div>
                    <p className="text-[#0A2C8C] text-center font-Inter text-[21px] font-medium leading-normal w-[100%]">
                      {service.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Section For mobile*/}
      <div className="block lg:hidden">
        <div className="all-offer-section2">
          <img src="/assets/leadHead.svg" alt="Centered Image" />
          <div className="lg:hidden px-[4%]">
            <div className="text-white flex flex-col items-center justify-center h-[465px] text-center">
              <div className="pt-[16%]">
                <h2 className="text-[#fff] text-[32px] font-semibold font-Inter leading-[24px] tracking-[-0.64px] pb-[4%]">
                  Website Combo Offer
                </h2>
                <h4 className="text-[#FF693B] text-[22px] font-medium leading-[24px] tracking-[0.64px] pb-[3%] font-Inter">
                  9-in-one
                </h4>
                <div className="space-y-2 pb-[4%]">
                  <p className="font-Inter text-[12px] font-[300] leading-[24px] tracking-[-0.028px] self-stretch text-white [leading-trim:both] [text-edge:cap] [font-feature-settings:'liga'_off,'clig'_off] text-xl">
                    Dominate the digital world with our power-packed website
                    combo! Ignite your brand, skyrocket visibility, and
                    captivate your audience like never before.
                  </p>
                  <p className="font-Inter text-[12px] font-[300] leading-[24px] tracking-[-0.028px] self-stretch text-white [leading-trim:both] [text-edge:cap] [font-feature-settings:'liga'_off,'clig'_off] text-xl">
                    Take charge today—stand out, grow faster, and make an
                    unforgettable impact online!
                  </p>
                </div>
              </div>
              <div>
                <button className="font-Inter text-[16px] font-semibold bg-[#FF693B] leading-[20px] border-none border cursor-pointer hover:border-[#FF693B] text-white hover:bg-[#fff] hover:text-[#FF693B] py-3 px-5 md:py-4 md:px-[3%] flex justify-center items-center rounded-md transition-all duration-300">
                  Book an appointment
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="all-offer-section3 bg-[#03165F] flex justify-center">
          <img src="/assets/allLogo.svg" alt="" />
        </div>
      </div>
    </>
  );
};

export default AllOffer;
