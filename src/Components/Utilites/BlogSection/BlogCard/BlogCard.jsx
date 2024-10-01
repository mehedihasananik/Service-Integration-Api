import { ArrowRight, Calendar, Eye } from "lucide-react";
import Image from "next/image";
import React from "react";

const BlogCard = ({ item }) => {
  // console.log(item.title)

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden ">
      <div className="">
        <div className="relative w-full aspect-[3/2]">
          <Image
            src={item.image}
            alt={item.alt_text}
            layout="fill"
            objectFit="cover"
            className=""
          />
          {item?.category?.name && (
            <span className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
              {item.category.name}
            </span>
          )}
        </div>
      </div>
      <div className="p-6 h-[250px]">
        <div className="flex items-center text-grayish mb-2 gap-x-5">
          <div className="flex items-center text-grayish mb-2">
            <Calendar size={16} className="mr-2" />
            <span className="text-sm">{item.updated_at}</span>
          </div>
          <div className="flex items-center text-grayish mb-2">
            <Eye size={16} className="mr-1" />
            <span className="text-paragraphSmall">{item?.views} views</span>
          </div>
        </div>
        <h2 className="text-headingSmall font-bold mb-2 text-gray-800 line-clamp-2 hover:text-primary transition-colors">
          {item.title}
        </h2>
        <div>
          <p className="text-grayish text-headingText line-clamp-3">
            {item.excerpt}
          </p>
          <button className="mt-4 text-blackish font-semibold flex items-center transition-colors">
            Read More <ArrowRight size={16} className="ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
