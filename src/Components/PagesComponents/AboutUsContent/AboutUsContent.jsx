"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Container from "@/Components/Container/Container";

const AboutUsContent = ({ aboutDetails, singleAboutDetails, aboutTeam }) => {
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
    alt_text,
  } = aboutDetails[0];

  // console.log(alt_text);

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
          alt={alt_text}
          image={image}
          title2={title2}
          details2={details2}
          title3={title3}
          details3={details3}
        />
        <Values title4={title4} details4={details4} />
        <AboutDetailsSection singleAboutDetails={singleAboutDetails} />
        <div className="flex flex-col justify-start items-center md:pt-5">
          <h2 className="text-blackish text-headingSmall md:text-headingBase font-bold font-Raleway text-center lg:text-left">
            {aboutTeam.title}
          </h2>
          <p className="text-[#334155] text-paragraphMedium space-y-5 pt-2 md:pt-3 text-left ">
            {" "}
            {aboutTeam.details}
          </p>
        </div>
      </div>
    </Container>
  );
};

const Header = ({ title, details }) => (
  <div className=" space-y-2 md:space-y-4 heading-space">
    <h1 className="headings text-center lg:text-left">{title}</h1>
    <p className="text-paragraphMedium text-justify">{details}</p>
  </div>
);

const MissionVision = ({ image, title2, details2, title3, details3, alt }) => (
  <div className="grid grid-cols-1 justify-items-center lg:justify-items-start gap-y-0 lg:gap-y-0 lg:grid-cols-3 pt-10 lg:pt-10 lg:gap-x-10">
    <Image
      className="w-[450px]"
      width={500}
      height={500}
      src={image}
      alt={alt}
      quality={80}
    />
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
    <h2 className="text-paragraphMedium md:text-headingBase font-semibold pt-5 md:pt-0">
      {title}
    </h2>
    <p className="text-paragraphMedium line-clamp-[12]">{details}</p>
  </div>
);

const Values = ({ title4, details4 }) => (
  <div className="pt-4 lg:pt-20 lg:pb-4 space-y-3">
    <h2 className="text-headingSmall md:text-headingBase text-[#334155] text-center lg:text-left">
      Our Values
    </h2>
    <div className="w-full  text-center lg:text-left space-y-3">
      <div>
        <h2 className="lg:w-[90%] text-blackish text-headingSmall lg:text-headingLarge font-bold font-Raleway leading-tight">
          {title4}
        </h2>
      </div>
      <div>
        <div className=" text-justify">
          <p className="text-grayish text-paragraphMedium">{details4}</p>
        </div>
      </div>
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
  const isRightImage = detail.image_positions === "rignt";
  const flexDirection = isRightImage ? "lg:flex-row" : "lg:flex-row-reverse";
  const textAlignment = isRightImage
    ? "text-center"
    : "text-center lg:text-left";

  return (
    <div
      className={`flex flex-col gap-4 md:gap-8 ${flexDirection} lg:justify-between my-5 lg:pb-8 lg:pt-4`}
    >
      <div
        className={`lg:w-[50%] ${textAlignment} flex flex-col justify-center`}
      >
        <h2 className="text-blackish text-headingSmall md:text-headingBase font-bold font-Raleway text-center lg:text-left">
          {detail.title}
        </h2>
        <div className="text-slateBlueGray text-paragraphMedium space-y-5 pt-2 md:pt-5 text-left whitespace-pre-wrap">
          <p>{detail.details}</p>
        </div>
      </div>
      <div
        className={`lg:w-[40%] flex justify-center ${
          isRightImage ? "lg:justify-end" : "lg:justify-start"
        } gap-x-4`}
      >
        <div className="relative w-full aspect-square rounded-lg overflow-hidden">
          <Image
            src={detail.image}
            layout="fill"
            objectFit="cover"
            quality={80}
            className="rounded-lg"
            alt={detail.alt_text || "Detailed image"}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUsContent;
