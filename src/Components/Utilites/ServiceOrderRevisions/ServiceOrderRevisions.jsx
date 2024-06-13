import React from "react";
import { BiRevision } from "react-icons/bi";
import { MdDownload, MdOutlineAccessTimeFilled } from "react-icons/md";

const ServiceOrderRevisions = ({ delivery }) => {
  const { service_order_revisions } = delivery;

  return (
    <div className="lg:mx-12 w-[80%] pb-4">
      {service_order_revisions.map((item, index) => {
        console.log(item);
        return (
          <div key={index}>
            <div>
              <h3 className="text-[16px] pb-[2%] text-justify font-Roboto font-[600] text-[#000000]"></h3>
            </div>
            <div className="pb-3">
              <h3 className="text-[14px] font-Raleway font-[600] text-[#0A2C8C]">
                Here&apos;s your order Revision
              </h3>
            </div>
            <div className=" border border-[#E2E2E2]   py-5 rounded-md pb-0">
              <div className="px-5 lg:px-4">
                {/* title */}

                <hr className="my-4" />
                {/* description */}
                <div>
                  <p className="text-[#666666] text-[14px] pb-4">
                    {item.description}
                  </p>
                </div>
                {/* delivery details & title */}
                <div className="grid grid-cols-3">
                  {item.media_urls?.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="relative h-[150px] w-[250px] flex items-center justify-center bg-[#F3F6F9] rounded-lg group-hover:brightness-75 cursor-pointer pointer-events-none"
                      >
                        <img
                          className="max-h-[120px] py-3 pointer-events-auto"
                          src={item}
                          alt=""
                        />
                        <div className="absolute bottom-[20px] right-3 flex justify-start pointer-events-auto group-hover:brightness-100">
                          <button
                            className="bg-[#FF693B] py-1.5 px-2 rounded-sm shadow-md text-white"
                            onClick={(event) =>
                              handleDownloadClick(item, event)
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
        );
      })}
    </div>
  );
};

export default ServiceOrderRevisions;
