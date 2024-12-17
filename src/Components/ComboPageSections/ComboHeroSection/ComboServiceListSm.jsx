import { IoIosCheckmark } from "react-icons/io";
import { Link } from "react-scroll";

export default function ComboServiceListSm() {
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
    "md:translate-x-[-40px]  w-[280px] h-[47px] md:w-[364px] md:h-[72px] py-.5 -mt-3 bgAnimatedCommon 1",
    "md:translate-x-[-85px]  w-[280px] h-[47px] md:w-[364px] md:h-[72px]  py-.5  bgAnimatedCommon 2",
    "md:translate-x-[-115px] w-[280px] h-[47px] md: w-[368px] md:h-[72px]  py-.5  bgAnimatedCommon 3",
    "md:translate-x-[-138px] w-[280px] h-[47px] md: w-[368px] md:h-[72px]  py-.5 bgAnimatedCommon 4",
    "md:translate-x-[-155px] w-[280px] h-[47px] md: w-[368px] md:h-[72px]  py-.5 bgAnimatedKit 5",
    "md:translate-x-[-105px] w-[272px] h-[47px] md: w-[368px] md:h-[72px]  py-.5  bgAnimatedAfterKit 6 ",
    "md:translate-x-[-53px]  w-[280px] h-[47px] md:w-[368px] md:h-[72px]  py-.5  bgAnimatedAfterKit 7 ",
    "md:translate-x-[-13px]  w-[280px] h-[47px] md:w-[368.5px] md:h-[72px]  py-.5 bgAnimatedAfterKit 8 ",
  ];

  return (
    <div className="flex flex-col items-start space-y-2 md:space-y-3 bgheroBlur">
      {services.map((service, index) => (
        <div
          key={index}
          className={`flex items-center  rounded-full space-x-2 relative overflow-visible cursor-pointer mt-0 translate-x-[-10px]  bgAnimatedCommonSm py-0  w-[260px] h-[47px] md:w-[320px]   transform transition-all duration-700 ease-in-out 
          hover:translate-x-5 
          hover:scale-[1.015] 
          hover:shadow-2xl 
          will-change-transform `} // Add shadow to container
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
          <p className="text-[#0A2C8C] text-[13px] md:text-[16px] font-Inter font-normal overflow-visible relative -left-[8%]">
            {service}
          </p>
        </div>
      ))}
    </div>
  );
}
