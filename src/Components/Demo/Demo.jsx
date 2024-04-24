"use client";
import React, { useEffect, useState } from "react";
import { isAndroid, isIOS } from "react-device-detect";

const getDeviceType = () => {
  if (isAndroid) {
    return "Android";
  } else if (isIOS) {
    return "iOS";
  } else if (navigator.userAgent.match(/Windows Phone/i)) {
    return "Windows Phone";
  } else if (navigator.userAgent.match(/Windows/i)) {
    return "Windows";
  } else {
    return "Other";
  }
};

const getBrowserName = () => {
  const userAgent = navigator.userAgent;
  let browserName;
  const currentPath = window.location.pathname;

  if (userAgent.match(/Firefox/i)) {
    browserName = "Mozilla Firefox";
  } else if (userAgent.match(/Chrome/i)) {
    browserName = "Google Chrome";
  } else if (userAgent.match(/Safari/i)) {
    browserName = "Safari";
  } else if (userAgent.match(/Edg/i)) {
    browserName = "Microsoft Edge";
  } else if (userAgent.match(/Opera|OPR/i)) {
    browserName = "Opera";
  } else if (userAgent.match(/Trident/i) && userAgent.match(/MSIE/i)) {
    browserName = "Internet Explorer";
  } else {
    browserName = "Unknown";
  }

  return browserName;
};

const Demo = () => {
  const [deviceType, setDeviceType] = useState("");

  useEffect(() => {
    const browserName = getBrowserName();
    console.log("Your browser:", browserName);
  }, []);

  useEffect(() => {
    const detectedDeviceType = getDeviceType();
    setDeviceType(detectedDeviceType);
  }, [setDeviceType]);

  return <></>;
};

export default Demo;
