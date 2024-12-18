import Container from "@/Components/Container/Container";
import { link } from "fs";
import Link from "next/link";
import React from "react";
import {
  FaArrowRight,
  FaWordpress,
  FaAndroid,
  FaPaintBrush,
  FaGlobe,
} from "react-icons/fa";

const ServiceCard = ({ icon, title, description, color, link }) => (
  <Link href={`${link}`}>
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group border border-gray-100">
      <div className="p-8 h-full flex flex-col">
        <div className="flex items-center mb-6">
          <div
            className={`p-4 rounded-full ${color} text-white group-hover:scale-110 transition-all duration-300`}
          >
            {icon}
          </div>
          <h3
            className={`text-xl font-bold ml-4 text-gray-800 group-hover:text-${color} transition-colors duration-300`}
          >
            {title}
          </h3>
        </div>
        <p className="text-gray-600 mb-6 flex-grow line-clamp-2">
          {description}
        </p>
        <button
          className={`${color.replace(
            "bg-",
            "text-"
          )} font-semibold flex items-center transition-all duration-300 group-hover:translate-x-2`}
        >
          Learn More
          <FaArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  </Link>
);

const ServicePromotion = () => {
  const featuredServices = [
    {
      icon: <FaWordpress className="text-3xl" />,
      title: "WordPress Development",
      description:
        "Custom, feature-rich WordPress websites tailored to your needs.",
      color: "bg-blue-600",
      link: `https://www.envobyte.com/services/affordable-wordpress-website-development-service/`,
    },
    {
      icon: <FaAndroid className="text-3xl" />,
      title: "Android App Development",
      description:
        "High-quality, user-friendly Android apps that drive results.",
      color: "bg-green-500",
      link: `https://www.envobyte.com/services/best-android-app-development-service/`,
    },
    {
      icon: <FaPaintBrush className="text-3xl" />,
      title: "Logo Design",
      description:
        "Captivating logos that elevate your brand and leave a lasting impression.",
      color: "bg-purple-500",
      link: `https://www.envobyte.com/services/eye-catching-logo-design/`,
    },
    {
      icon: <FaGlobe className="text-3xl" />,
      title: "Custom Website Development",
      description:
        "Tailored websites that combine cutting-edge design with seamless functionality.",
      color: "bg-indigo-500",
      link: `https://www.envobyte.com/services/custom-website-development/`,
    },
  ];

  return (
    <Container>
      <section id="services" className="app_space pt-[2%] md:pt-[3%]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-5 md:mb-16">
            <h2 className="app_heading font-extrabold mb-4 ">
              Discover Our
              <span className="text-[#123390] mx-3 relative">
                Services
                <span className="absolute bottom-0 left-0 w-full h-3 bg-blue-200 -z-10 transform -skew-x-12"></span>
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
              From web development to design, we offer a range of services to
              help your business thrive in the digital world.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
          <div className="text-center flex justify-center mb-5 mt-8 md:mt-16 md:mb-0">
            <Link
              href="/services"
              className="font-Inter w-[15%] flex justify-center items-center font-semibold md:leading-[20px] text-[14px] md:text-[16px] whitespace-nowrap px-4 py-2.5 md:px-11 md:py-3.5 rounded-lg transition-all duration-300 text-white bg-[#FF693B] border border-[#FF693B] hover:bg-white hover:text-[#FF693B]"
            >
              Explore Our Apps
            </Link>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default ServicePromotion;
