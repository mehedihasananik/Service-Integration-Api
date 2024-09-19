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
import DigitalBusinessConsiderations2 from "../DigitalBusinessConsiderations/DigitalBusinessConsiderations2";
import HomePageFaqs from "../Utilites/HomePageFaqs/HomePageFaqs";

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
  // console.log(userContact);

  return (
    <div className="overflow-hidden">
      <Banner />
      <Brands />
      <Services />
      <AboutUs />
      <Portfolio />
      <DigitalBusinessConsiderations2 />
      <WhyChooseUs />
      <Testimonial />
      <HomePageFaqs title="Questions Looks Here" />
      <ProjectDetails userContact={userContact} />
    </div>
  );
};

export default HomePage;
