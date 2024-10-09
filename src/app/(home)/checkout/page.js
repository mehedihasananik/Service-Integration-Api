"use client";
import CheckoutPage from "@/Components/CheckoutPage/CheckoutPage";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useState } from "react";

// Ensure the public key is set
if (process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY === undefined) {
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined");
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

const Checkout = () => {
  const amount = 49.99;
  const [clientSecret, setClientSecret] = useState(null);

  // Function to create payment intent when user clicks "Pay"
  const handlePayClick = async () => {
    try {
      const response = await fetch("/api/create-payment-intent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount: amount * 100 }), // Stripe expects amount in cents
      });

      const data = await response.json();
      if (data.clientSecret) {
        setClientSecret(data.clientSecret); // Set clientSecret after payment intent is created
      } else {
        throw new Error("Failed to create payment intent");
      }
    } catch (error) {
      console.error("Error creating payment intent:", error);
    }
  };

  return (
    <main className="max-w-6xl mx-auto p-10 text-white text-center border m-10 rounded-md bg-gradient-to-tr from-blue-500 to-purple-500">
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold mb-2">Sonny</h1>
        <h2 className="text-2xl">
          has requested
          <span className="font-bold"> ${amount}</span>
        </h2>
      </div>

      {!clientSecret ? (
        // Render a button to trigger the payment intent creation
        <button
          className="text-white w-full p-5 bg-black mt-2 rounded-md font-bold"
          onClick={handlePayClick}
        >
          Proceed to Pay ${amount}
        </button>
      ) : (
        // Render Elements provider with clientSecret once available
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutPage amount={amount} />
        </Elements>
      )}
    </main>
  );
};

export default Checkout;
