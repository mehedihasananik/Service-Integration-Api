import TestimonialHomeItems from "@/Components/Utilites/TestimonialHomeItems/TestimonialHomeItems";
import { testimonials_itemsApi } from "@/config/apis";
import React from "react";

async function getTestimonialContent() {
  const res = await fetch(`${testimonials_itemsApi}`, {
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
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
