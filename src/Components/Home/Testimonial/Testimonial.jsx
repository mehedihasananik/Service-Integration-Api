// path/to/your/Testimonial.js
import TestimonialHomeItems from "@/Components/Utilites/TestimonialHomeItems/TestimonialHomeItems";
import { testimonials_itemsApi } from "@/config/apis";
import React from "react";
import { fetchData } from "@/config/fetchData"; // Importing fetchData

async function getTestimonialContent() {
  return await fetchData(`${testimonials_itemsApi}`); // Using fetchData with template literal
}

const Testimonial = async () => {
  const testimonials = await getTestimonialContent();

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
