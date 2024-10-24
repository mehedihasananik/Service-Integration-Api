"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { successApi } from "@/config/apis";
import GlobalButtonColored from "../Utilites/GlobalButton/GlobalButtonColored";

export default function SuccessComponent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id"); // Get the session_id from the query params
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  useEffect(() => {
    if (sessionId) {
      // Function to send the POST request to the API
      const postSuccessData = async () => {
        try {
          const response = await fetch(`${successApi}`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              session_id: sessionId,
              payment_status: "paid",
            }),
          });

          if (!response.ok) {
            throw new Error("Failed to payment");
          }

          const result = await response.json();
          console.log(result.success);
          setSuccessMessage(result.success);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };

      postSuccessData(); // Call the function to send data when the component mounts
    }
  }, [sessionId]);
  console.log(error);

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      {/* Display loading, success message, or error */}
      {loading && <p>Processing payment data...</p>}
      {successMessage && (
        <div className="text-green-500">
          <h1 className="text-2xl font-bold">Payment Successful!</h1>
          <p>
            Thank you for your purchase. Your transaction has been completed
            successfully.
          </p>
          {successMessage}
        </div>
      )}
      {error && <p className="text-red-500">Error: {error}</p>}
      <div className="mt-20">
        <GlobalButtonColored
          path="/service-requirements"
          title="Submit Your Requirement"
          className="btn btn-primary w-[45%] md:w-[100%] text-center mt-10"
        />
      </div>
    </div>
  );
}
