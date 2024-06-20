"use client";
import React, { useEffect, useState } from "react";
import Container from "@/Components/Container/Container";

import { MdOutlinePayments } from "react-icons/md";

import toast from "react-hot-toast";

const PaymentInfo = ({ productInfo }) => {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  const [loading, setLoading] = useState(false); // Loading state
  console.log(productInfo);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://2pay-js.2checkout.com/v1/2pay.js";
    script.async = true;
    script.onload = () => setScriptLoaded(true);
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (scriptLoaded) {
      // Initialize 2Checkout script here
      // You can use window.TwoPayClient here
      if (window.TwoPayClient) {
        const jsPaymentClient = new window.TwoPayClient("254783275946");
        const component = jsPaymentClient.components.create("card");
        component.mount("#card-element");

        document
          .getElementById("payment-form")
          .addEventListener("submit", (event) => {
            event.preventDefault();
            setLoading(true); // Start loading indicator

            const billingDetails = {
              name: document.querySelector("#name").value,
            };

            jsPaymentClient.tokens
              .generate(component, billingDetails)
              .then((response) => {
                const params = {
                  token: response.token,
                  formAction:
                    "https://admin.envobyte.com/api/twocheckout/handle-payment",
                };
                doAjaxRequest(params);
              })
              .catch((error) => {
                console.error(error);
                setLoading(false); // Stop loading indicator on error
              });
          });
      }
    }
  }, [scriptLoaded]);

  const doAjaxRequest = (fparams) => {
    fetch(fparams.formAction, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRF-Token": getCsrfToken(),
      },
      body: JSON.stringify({
        ess_token: fparams.token,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        setLoading(false); // Stop loading indicator on response
        if (result.redirect) {
          window.location.href = result.redirect;
        } else if (result.success) {
          alert(result.msg);
        } else {
          console.log(result.error);
        }
      })
      .catch((error) => {
        setLoading(false); // Stop loading indicator on error
        toast.success("Payment is successful");
        console.error(error);
      });
  };

  const getCsrfToken = () => {
    // Function to retrieve the CSRF token from the server
    // Implement based on your backend framework
    // Example:
    // return csrfToken;
  };

  return (
    <>
      <div className="">
        <div>
          {/* payment details */}
          {scriptLoaded && (
            <div className="mt-10 bg-gray-50 p-5 lg:mt-0 rounded-lg">
              <p className="text-xl font-medium">Payment Details</p>
              <p className="text-gray-400 lg:mt-4">
                Complete your order by providing your payment details.
              </p>
              <div className="">
                <div className="lg:mt-10">
                  <form type="post" id="payment-form">
                    <div className="form-group flex flex-col">
                      <label
                        htmlFor="name"
                        className="label control-label text-[#313131] text-[14px] mb-[9px] font-[400]"
                      >
                        Name
                      </label>
                      <input
                        className="field form-control w-[95%] border border-[#cbcbcb] rounded-[3px] mb-2"
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter your name"
                      />
                    </div>

                    <div id="card-element"></div>

                    <div className="mt-6 border-t border-b py-2">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-gray-900">
                          Subtotal
                        </p>
                        <p className="font-semibold text-gray-900">
                          {" "}
                          ${productInfo?.package_price}
                        </p>
                      </div>
                    </div>
                    <div className="mt-6 flex items-center justify-between">
                      <p className="text-sm font-medium text-gray-900">Total</p>
                      <p className="text-2xl font-semibold text-gray-900">
                        ${productInfo?.package_price}
                      </p>
                    </div>
                    {loading ? (
                      <button
                        disabled
                        className="bg-[#FF693B] text-lg text-center font-bold px-4 py-2 text-white w-full rounded-md lg:mt-16"
                        type="submit"
                      >
                        Processing
                      </button>
                    ) : (
                      <button
                        className="bg-[#FF693B] text-lg text-center font-bold px-4 py-2 text-white w-full rounded-md lg:mt-16"
                        type="submit"
                      >
                        Pay Now
                      </button>
                    )}
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default PaymentInfo;
