import Container from "@/Components/Container/Container";
import React from "react";
import ComboClientSlider from "./ComboClientSlider";
import { fetchData } from "@/config/fetchData";
import { testimonials_itemsApi } from "@/config/apis";

const ComboClientReview = async () => {
  const testimonials = await fetchData(testimonials_itemsApi);
  return (
    <Container>
      <div className="">
        <div className="text-center">
          <h2 className="combo_title pb-2 md:pb-0 ">
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
