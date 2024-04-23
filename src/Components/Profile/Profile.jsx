"use client";

import API_ROUTES from "@/app/api/confiq";
import React, { useEffect, useState } from "react";

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const userData = JSON.parse(sessionStorage.getItem("userData"));

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_ROUTES.route}/user_profile`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ user_id: userData.id }),
        });
        const data = await response.json();
        setProfile(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const backgroundImage = profile?.image ? `url(${profile.image})` : "";
  console.log(backgroundImage);
  return (
    <div>
      <section className="py-10 my-auto dark:bg-gray-900 p-20">
        <div className="lg:w-[80%] md:w-[90%] xs:w-[96%] mx-auto flex gap-4">
          <div className="lg:w-[88%] md:w-[80%] sm:w-[88%] xs:w-full mx-auto shadow-2xl px-[5%] py-[5%] rounded-xl h-fit self-center dark:bg-gray-800/40">
            <div className="">
              <h1 className="text-center lg:text-3xl md:text-2xl sm:text-xl xs:text-xl font-serif font-extrabold mb-2 dark:text-white">
                Profile
              </h1>

              <form>
                <div className="w-full   py-4 items-center rounded-md">
                  <div
                    style={{ backgroundImage }}
                    className={`mx-auto flex justify-center w-[141px] h-[141px] rounded-full  bg-cover bg-center bg-no-repeat`}
                  >
                    <div className="bg-white/90 rounded-full w-6 h-6 text-center ml-28 mt-4">
                      <input
                        type="file"
                        name="profile"
                        id="upload_profile"
                        hidden
                        required
                      />

                      <label for="upload_profile">
                        <svg
                          data-slot="icon"
                          className="w-6 h-5 text-blue-700"
                          fill="none"
                          stroke-width="1.5"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
                          ></path>
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
                          ></path>
                        </svg>
                      </label>
                    </div>
                  </div>
                </div>
                <h3 className="text-center mt-3 font-semibold dark:text-gray-300 capitalize">
                  {profile?.name}
                </h3>
                <h2 className="text-center mt-3 font-semibold dark:text-gray-300">
                  Upload Profile and Name.
                </h2>
                <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
                  <div className="w-full  mb-4 mt-6">
                    <label for="" className="mb-2 dark:text-gray-300">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="mt-2 p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                      placeholder={profile?.first_name}
                    />
                  </div>
                  <div className="w-full  mb-4 lg:mt-6">
                    <label for="" className=" dark:text-gray-300">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="mt-2 p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                      placeholder={profile?.last_name}
                    />
                  </div>
                </div>
                <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
                  <div className="w-full  mb-4 mt-6">
                    <label for="" className="mb-2 dark:text-gray-300">
                      Email
                    </label>
                    <input
                      type="text"
                      className="mt-2 p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                      placeholder={profile?.email}
                      readOnly
                    />
                  </div>
                  <div className="w-full  mb-4 lg:mt-6">
                    <label for="" className=" dark:text-gray-300">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      className="mt-2 p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                      placeholder={profile?.phone_number}
                    />
                  </div>
                </div>

                <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
                  <div className="w-full">
                    <h3 className="dark:text-gray-300 mb-2">Gender</h3>
                    <select className="w-full text-grey border-2 rounded-lg p-4 pl-2 pr-2 cursor-pointer dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800">
                      <option disabled value="">
                        Select Gender
                      </option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>
                  <div className="w-full">
                    <h3 className="dark:text-gray-300 mb-2">Date Of Birth</h3>
                    <input
                      type="date"
                      className="text-grey p-4 py-[13px] w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800 cursor-pointer"
                    />
                  </div>
                </div>
                <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
                  <div className="w-full  mb-4 mt-6">
                    <label for="" className="mb-2 dark:text-gray-300">
                      Country
                    </label>
                    <input
                      type="text"
                      className="mt-2 p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                      placeholder="Enter Your Phone Country"
                    />
                  </div>
                  <div className="w-full  mb-4 lg:mt-6">
                    <label for="" className=" dark:text-gray-300">
                      Address
                    </label>
                    <input
                      type="text"
                      className="mt-2 p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                      placeholder="Enter Your Address"
                    />
                  </div>
                </div>

                <div className="w-full rounded-lg bg-blue-500 hover:bg-[#FF693B] transition-all duration-300 lg:mt-8 text-white text-lg font-semibold ">
                  <button type="submit" className="w-full py-3">
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
