import React from "react";
import { BiRevision } from "react-icons/bi";
import { MdOutlineAccessTimeFilled } from "react-icons/md";

const ServiceOrderRevisions = ({ delivery }) => {
  const { service_order_revisions } = delivery;

  return (
    <div className="lg:mx-12 w-[80%] pb-4">
      {service_order_revisions.map((item, index) => {
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
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ServiceOrderRevisions;
