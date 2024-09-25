import Image from "next/image";

const teamMembers = [
  {
    name: "Bob Brown",
    role: "Founder/President",
    image: "/assets/myimg.png",
    description:
      "Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum",
  },
  {
    name: "John Grant",
    role: "Vice President",
    image: "/assets/myimg.png",
    description:
      "Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum",
  },
  {
    name: "Irma Maxwell",
    role: "Creative Leader",
    image: "/assets/myimg.png",
    description:
      "Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum",
  },
  {
    name: "Ann Richmond",
    role: "Secretary",
    image: "/assets/myimg.png",
    description:
      "Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum",
  },
];

const TeamMember = ({ name, role, image, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="flex  justify-center items-center">
      <Image
        src={image}
        alt={name}
        width={186}
        height={186}
        className="rounded-full mb-4 sm:mb-0 sm:mr-6"
      />
      <div>
        <p className="font-bold text-gray-600">{role}</p>
        <h4 className="text-xl font-semibold mt-2">{name}</h4>
        <p className="text-sm mt-2">{description}</p>
      </div>
    </div>
  </div>
);

const TeamGrid3 = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Meet our team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamGrid3;
