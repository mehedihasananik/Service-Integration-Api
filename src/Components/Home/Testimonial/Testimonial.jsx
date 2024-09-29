// path/to/your/Testimonial.js
import TestimonialHomeItems from "@/Components/Utilites/TestimonialHomeItems/TestimonialHomeItems";
import { testimonials_itemsApi } from "@/config/apis";
import React from "react";
import { fetchData } from "@/config/fetchData"; // Importing fetchData

const Testimonial = async () => {
  const testimonials = await fetchData(testimonials_itemsApi);

  return (
    <div className="mx-4 lg:mx-4 xl:mx-0 md:pt-1.5">
      <TestimonialHomeItems
        testimonials={testimonials.items}
        details={testimonials.testimonials}
      />
    </div>
  );
};

export default Testimonial;
