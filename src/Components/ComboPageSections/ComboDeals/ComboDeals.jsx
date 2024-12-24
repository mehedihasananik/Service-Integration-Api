"use client";
import Container from "@/Components/Container/Container";
import React from "react";
import { TiArrowRight } from "react-icons/ti";
import { BookAppointmentButton } from "../ComboGroupBtn/ComboGroupBtn";
import { Link } from "react-scroll";
import { motion } from "framer-motion"; // Import Framer Motion
import { useInView } from "react-intersection-observer"; // Import useInView hook

const ComboDeals = () => {
  // Setting up the intersection observer for the section
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once when section comes into view
    threshold: 0.1, // Trigger when at least 10% of the element is visible
  });

  return (
    <div className="mb-[3%]">
      <Container>
        <div className="px-2 xl:px-[9%]" ref={ref}>
          {/* Header Section */}
          <section className="text-center mt-[3%]">
            {/* Title Animation (Slide from Left to Right) */}
            <motion.h1
              initial={{ opacity: 0, x: -100 }} // Initial state (invisible, shifted to the left)
              animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }} // Final state when in view
              transition={{ duration: 0.8 }} // Reduced duration for faster animation
              className="font-bold text-[#0A2C8C] combo_title"
            >
              Unbeatable Growth Combo Deals
            </motion.h1>

            {/* Description Animation (Slide from Left to Right) */}
            <motion.p
              initial={{ opacity: 0, x: -100 }} // Initial state (invisible, shifted to the left)
              animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }} // Final state when in view
              transition={{ duration: 0.8, delay: 0.2 }} // Reduced delay for faster appearance
              className="text-[#6D758F] font-medium mt-4 lg:w-[80%] mx-auto combo_des"
            >
              Unlock professional web development and marketing with our
              limited-time deals. Boost visibility, drive growth, and ensure
              long-term success with our ultimate web development combos!
            </motion.p>
          </section>

          {/* Main Content Section */}
          <section className=" mx-auto py-6 md:py-16 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Left Content */}
            <div className="flex justify-center">
              <motion.img
                src="/assets/deal1.png"
                alt="Combo Image"
                className="rounded-xl border"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }}
                transition={{ duration: 1, delay: 0.5 }}
                loading="lazy" // Lazy loading for image
              />
            </div>

            {/* Right Content */}
            <div className="flex flex-col justify-center items-start space-y-4 md:space-y-6">
              <motion.h2
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-[18px] leading-tight md:text-[38px] md:leading-10 font-bold text-[#5168A7] font-Inter"
              >
                Effortless Solutions Tailored to Your Needs
              </motion.h2>

              <div className="text-[#6D758F] space-y-1.5 combo_des text-[16px]">
                <motion.p
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }}
                  transition={{ duration: 1, delay: 0.6 }}
                >
                  Need a custom website? We deliver hassle-free designs that
                  align with your business goals. Our content connects with your
                  audience, while data-driven solutions help retain and grow
                  your customer base.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }}
                  transition={{ duration: 1, delay: 0.7 }}
                >
                  Boost your visibility with expert SEO strategies that drive
                  traffic and improve rankings. Our branding services create
                  memorable logos and cohesive identities that make your
                  business stand out.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }}
                  transition={{ duration: 1, delay: 0.8 }}
                >
                  Enjoy 3 months of free support and affordable maintenance
                  options. Plus, stay active on social media with ready-to-use
                  marketing materials for continuous engagement.
                </motion.p>
              </div>

              <Link
                to="contact_us"
                smooth={true}
                duration={1500}
                className="bg-[#FF693B]  border border-[#FF693B] cursor-pointer text-white py-2 px-6 rounded-md hover:bg-white hover:text-[#ff693B] duration-300 flex items-center"
              >
                Get started <TiArrowRight className="text-[20px]" />
              </Link>
            </div>
          </section>

          {/* Why Choose Section */}
          <section className=" mx-auto md:pb-[0%] grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Left Content */}
            <div className="flex flex-col justify-center items-start space-y-3 md:space-y-6">
              <motion.h2
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-[18px] md:text-[38px] leading-10 font-bold text-[#5168A7] font-Inter"
              >
                Why Choose Our Combos?
              </motion.h2>
              <div className="text-[#6D758F] md:space-y-1.5 combo_des text-[16px]">
                <motion.p
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }}
                  transition={{ duration: 1, delay: 0.6 }}
                >
                  Stay stress-free as we handle everything for you and save up
                  to 50% with our all-in-one packages that offer web design,
                  branding, SEO, content, and social media.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }}
                  transition={{ duration: 1, delay: 0.7 }}
                >
                  Fully customized to your business goals, our seamless delivery
                  covers everything from design to ongoing support, saving you
                  time and effort.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }}
                  transition={{ duration: 1, delay: 0.8 }}
                >
                  Trusted by businesses worldwide, we deliver proven results
                  with transparent pricing and no hidden costs. Our in-house
                  experts ensure top-notch quality so you can focus entirely on
                  growing your business.
                </motion.p>
              </div>
              <Link
                to="contact_us"
                smooth={true}
                duration={1500}
                className="bg-[#FF693B] border border-[#FF693B] text-white cursor-pointer py-2 px-6 rounded-md hover:bg-white hover:text-[#ff693B] flex items-center duration-300"
              >
                Get started <TiArrowRight className="text-[20px]" />
              </Link>
            </div>

            {/* Right Image */}
            <div className="flex justify-center">
              <motion.img
                src="/assets/deal2.png"
                alt="Why Choose Us"
                className="rounded-xl shadow-lg"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }}
                transition={{ duration: 1, delay: 0.5 }}
                loading="lazy" // Lazy loading for image
              />
            </div>
          </section>
        </div>

        {/* Button Section */}
        <div className="flex justify-center font-bold pt-[10%] md:pt-[5%] px-[10px]">
          <BookAppointmentButton />
        </div>
      </Container>
    </div>
  );
};

export default ComboDeals;
