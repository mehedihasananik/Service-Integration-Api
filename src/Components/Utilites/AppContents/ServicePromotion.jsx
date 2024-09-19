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
      link: `https://www.envobyte.com/services/wordpress-website-development-service/`,
    },
    {
      icon: <FaAndroid className="text-3xl" />,
      title: "Android App Development",
      description:
        "High-quality, user-friendly Android apps that drive results.",
      color: "bg-green-500",
      link: `https://www.envobyte.com/services/android-app-development-company/`,
    },
    {
      icon: <FaPaintBrush className="text-3xl" />,
      title: "Logo Design",
      description:
        "Captivating logos that elevate your brand and leave a lasting impression.",
      color: "bg-purple-500",
      link: `https://www.envobyte.com/services/logo-design-services/`,
    },
    {
      icon: <FaGlobe className="text-3xl" />,
      title: "Custom Website Development",
      description:
        "Tailored websites that combine cutting-edge design with seamless functionality.",
      color: "bg-indigo-500",
      link: `https://www.envobyte.com/services/custom-website-development-service/`,
    },
  ];

  return (
    <section id="services" className=" py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-800">
            Discover Our
            <span className="text-[#123390] mx-3 relative">
              Services
              <span className="absolute bottom-0 left-0 w-full h-3 bg-blue-200 -z-10 transform -skew-x-12"></span>
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            From web development to design, we offer a range of services to help
            your business thrive in the digital world.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredServices.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
        <div className="text-center mt-16">
          <Link
            href="/services"
            className="inline-block bg-[#123390] text-white py-4 px-10 rounded-full font-semibold text-lg hover:bg-[#FF693B] transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicePromotion;
