"use client";
import { useState } from "react";
import { Checkbox, Label, TextInput } from "flowbite-react";
import Container from "@/Components/Container/Container";
import { FiArrowRight, FiEye, FiEyeOff } from "react-icons/fi"; // Import eye icons
import { HiMail } from "react-icons/hi";
import { IoMdLock } from "react-icons/io";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import ReCAPTCHA from "react-google-recaptcha";
import { fetchData } from "@/config/apiRequests.js";
import { loginApi } from "@/config/apis";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    const user_email = formData.get("user_email");
    const user_password = formData.get("user_password");

    const requestData = {
      user_email,
      user_password,
    };

    try {
      const data = await fetchData(`${loginApi}`, "POST", requestData);

      if (data.success) {
        toast.success("Logged in successfully");
        sessionStorage.setItem("userData", JSON.stringify(data));
        router.push("/dashboard");
      }
      if (data.ErrorMessage) {
        toast.error(data.ErrorMessage);
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Login failed. Please try again later.");
    }

    setLoading(false);
  };
  function onChange() {}

  return (
    <div className="login_singUp pt-5">
      <Container>
        {loading && <div className="loader">Loading...</div>}
        <div className="w-full h-fit flex justify-center pt-5">
          <div className="shadow-md  border rounded-lg py-10 px-10  md:py-10 md:px-12">
            <div className="text-center pb-10 md:pb-14">
              <h3 className="text-[32px] md:text-[40px] text-[#333333] font-Raleway font-bold">
                Welcome back!
              </h3>
              <p className="text-[16px]  text-[#032333] font-Raleway font-semibold">
                Please log in to your account
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-10 pb-8 lg:pb-12">
              <button className="flex justify-center items-center gap-2 font-Raleway border p-2 rounded-md hover:border-[#FF693B] transition-all duration-200">
                <img src="/assets/gLogo.png" alt="" />{" "}
                <span className="text-[14px]text-[#032333]">
                  Continue with Google
                </span>
              </button>
              <button className="flex justify-center items-center gap-2 font-Raleway border p-2 rounded-md hover:border-[#FF693B] transition-all duration-200">
                <img src="/assets/fLogo.png" alt="" />{" "}
                <span className="text-[14px]text-[#032333]">
                  Continue with Facebook
                </span>
              </button>
            </div>
            <div className="flex items-center gap-x-5  md:pt-0">
              <span className="w-[50%] h-[1px] border"></span>{" "}
              <span className="text-[14px] font-Raleway text-[#032333] font-medium">
                Or
              </span>{" "}
              <span className="w-[50%] h-[1px] border"></span>
            </div>
            <div className="pt-4 md:pt-8">
              <form
                className="flex max-w-md flex-col gap-4"
                onSubmit={handleLogin}
              >
                <div>
                  <div className="mb-2 block">
                    <Label
                      className="text-[16px] font-Raleway text-[#032333] font-[500] "
                      htmlFor="email1"
                      value="Email"
                    />
                  </div>
                  <TextInput
                    name="user_email"
                    id="email1"
                    type="email"
                    icon={HiMail}
                    placeholder="Enter your email address"
                    required
                  />
                </div>
                <div>
                  <div className="mb-2 block relative">
                    <Label
                      className="text-[16px] font-Raleway text-[#032333] font-[500]"
                      htmlFor="password1"
                      value="Password"
                    />
                    <TextInput
                      id="password1"
                      name="user_password"
                      type={showPassword ? "text" : "password"} // Toggle password visibility
                      placeholder="Enter your password"
                      required
                    />
                    <button
                      type="button"
                      className="absolute top-6 inset-y-0 right-0 flex items-center px-3 text-gray-500 focus:outline-none"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <FiEye /> : <FiEyeOff />}
                    </button>
                  </div>
                </div>
                <div>
                  <ReCAPTCHA
                    sitekey="6LcqZLopAAAAACmhsdtqnY3m0QHY6ELWc2QoAlVO"
                    onChange={onChange}
                  />
                </div>
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <Checkbox
                      className="text-[14px] text-[#FF693B] focus:outline-none focus:ring focus:ring-white cursor-pointer font-[500]"
                      color="success"
                      id="remember"
                    />
                    <Label
                      className="text-[14px] font-Raleway px-2 font-[600]"
                      htmlFor="remember"
                    >
                      Keep me logged in
                    </Label>
                  </div>
                  <Link
                    href={"/forget-password"}
                    className="text-[14px] font-Raleway font-[500] text-[#FF693B]"
                  >
                    Forgot password?
                  </Link>
                </div>
                <button
                  className="bg-[#FF693B] text-[16px] font-semibold font-Raleway md:mt-6 py-2 hover:bg-[#fff] hover:text-[#FF693B] flex justify-center items-center rounded-md text-white border border-[#FF693B] transition-all duration-300"
                  type="submit"
                >
                  Login{" "}
                  <span>
                    <FiArrowRight className="text-[20px] mx-1" />
                  </span>
                </button>
              </form>
            </div>
            <div className="flex justify-center items-center pt-5  md:pt-8">
              <div className="text-[14px] font-Raleway font-[500] gap-1 ">
                <span className="text-[#032333]">
                  {" "}
                  Don&apos;t have an account?{" "}
                </span>
                <Link
                  href={"/signup"}
                  className=' text-[#FF693B]  border-b border-[#FF693B] border-["1px solid"] font-[500]'
                >
                  Create account
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Login;
