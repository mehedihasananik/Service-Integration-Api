import Link from "next/link";
import React from "react";

const GlobalButton = ({ path, title }) => {
  return (
    <Link href={path} className="btn btn-primary">
      {title}
    </Link>
  );
};

export default GlobalButton;
