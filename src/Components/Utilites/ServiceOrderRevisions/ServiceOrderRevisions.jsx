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
const ServiceOrderRevisions = ({ msg }) => {
  const { revision } = msg;
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
  console.log(revision);

  return (
    <div className="lg:mx-12 w-[80%] pb-4">
      <div>
        <div className="pb-3">
          <h3 className="text-[14px] font-Raleway font-[600] text-[#0A2C8C]">
            Here&apos;s your order Revision
          </h3>
        </div>
        <div className="border border-[#E2E2E2] py-5 rounded-md pb-0">
          <div className="px-5 lg:px-4">
            <hr className="my-4" />
            <div>
              <p className="text-[#666666] text-[14px] pb-4">
                {revision.description}
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {revision.media_urls?.map((fileUrl, fileIndex) => {
                const fileType = getFileType(fileUrl);
                const isImage =
                  fileType === "jpg" ||
                  fileType === "jpeg" ||
                  fileType === "png" ||
                  fileType === "webp";

                const isVideo =
                  fileType === "mp4" ||
                  fileType === "webm" ||
                  fileType === "ogg";

                const iconSrc = fileTypeIcons[fileType] || fallbackIconUrl;

                return (
                  <div className="group" key={fileIndex}>
                    <div
                      className="relative h-[180px] w-[250px] flex items-center justify-center group-hover:brightness-75 bg-[#F3F6F9] rounded-lg cursor-pointer mb-3"
                      onClick={() => handleImageClick(fileUrl)}
                    >
                      {isImage ? (
                        <img
                          className="h-[180px] w-full object-contain object-position-center pointer-events-auto rounded-lg"
                          src={fileUrl}
                          alt=""
                        />
                      ) : isVideo ? (
                        <div className="relative w-full flex justify-center">
                          <img
                            className="h-[180px] w-[180px] pt-3  cursor-pointer  pointer-events-auto"
                            src={videoIconUrl}
                            alt="Video Thumbnail"
                          />
                        </div>
                      ) : (
                        <div className="cursor-pointer pointer-events-none">
                          <img
                            className={`h-[180px] w-full object-contain object-position-center pointer-events-auto`}
                            src={iconSrc}
                            alt=""
                          />
                        </div>
                      )}
                      <div className="absolute bottom-[20px] right-3 flex justify-start group-hover:brightness-100">
                        <button
                          className="bg-[#FF693B] py-1.5 px-2 rounded-sm shadow-md text-white"
                          onClick={(event) =>
                            handleDownloadClick(fileUrl, event)
                          }
                        >
                          {downloading[fileUrl] ? (
                            "Downloading..."
                          ) : (
                            <MdDownload />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceOrderRevisions;
