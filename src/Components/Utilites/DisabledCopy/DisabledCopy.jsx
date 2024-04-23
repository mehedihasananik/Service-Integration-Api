"use client";
import React from "react";

const DisabledCopy = ({ children }) => {
  <div onContextMenu={(e) => e.preventDefault()}>{children}</div>;
};

export default DisabledCopy;
