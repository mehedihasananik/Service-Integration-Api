import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css"; // Import Quill styles

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const Service_PageHtml = ({ serviceDetails }) => {
  useEffect(() => {
    // This ensures that the Quill editor is only rendered on the client-side
    if (typeof window !== "undefined") {
      import("react-quill");
    }
  }, []);

  return (
    <div className="service-page-content">
      <ReactQuill
        value={serviceDetails}
        readOnly={true}
        theme="snow"
        modules={{ toolbar: false }}
      />
    </div>
  );
};

export default Service_PageHtml;
