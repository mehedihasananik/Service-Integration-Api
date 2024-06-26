"use client";
import { Dropdown } from "flowbite-react";
import Link from "next/link";
import { MdKeyboardArrowDown } from "react-icons/md";
import Notification from "../Utilites/Notificaiton/Notification";
import { useContext, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import UserLoading from "../Utilites/UserLoading/UserLoading";
import { AuthContext } from "@/providers/AuthProviders";

const DashBoardNav = () => {
  const router = useRouter();
  const pathname = usePathname().replace("/", "");
  const [cleared, setCleared] = useState(false);
  const [userData, setUserData] = useState(null);
  const [isClient, setIsClient] = useState(false);
  const { deliveryDetails, orderID } = useContext(AuthContext);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsClient(true);
      setUserData(JSON.parse(localStorage.getItem("userData")));
      window.addEventListener("storage", () => {
        setUserData(JSON.parse(localStorage.getItem("userData")));
      });
    }
  }, []);

  const clearSession = () => {
    localStorage.removeItem("userData");
    localStorage.removeItem("orderID");
    localStorage.removeItem("senderId");
    localStorage.removeItem("receiverId");
    setCleared(true);
    router.push("/");
  };

  return (
    <nav className="flex flex-col justify-center items-center md:flex-row md:justify-between w-[100%] py-4 px-5 lg:pr-12 bg-[#FCFCFC]">
      <div>
        <div className="text-[#333] text-[28px] md:text-[30px] font-[600] capitalize px-5 py-3">
          {isClient
            ? pathname === "order-delivery"
              ? orderID
                ? `${pathname} #${orderID}`
                : "Loading..."
              : pathname
              ? pathname
              : "Loading..."
            : "Loading..."}
        </div>
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
              {userData?.image && (
                <div className="flex items-center justify-center">
                  <img
                    className="w-[40px] h-[40px] rounded-lg"
                    src={userData.image}
                    alt="User"
                  />
                </div>
              )}
            </Link>
            <Dropdown
              label={userData?.name || userData?.user_name}
              dismissOnClick={false}
              renderTrigger={() => (
                <div className="flex gap-x-2 items-center">
                  <span className="flex items-center gap-x-4 text-[16px] hover:text-[#FF693B] transition-all duration-200">
                    {userData ? userData.name : <UserLoading />}
                  </span>
                  <MdKeyboardArrowDown className="text-[24px] cursor-pointer" />
                </div>
              )}
            >
              <Dropdown.Item>
                <Link href={"/profile"}>Profile</Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link href={"/history"}>History</Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link href={"/billing"}>Billing</Link>
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
