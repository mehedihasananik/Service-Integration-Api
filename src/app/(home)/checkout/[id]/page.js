"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ServiceProductInfo from "@/Components/Utilites/ServiceProductInfo/ServiceProductInfo";
import PaymentInfo from "@/Components/Utilites/PaymentInfo/PaymentInfo";
import UserLoading from "@/Components/Utilites/UserLoading/UserLoading";
import { Tabs } from "flowbite-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import { FaRegCircleCheck } from "react-icons/fa6";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import { FaCamera } from "react-icons/fa";

const SinglePage = ({ params }) => {
  const [services, setServices] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const [phone, setPhone] = useState("");
  const [countryCodeShow, setCountryCodeShow] = useState();

  const handleOnChangeCountryCode = (value, country) => {
    setPhone(value);
    setCountryCodeShow("+" + country.dialCode);
  };

  const userDataString =
    typeof window !== "undefined"
      ? window.localStorage.getItem("userData")
      : null;
  const userData = userDataString ? JSON.parse(userDataString) : null;

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log(event.target.country_code.value);
  };

  const handleCheckout = async () => {
    try {
      const result = await axios.post(
        "http://192.168.10.14:8000/api/checkout",
        {
          user_id: userData?.id,
          order_id: params.id,
        }
      );
      setServices(result.data);
      setLoading(false); // Set loading to false once data is fetched
      console.log(result.data);
    } catch (err) {
      setError(err.message);
      setLoading(false); // Set loading to false if there's an error
    }
  };

  useEffect(() => {
    if (userData && params.id) {
      handleCheckout();
    } else {
      setError("User data or params.id is missing.");
      setLoading(false); // Set loading to false if there's missing data
    }
  }, []);

  if (loading) {
    return <UserLoading />; // Show loading message while fetching data
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="w-full  my-0">
      {/*  */}
      <div>
        <Tabs className="flex justify-center border-none">
          <Tabs.Item
            className="border-none"
            icon={FaRegCircleCheck}
            active
            title="Billing Address"
            id="billing_address"
          >
            <>
              <div className="flex justify-center">
                <section class="bg-white pt-0 antialiased dark:bg-gray-900 w-[50%]">
                  <form
                    class="mx-auto max-w-screen-xl px-4 2xl:px-0"
                    onSubmit={handleSubmit}
                  >
                    <div class="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12 xl:gap-16">
                      <div class="min-w-0 flex-1 space-y-8">
                        <div class="space-y-4">
                          <h2 class="text-xl font-semibold text-gray-900 dark:text-white">
                            Delivery Details
                          </h2>

                          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            {/* start first name and last name */}
                            <div>
                              <label
                                for="your_name"
                                class="block py-4 text-sm font-medium text-gray-900 dark:text-white"
                              >
                                First Name
                              </label>
                              <input
                                type="text"
                                id="first_name"
                                className="py-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                                placeholder="Enter Your First Name"
                                required
                              />
                            </div>

                            <div>
                              <label
                                for="your_name"
                                class="block py-4 text-sm font-medium text-gray-900 dark:text-white"
                              >
                                Last Name
                              </label>
                              <input
                                type="text"
                                id="last_name"
                                className="py-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                                placeholder="Enter Your Last Name"
                                required
                              />
                            </div>

                            {/* end first name and last name */}

                            <div>
                              <label
                                for="email"
                                class="block py-2 text-sm font-medium text-gray-900 dark:text-white"
                              >
                                Email
                              </label>
                              <input
                                type="text"
                                id="email"
                                name="email"
                                className="py-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                                placeholder="Enter Your Email"
                                required
                              />
                            </div>

                            {/* end state  */}

                            <div className="w-full mb-2 lg:mt-1">
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
                                className="mt-1 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                                placeholder="Enter Your Phone Number"
                                onChange={handleOnChangeCountryCode}
                              />
                            </div>

                            <div>
                              <label
                                htmlFor="country_code"
                                className="dark:text-gray-300"
                              >
                                Country Code
                              </label>

                              <input
                                type="text"
                                name="country_code"
                                className="mt-2 p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                                placeholder="Enter Your Country Code"
                                defaultValue={countryCodeShow}
                              />
                            </div>

                            <div>
                              <label
                                htmlFor="country_code"
                                className="dark:text-gray-300"
                              >
                                Country
                              </label>

                              <input
                                type="text"
                                name="country"
                                className="mt-2 p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                                placeholder="Enter Your Country"
                              />
                            </div>

                            <div>
                              <label
                                for="your_name"
                                class="block py-2 text-sm font-medium text-gray-900 dark:text-white"
                              >
                                State
                              </label>
                              <input
                                type="text"
                                id="state"
                                className="py-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                                placeholder="State"
                                required
                              />
                            </div>

                            {/* done */}

                            <div>
                              <label
                                for="your_name"
                                class="block text-sm font-medium text-gray-900 dark:text-white mt-3"
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
                                class="block text-sm font-medium text-gray-900 dark:text-white"
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

                            <div>
                              <label
                                for="address"
                                class="block text-sm font-medium text-gray-900 dark:text-white mt-2"
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

                            <div class="sm:col-span-2 pt-4">
                              <button
                                type="submit"
                                class="bg-[#FF693B] text-white hover:text-[#FF693B] flex w-[30%] py-4 items-center justify-center gap-2 rounded-lg border border-gray-200 px-5 py-2.5 text-sm font-medium text-gray-900 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600  dark:hover:text-white dark:focus:ring-gray-700 hover:bg-white mx-auto"
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
            </>
          </Tabs.Item>

          <Tabs.Item icon={FaRegCircleCheck} title="Checkout">
            <div className="flex justify-center gap-x-10 ">
              <ServiceProductInfo productInfo={services} />
              <PaymentInfo productInfo={services} />
            </div>
          </Tabs.Item>
          <Tabs.Item icon={FaRegCircleCheck} title="Thank You">
            This is{" "}
            <span className="font-medium text-gray-800 dark:text-white">
              Settings associated content
            </span>
            . Clicking another tab will toggle the visibility of this one for
            the next. The tab JavaScript swaps classes to control the content
            visibility and styling.
          </Tabs.Item>
        </Tabs>
      </div>
    </div>
  );
};

export default SinglePage;
