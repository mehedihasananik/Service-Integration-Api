import Container from "@/Components/Container/Container";
import React from "react";

const Client_Reviews = () => {
  async function getTestimonialContent() {
    const res = await fetch(`${testimonials_itemsApi}`, {
      next: { revalidate: 120 },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  }

  return <Container>Client_Reviews</Container>;
};

export default Client_Reviews;
