import { ArrowRight, Calendar } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const RecommendedBlogs = ({ recommended }) => {

    return (
        <div className="bg-white p-5 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold mb-4">Recommended Blogs</h3>
            <ul>
                {recommended?.map((feed, index) => {
                    return <div key={feed.id} >
                        <Link href={`/blogs/${feed?.slug}`}>
                            <div className="flex items-center mb-4">
                                <Image
                                    src={feed?.featured_image}
                                    alt={feed?.alt_text}
                                    width={100} // Increased width
                                    height={180} // Increased height
                                    className="mr-4 w-[100px] h-[60px]" // Removed rounded-lg
                                />
                                <div>
                                    <h4 className="text-md font-medium">
                                        {feed?.title && feed.title.length > 35
                                            ? feed.title.slice(0, 35) + '...'
                                            : feed?.title}
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