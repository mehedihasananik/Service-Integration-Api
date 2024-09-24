import Container from "@/Components/Container/Container";
import OurTeamContent from "@/Components/OurTeamContent/OurTeamContent";
import React from "react";

const OurTeam = () => {
  return (
    <div className=" bg-gray-100 py-8 mt-4">
      <Container>
        <div className="text-center">
          <h1 className="text-[30px] md:text-[30px] lg:text-[48px] font-Raleway font-bold">
            Our Team
          </h1>
        </div>
        <OurTeamContent />
      </Container>
    </div>
  );
};

export default OurTeam;
