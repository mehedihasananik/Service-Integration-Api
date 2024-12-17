import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaStar,
  FaRegStar,
  FaRocket,
  FaGooglePlay,
  FaDownload,
} from "react-icons/fa";
import Container from "@/Components/Container/Container";

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const decimalPart = rating % 1;

  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, index) => {
        if (index < fullStars) {
          return <FaStar key={index} className="w-5 h-5 text-yellow-400" />;
        } else if (index === fullStars && decimalPart > 0) {
          const percentage = decimalPart * 100;
          return (
            <div key={index} className="relative w-5 h-5">
              <FaRegStar className="w-5 h-5 text-gray-300 absolute" />
              <div
                className="absolute overflow-hidden"
                style={{ width: `${percentage}%` }}
              >
                <FaStar className="w-5 h-5 text-yellow-400" />
              </div>
            </div>
          );
        } else {
          return <FaRegStar key={index} className="w-5 h-5 text-gray-300" />;
        }
      })}
      <span className="ml-2 text-gray-600 font-semibold">{rating}</span>
    </div>
  );
};

const AppCard = ({ title, description, rating, imageUrl, slug, downloads }) => (
  <Link href={`${slug}`}>
    <div className=" shadow-lg rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group">
      <div className="w-full h-64 relative">
        <Image src={imageUrl} layout="fill" objectFit="cover" alt={title} />
      </div>
      <div className="p-6 bg-gradient-to-br from-white via-gray-50 to-blue-50">
        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
          <div className="flex items-center w-full justify-between ">
            <div>
              <StarRating rating={rating} />
            </div>

            <div className="flex items-center justify-between text-gray-600 ">
              <span>
                {" "}
                <FaDownload className=" w-4 h-4 mr-1 text-blue-500" />
              </span>
              <span className="text-sm font-medium ">{downloads}+ </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Link>
);

const AppSection = ({ apps }) => {
  return (
    <Container>
      <section className="app_space pt-3 pb-5">
        <div id="apps" className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="app_heading font-extrabold  mb-4">
              Our <span className="text-[#FF693B]">Innovative</span> Apps
            </h2>
            <div className="flex justify-center items-center mb-4">
              <div className="h-1 w-20 bg-[#173792] rounded-full mr-2"></div>
              <FaRocket className="text-[#173792] text-2xl" />
              <div className="h-1 w-20 bg-[#173792] rounded-full ml-2"></div>
            </div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
              Discover our collection of powerful and user-friendly applications
              designed to enhance your digital experience.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {apps.map((app) => (
              <AppCard key={app.slug} {...app} />
            ))}
          </div>
        </div>
      </section>
    </Container>
  );
};

export default AppSection;
