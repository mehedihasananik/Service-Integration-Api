import React from "react";
import TeamGrid from "./TeamGrid";
import TeamGrid1 from "./TeamGrid1";
import TeamGrid2 from "./TeamGrid2";
import TeamGrid3 from "./TeamGrid3";
import TeamGrid4 from "./TeamGrid4";
import TeamGrid5 from "./TeamGrid5";

const OurTeamContent = () => {
  const managementTeam = [
    {
      name: "Md Raihan Hassan",
      title: "HR Manager",
      image: "/assets/Hr_Manager.jpg",
    },
  ];

  const marketingTeam = [
    {
      name: "Tanvir Hosen",
      title: "Senior Marketing Executive",
      image: "/assets/Tanvir.jpg",
    },
    {
      name: "Minul Islam",
      title: "Senior Marketing Executive",
      image: "/assets/minul.jpg",
    },
    {
      name: "Md Al Amin",
      title: "Marketing Expert",
      image: "/assets/alamin.jpg",
    },
    {
      name: "Faisal Abedin",
      title: "Marketing Expert",
      image: "/assets/faysal.jpg",
    },
    {
      name: "Monir Ahmed",
      title: "Marketing Expert",
      image: "/assets/monir.jpg",
    },
    // Add more marketing team members...
  ];

  const developmentTeam = [
    {
      name: "Shahed Noor",
      title: "Sr Software Engineer",
      image: "/assets/mr.noor.jpg",
    },
    {
      name: "Mehedi Hasan Anik",
      title: "Jr Software Engineer",
      image: "/assets/myimg.png",
    },
    {
      name: "Neriah Lux",
      title: "Freelance Developer",
      image: "/assets/images.png",
    },

    // Add more development team members...
  ];

  return (
    <div className="text-gray-800">
      <OurTeamFounders
        imagePosition="left"
        name="Md Sheikh Hasib Akter"
        title="Managing director"
        imageSrc="/assets/Managing director.jpg"
      />
      <OurTeamFounders
        imagePosition="right"
        name="Nodi Akter"
        title="Chairman"
        imageSrc="/assets/chairmans.jpeg"
      />
      <div className="text-center mb-10">
        <h2 className="text-5xl font-bold mb-6 text-[#FF693B]">
          Our Dynamic Talents
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Great things in business are never done by one person. They`&apos;re
          done by a team of people. We have that dynamic group of individuals.
        </p>
      </div>
      {/* <TeamGrid heading="Management Team" members={managementTeam} /> */}
      <div className="space-y-10">
        <TeamGrid />
        <TeamGrid1 />
        <TeamGrid2 />
        <TeamGrid3 />
        <TeamGrid4 />
        <TeamGrid5 />
      </div>
      {/* <TeamGrid heading="Sales & Marketing Team" members={marketingTeam} /> */}
    </div>
  );
};

const OurTeamFounders = ({ imagePosition, name, title, imageSrc }) => {
  const TextSection = () => (
    <div className="lg:w-1/2 space-y-10 px-6 lg:px-12 fade-in">
      <div className="relative">
        <p className="text-xl md:text-2xl leading-relaxed text-gray-700 relative z-10 italic">
          We have the vision to become a leading voice in the digital world not
          only in Bangladesh but also globally. We have started our journey with
          a very energetic and skilled team. We love what we do and we do what
          we love. We are working in a family environment with world-class
          facilities. Professionalism is our key tool for success.
        </p>
      </div>
      <div className="border-l-4 border-red-500 pl-6 py-2 bg-white shadow-md rounded-r-lg">
        <p className="text-3xl font-bold text-gray-900">{name}</p>
        <p className="text-xl text-red-600 font-semibold mt-1">{title}</p>
      </div>
    </div>
  );

  const ImageSection = () => (
    <div className="lg:w-1/2 p-6 slide-in">
      <div className="relative">
        <div className="absolute inset-0 bg-[#FF693B] transform rotate-3 rounded-lg shadow-2xl"></div>
        <img
          src={imageSrc}
          alt={name}
          className="relative z-10 w-full h-auto object-cover rounded-lg shadow-xl border-4 border-white"
          style={{ maxHeight: "700px" }}
        />
      </div>
    </div>
  );

  return (
    <div className="max-w-8xl mx-auto px-4 py-10">
      <div className="flex flex-col lg:flex-row items-center justify-between space-y-16 lg:space-y-0 lg:space-x-16 bg-white rounded-xl overflow-hidden py-5">
        {imagePosition === "left" ? (
          <>
            <ImageSection />
            <TextSection />
          </>
        ) : (
          <>
            <TextSection />
            <ImageSection />
          </>
        )}
      </div>
    </div>
  );
};

export default OurTeamContent;
