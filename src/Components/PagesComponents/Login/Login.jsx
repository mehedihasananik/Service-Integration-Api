/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import { Checkbox, Label, TextInput } from "flowbite-react";
import Container from "@/Components/Container/Container";
import { FiArrowRight, FiEye, FiEyeOff } from "react-icons/fi"; // Import eye icons
import { HiMail } from "react-icons/hi";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import ReCAPTCHA from "react-google-recaptcha";
import { fetchData } from "@/config/apiRequests.js";
import UserLoading from "@/Components/Utilites/UserLoading/UserLoading";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");

    const requestData = {
      email,
      password,
    };

    try {
      const data = await fetchData(
        "https://admin.envobyte.com/api/user_login",
        "POST",
        requestData
      );

      if (data.success) {
        toast.success("Logged in successfully");
        localStorage.setItem("userData", JSON.stringify(data));
        router.push("/dashboard");
      } else {
        router.push("/");
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

  const handleCaptchaChange = (value) => {
    setCaptchaVerified(true);
  };

  // const session = useSession();
  // console.log(session?.data?.user);

  return (
    <div className="login_singUp overflow-hidden  md:my-5 md:py-5">
      <Container>
        {loading && (
          <div className="text-center">
            <UserLoading />{" "}
          </div>
        )}

        <div className="w-full flex justify-center md:pt-5">
          <div className="md:shadow-md  md:border rounded-lg  py-5 px-10  md:py-10 md:px-32">
            <div className="text-center pb-5 md:pb-14">
              <h3 className="text-[30px] md:text-[40px] text-[#333333] font-Raleway font-bold">
                Welcome back!
              </h3>
              <p className="text-[16px]  text-[#032333] font-Raleway font-semibold">
                Please log in to your account
              </p>
            </div>
            {/* <div className="flex flex-col md:flex-row pb-4 gap-y-4 md:gap-10  lg:pb-12">
              <button
                type="button"
                onClick={() => signIn("facebook")}
                className="flex justify-center items-center gap-2 font-Raleway border p-2 rounded-md hover:border-[#FF693B] transition-all duration-200"
              >
                <img src="/assets/fLogo.png" alt="" />

                <span className="text-[14px]text-[#032333]">
                  Continue with Facebook
                </span>
              </button>
              <button
                onClick={() => signIn("google")}
                type="button"
                className="flex justify-center items-center gap-2 font-Raleway border p-2 rounded-md hover:border-[#FF693B] transition-all duration-200"
              >
                <img src="/assets/gLogo.png" alt="" />
                <span className="text-[14px]text-[#032333]">
                  Continue with Google
                </span>
              </button>
            </div> */}
            <div className="flex items-center gap-x-5  md:pt-0">
              <span className="w-[50%] h-[1px] border"></span>{" "}
              <span className="text-[14px] font-Raleway text-[#032333] font-medium">
                Or
              </span>{" "}
              <span className="w-[50%] h-[1px] border"></span>
            </div>
            <div className="pt-4 md:pt-3">
              <form
                className="flex max-w-lg flex-col gap-4"
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
                    name="email"
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
                      name="password"
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
                    sitekey="6LeHdPIpAAAAAJoof-1ewzeYES0jvTrJ9_g09hBQ"
                    onChange={handleCaptchaChange}
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
                  href={"/registration"}
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
