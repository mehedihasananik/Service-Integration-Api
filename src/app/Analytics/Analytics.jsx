"use client";

import Script from "next/script";

export default function Analytics() {
  return (
    <>
      {/* Smartlook Script */}

      {/* Google Analytics Script */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-KGFJFJTXFL"
        strategy="beforeInteractive"
      />
      <Script id="google-analytics" strategy="beforeInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-KGFJFJTXFL');
        `}
      </Script>
    </>
  );
}
