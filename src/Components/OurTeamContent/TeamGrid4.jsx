import Image from "next/image";

const teamMembers = [
  {
    name: "Mary Brown",
    role: "creative leader",
    image: "/assets/myimgs.png",
    description:
      "Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum",
  },
  {
    name: "Bob Greenfield",
    role: "programming guru",
    image: "/assets/myimgs.png",
    description:
      "Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum",
  },
  {
    name: "Paul Richmond",
    role: "sales manager",
    image: "/images/Smiling-young-casual-man-2.png",
    description:
      "Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum",
  },
];

const TeamMember = ({ name, role, image, description }) => (
  <div className="p-6">
    <div className="bg-blue-600 pt-24 pb-40 relative">
      <Image
        src={image}
        alt={name}
        width={300}
        height={700}
        className="absolute -top-24 left-1/2 transform -translate-x-1/2 h-[350px]"
      />
    </div>
    <h5 className="text-xl font-bold mt-8">{name}</h5>
    <p className="text-blue-600 font-bold mt-2">{role}</p>
    <p className="font-light mt-4">{description}</p>
    <div className="bg-gray-100 mt-6 py-4">
      <div className="flex justify-center space-x-4">
        <a href="#" className="text-blue-600">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#" className="text-blue-600">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" className="text-blue-600">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </div>
  </div>
);

const TeamGrid4 = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamGrid4;
