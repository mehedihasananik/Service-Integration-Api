"use client";

export default function FacebookPixelNoScript() {
  return (
    <noscript>
      <img
        height="1"
        width="1"
        style={{ display: "none" }}
        src="https://www.facebook.com/tr?id=1808264573036264&ev=PageView&noscript=1"
        alt="Facebook Pixel"
      />
    </noscript>
  );
}
