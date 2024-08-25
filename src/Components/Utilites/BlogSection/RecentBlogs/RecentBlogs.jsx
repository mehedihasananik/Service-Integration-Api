import Image from 'next/image'
import React from 'react'

const RecentBlogs = () => {
    const recentPosts = [
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
        <div className='bg-white rounded-lg shadow-md p-6'>
            <h3 className="text-2xl font-bold mb-6 text-gray-800 border-b-2 border-[#FF693B] pb-2">
                Recent Posts
            </h3>
            <ul className="space-y-4">
                {recentPosts.map((post, index) => (
                    <li
                        key={index}
                        className="flex items-center cursor-pointer"
                    >
                        <div className="relative w-16 h-16 mr-4 overflow-hidden rounded-md">
                            <Image
                                src={post.image}
                                alt={post.title}
                                layout="fill"
                                objectFit="cover"
                                className="transition-transform duration-300 transform hover:scale-110"
                            />
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">{post.date}</p>
                            <p className="font-semibold text-gray-800 hover:text-[#FF693B] transition-colors">
                                {post.title}
                            </p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default RecentBlogs