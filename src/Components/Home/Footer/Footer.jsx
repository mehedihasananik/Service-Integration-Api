import React from "react";
import FooterItems from "./FooterItems";

async function getFooterData() {
  const res = await fetch("http://192.168.10.16:8000/api/footer", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch footer data");
  }

  return res.json();
}

async function getContactData() {
  const res = await fetch("http://192.168.10.16:8000/api/contact", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch contact data");
  }

  return res.json();
}

const Footer = async () => {
  const [footerData, contactData] = await Promise.all([
    getFooterData(),
    getContactData(),
  ]);

  // Log the ContactArray from the contact API
  // console.log("ContactArray:", contactData.ContactArray);

  return (
    <FooterItems footer={footerData} userContact={contactData.ContactArray} />
  );
};

export default Footer;
