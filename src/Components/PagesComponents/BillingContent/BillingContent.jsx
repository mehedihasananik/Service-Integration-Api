"use client";
import { Toast } from "flowbite-react";
import React, { useMemo, useRef, useState } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";
import toast from "react-hot-toast";

const BillingContent = () => {
  const tabsRef = useRef(null);

  const [value, setValue] = useState("");
  const [country, setCountry] = useState("");
  const options = useMemo(() => countryList().getData(), []);

  const changeCountryHandler = (value) => {
    setValue(value);
    setCountry(value.label);
  };

  const userDataString =
    typeof window !== "undefined"
      ? window.localStorage.getItem("userData")
      : null;
  const userData = userDataString ? JSON.parse(userDataString) : null;

  const handleSubmit = async (event) => {
    event.preventDefault();

    const firstName = event.target.first_name.value;
    const lastName = event.target.last_name.value;
    const state = event.target.state.value;
    const city = event.target.city.value;
    const zip = event.target.zip.value;
    const address = event.target.address.value;

    const newUserData = JSON.parse(localStorage.getItem("userData"));
    try {
      const formData = new FormData();
      formData.append("firstName", firstName);
      formData.append("lastName", lastName);
      formData.append("country", country);
      formData.append("state", state);
      formData.append("city", city);
      formData.append("zip", zip);
      formData.append("address", address);
      formData.append("user_id", newUserData.id);

      axios({
        method: "post",
        url: "http://192.168.5.240:8000/api/billing-address",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then(function (response) {
          if (response.data.success == true) {
            tabsRef.current?.setActiveTab(1);
            setActiveBtn(true);
            setcheckoutActive(true);
            Toast.success("Billing Address Submited");
          } else {
            toast.error("Billing address faild submited");
          }
        })
        .catch(function (response) {
          console.log(response);
        });
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };
  return (
    <div>
      <div className="flex justify-center">
        <section className="bg-white antialiased dark:bg-gray-900 w-[50%]">
          <form
            className="mx-auto max-w-screen-xl px-4 2xl:px-0"
            onSubmit={handleSubmit}
          >
            <div className=" lg:flex lg:items-start lg:gap-12 xl:gap-16">
              <div className="min-w-0 flex-1 space-y-8">
                <div className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {/* start first name and last name */}
                    <div>
                      <label
                        for="your_name"
                        className="block py-4 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        id="first_name"
                        name="first_name"
                        className="py-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                        placeholder="Enter Your First Name"
                        required
                      />
                    </div>

                    <div>
                      <label
                        for="your_name"
                        className="block py-4 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="last_name"
                        name="last_name"
                        className="py-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                        placeholder="Enter Your Last Name"
                        required
                      />
                    </div>
                    <div className="w-full">
                      <label htmlFor="country" className="dark:text-gray-300">
                        Country
                      </label>
                      <Select
                        options={options}
                        value={value}
                        onChange={changeCountryHandler}
                      />
                    </div>

                    <div>
                      <label
                        for="your_name"
                        className="block py-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        State
                      </label>
                      <input
                        type="text"
                        id="state"
                        name="state"
                        className="py-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                        placeholder="State"
                        required
                      />
                    </div>

                    {/* done */}

                    <div>
                      <label
                        for="your_name"
                        className="block text-sm font-medium text-gray-900 dark:text-white mt-3"
                      >
                        City
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        className="py-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                        placeholder="Bonnie Green"
                        required
                      />
                    </div>

                    <div>
                      <label
                        for="zip"
                        className="block text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Zip
                      </label>
                      <input
                        type="text"
                        id="zip"
                        name="zip"
                        className="mt-3 py-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                        placeholder="Bonnie Green"
                        required
                      />
                    </div>
                    <div className="sm:col-span-2 pt-4">
                      <div>
                        <label
                          for="address"
                          className="block text-sm font-medium text-gray-900 dark:text-white mt-2"
                        >
                          Address
                        </label>
                        <input
                          type="text"
                          id="address"
                          name="address"
                          className="py-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                          placeholder="Bonnie Green"
                          required
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-2 pt-4">
                      <button
                        type="submit"
                        className="bg-[#FF693B] text-white hover:text-[#FF693B] flex w-[30%] py-4 items-center justify-center gap-2 rounded-lg border border-gray-200 px-5 py-2.5 text-sm font-medium text-gray-900 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600  dark:hover:text-white dark:focus:ring-gray-700 hover:bg-white mx-auto"
                      >
                        Continue
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default BillingContent;
