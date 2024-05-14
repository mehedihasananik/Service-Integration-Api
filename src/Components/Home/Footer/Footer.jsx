import { footer, user_contactApi } from "@/config/apis";
import FooterItems from "./FooterItems";

// api fetching from sever side
async function getfooterDataContent() {
  const res = await fetch(`${footer}`, {
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

// footer contacts
async function getUserContactContent() {
  const res = await fetch(`${user_contactApi}`, {
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const Footer = async () => {
  const footer = await getfooterDataContent();
  const userContact = await getUserContactContent();

  return <FooterItems footer={footer} userContact={userContact} />;
};

export default Footer;
