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

const HomePage = () => {
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
      <Questions title="Questions Looks Here" />
      <ProjectDetails />
    </div>
  );
};

export default HomePage;
