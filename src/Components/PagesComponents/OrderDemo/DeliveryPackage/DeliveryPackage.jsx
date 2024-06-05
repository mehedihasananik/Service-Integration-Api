import Image from "next/image";
import React from "react";

const DeliveryPackage = ({ delivery }) => {
  const { descripttion, media_urls, id } = delivery;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div>
      {" "}
      <div className="bg-[#FDFDFD] border-2 border-[#E2E2E2] rounded-[8px] mt-4  px-3 lg:ml-4 lg:mr-20 py-5 w-[70%]">
        {/* delivery title */}
        <div className="pb-5">
          <h3 className="text-[#333] font-Raleway text-[24px] font-[700]">
            Delivery #{id}
          </h3>
          <div className="border-b-2 border-[#E2E2E2] py-2"></div>
        </div>
        {/* delivery details */}
        <div className="flex flex-col md:flex-row md:gap-x-4">
          <div>
            <Image
              width={50}
              height={50}
              src="/assets/msgAvater.png"
              alt="icon"
            />
          </div>
          <div className="space-y-2">
            <h3 className="text-[#333] font-Raleway text-[14px] font-[700]">
              Envobyte Message
            </h3>
            <p className="text-[14px] text-[#666] font-[400]">Hi Envobyte,</p>
            <p className="text-[14px] text-[#666] font-[400]">
              Thanks again for your work!. Your delivery is enclosed. If there
              are any problems, Please let me know I will get back to you soon
              as I can.
            </p>
            <div className="lg:pt-4">
              <h3 className="text-[#333] font-Raleway text-[16px] font-[600]">
                Attachments
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {media_urls.map((item, index) => {
                return (
                  <div key={index}>
                    <div className="h-[150px] flex items-center justify-center bg-[#F3F6F9] rounded-lg">
                      <img
                        className=" max-h-[120px] py-3 rounded-lg "
                        src={item}
                        alt=""
                      />
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="space-x-4 pt-3">
              <button className="text-[16px] font-[600] text-[#fff] bg-[#FF693B] px-4 py-2 rounded-md hover:shadow-xl transition-all duration-200">
                Approve
              </button>
              <button className="text-[16px] font-[600] text-[#B0B0B0] bg-[#F3F3F3] px-4 py-2 rounded-md hover:shadow-xl  transition-all duration-200">
                Send a Revision
              </button>
            </div>
            <div className="py-3">
              <p className="text-[#666] text-[14px] font-[400]">
                You have until Dec 18, 11:42 to approve or request a revision.
                Otherwise, the order will mark as complete.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryPackage;
