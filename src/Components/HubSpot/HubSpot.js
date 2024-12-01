import Script from "next/script";

export default function HubSpotScript() {
  return (
    <Script
      id="hs-script-loader"
      strategy="beforeInteractive"
      src="//js.hs-scripts.com/47106540.js"
    />
  );
}
