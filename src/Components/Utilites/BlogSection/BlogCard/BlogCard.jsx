import { ArrowRight, Calendar } from 'lucide-react';
import Image from 'next/image';
import React from 'react'


const BlogCard = ({ title, date, category, image, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
        />
        <span className="absolute top-4 left-4 bg-[#FF693B] text-white px-3 py-1 rounded-full text-xs font-semibold">
          {category}
        </span>
      </div>
      <div className="p-6">
        <div className="flex items-center text-gray-500 mb-2">
          <Calendar size={16} className="mr-2" />
          <span className="text-sm">{date}</span>
        </div>
        <h3 className="text-xl font-bold mb-2 text-gray-800 line-clamp-2 hover:text-[#FF693B] transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 line-clamp-3">{description}</p>
        <button className="mt-4 text-gray-800 font-semibold flex items-center transition-colors">
          Read More <ArrowRight size={16} className="ml-1" />
        </button>
      </div>
    </div>
  )
}

export default BlogCard