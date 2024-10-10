"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import Container from "@/Components/Container/Container";

const Checkout = () => {
  const searchParams = useSearchParams();
  const url = searchParams.get("url"); // Access the URL query param

  return (
    <Container>
      <h1>Heres Your Payment Option</h1>
      {url ? (
        <p className="text-4xl">
          <br />
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-400"
          >
            Pay Now
          </a>
        </p>
      ) : (
        <p>No URL provided</p>
      )}
    </Container>
  );
};

export default Checkout;
