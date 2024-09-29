import React from "react";
import FooterItems from "./FooterItems";
import { fetchMultipleData } from "@/config/fetchData";
import { footer, user_contactApi } from "@/config/apis";

const Footer = async () => {
  try {
    const [footerData, contactData] = await fetchMultipleData([
      `${footer}`,
      `${user_contactApi}`,
    ]);

    // Log the ContactArray from the contact API
    // console.log("ContactArray:", contactData.ContactArray);

    return (
      <FooterItems footer={footerData} userContact={contactData.ContactArray} />
    );
  } catch (error) {
    console.error("Error fetching footer or contact data:", error);
    return <></>; // Return an empty fragment in case of error
  }
};

export default Footer;
