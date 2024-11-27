import AppointmentTestimonials from "@/Components/AppointmentTestimonials/AppointmentTestimonials";
import ScheduleMeetingContent from "@/Components/ScheduleMeeting/ScheduleMeetingContent";
import { testimonials_itemsApi } from "@/config/apis";
import { fetchData } from "@/config/fetchData";

export const metadata = {
  title: "Schedule A Meeting",
  description: "This is a page for meeting schedule ",
};

const ScheduleMeeting = async () => {
  const testimonials = await fetchData(testimonials_itemsApi);
  return (
    <>
      <ScheduleMeetingContent containerClass="max-w-[1520px] mx-auto px-[0%] md:px-[4%] lg:px-[8%] 4xl:px-[4%] md:mt-0" />
      <AppointmentTestimonials
        testimonials={testimonials?.items}
        details={testimonials?.testimonials}
      />
    </>
  );
};

export default ScheduleMeeting;
