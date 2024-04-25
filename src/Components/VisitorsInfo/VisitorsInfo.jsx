"use client";
import React, { useEffect, useState } from "react";
import { isAndroid, isIOS } from "react-device-detect";
import axios from "axios";
import ip from "ip";

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

const VisitorsInfo = ({ currentPage }) => {
  const [deviceType, setDeviceType] = useState("");

  useEffect(() => {
    const detectedDeviceType = getDeviceType();
    setDeviceType(detectedDeviceType);
  }, []);

  // useEffect(() => {
  //   const browserName = getBrowserName();
  //   const postData = {
  //     hit_log: `page:${currentPage},device:${deviceType},ip:${ip.address()},browser:${browserName}`,
  //   };

  //   axios
  //     .post("http://192.168.10.14:8000/api/hit_log", postData)
  //     .then((response) => {
  //       console.log("Post request successful:", response.data);
  //     })
  //     .catch((error) => {
  //       console.error("Error making post request:", error);
  //     });
  // }, [currentPage, deviceType]);

  return <></>;
};

export default VisitorsInfo;
