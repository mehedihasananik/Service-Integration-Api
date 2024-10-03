import ClientReviewsContent1 from "@/Components/ClientReviewsContent/ClientReviewsContent1";
import Container from "@/Components/Container/Container";
import { testimonials_itemsApi } from "@/config/apis";

export const metadata = {
  title: "Client Reviews",
  description: "This is client review page",
};
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

  return (
    <div>
      <Container>
        <ClientReviewsContent1 testimonials={testimonial.items} />
      </Container>
    </div>
  );
};

export default ClientReviews;
