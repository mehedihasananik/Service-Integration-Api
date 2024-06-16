import React from "react";
import { MdDownload } from "react-icons/md";

const ServiceOrderRevisions = ({ delivery }) => {
  const { service_order_revisions } = delivery;

  const handleDownloadClick = (url, event) => {
    event.preventDefault();
    const link = document.createElement("a");
    link.href = url;
    link.download = url.substring(url.lastIndexOf("/") + 1);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
                {item.media_urls?.map((fileUrl, index) => {
                  const fileType = fileUrl.split(".").pop();

                  let preview;
                  if (fileType === "pdf") {
                    preview =
                      "https://cdn3.iconfinder.com/data/icons/muksis/128/pdf-512.png";
                  } else if (fileType === "psd") {
                    preview =
                      "https://cdn3.iconfinder.com/data/icons/muksis/128/psd-512.png";
                  } else if (fileType === "xd") {
                    preview = "http://192.168.0.103:8000/js/icons/xd.png";
                  } else if (fileType === "doc" || fileType === "docx") {
                    preview = "http://192.168.0.103:8000/js/icons/doc.png";
                  } else if (fileType === "xls" || fileType === "xlsx") {
                    preview = "http://192.168.0.103:8000/js/icons/excel.png";
                  } else if (fileType === "txt") {
                    preview = "http://192.168.0.103:8000/js/icons/txt.png";
                  } else if (fileType === "zip") {
                    preview = "http://192.168.0.103:8000/js/icons/zip.png";
                  } else if (["jpg", "jpeg", "png", "gif"].includes(fileType)) {
                    preview = fileUrl;
                  } else {
                    preview =
                      "https://cdn-icons-png.flaticon.com/512/1388/1388902.png";
                  }

                  return (
                    <div
                      key={index}
                      className="relative h-[150px] w-[250px] flex items-center justify-center bg-[#F3F6F9] rounded-lg group-hover:brightness-75 cursor-pointer pointer-events-none"
                    >
                      <img
                        className="max-h-[120px] py-3 pointer-events-auto"
                        src={preview}
                        alt=""
                      />
                      <div className="absolute bottom-[20px] right-3 flex justify-start pointer-events-auto group-hover:brightness-100">
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
