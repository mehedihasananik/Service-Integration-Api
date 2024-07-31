import Link from "next/link";
import React from "react";

const GlobalButton = ({ path }) => {
  return (
    <Link href={path} className="btn btn-primary">
      Get a Quote
    </Link>
  );
};

export default GlobalButton;
