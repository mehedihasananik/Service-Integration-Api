import Link from "next/link";
import React from "react";

const GlobalButtonHovered = ({ path, title, className }) => {
  return (
    <Link href={path} className={className}>
      {title}
    </Link>
  );
};

export default GlobalButtonHovered;
