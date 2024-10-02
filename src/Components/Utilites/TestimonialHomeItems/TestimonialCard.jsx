import Image from "next/image";
import { FaStar } from "react-icons/fa";

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="h-[400px] pl-4 mt-10 bg-[#F8FAFC] lg:hover:bg-[#1E293B] group rounded-md transition-all duration-300 ">
      <div className="relative">
        <div className="absolute top-[-25px] left-[140px] md:left-[120px] lg:left-0">
          <div className="relative w-[56px] h-[56px] rounded-full overflow-hidden">
            <Image
              src={testimonial?.image}
              alt={testimonial?.name || "Testimonial avatar"}
              fill // Use fill for responsive images
              sizes="56px" // Since the container is fixed at 56px, the image will always occupy 56px width and height
              style={{ objectFit: "cover" }} // Ensures the image covers the container without distortion
              className="rounded-full"
            />
          </div>
        </div>
        <div className="absolute top-4 right-4">
          <Image
            src="/assets/fiver.png"
            alt="Fiverr"
            width={30}
            height={25}
            className="opacity-70 transition-opacity duration-300 group-hover:opacity-100"
          />
        </div>
        <div className="pt-14 pb-4">
          <h3 className="text-paragraphExtraLarge text-[#333333] lg:group-hover:text-white font-Raleway font-bold">
            {testimonial?.name}
          </h3>

          <p className="text-paragraphSmall text-grayish pt-1 lg:group-hover:text-white">
            {testimonial?.designation}
          </p>
          <div className="flex items-center mt-2 space-x-1">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className="text-yellow-400 text-[14px] transition-transform duration-300 transform hover:scale-110 hover:text-yellow-500"
              />
            ))}
          </div>
        </div>
        <div>
          <p className="w-full lg:w-[260px] 4xl:w-[300px] text-paragraph text-grayish pt-1 pb-12 lg:group-hover:text-white line-clamp-[7]">
            {testimonial?.message}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
