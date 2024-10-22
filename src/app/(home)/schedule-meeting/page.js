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
      <ScheduleMeetingContent />
      <AppointmentTestimonials
        testimonials={testimonials?.items}
        details={testimonials?.testimonials}
      />
    </>
  );
};

export default ScheduleMeeting;
