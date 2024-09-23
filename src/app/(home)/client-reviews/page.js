import ClientReviewsContent1 from "@/Components/ClientReviewsContent/ClientReviewsContent1";
import ClientReviewsContent3 from "@/Components/ClientReviewsContent/ClientReviewsContent3";
import Container from "@/Components/Container/Container";
import { testimonials_itemsApi } from "@/config/apis";

async function getTestimonialContent() {
  const res = await fetch(testimonials_itemsApi, {
    next: { revalidate: 120 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const ClientReviews = async () => {
  const testimonial = await getTestimonialContent();
  // console.log(testimonial.items);
  return (
    <div className=" bg-gray-50">
      <Container>
        <ClientReviewsContent1 testimonials={testimonial.items} />
        <ClientReviewsContent3 testimonials={testimonial.items} />
      </Container>
    </div>
  );
};

export default ClientReviews;
