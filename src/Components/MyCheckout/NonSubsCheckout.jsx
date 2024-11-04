"use client";
import { checkoutApi } from "@/config/apis";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { motion, AnimatePresence } from "framer-motion";

const NonSubsCheckout = ({
  itemId,
  package_price,
  sevice_items_id,
  isEnabled,
  handleOrderClick,
  checkout,
  setValidationError = () => {},
}) => {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    if (!isEnabled) {
      setValidationError(true);
      return;
    }

    setLoading(true);
    setValidationError(false);

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

      if (result && result.url) {
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
  const handleCombinedActions = () => {
    if (!isEnabled) {
      setValidationError(true);
      return; // Prevent handleOrderClick if validationError is true
    }
    setValidationError(false); // Clear any previous validation errors
    handleOrderClick(checkout); // Trigger handleOrderClick
    handleCheckout(); // Proceed with checkout
  };

  return (
    <div className="flex flex-col">
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="btn btn-secondary py-3"
        onClick={handleCombinedActions}
        disabled={loading}
      >
        {loading ? "Processing..." : "Proceed To Checkout"}
      </motion.button>
    </div>
  );
};

export default NonSubsCheckout;
