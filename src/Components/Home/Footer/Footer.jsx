import { footer, user_contactApi } from "@/config/apis";
import FooterItems from "./FooterItems";

// Retry mechanism
async function fetchWithRetry(url, options, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(url, options);
      if (response.ok) return response;
    } catch (err) {
      console.error(`Attempt ${i + 1} failed:`, err);
      if (i === retries - 1) throw err;
    }
    await new Promise((resolve) => setTimeout(resolve, 1000 * (i + 1))); // Exponential backoff
  }
  throw new Error(`Failed to fetch after ${retries} retries`);
}

// API fetching from server side with improved error handling
async function getFooterDataContent() {
  try {
    const res = await fetchWithRetry(`${footer}`, {
      next: { revalidate: 120 },
    });
    return res.json();
  } catch (error) {
    console.error("Error fetching footer data:", error);
    throw new Error("Failed to fetch footer data");
  }
}

// Footer contacts with improved error handling
async function getUserContactContent() {
  try {
    const res = await fetchWithRetry(`${user_contactApi}`, {
      next: { revalidate: 120 },
    });
    return res.json();
  } catch (error) {
    console.error("Error fetching user contact data:", error);
    throw new Error("Failed to fetch user contact data");
  }
}

const Footer = async () => {
  try {
    const [footerData, userContact] = await Promise.all([
      getFooterDataContent(),
      getUserContactContent(),
    ]);

    return <FooterItems footer={footerData} userContact={userContact} />;
  } catch (error) {
    console.error("Error in Footer component:", error);
    return <div>Error loading footer. Please try again later.</div>;
  }
};

export default Footer;
