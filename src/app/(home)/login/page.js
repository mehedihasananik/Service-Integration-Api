// pages/login.js
"use client";
import withAuthRedirect from "@/Components/Utilites/WithAuthRedirect/WithAuthRedirect";
import Login from "@/Components/PagesComponents/Login/Login";

const LoginPage = () => {
  return <Login />;
};

export default withAuthRedirect(LoginPage);
