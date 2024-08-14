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
    <div className="md:pt-1.5">
      <TestimonialHomeItems testimonials={testimonials.items} />
    </div>
  );
};

export default Testimonial;
