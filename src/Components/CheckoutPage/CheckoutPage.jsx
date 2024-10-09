"use client";

import React, { useState } from "react";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";

const CheckoutPage = ({ amount }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    if (!stripe || !elements) {
      setErrorMessage("Stripe.js has not loaded yet.");
      setLoading(false);
      return;
    }

    try {
      // Create payment intent when the user submits the form
      const response = await fetch("/api/create-payment-intent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount: amount * 100 }), // Stripe expects amount in cents
      });

      const data = await response.json();
      const clientSecret = data.clientSecret;

      // Confirm the payment after receiving the clientSecret
      const { error } = await stripe.confirmPayment({
        elements,
        clientSecret,
        confirmParams: {
          return_url: `http://www.envobyte.shop/payment-success?amount=${amount}`,
        },
      });

      if (error) {
        setErrorMessage(error.message);
        setLoading(false);
      } else {
        console.log("Payment successful");
      }
    } catch (error) {
      setErrorMessage(`Error: ${error.message}`);
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-2 rounded-md">
      {/* Render the Stripe PaymentElement without initializing a payment */}
      <PaymentElement />

      {errorMessage && <div>{errorMessage}</div>}

      <button
        disabled={!stripe || loading}
        className="text-white w-full p-5 bg-black mt-2 rounded-md font-bold disabled:opacity-50 disabled:animate-pulse"
      >
        {!loading ? `Pay $${amount}` : "Processing..."}
      </button>
    </form>
  );
};

export default CheckoutPage;
