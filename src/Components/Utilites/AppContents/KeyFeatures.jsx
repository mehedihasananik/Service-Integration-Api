import React from "react";
import { FaRocket, FaLock, FaSync, FaChartLine } from "react-icons/fa";

const FeatureItem = ({ icon, title, description }) => (
  <div className="flex items-start mb-12 last:mb-0">
    <div className="text-3xl text-blue-500 mr-6 mt-1">{icon}</div>
    <div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  </div>
);

const KeyFeatures = () => {
  const features = [
    {
      icon: <FaRocket />,
      title: "Lightning Fast",
      description:
        "Experience blazing fast performance with our optimized app architecture, ensuring smooth operation even under heavy loads.",
    },
    {
      icon: <FaLock />,
      title: "Secure & Private",
      description:
        "Your data is protected with state-of-the-art encryption and security measures, giving you peace of mind while using our app.",
    },
    {
      icon: <FaSync />,
      title: "Seamless Sync",
      description:
        "Access your data across all your devices with real-time synchronization, keeping you up-to-date no matter where you are.",
    },
    {
      icon: <FaChartLine />,
      title: "Insightful Analytics",
      description:
        "Gain valuable insights with our comprehensive analytics dashboard, helping you make data-driven decisions.",
    },
  ];

  return (
    <section className="py-20 ">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
          Key Features
          <div className="w-24 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
          {features.map((feature, index) => (
            <FeatureItem key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
