import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const PopularBlogs = ({ popular }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-6 text-gray-800">
                Popular Blogs
            </h3>
            <div className="space-y-6">
                {popular?.slice(0, 5)?.map((item) => {
                    return <div
                        key={item?.id}

                    >
                        <Link href={`/blogs/${item?.slug}`}>
                            <div className="flex justify-start gap-x-4 cursor-pointer">
                                <div className="w-[30%] flex items-center">
                                    <div className="relative w-full aspect-[3/2]">
                                        <Image
                                            src={item?.featured_image}
                                            alt={item?.alt_text}
                                            layout="fill"
                                            objectFit="cover"
                                            className="rounded-[3px]"
                                        />
                                    </div>
                                </div>

                                <div className='w-[70%]'>
                                    <h4 className="text-md font-medium line-clamp-2" >
                                        {item?.title}
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
            </div>
        </div>
    );
};

export default PopularBlogs;
