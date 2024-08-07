"use client";

import { apiEndpoint } from "@/config/config";
import React, { useEffect, useState } from "react";
import UserLoading from "../Utilites/UserLoading/UserLoading";

import axios from "axios";
import toast from "react-hot-toast";

import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { FaCamera } from "react-icons/fa";

import { useMemo } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";
import { Button, Modal } from "flowbite-react";

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [backgroundImage, setBackgroundImage] = useState("");

  const [phone, setPhone] = useState("");

  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);
  const [openModal, setOpenModal] = useState(false);

  const changeCountryHandler = (value) => {
    setValue(value);
    profile.country = value.label;
    setProfile(profile);
  };

  const userData =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("userData"))
      : null;

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://admin.envobyte.com/api/user_profile`,
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
      setPhone(data.phone_number);
      setBackgroundImage(data.avatar ? `url(${data.avatar})` : "");
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const updateProfile = async (event) => {
    event.preventDefault(); // Prevent form from refreshing the page

    // console.log(event.target.date_birth.value);
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
      if (selectedFile) {
        formData.append("user_avatar", selectedFile);
      }

      axios({
        method: "post",
        url: "https://admin.envobyte.com/api/user_profile_update",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then(function (response) {
          if (response.data.resultsuccess) {
            const newUserData = JSON.parse(localStorage.getItem("userData"));
            newUserData.image = response.data.userphoto;
            newUserData.name = profile.first_name;
            localStorage.setItem("userData", JSON.stringify(newUserData));
            window.dispatchEvent(new Event("storage"));
            toast.success("Successfully updated profile");
            setOpenModal(false);
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

  useEffect(() => {
    options.map((item) => {
      if (item.label == profile?.country) {
        setValue(item);
      }
    });
  }, [profile]);

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

  // const formatDate = (dateString) => {
  //   const date = new Date(dateString);
  //   const year = date.getFullYear();
  //   const month = (date.getMonth() + 1).toString().padStart(2, "0");
  //   const day = date.getDate().toString().padStart(2, "0");
  //   return `${year}-${month}-${day}`;
  // };

  function setDefaultDate() {
    let dateField = document.getElementById("dateofbirth");

    if (!dateField.value) {
      console.log("done");
      dateField.value = "1995-01-01"; // Default value
    }
  }

  const handlePhoneOnChange = (value, data) => {
    setPhone(value);
    console.log(value);
  };

  return (
    <div
      className="scroll-y profile"
      id="profilepage"
      style={{ maxHeight: "calc(100vh - 20px)", overflowY: "auto" }}
    >
      <section className="py-10 my-auto dark:bg-gray-900 p-20 md:pb-[10%] sm:w-[100%] xs:px-0 ">
        <div className="flex justify-center"></div>
        <div className="lg:w-[80%] md:w-[90%] xs:w-[100%] mx-auto flex gap-4">
          <div className="sm:w-full xs:w-full mx-auto shadow-2xl px-[5%] py-[5%] rounded-xl h-fit self-center dark:bg-gray-800/40 xs:pb-[44%] md:pb-10">
            <div className="">
              <div className="text-end">
                <button
                  type="button"
                  onClick={() => setOpenModal(true)}
                  className="text-[16px] whitespace-nowrap mb-10 text-white bg-[#FF693B]  border border-[#FF693B] px-5 py-2 md:px-10 md:py-3 font-[600] rounded-lg  hover:bg-[#fff] hover:text-[#FF693B] transition-all duration-300"
                >
                  Edit Profile
                </button>
              </div>
              <h1 className="text-center lg:text-3xl md:text-2xl sm:text-xl xs:text-xl font-serif font-extrabold mb-2 dark:text-white">
                Profile
              </h1>

              <form onSubmit={updateProfile}>
                <div className="w-full py-4 items-center rounded-md">
                  <label>
                    <div
                      style={{ backgroundImage }}
                      className={`mx-auto flex justify-center w-[141px] h-[141px] rounded-full bg-cover bg-center bg-no-repeat`}
                    >
                      <div className="bg-white/90 rounded-full w-0 h-0 text-center ml-28 mt-4"></div>
                    </div>
                  </label>
                </div>
                <h3 className="text-center mt-3 font-semibold dark:text-gray-300 capitalize">
                  {profile?.first_name} {profile?.last_name}
                </h3>

                <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 lg:gap-8 justify-center w-full">
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
                      readOnly
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
                      readOnly
                      className="mt-2 p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                      placeholder="Last Name"
                      defaultValue={profile?.last_name}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 lg:gap-8 justify-center w-full">
                  <div className="w-full mb-4 lg:mt-6">
                    <label htmlFor="email" className="mb-2 dark:text-gray-300">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      readOnly
                      className="mt-2 p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                      placeholder="Email"
                      defaultValue={profile?.email}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="w-full mb-4 lg:mt-6">
                    <label
                      htmlFor="phone_number"
                      className="dark:text-gray-300"
                    >
                      Phone Number
                    </label>

                    <input
                      type="text"
                      name="phone_number"
                      readOnly
                      className="mt-2 p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                      value={`${phone}`}
                    />

                    <input
                      type="hidden"
                      defaultValue={profile?.phone_number}
                      name="phone_number"
                    />
                  </div>
                </div>
                <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 lg:gap-8 justify-center w-full">
                  <div className="w-full mb-4 lg:mt-6">
                    <label htmlFor="gender" className="mb-2 dark:text-gray-300">
                      Gender
                    </label>
                    <input
                      type="text"
                      name="gender"
                      readOnly
                      className="mt-2 p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800 w-full"
                      value={profile?.gender}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="w-full mb-4 lg:mt-6">
                    <label htmlFor="birthday" className="dark:text-gray-300">
                      Date of Birth
                    </label>
                    <div>
                      <input
                        type="date"
                        name="date_birth"
                        readOnly
                        className="mt-2 p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800 w-full"
                        value={profile?.birthday}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 lg:gap-8 justify-center w-full">
                  <div className="w-full mb-4 lg:mt-6">
                    <label htmlFor="country" className="dark:text-gray-300">
                      Country
                    </label>
                    <input
                      type="text"
                      id="country"
                      name="country"
                      readOnly
                      className="mt-2 p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800 w-full"
                      value={profile?.country}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="w-full mb-4 lg:mt-6">
                    <label htmlFor="city" className="mb-2 dark:text-gray-300">
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      readOnly
                      className="mt-2 p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                      placeholder="City"
                      value={profile?.city}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 lg:gap-8 justify-center w-full">
                  <div className="w-full mb-4 lg:mt-6">
                    <label htmlFor="address" className="dark:text-gray-300">
                      Address
                    </label>
                    <input
                      type="text"
                      name="address"
                      readOnly
                      className="mt-2 p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                      placeholder="Address"
                      defaultValue={profile?.address}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Modal show={openModal} onClose={() => setOpenModal(false)} size="5xl">
        <Modal.Header>Profile Update</Modal.Header>
        <Modal.Body>
          <div className="p-8 xs:p-0 h-full">
            <form onSubmit={updateProfile}>
              <div className="w-full py-4 items-center rounded-md">
                <label htmlFor="upload_profile">
                  <div
                    style={{ backgroundImage }}
                    className={`mx-auto cursor-pointer flex justify-center w-[141px] h-[141px] rounded-full bg-cover bg-center bg-no-repeat`}
                  >
                    <div className="bg-white/90 rounded-full w-0 h-0 text-center ml-28 mt-4">
                      <input
                        type="file"
                        name="user_avatar"
                        id="upload_profile"
                        hidden
                        onChange={handleFileChange}
                      />

                      <FaCamera
                        style={{ color: "FF693B", width: "17px" }}
                        className="w-6 h-6 text-blue-700 cursor-pointer"
                      />
                    </div>
                  </div>
                </label>
              </div>
              <h3 className="text-center mt-3 font-semibold dark:text-gray-300 capitalize">
                {profile?.first_name} {profile?.last_name}
              </h3>
              <h2 className="text-center mt-3 font-semibold dark:text-gray-300">
                Upload Profile and Name.
              </h2>
              <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 lg:gap-8 justify-center w-full">
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
              <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 lg:gap-8 justify-center w-full">
                <div className="w-full mb-4 lg:mt-6 sm:mt-0">
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
                  <label htmlFor="phone_number" className="dark:text-gray-300">
                    Phone Number
                  </label>
                  <PhoneInput
                    defaultCountry="ua"
                    value={phone}
                    onChange={handlePhoneOnChange}
                    searchPlaceholder="Search country"
                  />

                  <input
                    type="hidden"
                    defaultValue={profile?.phone_number}
                    name="phone_number"
                  />
                </div>
              </div>
              <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 lg:gap-8 justify-center w-full">
                <div className="w-full mb-4 lg:mt-6 sm:mt-0">
                  <label htmlFor="gender" className="mb-2 dark:text-gray-300">
                    Gender
                  </label>
                  <select
                    name="gender"
                    className="mt-2 p-4 w-full border-2 rounded-lg text-red-600 gender-select"
                    value={profile?.gender}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
                <div className="w-full mb-4 lg:mt-6 input-container">
                  <label htmlFor="birthday" className="dark:text-gray-300">
                    Date of Birth
                  </label>
                  <div>
                    <input
                      type="date"
                      id="dateofbirth"
                      name="date_birth"
                      onChange={setDefaultDate}
                      className="mt-2 p-[17px] w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800 w-full"
                      defaultValue={profile?.birthday}
                    />
                  </div>
                </div>
              </div>
              <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 lg:gap-8 justify-center w-full">
                <div className="w-full mb-4 lg:mt-6">
                  <label htmlFor="country" className="dark:text-gray-300">
                    Country
                  </label>
                  <Select
                    options={options}
                    value={value}
                    onChange={changeCountryHandler}
                  />
                </div>

                <div className="w-full mb-4 lg:mt-6 sm:mt-0">
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
              </div>
              <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 lg:gap-8 justify-center w-full">
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
                  className="text-[16px] whitespace-nowrap text-white bg-[#FF693B]  border border-[#FF693B] px-6 py-2 md:px-10 md:py-4 font-[600] rounded-lg  hover:bg-[#fff] hover:text-[#FF693B] transition-all duration-300"
                >
                  Update Profile
                </button>
              </div>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </div>
  );
};

export default Profile;
