import Container from "@/Components/Container/Container";
import React from "react";
import { TiArrowRight } from "react-icons/ti";
import ShowcaseProjects from "../ShowcaseProjects/ShowcaseProjects";

const ComboDeals = () => {
  return (
    <div className="">
      <Container>
        <div className=" px-[10%]">
          {/* Header Section */}
          <section className="text-center pt-10 ">
            <h1 className=" font-bold text-blue-900 combo_title">
              Unbeatable Growth Combo Deals
            </h1>
            <p className="text-gray-700 mt-4 lg:w-[72%] mx-auto">
              Unlock professional web development and marketing with our
              limited-time deals. Boost visibility, drive growth, and ensure
              long-term success with our ultimate web development combos!
            </p>
          </section>

          {/* Main Content Section */}
          <section className=" mx-auto py-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Content */}
            <div>
              <img
                src="/assets/deal1.png"
                alt="Combo Image"
                className="rounded-xl border"
              />
            </div>
            {/* Left Content */}
            <div className="flex flex-col justify-center items-start space-y-6">
              <h2 className="text-2xl md:text-[38px] leading-10 font-semibold text-[#5168A7]">
                Effortless Solutions Tailored to Your Needs
              </h2>
              <div className="text-[#6D758F] space-y-2.5 text-[18px]">
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
              <button className="bg-[#FF693B] text-white py-2 px-6 rounded-md hover:bg-orange-600 flex items-center">
                Get started <TiArrowRight className="text-[20px]" />
              </button>
            </div>
          </section>

          {/* Why Choose Section */}
          <section className=" mx-auto md:pb-[0%] grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Content */}
            <div className="flex flex-col justify-center items-start space-y-6">
              <h2 className="text-2xl md:text-[38px] leading-10 font-semibold text-[#5168A7]">
                Why Choose Our Combos?
              </h2>
              <div className="text-[#6D758F] space-y-2.5 text-[18px]">
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
              <button className="bg-[#FF693B] text-white py-2 px-6 rounded-md hover:bg-orange-600 flex items-center">
                Get started <TiArrowRight className="text-[20px]" />
              </button>
            </div>

            {/* Rigt Image */}
            <div>
              <img
                src="/assets/deal2.png"
                alt="Why Choose Us"
                className="rounded-xl shadow-lg"
              />
            </div>
          </section>
        </div>
      </Container>
    </div>
  );
};

export default ComboDeals;
