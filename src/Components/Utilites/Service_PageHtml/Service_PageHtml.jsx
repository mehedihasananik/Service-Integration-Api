"use client";
import React from "react";
import parse from "html-react-parser";

const Service_PageHtml = ({ serviceDetails }) => {
  return <div>{parse(serviceDetails)}</div>;
};

export default Service_PageHtml;
