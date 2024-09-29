import ContactUsPageContent from "@/Components/ContactUsPageContent/ContactUsPageContent";
import JsonLd from "@/Components/Utilites/JsonLd/JsonLd";
import UserLoading from "@/Components/Utilites/UserLoading/UserLoading";
import { user_contactApi } from "@/config/apis";
import { generateCommonMetadata } from "@/config/generateMetadata";
import React, { Suspense } from "react";

// This function fetches user contact content
async function getUserContactContent() {
  const res = await fetch(`${user_contactApi}`, {
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export async function generateMetadata(parent) {
  const userContactData = await getUserContactContent();
  return generateCommonMetadata(userContactData, parent); // Generate metadata
}

const ContactUs = async () => {
  try {
    const userContact = await getUserContactContent();

    return (
      <>
        <JsonLd data={userContact?.meta?.json_ld} />
        <Suspense fallback={<UserLoading />}>
          <div className="mt-0">
            <ContactUsPageContent userContact={userContact.ContactArray} />
          </div>
        </Suspense>
      </>
    );
  } catch (error) {
    console.error("Error rendering contact us page:", error);
    return (
      <div>Error loading contact information. Please try again later.</div>
    );
  }
};

export default ContactUs;
