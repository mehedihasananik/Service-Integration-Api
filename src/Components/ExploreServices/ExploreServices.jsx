import { testimonials_itemsApi } from "@/config/apis";
import AppointmentTestimonials from "../AppointmentTestimonials/AppointmentTestimonials";
import { fetchData } from "@/config/fetchData";

export const metadata = {
  title: "Schedule A Meeting",
  description: "This is a page for meeting schedule ",
};

const ExploreServices = async () => {
  const testimonials = await fetchData(testimonials_itemsApi);
  return (
    <>
      <AppointmentTestimonials
        testimonials={testimonials?.items}
        details={testimonials?.testimonials}
      />
    </>
  );
};

export default ExploreServices;
