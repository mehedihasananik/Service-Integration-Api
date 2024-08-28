import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const PopularBlogs = ({ popular }) => {

    const truncateText = (text, maxLength) => {
        if (!text) return '';
        return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
    };
    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-6 text-gray-800">
                Popular Blogs
            </h3>
            <ul className="space-y-6">
                {popular?.map((item) => {
                    return <div
                        key={item?.id}

                    >
                        <Link href={`/blogs/${item?.slug}`}>
                            <div className="flex justify-start gap-x-4 cursor-pointer">
                                <Image
                                    src={item?.featured_image}
                                    alt={item?.alt_text}
                                    width={100} // Increased width
                                    height={180} // Increased height
                                    className="w-[100px] h-[60px]" // Removed rounded-lg
                                />
                                <div>
                                    <h4 className="text-md font-medium">
                                        {item?.title && item.title.length > 35
                                            ? item.title.slice(0, 35) + '...'
                                            : item?.title}
                                    </h4>
                                    <div className="text-sm text-gray-500 flex items-center">
                                        <span className="mr-1 text-orange-500">&#x1F4C5;</span> {/* Using date icon */}
                                        {item?.created_at}

                                    </div>
                                </div>

                            </div>
                        </Link>

                    </div>
                })}
            </ul>
        </div>
    );
};

export default PopularBlogs;
