"use client";
import { useState } from "react";
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

registerPlugin(FilePondPluginImagePreview);

const FilePondComponent = () => {
  const [files, setFiles] = useState([]);

  return (
    <div style={{ background: "#f0f0f0" }}>
      {" "}
      {/* Change background color here */}
      <FilePond
        files={files}
        onupdatefiles={setFiles}
        allowMultiple={true}
        maxFiles={8}
        server="/api" // Replace "/api" with your actual server endpoint for handling file uploads
        name="files"
        labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
      />
    </div>
  );
};

export default FilePondComponent;
