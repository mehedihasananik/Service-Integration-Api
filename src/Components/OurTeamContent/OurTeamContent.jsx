"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const teams = {
  tech: [
    {
      id: 1,
      name: "John Doe",
      position: "Senior Developer",
      image: "/assets/deAvater.png",
    },
    {
      id: 2,
      name: "Alice Johnson",
      position: "UI/UX Designer",
      image: "/assets/deAvater.png",
    },
    {
      id: 3,
      name: "Mike Wilson",
      position: "DevOps Engineer",
      image: "/assets/deAvater.png",
    },
  ],
  marketing: [
    {
      id: 4,
      name: "Jane Smith",
      position: "Marketing Manager",
      image: "/assets/deAvater.png",
    },
    {
      id: 5,
      name: "Bob Brown",
      position: "Content Strategist",
      image: "/assets/deAvater.png",
    },
    {
      id: 6,
      name: "Sarah Lee",
      position: "Social Media Specialist",
      image: "/assets/deAvater.png",
    },
  ],
  sales: [
    {
      id: 7,
      name: "Charlie Davis",
      position: "Sales Executive",
      image: "/assets/deAvater.png",
    },
    {
      id: 8,
      name: "Eve White",
      position: "Sales Manager",
      image: "/assets/deAvater.png",
    },
    {
      id: 9,
      name: "Tom Harris",
      position: "Account Manager",
      image: "/assets/deAvater.png",
    },
  ],
};

const TeamMember = ({ member }) => (
  <motion.div
    className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="relative h-80 overflow-hidden">
      <Image
        src={member.image}
        alt={member.name}
        width={400}
        height={400}
        className="transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60" />
      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
        <h3 className="text-xl font-bold">{member.name}</h3>
        <p className="text-sm">{member.position}</p>
      </div>
    </div>
  </motion.div>
);

const TeamSection = ({ title, members }) => (
  <div className="mt-16">
    <h2
      className="text-3xl font-bold text-center mb-8"
      style={{ color: "#123390" }}
    >
      {title}
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {members.map((member) => (
        <TeamMember key={member.id} member={member} />
      ))}
    </div>
  </div>
);

const TeamPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          className="text-5xl font-extrabold text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ color: "#FF693B" }}
        >
          Meet Our{" "}
          <span
            className="text-5xl font-extrabold"
            style={{ color: "#123390" }}
          >
            Incredible Team
          </span>
        </motion.h1>
        <TeamSection title="Tech Innovators" members={teams.tech} />
        <TeamSection title="Marketing Maestros" members={teams.marketing} />
        <TeamSection title="Sales Superstars" members={teams.sales} />
      </div>
    </div>
  );
};

export default TeamPage;
