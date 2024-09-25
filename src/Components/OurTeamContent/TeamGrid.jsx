import Image from "next/image";

const TeamGrid = () => {
  const teamMembers = [
    {
      name: "Mike Cannon-Brookes",
      title: "Co-Founder & Co-CEO",
      imgSrc: "/assets/myimg.png",
      gradientFrom: "from-yellow-200",
      gradientTo: "to-yellow-400",
    },
    {
      name: "Scott Farquhar",
      title: "Co-Founder & Co-CEO",
      imgSrc: "/assets/myimg.png",
      gradientFrom: "from-green-200",
      gradientTo: "to-green-400",
    },
    {
      name: "Anu Bharadwaj",
      title: "President",
      imgSrc: "/assets/myimg.png",
      gradientFrom: "from-teal-200",
      gradientTo: "to-teal-400",
    },
    {
      name: "Anu Bharadwaj",
      title: "President",
      imgSrc: "/assets/myimg.png",
      gradientFrom: "from-teal-200",
      gradientTo: "to-teal-400",
    },
    {
      name: "Anu Bharadwaj",
      title: "President",
      imgSrc: "/assets/myimg.png",
      gradientFrom: "from-teal-200",
      gradientTo: "to-teal-400",
    },
    {
      name: "Anu Bharadwaj",
      title: "President",
      imgSrc: "/assets/myimg.png",
      gradientFrom: "from-teal-200",
      gradientTo: "to-teal-400",
    },
  ];

  return (
    <div className="grid grid-cols-3 justify-center gap-x-4 mt-24 gap-y-20 ">
      {teamMembers.map((member, index) => (
        <div key={index} className="relative w-[400px] h-52 group mt-20">
          {/* Card Container */}
          <div
            className={`absolute inset-0 rounded-2xl shadow-xl overflow-hidden 
                        transform transition-all duration-300 ease-in-out 
                        group-hover:scale-105 group-hover:rotate-1
                        bg-gradient-to-br ${member.gradientFrom} ${member.gradientTo}`}
          >
            {/* Decorative shapes */}
            <div className="absolute -top-16 -left-16 w-40 h-40 bg-white opacity-10 rounded-full"></div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-white opacity-10 rounded-full"></div>

            {/* Content */}
            <div className="relative h-full flex flex-col items-center justify-end p-8 text-center">
              <h3 className="mt-4 text-2xl font-bold text-white">
                {member.name}
              </h3>
              <p className="text-white opacity-80 mb-4">{member.title}</p>

              {/* Hover effect line */}
              <div className="w-0 h-1 bg-white transition-all duration-300 group-hover:w-1/2"></div>
            </div>
          </div>

          {/* Image Container */}
          <div
            className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-40 w-40 
                          transition-all duration-300 group-hover:scale-110"
          >
            <div className="relative w-full h-full">
              <Image
                src={member.imgSrc}
                alt={member.name}
                layout="fill"
                objectFit="cover"
                className="border-4 border-white shadow-lg rounded-full"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamGrid;
