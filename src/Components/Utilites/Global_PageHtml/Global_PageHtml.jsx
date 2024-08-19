"use client";
import React, { useState, useEffect } from "react";
import "react-quill/dist/quill.snow.css";
import parse from "html-react-parser";

const Global_PageHtml = ({ serviceDetails }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [parsedContent, setParsedContent] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      import("react-quill").then(() => {
        setIsLoading(false);
      });
    }
  }, []);

  useEffect(() => {
    if (serviceDetails) {
      const parsed = parse(serviceDetails, {
        replace: (domNode) => {
          if (domNode.attribs && domNode.attribs.style) {
            const styles = domNode.attribs.style
              .split(";")
              .reduce((acc, style) => {
                const [key, value] = style.split(":").map((s) => s.trim());
                if (key && value) {
                  acc[key.replace(/-./g, (x) => x[1].toUpperCase())] = value;
                }
                return acc;
              }, {});
            domNode.attribs.style = styles;
          }
          return domNode;
        },
      });
      setParsedContent(parsed);
    }
  }, [serviceDetails]);

  return (
    <div className="ql-editor custom-content-container">
      <div dangerouslySetInnerHTML={{ __html: serviceDetails }} />
    </div>
  );
};

export default Global_PageHtml;
