import Image from "next/image";

const GuideCard = ({ title, date, category, image, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative w-full h-56">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>
      <div className="p-4">
        <div className="text-xs text-gray-500 mb-1 flex gap-x-4 items-center">
          <span> {category} </span>
          <span>
            {" "}
            <div className="text-sm text-gray-400">{date}</div>
          </span>
        </div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-[16px] mb-2">{description}</p>
      </div>
    </div>
  );
};

export default GuideCard;
