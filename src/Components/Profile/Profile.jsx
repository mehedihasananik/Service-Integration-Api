"use client";

import { apiEndpoint } from "@/config/config";
import React, { useEffect, useState } from "react";
import UserLoading from "../Utilites/UserLoading/UserLoading";
import dayjs from "dayjs";
import axios from "axios";
import toast from "react-hot-toast";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [backgroundImage, setBackgroundImage] = useState("");

  const [phone, setPhone] = useState(profile?.phone_number);

  const userData =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("userData"))
      : null;

  const fetchData = async () => {
    try {
      const response = await fetch(
        `http://192.168.10.14:8000/api/user_profile`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ user_id: userData.id }),
        }
      );
      const data = await response.json();
      setProfile(data);
      setBackgroundImage(data.avatar ? `url(${data.avatar})` : "");
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const updateProfile = async (event) => {
    event.preventDefault(); // Prevent form from refreshing the page

    console.log(event.target.date_birth.value);
    try {
      const formData = new FormData();
      formData.append("user_id", userData.id);
      formData.append("first_name", profile.first_name);
      formData.append("last_name", profile.last_name);
      formData.append("email", profile.email);
      formData.append(
        "phone_number",
        phone ? phone : event.target.phone_number.value
      );
      formData.append("gender", profile.gender);
      formData.append("date_birth", event.target.date_birth.value);
      formData.append("country", profile.country);
      formData.append("city", profile.city);
      formData.append("state", profile.state);
      formData.append("zip", profile.zip);
      formData.append("address", profile.address);
      formData.append("country_code", profile.country_code);
      if (selectedFile) {
        formData.append("user_avatar", selectedFile);
      }

      axios({
        method: "post",
        url: "http://192.168.10.14:8000/api/user_profile_update",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then(function (response) {
          if (response.data.resultsuccess) {
            const newUserData = JSON.parse(localStorage.getItem("userData"));
            newUserData.image = response.data.userphoto;
            localStorage.setItem("userData", JSON.stringify(newUserData));
            window.dispatchEvent(new Event("storage"));
            console.log(newUserData);
            toast.success("Successfully updated profile");
          } else {
            toast.error("Profile updated faild");
          }
        })
        .catch(function (response) {
          //handle error
          console.log(response);
        });
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);

    const reader = new FileReader();
    reader.onloadend = () => {
      setBackgroundImage(`url(${reader.result})`);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  function setDefaultDate() {
    let dateField = document.getElementById("dateofbirth");

    if (!dateField.value) {
      console.log("done");
      dateField.value = "1995-01-01"; // Default value
    }
  }

  return (
    <div
      className="scroll-y"
      style={{ maxHeight: "calc(100vh - 20px)", overflowY: "auto" }}
    >
      <section className="py-10 my-auto dark:bg-gray-900 p-20 md:pb-[10%]">
        <div className="lg:w-[80%] md:w-[90%] xs:w-[96%] mx-auto flex gap-4">
          <div className="lg:w-[88%] md:w-[80%] sm:w-[88%] xs:w-full mx-auto shadow-2xl px-[5%] py-[5%] rounded-xl h-fit self-center dark:bg-gray-800/40">
            <div className="">
              <h1 className="text-center lg:text-3xl md:text-2xl sm:text-xl xs:text-xl font-serif font-extrabold mb-2 dark:text-white">
                Profile
              </h1>

              <form onSubmit={updateProfile}>
                <div className="w-full py-4 items-center rounded-md">
                  <div
                    style={{ backgroundImage }}
                    className={`mx-auto flex justify-center w-[141px] h-[141px] rounded-full bg-cover bg-center bg-no-repeat`}
                  >
                    <div className="bg-white/90 rounded-full w-4 h-4 text-center ml-28 mt-4">
                      <input
                        type="file"
                        name="user_avatar"
                        id="upload_profile"
                        hidden
                        onChange={handleFileChange}
                      />
                      <label htmlFor="upload_profile">
                        <svg
                          data-slot="icon"
                          className="w-6 h-5 text-blue-700 cursor-pointer"
                          fill="none"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
                          ></path>
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
                          ></path>
                        </svg>
                      </label>
                    </div>
                  </div>
                </div>
                <h3 className="text-center mt-3 font-semibold dark:text-gray-300 capitalize">
                  {profile?.first_name}
                </h3>
                <h2 className="text-center mt-3 font-semibold dark:text-gray-300">
                  Upload Profile and Name.
                </h2>
                <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
                  <div className="w-full mb-4 mt-6">
                    <label
                      htmlFor="first_name"
                      className="mb-2 dark:text-gray-300"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      name="first_name"
                      className="mt-2 p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                      placeholder="First Name"
                      defaultValue={profile?.first_name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="w-full mb-4 lg:mt-6">
                    <label htmlFor="last_name" className="dark:text-gray-300">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="last_name"
                      className="mt-2 p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                      placeholder="Last Name"
                      defaultValue={profile?.last_name}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
                  <div className="w-full mb-4 mt-6">
                    <label htmlFor="email" className="mb-2 dark:text-gray-300">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="mt-2 p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                      placeholder="Email"
                      defaultValue={profile?.email}
                      readOnly
                    />
                  </div>
                  <div className="w-full mb-4 lg:mt-6">
                    <label
                      htmlFor="phone_number"
                      className="dark:text-gray-300"
                    >
                      Phone Number
                    </label>
                    <PhoneInput
                      country={"us"}
                      enableSearch={true}
                      type="text"
                      className="mt-2 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                      placeholder="Country Code"
                      value={profile?.phone_number}
                      onChange={(phone) => setPhone(phone)}
                    />

                    <input
                      type="hidden"
                      defaultValue={profile?.phone_number}
                      name="phone_number"
                    />
                  </div>
                </div>
                <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
                  <div className="w-full mb-4 mt-6">
                    <label htmlFor="gender" className="mb-2 dark:text-gray-300">
                      Gender
                    </label>
                    <select
                      name="gender"
                      className="mt-2 p-4 w-full border-2 rounded-lg text-red-600"
                      value={profile?.gender}
                      onChange={handleInputChange}
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                  <div className="w-full mb-4 lg:mt-6">
                    <label htmlFor="birthday" className="dark:text-gray-300">
                      Date of Birth
                    </label>
                    <div>
                      <input
                        type="date"
                        style={{ border: "2px solid #333" }}
                        id="dateofbirth"
                        name="date_birth"
                        onChange={setDefaultDate}
                        className="mt-2 p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800 w-full"
                        defaultValue={profile?.birthday}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
                  <div className="w-full mb-4 mt-6">
                    <label
                      htmlFor="country_code"
                      className="mb-2 dark:text-gray-300"
                    >
                      Country Code
                    </label>

                    <input
                      type="text"
                      name="country_code"
                      className="mt-2 p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                      placeholder="Country Code"
                      defaultValue={profile?.country_code}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="w-full mb-4 lg:mt-6">
                    <label htmlFor="country" className="dark:text-gray-300">
                      Country
                    </label>
                    <input
                      type="text"
                      name="country"
                      className="mt-2 p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                      placeholder="Country"
                      defaultValue={profile?.country}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
                  <div className="w-full mb-4 mt-6">
                    <label htmlFor="city" className="mb-2 dark:text-gray-300">
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      className="mt-2 p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                      placeholder="City"
                      defaultValue={profile?.city}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="w-full mb-4 lg:mt-6">
                    <label htmlFor="state" className="dark:text-gray-300">
                      State
                    </label>
                    <input
                      type="text"
                      name="state"
                      className="mt-2 p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                      placeholder="State"
                      defaultValue={profile?.state}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
                  <div className="w-full mb-4 mt-6">
                    <label htmlFor="zip" className="mb-2 dark:text-gray-300">
                      ZIP
                    </label>
                    <input
                      type="text"
                      name="zip"
                      className="mt-2 p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                      placeholder="ZIP"
                      defaultValue={profile?.zip}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="w-full mb-4 lg:mt-6">
                    <label htmlFor="address" className="dark:text-gray-300">
                      Address
                    </label>
                    <input
                      type="text"
                      name="address"
                      className="mt-2 p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                      placeholder="Address"
                      defaultValue={profile?.address}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="px-6 py-3 mt-4 text-lg text-white transition bg-blue-600 rounded shadow-md hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                  >
                    Save Profile
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
