// components/CheckoutButton.js
"use client";
import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";

// Initialize Stripe.js with your public key
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

export default function CheckoutButton({ items }) {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);

    const stripe = await stripePromise;

    // Send a request to create a checkout session
    const response = await fetch("/api/checkout_sessions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ items }),
    });

    const { id } = await response.json();

    // Redirect to Stripe Checkout
    const { error } = await stripe.redirectToCheckout({ sessionId: id });

    if (error) {
      console.error(error.message);
    }

    setLoading(false);
  };

  return (
    <button
      role="link"
      onClick={handleCheckout}
      disabled={loading}
      className="bg-blue-500 text-white px-4 py-2 rounded"
    >
      {loading ? "Processing..." : "Pay Now"}
    </button>
  );
}
