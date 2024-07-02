"use client";

import { useEffect, useRef, useState } from "react";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";

const Tawk = () => {
  const tawkMessengerRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      // console.log("Tawk.to messenger loaded successfully!");
      setLoaded(true);
      if (window.Tawk_API && window.$i18n) {
        // Check if $i18n is defined
        window.Tawk_API.minimize();
      }
    };

    // Check if the Tawk.to script has already been loaded
    if (window.Tawk_API && window.Tawk_API.onLoad) {
      handleLoad();
    } else {
      // Listen for the Tawk.to script load event
      window.Tawk_API = window.Tawk_API || {};
      window.Tawk_API.onLoad = handleLoad;
    }

    // Cleanup
    return () => {
      window.Tawk_API.onLoad = undefined;
    };
  }, []);

  return (
    <div className="bg-red-500">
      <TawkMessengerReact
        propertyId="666acd2c9a809f19fb3d3235"
        widgetId="1i08j2u6t"
        ref={tawkMessengerRef}
      />
    </div>
  );
};

export default Tawk;
