"use client";
import Profile from "@/Components/Profile/Profile";
import IsAuth from "@/Components/isAuth/isAuth";
import React from "react";

const ProfilePage = () => {
  return (
    <div className="bg-[#FCFCFC]">
      <Profile />
    </div>
  );
};

export default IsAuth(ProfilePage);
