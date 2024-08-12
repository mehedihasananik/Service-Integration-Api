"use client";

import Script from "next/script";

export default function Smartlook() {
  return (
    <>
      <Script id="smartlook" strategy="beforeInteractive">
        {`
        window.smartlook||(function(d) {
          var o=smartlook=function(){ o.api.push(arguments)},h=d.getElementsByTagName('head')[0];
          var c=d.createElement('script');o.api=new Array();c.async=true;c.type='text/javascript';
          c.charset='utf-8';c.src='https://web-sdk.smartlook.com/recorder.js';h.appendChild(c);
        })(document);
        smartlook('init', '43fc2e892b14dff39ed6cf421558dbde961ca9c6', { region: 'us' });
        `}
      </Script>
    </>
  );
}
