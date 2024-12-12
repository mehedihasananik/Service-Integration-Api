import React from "react";

const ContactUs = () => {
  return (
    <div
      id="contactus"
      className="app_contact flex miniDevice:justify-center md:items-center overflow-hidden py-[8%] md:py-[4%]"
    >
      <div className="max-w-[1520px] md:mx-auto md:px-[4%] xl:px-[2%] xxl:px-[4%] 4xl:px-[4%] flex justify-center">
        <div className="flex flex-col gap-y-3 md:gap-y-0 md:flex-row md:gap-x-10  items-center h-full w-[90%]">
          <div className="md:w-[50%]">
            <img
              className="w-[100%] h-[100%]"
              src="/assets/appContact.png"
              alt=""
            />
          </div>
          <div className="md:w-[50%]">
            <div className="text-white space-y-3 md:space-y-5 pt-[5%] md:pt-[0%]">
              <h2 className="font-Inter text-[22px] md:text-[40px] md:leading-tight xl:text-[68px] font-extrabold xl:leading-[72px] ">
                Let us know what you think!
              </h2>
              <p className="font-Inter text-[16px] lg:text-[28px] font-normal lg:leading-[39px] ">
                Your feedback matters! Share your thoughts. We&apos;re here to
                listen and help.
              </p>
              <div className="pt-[5%]">
                <a
                  href="mailto:support@envobyte.com"
                  className="font-Inter text-[#0A2C8C] bg-[#FFF] hover:bg-[#0A2C8C] hover:text-[#fff] transition-all duration-300 delay-75 rounded-[6px] text-[16px] font-semibold md:leading-[20px] px-[9.5%] py-[2%]"
                >
                  Contact us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
