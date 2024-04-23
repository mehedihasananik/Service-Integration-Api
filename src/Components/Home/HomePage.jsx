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

const HomePage = () => {
  return (
    <div className="overflow-hidden">
      <Banner />
      <Brands />
      <Services />
      <AboutUs />
      <Portfolio />
      <WhyChooseUs />
      <Testimonial />
      <Questions title="Questions Looks Here" />
      <ProjectDetails />
    </div>
  );
};

export default HomePage;
