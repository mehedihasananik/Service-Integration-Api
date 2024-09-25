// components/Team.js
export default function TeamGrid5() {
  const teamMembers = [
    {
      id: 1,
      name: "Name 01",
      designation: "Designation",
      imgSrc: "/assets/myimg.png",
    },
    {
      id: 2,
      name: "Name 02",
      designation: "Designation",
      imgSrc: "/assets/myimg.png",
    },
    {
      id: 3,
      name: "Name 03",
      designation: "Designation",
      imgSrc: "/assets/myimg.png",
    },
    {
      id: 4,
      name: "Name 04",
      designation: "Designation",
      imgSrc: "/assets/myimg.png",
    },
  ];

  return (
    <section className="bg-[#181644] py-16">
      {/* Background color updated to reflect the design */}
      <div className="container mx-auto">
        <h2 className="text-4xl text-white text-center font-bold mb-10">
          Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full justify-center  items-center mx-auto">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-gray-800 rounded-lg p-6 text-center relative w-[250px]"
            >
              <div className="relative">
                <div className="bg-gray-700 rounded-full w-28 h-28 mx-auto p-2">
                  <img
                    className="rounded-full h-full w-full object-cover"
                    src={member.imgSrc}
                    alt={member.name}
                  />
                </div>
              </div>
              {/* Team member information */}
              <h3 className="text-white text-xl font-semibold mt-4">
                {member.name}
              </h3>
              <p className="text-gray-400">{member.designation}</p>
              <p className="text-gray-500 mt-2">
                Insert your desired text here.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
