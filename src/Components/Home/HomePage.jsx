import React from "react";
import {
  Banner,
  Brands,
  Services,
  AboutUs,
  Portfolio,
  ProjectDetails,
  WhyChooseUs,
  Testimonial,
} from "../index";
import { user_contactApi } from "@/config/apis";
import HomePageFaqs from "../Utilites/HomePageFaqs/HomePageFaqs";
import DigitalBusinessConsiderations from "../DigitalBusinessConsiderations/DigitalBusinessConsiderations";

async function getUserContactContent() {
  const res = await fetch(`${user_contactApi}`, {
    next: { revalidate: 120 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const HomePage = async () => {
  const userContact = await getUserContactContent();

  return (
    <div className="overflow-hidden">
      <Banner />
      <Brands />
      <Services />
      <AboutUs />
      <Portfolio />
      <DigitalBusinessConsiderations />
      <WhyChooseUs />
      <Testimonial />
      <HomePageFaqs
        title="Questions Looks Here"
        containerClass="max-w-[1520px] mx-auto px-[0%] md:px-[4%] lg:px-[8%] 4xl:px-[4%] md:mt-0"
      />
      <ProjectDetails userContact={userContact.ContactArray} />
    </div>
  );
};

export default HomePage;
