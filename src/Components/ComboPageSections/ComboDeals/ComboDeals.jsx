"use client";
import Container from "@/Components/Container/Container";
import React from "react";
import { TiArrowRight } from "react-icons/ti";
import { BookAppointmentButton } from "../ComboGroupBtn/ComboGroupBtn";

const ComboDeals = () => {
  const handleSmoothScroll = (e) => {
    e.preventDefault();
    const target = document.querySelector(e.target.getAttribute("href"));

    if (target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="mb-[3%]">
      <Container>
        <div className="px-2 xl:px-[9%]">
          {/* Header Section */}
          <section className="text-center pt-10 ">
            <h1 className=" font-bold text-[#0A2C8C] combo_title">
              Unbeatable Growth Combo Deals
            </h1>
            <p className="text-[#6D758F] font-medium mt-4 lg:w-[80%] mx-auto combo_des">
              Unlock professional web development and marketing with our
              limited-time deals. Boost visibility, drive growth, and ensure
              long-term success with our ultimate web development combos!
            </p>
          </section>

          {/* Main Content Section */}
          <section className=" mx-auto py-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Content */}
            <div className="flex justify-center">
              <img
                src="/assets/deal1.png"
                alt="Combo Image"
                className="rounded-xl border"
              />
            </div>
            {/* Left Content */}
            <div className="flex flex-col justify-center items-start space-y-6">
              <h2 className="text-2xl md:text-[38px] leading-10 font-bold text-[#5168A7] font-Inter">
                Effortless Solutions Tailored to Your Needs
              </h2>
              <div className="text-[#6D758F] space-y-1.5 combo_des text-[18px]">
                <p>
                  Need a custom website? We deliver hassle-free designs that
                  align with your business goals. Our content connects with your
                  audience, while data-driven solutions help retain and grow
                  your customer base.
                </p>
                <p>
                  Boost your visibility with expert SEO strategies that drive
                  traffic and improve rankings. Our branding services create
                  memorable logos and cohesive identities that make your
                  business stand out.
                </p>
                <p>
                  Enjoy 3 months of free support and affordable maintenance
                  options. Plus, stay active on social media with ready-to-use
                  marketing materials for continuous engagement.
                </p>
              </div>
              <a
                onClick={handleSmoothScroll}
                href="#contact_us"
                className="bg-[#FF693B] border border-[#FF693B] text-white py-2 px-6 rounded-md hover:bg-white hover:text-[#ff693B] flex items-center"
              >
                Get started <TiArrowRight className="text-[20px]" />
              </a>
            </div>
          </section>

          {/* Why Choose Section */}
          <section className=" mx-auto md:pb-[0%] grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Content */}
            <div className="flex flex-col justify-center items-start space-y-6">
              <h2 className="text-2xl md:text-[38px] leading-10 font-bold text-[#5168A7] font-Inter">
                Why Choose Our Combos?
              </h2>
              <div className="text-[#6D758F] space-y-1.5 combo_des text-[18px]">
                <p>
                  Stay stress-free as we handle everything for you and save up
                  to 50% with our all-in-one packages that offer web design,
                  branding, SEO, content, and social media.
                </p>
                <p>
                  Fully customized to your business goals, our seamless delivery
                  covers everything from design to ongoing support, saving you
                  time and effort.
                </p>
                <p>
                  Trusted by businesses worldwide, we deliver proven results
                  with transparent pricing and no hidden costs. Our in-house
                  experts ensure top-notch quality so you can focus entirely on
                  growing your business.
                </p>
              </div>
              <a
                onClick={handleSmoothScroll}
                href="#contact_us"
                className="bg-[#FF693B] border border-[#FF693B] text-white py-2 px-6 rounded-md hover:bg-white hover:text-[#ff693B] flex items-center"
              >
                Get started <TiArrowRight className="text-[20px]" />
              </a>
            </div>

            {/* Rigt Image */}
            <div className="flex justify-center">
              <img
                src="/assets/deal2.png"
                alt="Why Choose Us"
                className="rounded-xl shadow-lg"
              />
            </div>
          </section>
        </div>
        <div className="flex justify-center font-bold pt-[10%] md:pt-[5%] px-[10px]">
          <BookAppointmentButton />
        </div>
      </Container>
    </div>
  );
};

export default ComboDeals;
