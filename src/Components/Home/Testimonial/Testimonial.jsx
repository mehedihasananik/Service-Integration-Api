import TestimonialHomeItemSm from "@/Components/Utilites/TestimonialHomeItems/TestimonialHomeItemSm";
import TestimonialHomeItems from "@/Components/Utilites/TestimonialHomeItems/TestimonialHomeItems";
import TestimonialHomeItemsMd from "@/Components/Utilites/TestimonialHomeItems/TestimonialHomeItemsMd";
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
    <div>
      <TestimonialHomeItems testimonials={testimonials} />
      <TestimonialHomeItemsMd testimonials={testimonials} />
      <TestimonialHomeItemSm testimonials={testimonials} />
    </div>
  );
};

export default Testimonial;
