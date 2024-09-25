"use client";
import { useState } from "react";

export default function TeamGrid2() {
  const TeamCard = ({ name, title, image, roleLink }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <div
        className="bg-white rounded-xl border overflow-hidden flex flex-col h-full relative w-[400px]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex-grow flex items-center justify-center px-0  relative">
          <img
            className={`w-full h-auto  max-h-[400px]  transition-transform duration-300 ${
              isHovered ? "" : ""
            }`}
            src={image}
            alt={name}
          />
          <div
            className={`absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#123390] to-transparent opacity-0 transition-opacity duration-300  ${
              isHovered ? "opacity-70 " : ""
            }`}
          ></div>
        </div>
        <div className="p-6 text-center relative z-10">
          <h2 className="text-xl font-semibold">{name}</h2>
          <a
            href={roleLink}
            className="text-blue-500 hover:underline mt-2 block"
          >
            {title}
          </a>
        </div>
      </div>
    );
  };

  const teamMembers = [
    {
      name: "Amy Walker",
      title: "Art Director",
      image: "/assets/myimg.png",
      roleLink: "#",
    },
    {
      name: "Alice R Sloat",
      title: "Sales Manager",
      image: "/assets/mr.noor.jpg",
      roleLink: "#",
    },
    {
      name: "Molly Davidson",
      title: "HR Management",
      image: "/assets/Hr_Manager.jpg",
      roleLink: "#",
    },
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
  ];

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">Meet Our Team</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member) => (
          <TeamCard
            key={member.name}
            name={member.name}
            title={member.title}
            image={member.image}
            roleLink={member.roleLink}
          />
        ))}
      </div>
    </div>
  );
}
