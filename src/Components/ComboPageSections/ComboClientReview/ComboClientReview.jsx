import Container from "@/Components/Container/Container";
import React from "react";
import ComboClientSlider from "./ComboClientSlider";
import { fetchData } from "@/config/fetchData";
import { comboTestimonial } from "@/config/apis";

const ComboClientReview = async () => {
  const testimonials = await fetchData(comboTestimonial);

  return (
    <Container>
      <div className="">
        <div className="text-center">
          <h2 className="text-[#0A2C8C] font-Inter text-[20px] md:text-[36px] lg:text-[48px] font-extrabold text-center pt-[2%] md:pt-[5%] pb-2 md:pb-0 ">
            What our clients have to say
          </h2>
          <div className="flex justify-center">
            <p className="combo_des md:w-[37%]">
              <span className=" ">
                {" "}
                Their success stories fuel our passion and drive us to deliver
                even better solutions every day.
              </span>
            </p>
          </div>
        </div>
        <div className="mx-4">
          <ComboClientSlider
            testimonials={testimonials.items}
            details={testimonials.testimonials}
          />
        </div>
      </div>
    </Container>
  );
};

export default ComboClientReview;
