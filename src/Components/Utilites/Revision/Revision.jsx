"use client";
import React, { useState } from "react";
import ImageUploading from "react-images-uploading";
import { RxCross2 } from "react-icons/rx";

const Revision = ({ onFileChange }) => {
  const [images, setImages] = useState([]);
  const [isUploading, setIsUploading] = useState(false); // State to track upload status

  const maxNumber = 69; // Set the maximum number of images you want to allow for upload

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    // console.log(imageList, addUpdateIndex);
    setImages(imageList);
    onFileChange(imageList); // Update parent component with selected files
    setIsUploading(false); // Set to false once images are updated
  };

  return (
    <div>
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
            <div className="text-center py-4 font-bold text-[16px] border-[2px] border-dashed rounded-md ">
              <button
                type="button"
                style={isDragging ? { color: "red" } : undefined}
                onClick={onImageUpload}
                {...dragProps}
                className="w-full py-3 text-[##212529]"
              >
                Drag & Drop your files or Browse
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
    </div>
  );
};

export default Revision;
