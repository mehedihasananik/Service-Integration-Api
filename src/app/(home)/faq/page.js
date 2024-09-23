import { Questions } from "@/Components";
import Container from "@/Components/Container/Container";
import JsonLd from "@/Components/Utilites/JsonLd/JsonLd";
import { fetchData } from "@/config/fetchData";
import { generateCommonMetadata } from "@/config/generateMetadata";
import React from "react";

async function getPageData() {
  try {
    return await fetchData("/faq");
  } catch (error) {
    console.error("Error fetching FAQ data:", error);
    throw error;
  }
}

export async function generateMetadata(parent) {
  const faqData = await getPageData();
  return generateCommonMetadata(faqData, parent);
}

const FaqPage = async () => {
  try {
    const faqData = await getPageData();

    return (
      <>
        <JsonLd data={faqData?.meta?.json_ld} />
        <Container>
          <Questions title="Here are FAQS:" faqData={faqData} />
        </Container>
      </>
    );
  } catch (error) {
    console.error("Error rendering FAQ page:", error);
    return <div>Error loading FAQ page. Please try again later.</div>;
  }
};

export default FaqPage;
