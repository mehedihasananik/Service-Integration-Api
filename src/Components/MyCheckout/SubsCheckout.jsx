import { checkoutApi } from "@/config/apis";
import { useState } from "react";
import { toast } from "react-hot-toast";

const SubsCheckout = ({
  itemId,
  package_price,
  sevice_items_id,
  isEnabled,
  setValidationError,
  email,
  handleCheckoutValidation,
  handleOrderClick,
  checkout,
  setEmailError, // Add this prop to handle email error
}) => {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    let hasErrors = false;

    // Check for checkbox
    if (!isEnabled) {
      setValidationError(true);
      hasErrors = true;
    }

    // Check for email
    if (!email) {
      setEmailError("Email is required.");
      hasErrors = true;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("Please enter a valid email address.");
      hasErrors = true;
    }

    if (hasErrors) {
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
      email: email,
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
    let hasErrors = false;

    // Check for checkbox
    if (!isEnabled) {
      setValidationError(true);
      hasErrors = true;
    }

    // Check for email
    if (!email) {
      setEmailError("Email is required.");
      hasErrors = true;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("Please enter a valid email address.");
      hasErrors = true;
    }

    // If there are no errors, fire handleOrderClick and proceed to handleCheckout
    if (!hasErrors) {
      setValidationError(false); // Clear any previous validation errors
      handleOrderClick(checkout);
      handleCheckout(); // Proceed with checkout
    }
  };

  return (
    <div>
      <button
        className="btn btn-secondary py-3"
        onClick={handleCombinedActions}
        disabled={loading}
      >
        {loading ? "Processing..." : "Proceed To Checkout"}
      </button>
    </div>
  );
};

export default SubsCheckout;
