import { checkoutApi } from "@/config/apis";
import { useState } from "react";

const MyCheckout = ({ itemId, package_price, sevice_items_id }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleCheckout = async () => {
    setLoading(true);
    setError(null);

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
        throw new Error("Failed to process the request");
      }

      const result = await response.json();

      // Redirect to the result.url directly
      window.location.href = result.url;
    } catch (err) {
      setError("Error during checkout: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button
        className="btn btn-secondary py-2"
        onClick={handleCheckout}
        disabled={loading}
      >
        {loading ? "Processing..." : "Pay Now"}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default MyCheckout;
