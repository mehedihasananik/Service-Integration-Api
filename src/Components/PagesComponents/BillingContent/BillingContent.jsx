"use client";
import { Toast } from "flowbite-react";
import React, { useEffect, useMemo, useRef, useState } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import axios from "axios";

const BillingContent = () => {
  const tabsRef = useRef(null);

  const [billingAddress, SetBillingAddress] = useState({});
  const [value, setValue] = useState("");
  const [country, setCountry] = useState("");
  const options = useMemo(() => countryList().getData(), []);

  const changeCountryHandler = (value) => {
    setValue(value);
    setCountry(value.label);
  };

  const fetchData = async () => {
    const userData =
      typeof window !== "undefined"
        ? JSON.parse(localStorage.getItem("userData"))
        : null;

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

      SetBillingAddress(data);
      setCountry(data.country);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    options.map((item) => {
      if (item.label == billingAddress?.country) {
        setValue(item);
      }
    });
  }, [billingAddress]);

  const userDataString =
    typeof window !== "undefined"
      ? window.localStorage.getItem("userData")
      : null;
  const userData = userDataString ? JSON.parse(userDataString) : null;

  const { register, handleSubmit, error, reset } = useForm();

  useEffect(() => {
    reset({
      first_name: billingAddress?.first_name,
      last_name: billingAddress?.last_name,
      city: billingAddress?.city,
      state: billingAddress?.state,
      zip: billingAddress?.zip,
      address: billingAddress?.address,
    });
  }, [billingAddress, reset]);

  const onSubmit = (data) => {
    const user_id = userData.id;
    const allData = { ...data, country, user_id };

    try {
      axios({
        method: "post",
        url: "http://192.168.10.14:8000/api/billing-address",
        data: allData,
      })
        .then(function (response) {
          console.log(response);
          if (response.data.success == true) {
            toast.success("Billing Address Submited");
          } else {
            toast.error("Billing address faild submited");
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

  return (
    <div id="billingpage">
      <h1 className="text-center py-9 lg:text-3xl md:text-2xl sm:text-xl xs:text-xl font-serif font-extrabold mb-2 dark:text-white">
        Update Billing Information
      </h1>
      <div className="flex justify-center">
        <section className="bg-white antialiased dark:bg-gray-900 w-[50%]">
          <form
            className="mx-auto max-w-screen-xl px-4 2xl:px-0"
            onSubmit={handleSubmit(onSubmit)}
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
                        {...register("first_name")}
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
                        {...register("last_name")}
                      />
                    </div>
                    <div className="w-full">
                      <label htmlFor="country" className="dark:text-gray-300">
                        Country
                      </label>
                      <Select
                        options={options}
                        value={value}
                        name="country"
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
                        {...register("state")}
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
                        {...register("city")}
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
                        type="number"
                        id="zip"
                        name="zip"
                        className="mt-3 py-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                        placeholder="Bonnie Green"
                        {...register("zip")}
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
                          {...register("address")}
                          required
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-2 pt-4">
                      <button
                        type="submit"
                        className="bg-[#FF693B] text-white hover:text-[#FF693B] flex w-[30%] py-4 items-center justify-center gap-2 rounded-lg border border-gray-200 px-5 py-2.5 text-sm font-medium text-gray-900 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600  dark:hover:text-white dark:focus:ring-gray-700 hover:bg-white mx-auto"
                      >
                        Update
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
