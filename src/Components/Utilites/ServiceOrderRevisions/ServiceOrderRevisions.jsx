import React from "react";
import { MdDownload } from "react-icons/md";

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

const ServiceOrderRevisions = ({ delivery }) => {
  const { service_order_revisions } = delivery;

  return (
    <div className="lg:mx-12 w-[80%] pb-4">
      {service_order_revisions.map((item, index) => (
        <div key={index}>
          <div>
            <h3 className="text-[16px] pb-[2%] text-justify font-Roboto font-[600] text-[#000000]"></h3>
          </div>
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
                  {item.description}
                </p>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {item.media_urls?.map((fileUrl, fileIndex) => {
                  const fileType = fileUrl.split(".").pop();

                  let preview;
                  let isPadded = false;
                  if (fileType === "pdf") {
                    preview =
                      "https://cdn3.iconfinder.com/data/icons/muksis/128/pdf-512.png";
                    isPadded = true;
                  } else if (fileType === "psd") {
                    preview =
                      "https://cdn3.iconfinder.com/data/icons/muksis/128/psd-512.png";
                    isPadded = true;
                  } else if (fileType === "xd") {
                    preview = "http://192.168.10.16:8000/js/icons/xd.png";
                    isPadded = true;
                  } else if (fileType === "doc" || fileType === "docx") {
                    preview =
                      "https://cdn3.iconfinder.com/data/icons/muksis/128/docx-128.png";
                    isPadded = true;
                  } else if (fileType === "xls" || fileType === "xlsx") {
                    preview = "http://192.168.10.16:8000/js/icons/excel.png";
                    isPadded = true;
                  } else if (fileType === "txt") {
                    preview = "http://192.168.10.16:8000/js/icons/txt.png";
                    isPadded = true;
                  } else if (fileType === "zip") {
                    preview =
                      "https://cdn3.iconfinder.com/data/icons/muksis/128/zip-128.png";
                    isPadded = true;
                  } else if (["jpg", "jpeg", "png", "gif"].includes(fileType)) {
                    preview = fileUrl;
                  } else {
                    preview = "/assets/file-1453.png";
                    isPadded = true;
                  }

                  return (
                    <div className="group" key={fileIndex}>
                      <div
                        className="relative h-[180px] w-[250px] flex items-center justify-center group-hover:brightness-75 bg-[#F3F6F9] rounded-lg cursor-pointer mb-3"
                        onClick={() => handleImageClick(fileUrl)}
                      >
                        <div className="cursor-pointer pointer-events-none">
                          <img
                            className={`h-[180px] w-full object-contain object-position-center pointer-events-auto ${
                              isPadded ? "p-4" : ""
                            }`}
                            src={preview}
                            alt=""
                          />
                        </div>
                        <div className="absolute bottom-[20px] right-3 flex justify-start group-hover:brightness-100">
                          <button
                            className="bg-[#FF693B] py-1.5 px-2 rounded-sm shadow-md text-white"
                            onClick={(event) =>
                              handleDownloadClick(fileUrl, event)
                            }
                          >
                            <MdDownload />
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
      ))}
    </div>
  );
};

export default ServiceOrderRevisions;
