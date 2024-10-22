"use client";

import { checkoutApi } from "@/config/apis";
import { useState } from "react";
import { toast } from "react-hot-toast";

const NonSubsCheckout = ({
  itemId,
  package_price,
  sevice_items_id,
  isEnabled,
  setValidationError = () => {}, // Set a default empty function
}) => {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    // Check if terms are accepted
    if (!isEnabled) {
      toast.error("Please accept the Terms & Conditions before proceeding."); // Toast message
      setValidationError(true); // Show validation warning message
      return;
    }

    setLoading(true);
    setValidationError(false); // Clear validation error when conditions are met

    const data = {
      user_id: 1,
      service_package: itemId,
      sevice_items_id: sevice_items_id,
      package_price: package_price,
      payment_status: "unpaid",
      order_status: "Requirement Needed",
    };

    try {
      const response = await fetch(`${checkoutApi}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`Failed to process the request: ${response.status}`);
      }

      const result = await response.json();

      // Check if the result has the correct structure
      if (result && result.url) {
        // Redirect to the URL returned from the API
        window.location.href = result.url;
      } else {
        throw new Error("Invalid API response: missing URL.");
      }
    } catch (err) {
      console.error("Error during checkout:", err);
      toast.error("Error during checkout: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button
        className={`btn btn-secondary py-3`}
        onClick={handleCheckout}
        disabled={loading}
      >
        {loading ? "Processing..." : "Proceed To Checkout"}
      </button>

      {/* Validation warning message */}
    </div>
  );
};

export default NonSubsCheckout;
