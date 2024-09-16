import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaStar, FaRegStar, FaRocket, FaGooglePlay } from "react-icons/fa";

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
      <span className="ml-2 text-gray-600 font-semibold">
        {rating.toFixed(1)}
      </span>
    </div>
  );
};

const AppCard = ({ title, description, rating, imageUrl, slug }) => (
  <Link href={`${slug}`}>
    <div className="bg-white shadow-lg rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group">
      <div className="w-full h-64 relative">
        <Image src={imageUrl} layout="fill" objectFit="cover" alt={title} />
      </div>
      <div className="p-6 bg-gradient-to-br from-white via-gray-50 to-blue-50">
        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
        <div className="flex justify-between items-center">
          <StarRating rating={rating} />
          <button className="bg-blue-600 text-white py-2 px-4 rounded-full text-sm hover:bg-blue-700 transition-all duration-300 flex items-center transform hover:scale-105 shadow-md hover:shadow-lg">
            <FaGooglePlay className="mr-2" /> Get App
          </button>
        </div>
      </div>
    </div>
  </Link>
);

const AppSection = () => {
  const apps = [
    {
      title: "Square Photo Editor - No Crop",
      description:
        "Easily edit and enhance your photos with powerful tools without cropping them.",
      rating: 4.2,
      imageUrl: "/assets/square-photo-editor.png",
      slug: "https://play.google.com/store/apps/details?id=com.envobyte.square.photo.editor.nocrop",
    },
    {
      title: "TTBoost: Get Likes & Followers",
      description:
        "Boost your TikTok profile with more likes and followers effortlessly.",
      rating: 4.6,
      imageUrl: "/assets/ttboost.png",
      slug: "https://play.google.com/store/apps/details?id=com.ttboost.tik.tok.followers.likes",
    },
    {
      title: "Video Downloader - Reels Saver",
      description:
        "Download Instagram Reels and videos directly to your device.",
      rating: 4.5,
      imageUrl: "/assets/video-downloader.png",
      slug: "https://play.google.com/store/apps/details?id=com.ig.video.downloader.instagram.reels.story.saver",
    },
    {
      title: "Automatic Background Remover",
      description:
        "Remove backgrounds from any image automatically with just a few clicks.",
      rating: 4.3,
      imageUrl: "/assets/background-remover.png",
      slug: "https://play.google.com/store/apps/details?id=com.automatic.background.remover",
    },
    {
      title: "Compress Video - Size Reducer",
      description:
        "Reduce the file size of your videos without compromising quality.",
      rating: 4.4,
      imageUrl: "/assets/video-compressor.png",
      slug: "https://play.google.com/store/apps/details?id=com.compress.video.compressor.size.reducer",
    },
    {
      title: "World VPN - Global Fast Secure",
      description:
        "Secure and fast VPN services for accessing content globally without restrictions.",
      rating: 4.5,
      imageUrl: "/assets/world-vpn.png",
      slug: "https://play.google.com/store/apps/details?id=com.envobyte.world.vpn.global",
    },
    {
      title: "JPEG Image Compressor & Resize",
      description:
        "Efficiently compress and resize JPEG images to save space or upload easily.",
      rating: 4.2,
      imageUrl: "/assets/jpeg-compressor.png",
      slug: "https://play.google.com/store/apps/details?id=com.jpeg.image.compressor",
    },
  ];

  return (
    <section
      id="apps"
      className="bg-gradient-to-b from-gray-100 to-white py-20"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
            Our <span className="text-blue-600">Innovative</span> Apps
          </h2>
          <div className="flex justify-center items-center mb-4">
            <div className="h-1 w-20 bg-blue-600 rounded-full mr-2"></div>
            <FaRocket className="text-blue-600 text-2xl" />
            <div className="h-1 w-20 bg-blue-600 rounded-full ml-2"></div>
          </div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
            Discover our collection of powerful and user-friendly applications
            designed to enhance your digital experience.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {apps.map((app) => (
            <AppCard key={app.slug} {...app} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppSection;
