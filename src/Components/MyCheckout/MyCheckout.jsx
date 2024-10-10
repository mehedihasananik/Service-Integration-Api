import { useRouter } from "next/navigation";
import React, { useState } from "react";

const MyCheckout = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter(); // For navigation

  const handleCheckout = async () => {
    setLoading(true);
    setError(null);

    const data = {
      user_id: 1,
      service_package: 1,
      sevice_items_id: 1,
      package_price: 6800,
      payment_status: "unpaid",
      order_status: "Requirement Needed",
    };

    try {
      const response = await fetch("http://192.168.10.16:8000/api/checkout", {
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

      // Manually append the URL to the query string
      router.push(`/checkout?url=${encodeURIComponent(result.url)}`);
    } catch (err) {
      setError("Error during checkout: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>MyCheckout</h1>
      <button onClick={handleCheckout} disabled={loading}>
        {loading ? "Processing..." : "Checkout"}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default MyCheckout;
