import { ArrowRight, Calendar, Eye } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const RelevantBlogCard = ({ item }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden pb-0 ">
            <div className="">

                <div className="relative w-full aspect-[3/2]">
                    <Image
                        src={item.featured_image}
                        alt={item.alt_text}
                        layout="fill"
                        objectFit="cover"
                        className=""
                    />
                    {item?.category?.name && (
                        <span className="absolute top-4 left-4 bg-[#FF693B] text-white px-3 py-1 rounded-full text-xs font-semibold">
                            {item.category.name}
                        </span>
                    )}
                </div>


            </div>
            <div className="px-6 pb-0 pt-3 h-[140px]">

                <h3 className="text-[16px] font-bold mb-2 text-gray-800 line-clamp-3 hover:text-[#FF693B] transition-colors">
                    {item.title}
                </h3>
                <div className="flex items-center text-gray-500 mb-2 gap-x-5">
                    <div className="flex items-center text-gray-500 mb-2">
                        <Calendar size={16} className="mr-2" />
                        <span className="text-sm">{item.updated_at}</span>
                    </div>
                    <div className="flex items-center text-gray-500 mb-2">
                        <Eye size={16} className="mr-1" />
                        <span className="text-sm">{item?.views} views</span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default RelevantBlogCard