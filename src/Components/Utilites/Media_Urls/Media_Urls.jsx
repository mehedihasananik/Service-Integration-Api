import React, { useState } from "react";
import { MdDownload } from "react-icons/md";

const handleImageClick = (url) => {
  window.open(url, "_blank");
};

const getFileType = (url) => {
  const extension = url.split(".").pop().split("_")[0];
  return extension.toLowerCase();
};

const fileTypeIcons = {
  jpg: "image/jpeg",
  jpeg: "image/jpeg",
  png: "image/png",
  webp: "image/webp",
  txt: "https://cdn3.iconfinder.com/data/icons/muksis/128/txt-128.png",
  pdf: "https://cdn3.iconfinder.com/data/icons/muksis/128/pdf-128.png",
  xlsx: "https://cdn3.iconfinder.com/data/icons/muksis/128/xlsx-128.png",
  docx: "https://cdn3.iconfinder.com/data/icons/muksis/128/docx-128.png",
  mp4: "video/mp4",
  webm: "video/webm",
  ogg: "video/ogg",
  zip: "https://cdn3.iconfinder.com/data/icons/muksis/128/zip-128.png",
};

const fallbackIconUrl = "/assets/file-1453.png";
const videoIconUrl = "/assets/play-button.png";

const formatFileName = (fileName, extension) => {
  if (fileName.length <= 20) {
    return `${fileName}.${extension}`;
  }
  const firstPart = fileName.slice(0, 4);
  const lastPart = fileName.slice(-4);
  return `${firstPart}....${lastPart}.${extension}`;
};

const Media_Urls = ({ media_urls }) => {
  const [downloading, setDownloading] = useState({});

  const handleDownloadClick = (url, event) => {
    event.stopPropagation();
    setDownloading((prev) => ({ ...prev, [url]: true }));

    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        const link = document.createElement("a");
        link.href = window.URL.createObjectURL(blob);
        link.download = url.split("/").pop();
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setDownloading((prev) => ({ ...prev, [url]: false }));
      })
      .catch((error) => {
        console.error("Error downloading the file:", error);
        setDownloading((prev) => ({ ...prev, [url]: false }));
      });
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {media_urls.map((item, index) => {
          const fullFileName = item.split("/").pop();
          const fileNameWithoutExtension = fullFileName.split(".")[0];
          const fileExtension = fullFileName.split(".").pop();
          const formattedFileName = formatFileName(
            fileNameWithoutExtension,
            fileExtension
          );

          const fileType = getFileType(item);
          const iconSrc = fileTypeIcons[fileType] || fallbackIconUrl;

          return (
            <div key={index} className="group relative">
              <div
                className="h-[180px] flex items-center justify-center bg-[#F3F6F9] rounded-lg group-hover:brightness-75 cursor-pointer pointer-events-none"
                onClick={() => handleImageClick(item)}
              >
                {fileType === "jpg" ||
                fileType === "jpeg" ||
                fileType === "png" ||
                fileType === "webp" ? (
                  <img
                    className="h-[180px] w-full object-contain object-position-center pointer-events-auto rounded-lg"
                    src={item}
                    alt=""
                  />
                ) : fileType === "mp4" ||
                  fileType === "webm" ||
                  fileType === "ogg" ? (
                  <div className="relative w-full flex justify-center">
                    <img
                      className="h-[180px] w-[180px] pt-3  cursor-pointer  pointer-events-auto"
                      src={videoIconUrl}
                      alt="Video Thumbnail"
                    />
                  </div>
                ) : (
                  <img
                    className="h-[120px] pointer-events-auto rounded-lg"
                    src={iconSrc}
                    alt={`File Thumbnail`}
                  />
                )}
              </div>
              <div className="absolute bottom-[40px] 6xl:bottom-10 right-3 flex justify-start pointer-events-auto">
                <button
                  className="bg-[#FF693B] py-1.5 px-2 rounded-sm shadow-md text-white"
                  onClick={(event) => handleDownloadClick(item, event)}
                >
                  {downloading[item] ? (
                    <span>Downloading...</span>
                  ) : (
                    <MdDownload />
                  )}
                </button>
              </div>
              <div className="text-sm mt-2 text-center w-[250px]">
                {formattedFileName}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Media_Urls;
