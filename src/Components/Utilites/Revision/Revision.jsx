"use client";
import React, { useState } from "react";
import ImageUploading from "react-images-uploading";
import { RxCross2 } from "react-icons/rx";

const Revision = () => {
  const [images, setImages] = useState([]);
  const [isUploading, setIsUploading] = useState(false); // State to track upload status

  const maxNumber = 69; // Set the maximum number of images you want to allow for upload

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
    setIsUploading(false); // Set to false once images are updated
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (images.length > 0) {
      alert(`Selected file: ${images[0].file.name}`);
      // You can add your form submission logic here, e.g., upload the file to a server
    } else {
      alert("No file selected");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <ImageUploading
          multiple
          value={images}
          onChange={(imageList, addUpdateIndex) => {
            setIsUploading(true); // Set to true when upload starts
            onChange(imageList, addUpdateIndex);
          }}
          maxNumber={maxNumber}
          dataURLKey="data_url"
        >
          {({
            imageList,
            onImageUpload,
            onImageRemoveAll,
            onImageUpdate,
            onImageRemove,
            isDragging,
            dragProps,
          }) => (
            // Write your building UI
            <div className="flex flex-col">
              <div className="text-center py-4 font-bold text-[18px]">
                <button
                  type="button"
                  style={isDragging ? { color: "red" } : undefined}
                  onClick={onImageUpload}
                  {...dragProps}
                >
                  Click or Drop here
                </button>
              </div>
              {isUploading && <div className="text-center">Uploading...</div>}{" "}
              {/* Conditionally render the uploading message */}
              <div className="flex gap-x-5 justify-center ">
                {imageList.map((image, index) => (
                  <div key={index} className="image-item flex relative">
                    <img
                      className="max-h-[100px]"
                      src={image["data_url"]}
                      alt=""
                      width="100"
                    />
                    <div className="image-item__btn-wrapper absolute right-[0px] top-0 font-bold">
                      <button
                        className="bg-[#FF693B] text-white font-bold"
                        type="button"
                        onClick={() => onImageRemove(index)}
                      >
                        <RxCross2 />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </ImageUploading>
      </form>
    </div>
  );
};

export default Revision;
