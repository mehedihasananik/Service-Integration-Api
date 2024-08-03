"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Container from "@/Components/Container/Container";

const AboutUsContent = ({ aboutDetails, singleAboutDetails }) => {
  const [animate, setAnimate] = useState(false);
  const {
    title1,
    details1,
    image,
    title2,
    details2,
    title3,
    details3,
    title4,
    details4,
  } = aboutDetails[0];

  useEffect(() => {
    setAnimate(true);
    const timer = setTimeout(() => setAnimate(false), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Container>
      <div className={`${animate ? "fade-in" : ""}`}>
        <Header title={title1} details={details1} />
        <MissionVision
          image={image}
          title2={title2}
          details2={details2}
          title3={title3}
          details3={details3}
        />
        <Values title4={title4} details4={details4} />
        <AboutDetailsSection singleAboutDetails={singleAboutDetails} />
      </div>
    </Container>
  );
};

const Header = ({ title, details }) => (
  <div className="pt-5 md:pt-10 lg:pt-10 space-y-4">
    <h1 className="text-[30px] lg:text-[48px] text-[#0F172A] font-bold font-Raleway text-center lg:text-left">
      {title}
    </h1>
    <p className="text-[18px] text-justify">{details}</p>
  </div>
);

const MissionVision = ({ image, title2, details2, title3, details3 }) => (
  <div className="grid grid-cols-1 justify-items-center lg:justify-items-start gap-y-10 lg:gap-y-0 lg:grid-cols-3 pt-10 lg:pt-16 lg:gap-x-10">
    <Image className="w-[450px]" width={500} height={500} src={image} alt="" />
    <MissionVisionItem
      title={title2}
      details={details2}
      logoSrc="/assets/missionLogo.png"
    />
    <MissionVisionItem
      title={title3}
      details={details3}
      logoSrc="/assets/missionLogo2.png"
    />
  </div>
);

const MissionVisionItem = ({ title, details, logoSrc }) => (
  <div className="space-y-3 text-center lg:text-left lg:pt-[8%]">
    <div className="flex justify-center lg:justify-start">
      <img src={logoSrc} alt="" />
    </div>
    <h3 className="text-[18px] md:text-[32px] font-semibold">{title}</h3>
    <p className="text-[16px]">{details}</p>
  </div>
);

const Values = ({ title4, details4 }) => (
  <div className="pt-4 lg:pt-20 lg:pb-4 space-y-3">
    <h3 className="text-[30px] md:text-[32px] text-[#334155] text-center lg:text-left">
      Our Values
    </h3>
    <div className="w-full lg:w-[70%] text-center lg:text-left space-y-3">
      <h2 className="text-[#0F172A] text-[22px] lg:text-[48px] font-bold font-Raleway leading-tight">
        {title4}
      </h2>
      <p className="text-[#334155] text-[16px]">{details4}</p>
    </div>
  </div>
);

const AboutDetailsSection = ({ singleAboutDetails }) => (
  <>
    {singleAboutDetails.map((detail) => (
      <AboutDetailItem key={detail.id} detail={detail} />
    ))}
  </>
);

const AboutDetailItem = ({ detail }) => {
  const isRightImage = detail.image_positions === "right";
  const flexDirection = isRightImage ? "lg:flex-row" : "lg:flex-row-reverse";
  const textAlignment = isRightImage
    ? "text-center"
    : "text-center lg:text-left";

  return (
    <div
      className={`flex flex-col gap-4 md:gap-8 ${flexDirection} lg:justify-between my-5 lg:py-8`}
    >
      <div
        className={`lg:w-[50%] ${textAlignment} flex flex-col justify-center`}
      >
        <h2 className="text-[#0F172A] text-[30px] md:text-[32px] font-bold font-Raleway text-center lg:text-left">
          {detail.title}
        </h2>
        <div className="text-[#334155] text-[18px] space-y-5 pt-5 text-left whitespace-pre-wrap">
          <p>{detail.details}</p>
        </div>
      </div>
      <div
        className={`lg:w-[40%] flex justify-center ${
          isRightImage ? "lg:justify-end" : "lg:justify-start"
        } gap-x-4`}
      >
        <Image
          className="w-[100%] md:h-[350px] lg:h-[450px] rounded-lg"
          width={500}
          height={500}
          src={detail.image}
          alt=""
        />
      </div>
    </div>
  );
};

export default AboutUsContent;
