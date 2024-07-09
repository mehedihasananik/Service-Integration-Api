"use client";
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import ServiceProductInfo from "@/Components/Utilites/ServiceProductInfo/ServiceProductInfo";
import PaymentInfo from "@/Components/Utilites/PaymentInfo/PaymentInfo";
import UserLoading from "@/Components/Utilites/UserLoading/UserLoading";
import { Button, Tabs } from "flowbite-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import { FaRegCircleCheck } from "react-icons/fa6";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import { FaCamera } from "react-icons/fa";

import { useMemo } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";
import toast from "react-hot-toast";

const SinglePage = ({ params }) => {
  const [services, setServices] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const [phone, setPhone] = useState("");

  const tabsRef = useRef(null);
  const [activeTab, setActiveTab] = useState(0);
  const [btnActive, setActiveBtn] = useState(0);
  const [checkoutActive, setcheckoutActive] = useState(0);

  const [value, setValue] = useState("");
  const [country, setCountry] = useState("");
  const options = useMemo(() => countryList().getData(), []);

  const [billingAddress, SetBillingAddress] = useState({});

  const changeCountryHandler = (value) => {
    setValue(value);
    setCountry(value.label);
  };

  const userDataString =
    typeof window !== "undefined"
      ? window.localStorage.getItem("userData")
      : null;
  const userData = userDataString ? JSON.parse(userDataString) : null;
  // console.log(params.id);
  // console.log(userData.id);

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

      SetBillingAddress(data);
      setCountry(data.country);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
      formData.append("first_name", firstName);
      formData.append("last_name", lastName);
      formData.append("country", country);
      formData.append("state", state);
      formData.append("city", city);
      formData.append("zip", zip);
      formData.append("address", address);
      formData.append("user_id", newUserData.id);

      axios({
        method: "post",
        url: "https://admin.envobyte.com/api/billing-address",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then(function (response) {
          if (response.data.success == true) {
            tabsRef.current?.setActiveTab(1);
            setActiveBtn(true);
            toast.success("Billing Address Submited");
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

  const handleCheckout = async () => {
    try {
      const result = await axios.post(
        "https://admin.envobyte.com/api/checkout",
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

  useEffect(() => {
    options.map((item) => {
      if (item.label == billingAddress?.country) {
        setValue(item);
      }
    });
  }, [billingAddress]);

  if (loading) {
    return <UserLoading />; // Show loading message while fetching data
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="w-full  my-0" id="cehckoutpage">
      {/*  */}
      <div>
        <div className="billing-button">
          {!btnActive ? (
            <h2 className="text-[25px] font-semibold text-gray-900 dark:text-white text-center pt-4">
              Billing Details
            </h2>
          ) : (
            <h2 className="text-[25px] font-semibold text-gray-900 dark:text-white text-center pt-4">
              Checkout Details
            </h2>
          )}

          <div className="button-container">
            <Button.Group className="d-flex gap-5">
              {btnActive ? (
                <Button
                  color="gray"
                  className={`${
                    btnActive ? "billing_btn" : ""
                  } billing_btn border-0`}
                  onClick={() => {
                    tabsRef.current?.setActiveTab(0);
                    setcheckoutActive(false);
                    setActiveBtn(false);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-check-circle-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                  </svg>{" "}
                  <span className="ml-2 billing_info">Billing Info</span>
                </Button>
              ) : (
                <Button
                  color="gray"
                  className={`${
                    btnActive ? "billing_btn disabled" : "billing_btn"
                  } common_btn`}
                  onClick={() => tabsRef.current?.setActiveTab(0)}
                >
                  <span
                    className="billing_checkout_digit"
                    style={{ backgroundColor: "green" }}
                  >
                    1
                  </span>
                  <span className="ml-2">Billing Info</span>
                </Button>
              )}

              <div className="btn_prograess"></div>
              {checkoutActive ? (
                <Button
                  color="gray"
                  className={`${
                    checkoutActive ? "checkout_btn" : ""
                  } common_btn disabled`}
                  onClick={() => tabsRef.current?.setActiveTab(1)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-check-circle-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                  </svg>{" "}
                  <span className="ml-2">Checkout Info</span>
                </Button>
              ) : (
                <Button
                  color="gray"
                  className={`${
                    checkoutActive ? "checkout_btn" : ""
                  } common_btn disabled ${btnActive ? "checkout_btn" : ""}`}
                  onClick={() => tabsRef.current?.setActiveTab(1)}
                >
                  <span
                    className="billing_checkout_digit"
                    style={{ backgroundColor: btnActive ? "green" : "" }}
                  >
                    2
                  </span>
                  <span className="ml-2">Checkout Info</span>
                </Button>
              )}
            </Button.Group>
          </div>
        </div>

        <div className="billing-tab">
          <Tabs className="flex justify-center border-none" ref={tabsRef}>
            <Tabs.Item
              className="border-none"
              icon={FaRegCircleCheck}
              active
              title="Billing Address"
            >
              <>
                <div className="flex justify-center">
                  <section className="bg-white antialiased dark:bg-gray-900 lg:w-[50%] xs:w-[100%]">
                    <form
                      className="mx-auto max-w-screen-xl px-4 2xl:px-0"
                      onSubmit={handleSubmit}
                    >
                      <div className="lg:flex lg:items-start lg:gap-12 xl:gap-16">
                        <div className="min-w-0 flex-1 space-y-8">
                          <div className="space-y-4">
                            <div>
                              <div className="lg:flex gap-3 mt-4">
                                <div className="lg:w-[49%] sm:w-[100%]">
                                  <label
                                    for="your_name"
                                    className="block py-3 text-sm font-medium text-gray-900 dark:text-white"
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
                                    defaultValue={billingAddress.first_name}
                                  />
                                </div>

                                <div className="lg:w-[49%] sm:w-[100%]">
                                  <label
                                    for="your_name"
                                    className="block py-3 text-sm font-medium text-gray-900 dark:text-white"
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
                                    defaultValue={billingAddress.last_name}
                                  />
                                </div>
                              </div>

                              <div className="lg:flex gap-3 mt-3">
                                <div className="lg:w-[49%] sm:w-[100%]">
                                  <label
                                    htmlFor="country"
                                    className="dark:text-gray-300"
                                  >
                                    Country
                                  </label>
                                  <Select
                                    options={options}
                                    value={value}
                                    name="country"
                                    onChange={changeCountryHandler}
                                  />
                                </div>

                                <div className="lg:w-[49%] sm:w-[100%] xs:pt-2 lg:pt-0">
                                  <label
                                    for="your_name"
                                    className="block py-2 text-sm font-medium text-gray-900 dark:text-white xs:py-3 lg:pt-0"
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
                                    defaultValue={billingAddress.state}
                                  />
                                </div>
                              </div>
                              {/* done */}
                              <div className="lg:flex gap-3 items-center mt-3">
                                <div className="lg:w-[49%] sm:w-[100%]">
                                  <label
                                    for="your_name"
                                    className="block text-sm font-medium text-gray-900 dark:text-white xs:py-3 lg:pt-0"
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
                                    defaultValue={billingAddress.city}
                                  />
                                </div>

                                <div className="lg:w-[49%] sm:w-[100%] xs:pt-2 lg:pt-0">
                                  <label
                                    for="zip"
                                    className="block text-sm font-medium text-gray-900 dark:text-white xs:py-3 lg:pt-0"
                                  >
                                    Zip
                                  </label>
                                  <input
                                    type="number"
                                    id="zip"
                                    name="zip"
                                    className="py-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                                    placeholder="Bonnie Green"
                                    required
                                    defaultValue={billingAddress.zip}
                                  />
                                </div>
                              </div>

                              <div className="sm:col-span-2 xs:pt-2 lg:pt-0">
                                <div>
                                  <label
                                    for="address"
                                    className="block text-sm font-medium text-gray-900 dark:text-white my-3"
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
                                    defaultValue={billingAddress.address}
                                  />
                                </div>
                              </div>

                              <div className="sm:col-span-2 pt-4">
                                <button
                                  type="submit"
                                  className="bg-[#FF693B] text-white hover:text-[#FF693B] flex px-[10%] py-4 items-center justify-center gap-2 rounded-lg border border-gray-200 px-5 py-2.5 text-sm font-medium text-gray-900 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600  dark:hover:text-white dark:focus:ring-gray-700 hover:bg-white mx-auto"
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
                <PaymentInfo productInfo={services} toChild />
              </div>
            </Tabs.Item>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
