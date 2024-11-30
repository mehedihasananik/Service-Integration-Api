import Image from "next/image";
import { FaStar } from "react-icons/fa";

const ComboSliderCard = ({ testimonial }) => {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-center bg-white p-6 gap-x-10 ">
      {/* Left Side: Image */}
      <div className="flex-shrink-0">
        <div className=" overflow-hidden">
          <Image
            src={testimonial?.image_md}
            alt={testimonial?.name || "Testimonial Avatar"}
            width={1000}
            height={1000}
            className="h-full w-full"
          />
        </div>
      </div>

      {/* Right Side: Content */}
      <div className="flex flex-col bg-[#F8FAFF] text-left p-10 rounded-md">
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
        <h3 className="font-extrabold text-[#5168A7] text-[30px] mt-2 md:mt-8">
          {testimonial?.headline || "Revitalized my work approach"}
        </h3>

        {/* Description */}
        <p className="combo_des mt-4">{testimonial?.message}</p>

        {/* Author Info */}
        <p className="mt-6 text-sm text-gray-500 font-semibold">
          {testimonial?.name || "Stephanie Powell"}{" "}
          <span className="font-light">
            | {testimonial?.designation || "VP of Sales at SalesForce"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default ComboSliderCard;
