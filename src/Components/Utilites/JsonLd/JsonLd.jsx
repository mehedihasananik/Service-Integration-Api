import Script from "next/script";

const JsonLd = ({ data }) => (
  <Script
    id="json-ld"
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    strategy="beforeInteractive"
  />
);

export default JsonLd;
