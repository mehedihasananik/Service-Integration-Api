import { IoIosCheckmark } from "react-icons/io";

export default function ComboServiceList() {
  const services = [
    "10-Page WordPress Website",
    "Monthly SEO Services",
    "Professional Logo Design",
    "Content Writing",
    "Social Media Posts & kits",
    "Animated Video",
    "Brand Guidelines",
    "3-Month Website Maintenance",
  ];

  // Array of different translate values for each index (0 to 6)
  const translateValues = [
    "translate-x-[-40px] w-[364px] h-[72px] py-.5 -mt-3 bgAnimatedCommon 1",
    "translate-x-[-85px] w-[364px] h-[72px]  py-.5  bgAnimatedCommon 2",
    "translate-x-[-115px] w-[368px] h-[72px]  py-.5  bgAnimatedCommon 3",
    "translate-x-[-138px] w-[368px] h-[72px]  py-.5 bgAnimatedCommon 4",
    "translate-x-[-155px] w-[368px] h-[72px]  py-.5 bgAnimatedKit 5",
    "translate-x-[-105px] w-[368px] h-[72px]  py-.5  bgAnimatedAfterKit 6 ",
    "translate-x-[-53px] w-[368px] h-[72px]  py-.5  bgAnimatedAfterKit 7 ",
    "translate-x-[-13px] w-[368.5px] h-[72px]  py-.5 bgAnimatedAfterKit 8 ",
  ];

  return (
    <div className="flex flex-col items-start space-y-4 bgheroBlur">
      {services.map((service, index) => (
        <div
          key={index}
          className={`flex items-center  rounded-full space-x-2 relative overflow-visible ${
            translateValues[index % translateValues.length]
          } 
          transform transition-all duration-700 ease-in-out 
          hover:translate-x-5 
          hover:scale-[1.015] 
          hover:shadow-2xl 
          will-change-transform
         `} // Add shadow to container
        >
          {/* Circle on the left side with custom shadow */}
          <div className="">
            <img
              className="h-[60px] w-[60px] "
              src="/assets/checkblur.png"
              alt=""
            />
          </div>

          {/* Service Text */}
          <p className="text-[#0A2C8C] text-[16px] font-Inter font-normal overflow-visible relative -left-[5%]">
            {service}
          </p>
        </div>
      ))}
    </div>
  );
}
