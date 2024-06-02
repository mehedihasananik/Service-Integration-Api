"use client";
import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { FaTimes } from "react-icons/fa"; // Import the cross icon
import { GoPaperclip } from "react-icons/go";

const FilePondComponent = () => {
  const [images, setImages] = useState([]);

  const onDrop = (acceptedFiles) => {
    const newImages = acceptedFiles.map((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
      })
    );
    setImages((prevImages) => [...prevImages, ...newImages]);
  };

  const removeImage = (indexToRemove) => {
    setImages((prevImages) =>
      prevImages.filter((_, index) => index !== indexToRemove)
    );
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
  });

  return (
    <div>
      <div {...getRootProps()} className="rounded-sm cursor-pointer">
        <input {...getInputProps()} />
        <span>
          <GoPaperclip />
        </span>
      </div>
      <div className="flex relative top-[-150px]">
        {images.map((file, index) => (
          <div key={index} className="relative mr-[10px]">
            <img
              src={file.preview}
              alt={`Preview ${index}`}
              className="w-[100px] h-[100px]"
            />
            <FaTimes
              className="absolute top-[5px] right-[5px] cursor-pointer"
              onClick={() => removeImage(index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilePondComponent;
