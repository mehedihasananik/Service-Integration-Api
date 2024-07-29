import React from "react";
import {
  Banner,
  Brands,
  Services,
  AboutUs,
  Portfolio,
  Questions,
  ProjectDetails,
  WhyChooseUs,
  Testimonial,
} from "../index";
import Tawk from "../Tawk/Tawk";
import { user_contactApi } from "@/config/apis";

async function getUserContactContent() {
  const res = await fetch(`${user_contactApi}`, {
    next: { revalidate: 10 },
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
      <Tawk />
      <Banner />
      <Brands />
      <Services />
      <AboutUs />
      <Portfolio />
      <WhyChooseUs />
      <Testimonial />
      {/* <Questions title="Questions Looks Here" /> */}
      <ProjectDetails userContact={userContact} />
    </div>
  );
};

export default HomePage;
