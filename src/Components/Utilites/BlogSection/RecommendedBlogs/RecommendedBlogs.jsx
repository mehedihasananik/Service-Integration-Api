
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const RecommendedBlogs = ({ recommended }) => {

    return (
        <div className="bg-white p-5 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold mb-4">Recommended Blogs</h3>
            <ul>
                {recommended?.slice(0, 5)?.map((feed, index) => {
                    return <div key={feed.id} >
                        <Link href={`/blogs/${feed?.slug}`}>
                            <div className="flex items-center mb-4 gap-x-4 cursor-pointer">
                                <div className="w-[30%] flex items-center">
                                    <div className="relative w-full aspect-[3/2]">
                                        <Image
                                            src={feed?.featured_image}
                                            alt={feed?.alt_text}
                                            layout="fill"
                                            objectFit="cover"
                                            className="rounded-[3px]"
                                        />
                                    </div>
                                </div>

                                <div className='w-[70%]'>
                                    <h4 className="text-md font-medium line-clamp-2">
                                        {feed?.title}
                                    </h4>
                                    <span className="text-sm text-gray-500 flex items-center">
                                        <span className="mr-1 text-orange-500">&#x1F4C5;</span> {/* Using date icon */}
                                        {feed?.created_at}
                                    </span>
                                </div></div>
                        </Link>
                    </div>
                })}
            </ul>
        </div>
    )
}

export default RecommendedBlogs