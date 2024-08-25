import { ArrowRight, Calendar } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const RecommendedBlogs = () => {
    const posts = [
        {
            title: "Trends And Innovations Of Future",
            date: "22 May 2024",
            image: "/assets/Blog-Image-01.webp",
        },
        {
            title: "The Art Of Cleaning Glass Windows",
            date: "22 May 2024",
            image: "/assets/Blog-Image-01.webp",
        },

    ];
    return (
        <div className="mb-12 bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold mb-6 text-gray-800 border-b-2 border-[#FF693B] pb-2">
                Recommended Posts
            </h3>
            <ul className="space-y-6">
                {posts.map((post, index) => (
                    <li key={index} className="flex items-center cursor-pointer group bg-gray-50 rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl">
                        <div className="relative w-24 h-24 mr-4 overflow-hidden rounded-md">
                            <Image
                                src={post.image}
                                alt={post.title}
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                        <div className="flex-grow p-4">
                            <div className="flex items-center text-sm text-gray-500 mb-1">
                                <Calendar size={14} className="mr-1" />
                                <p>{post.date}</p>
                            </div>
                            <p className="font-semibold text-gray-800 group-hover:text-[#FF693B] transition-colors line-clamp-2">
                                {post.title}
                            </p>
                        </div>
                        <div className="p-4 text-gray-400 group-hover:text-[#FF693B]">
                            <ArrowRight size={20} />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default RecommendedBlogs