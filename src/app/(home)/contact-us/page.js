import ContactUsPageContent from "@/Components/ContactUsPageContent/ContactUsPageContent";
import { user_contactApi } from "@/config/apis";
import React from "react";

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
  return (
    <div className="mt-3">
      <ContactUsPageContent userContact={userContact} />
    </div>
  );
};

export default ContactUs;
