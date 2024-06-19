import React from "react";
import { MdDownload } from "react-icons/md";
import UserLoading from "../UserLoading/UserLoading";

// Function to handle image click
const handleImageClick = (url) => {
  window.open(url, "_blank");
};

// Function to handle download click
const handleDownloadClick = (url, event) => {
  event.stopPropagation(); // Prevent the button click from propagating to the image click handler

  fetch(url)
    .then((response) => response.blob())
    .then((blob) => {
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = url.split("/").pop(); // Set the suggested download file name
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    })
    .catch((error) => console.error("Error downloading the file:", error));
};

// Function to determine the file type
const getFileType = (url) => {
  const extension = url.split(".").pop().split("_")[0];
  return extension.toLowerCase();
};

// Map file types to icon URLs
const fileTypeIcons = {
  jpg: "image/jpeg",
  jpeg: "image/jpeg",
  png: "image/png",
  webp: "image/webp",
  txt: "https://cdn3.iconfinder.com/data/icons/muksis/128/txt-128.png",
  pdf: "https://cdn3.iconfinder.com/data/icons/muksis/128/pdf-128.png",
  xlsx: "https://cdn3.iconfinder.com/data/icons/muksis/128/xlsx-128.png",
  docx: "https://cdn3.iconfinder.com/data/icons/muksis/128/docx-128.png",
};

const fallbackIconUrl =
  "https://cdn-icons-png.flaticon.com/512/1388/1388902.png";

const Media_Urls = ({ media_urls }) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pb-2 pt-3">
        {media_urls.map((item, index) => {
          const fileName = item
            .split("/")
            .pop() // Get the last part of the URL
            .split("_")[0] // Take the part before the first underscore, if any
            .split(".")[0]
            .slice(0, 10); // Take the part before the first period
          const fileType = getFileType(item);
          const iconSrc = fileTypeIcons[fileType] || fallbackIconUrl; // Get the icon URL for the file type, or use fallback
          const fileExtension = item.split(".").pop(); // Extract file extension from URL
          return (
            <div key={index} className="group relative">
              <div
                className="  h-[180px]  flex items-center justify-center bg-[#F3F6F9] rounded-lg group-hover:brightness-75 cursor-pointer pointer-events-none"
                onClick={() => handleImageClick(item)}
              >
                {fileType === "jpg" ||
                fileType === "jpeg" ||
                fileType === "png" ||
                fileType === "webp" ? (
                  <img
                    className=" h-[180px]  pointer-events-auto "
                    src={item}
                    alt=""
                  />
                ) : (
                  <img
                    className="h-[120px]  pointer-events-auto"
                    src={iconSrc}
                    alt={`File Thumbnail`}
                  />
                )}
              </div>
              <div className="absolute bottom-[0px] 6xl:bottom-10 right-3 flex justify-start pointer-events-auto ">
                <button
                  className="bg-[#FF693B] py-1.5 px-2 rounded-sm shadow-md text-white"
                  onClick={(event) => handleDownloadClick(item, event)}
                >
                  <MdDownload />
                </button>
              </div>
              <div className="text-sm mt-2 text-center w-[250px]">
                {`${fileName}..${fileExtension}`}
              </div>{" "}
              {/* Display file name with extension */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Media_Urls;
