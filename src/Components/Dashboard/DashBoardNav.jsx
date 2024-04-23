"use client";
import { Dropdown } from "flowbite-react";
import Link from "next/link";
import { MdKeyboardArrowDown } from "react-icons/md";
import Notification from "../Utilites/Notificaiton/Notification";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const DashBoardNav = () => {
  const router = useRouter();
  let pathname = usePathname();
  const [cleared, setCleared] = useState(false);
  pathname = pathname.replace("/", "");

  const clearSession = () => {
    // Remove the userData from sessionStorage
    sessionStorage.removeItem("userData");
    // Set the state to indicate that session has been cleared
    setCleared(true);
    router.push("/");
  };
  const userData = JSON.parse(sessionStorage.getItem("userData"));

  return (
    <nav className="flex flex-col justify-center items-center md:flex-row md:justify-between w-[100%] py-4 px-5 lg:pr-12 bg-[#FCFCFC]">
      <div>
        <h3 className="text-[#333] text-[28px] md:text-[30px] font-[600] capitalize px-5 py-3">
          {pathname}
        </h3>
      </div>
      <div>
        <ul className="flex items-center gap-x-7 pt-4">
          <Link
            href={"/"}
            className="text-[18px] hover:text-[#FF693B] transition-all duration-200"
          >
            Home
          </Link>
          <Link
            href={"/portfolio"}
            className="text-[18px] hover:text-[#FF693B] transition-all duration-200"
          >
            Portfolio
          </Link>

          <Notification />

          <button className="flex gap-3 items-center">
            <Link href={"/profile"}>
              <div className="flex items-center justify-center">
                {" "}
                <img
                  className="w-[40px] h-[40px] rounded-lg"
                  src={userData?.image}
                  alt=""
                />
              </div>
            </Link>
            <Dropdown
              label={userData?.name}
              dismissOnClick={false}
              renderTrigger={() => (
                <span>
                  {
                    <div className="flex gap-x-2 items-center">
                      <span className="flex items-center gap-x-4 text-[16px] hover:text-[#FF693B] transition-all duration-200">
                        {userData ? `${userData?.name}` : "No User"}
                      </span>
                      <MdKeyboardArrowDown className="text-[24px] cursor-pointer" />
                    </div>
                  }
                </span>
              )}
            >
              <Dropdown.Item>
                <Link href={"/profile"}>Profile</Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link href={"/history"}>History</Link>
              </Dropdown.Item>
              <Dropdown.Item onClick={clearSession}>Sign out</Dropdown.Item>
            </Dropdown>
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default DashBoardNav;
