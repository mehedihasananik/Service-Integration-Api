import Image from "next/image";
import React from "react";

const CustomImage = ({ item, isFullscreen }) => {
  return (
    <Image
      unoptimized={true}
      height={1000}
      width={1000}
      src={item.original}
      alt=""
      style={{
        width: "100%",
        height: isFullscreen ? "auto" : "100%",
        objectFit: isFullscreen ? "contain" : "cover",
        objectPosition: "center",
      }}
    />
  );
};

export default CustomImage;
