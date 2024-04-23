import { Button, Popover } from "flowbite-react";
import React from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoMdTime } from "react-icons/io";

const Notification = () => {
  return (
    <div>
      <Popover
        aria-labelledby="profile-popover"
        content={
          <div className="w-72">
            <div className="bg-[#FF693B] text-center">
              <h3 className="text-white text-[18px] py-3 px-3">
                Notifications
              </h3>
            </div>
            {/* notification contents */}
            <div className="flex flex-col gap-y-3 p-5">
              <div>
                <p
                  id="profile-popover"
                  className="text-[14px] font-medium leading-5 text-gray-900 dark:text-white"
                >
                  Your elite author graphic Optimization is ready.
                </p>
                <div className="flex gap-x-2 items-center py-2">
                  <span>
                    <IoMdTime />
                  </span>
                  <span className="text-[12px]">30 SEC AGO</span>
                </div>
              </div>
              <div>
                <p
                  id="profile-popover"
                  className="text-[14px] font-medium leading-5 text-gray-900 dark:text-white"
                >
                  Your ecommerce project is ready to submit.
                </p>
                <div className="flex gap-x-2 items-center py-2">
                  <span>
                    <IoMdTime />
                  </span>
                  <span className="text-[12px]">30 SEC AGO</span>
                </div>
              </div>
            </div>
          </div>
        }
      >
        <div className="flex justify-center items-center relative">
          <button className="bg-[#E6ECFD] text-black text-[18px] p-3 rounded-full">
            <IoMdNotificationsOutline className="text-[25px]" />
          </button>
          <span className="absolute  top-[-10px] left-[30px] w-[20px] h-[20px] text-[14px] flex justify-center items-center bg-[#FF693B] text-white p-3 font-medium  rounded-full">
            3
          </span>
        </div>
      </Popover>
    </div>
  );
};

export default Notification;
