"use client";
import React, { useState, useRef } from "react";
import ReactDOM from "react-dom";
import { FilePond, registerPlugin } from "react-filepond";
import { GoPaperclip } from "react-icons/go"; // Import the icon
import "filepond/dist/filepond.min.css";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

registerPlugin(FilePondPluginImagePreview);

const FilePondComponent = () => {
  const [files, setFiles] = useState([]);
  const filePondRef = useRef(null);

  const handleButtonClick = () => {
    const inputElement = document.querySelector(".filepond--browser");
    if (inputElement) {
      inputElement.click();
    }
  };

  return (
    <div className="App">
      <button onClick={handleButtonClick}>
        <GoPaperclip />
      </button>
      <FilePond
        ref={filePondRef}
        files={files}
        allowReorder={true}
        allowMultiple={true}
        onupdatefiles={setFiles}
        labelIdle={``}
        allowImagePreview={true}
        imagePreviewMaxHeight={256}
        imagePreviewMaxWidth={256}
        imagePreviewHeight={150}
        allowFileTypeValidation={true}
        acceptedFileTypes={["image/*"]}
        allowFileSizeValidation={true}
        maxFileSize={60}
      />
    </div>
  );
};

export default FilePondComponent;
