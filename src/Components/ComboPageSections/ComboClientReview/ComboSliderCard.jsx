import Image from "next/image";
import { FaStar } from "react-icons/fa";

const ComboSliderCard = ({ testimonial }) => {
  return (
    <>
      <div className="hidden lg:flex flex-col lg:flex-row lg:justify-center bg-white md:p-6 md:gap-x-10  ">
        {/* Left Side: Image */}
        <div className="flex-shrink-0 ">
          <div className=" overflow-hidden">
            <Image
              src={testimonial?.image_md}
              alt={testimonial?.name || "Testimonial Avatar"}
              width={1000}
              height={1000}
              className="h-[100%] md:h-[400px] lg:h-full w-full"
            />
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="flex flex-col bg-[#F8FAFF] text-left p-4 lg:p-10 rounded-md">
          {/* Star Ratings */}
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={`text-[#FF9D00] ${
                  i < testimonial?.rating ? "text-[#FF9D00]" : "text-[#FF9D00]"
                }`}
              />
            ))}
          </div>

          {/* Heading */}
          <h3 className="font-extrabold text-[#5168A7] font-Inter text-[16px] xl:text-[20px] xll:text-[30px] mt-2 md:mt-8">
            {`"${testimonial?.headline || "Revitalized my work approach"}"`}
          </h3>

          {/* Description */}
          <p className="combo_des hidden md:block font-Inter mt-4">
            {testimonial?.message}
          </p>
          <p className=" md:hidden combo_des mt-4">
            {testimonial?.message.length > 200
              ? `${testimonial.message.slice(0, 200)}...`
              : testimonial.message}
          </p>

          {/* Author Info */}
          <p className="mt-6  text-[#6D758F] text-[16px] text-[color:var(--Neutral-colors-600,#6D758F)] [leading-trim:both] [text-edge:cap] [font-feature-settings:'liga'_off,'clig'_off] [font-family:Inter] text-base font-extrabold leading-[22px]">
            {testimonial?.name || "Stephanie Powell"}{" "}
            <span className="text-[color:var(--Neutral-colors-600,#6D758F)] [leading-trim:both] [text-edge:cap] [font-feature-settings:'liga'_off,'clig'_off] [font-family:Inter] text-base font-semibold leading-[22px]">
              | {testimonial?.designation || "VP of Sales at SalesForce"}
            </span>
          </p>
        </div>
      </div>
      <div className="lg:hidden flex flex-col lg:flex-row lg:justify-center bg-white md:p-6 md:gap-x-10 ">
        {/* Right Side: Content */}
        <div className="flex justify-center relative top-3">
          <img
            src={testimonial?.image_md}
            alt={testimonial?.name || "Testimonial Avatar"}
            className="h-[120px] w-[120px] md:h-[120px] md:w-[120px] rounded-full "
          />
        </div>
        <div className="flex flex-col bg-[#F8FAFF] text-left p-4 lg:p-10 rounded-md">
          {/* Star Ratings */}
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={`text-[#FF9D00] ${
                  i < testimonial?.rating ? "text-[#FF9D00]" : "text-[#FF9D00]"
                }`}
              />
            ))}
          </div>

          {/* Heading */}
          <h3 className="font-extrabold text-[#5168A7] font-Inter text-[16px] xl:text-[20px] xll:text-[30px] mt-2 md:mt-8">
            {testimonial?.headline || "Revitalized my work approach"}
          </h3>

          {/* Description */}
          <p className="combo_des hidden md:block font-Inter mt-4">
            {testimonial?.message}
          </p>
          <p className=" md:hidden combo_des mt-4">
            {testimonial?.message.length > 200
              ? `${testimonial.message.slice(0, 200)}...`
              : testimonial.message}
          </p>

          {/* Author Info */}
          <p className="mt-2 text-sm text-[#6D758F] font-semibold text-[16px]">
            {testimonial?.name || "Stephanie Powell"}{" "}
            <span className="font-medium font-Inter text-[#6D758F]">
              | {testimonial?.designation || "VP of Sales at SalesForce"}
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default ComboSliderCard;
