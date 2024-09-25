import ContactUsPageContent from "@/Components/ContactUsPageContent/ContactUsPageContent";
import { user_contactApi } from "@/config/apis";
import React from "react";

export const metadata = {
  title: "Contact Us | Envobyte",
  description:
    "Reach out to Envobyte today! Contact us for inquiries, support, or to discuss our customized tech solutions designed to advance your business.",
};

async function getUserContactContent() {
  const res = await fetch(`${user_contactApi}`, {
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const ContactUs = async () => {
  const userContact = await getUserContactContent();
  // console.log(userContact);
  return (
    <div className="mt-0">
      <ContactUsPageContent userContact={userContact} />
    </div>
  );
};

export default ContactUs;
