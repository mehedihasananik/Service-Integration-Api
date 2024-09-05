"use client"
import React, { useState } from 'react';

const BlogTags = ({ tags, selectedTag, onTagSelect, singleBlogTags }) => {
    const [showAllTags, setShowAllTags] = useState(false);

    const transformedTags = Object.entries(singleBlogTags || {}).map(([id, name]) => ({
        id,
        name
    }));

    const displayTags = showAllTags ? tags : tags?.slice(0, 12);


    const handleShowMore = () => {
        setShowAllTags(true);
    };

    return (
        <div>
            {tags?.length > 0 && (
                <div className="p-6 bg-white border border-gray-200 rounded-lg">
                    <h2 className="text-lg font-semibold mb-4">Tags</h2>
                    <div className="flex flex-wrap gap-2">
                        <button
                            onClick={() => onTagSelect(null)}
                            className={`px-4 py-2 rounded-md text-sm font-medium transition-all delay-75 ${selectedTag === null
                                ? "bg-[#FF693B] text-white"
                                : "bg-indigo-100 text-indigo-800 hover:bg-[#FF693B] hover:text-white"
                                }`}
                        >
                            All
                        </button>
                        {displayTags?.map((tag) => (
                            <button
                                key={tag?.id}
                                onClick={() => onTagSelect(tag)}
                                className={`px-4 py-2 rounded-md text-sm font-medium transition-all delay-75 ${selectedTag?.id === tag.id
                                    ? "bg-[#FF693B] text-white"
                                    : "bg-indigo-100 text-indigo-800 hover:bg-[#FF693B] hover:text-white"
                                    }`}
                            >
                                {tag?.name}
                            </button>
                        ))}

                    </div>
                    <div className='flex justify-center pt-8'>
                        {!showAllTags && tags?.length > 20 && (
                            <button
                                onClick={handleShowMore}
                                className="px-4 py-2 rounded-md text-sm font-medium bg-[#0C2E87] text-white  hover:bg-[#FF693B] hover:text-white transition-all delay-100"
                            >
                                Show More
                            </button>
                        )}
                    </div>
                </div>
            )}

            {transformedTags.length > 0 && (
                <div className="py-6 ">
                    <h2 className="text-lg font-semibold mb-4">Tags</h2>
                    <div className="flex  flex-wrap gap-2">
                        {transformedTags.map((tag) => (
                            <span
                                key={tag.id}
                                className={`px-4 py-2 rounded-md text-sm font-medium transition-all delay-75 ${selectedTag?.id === tag.id
                                    ? "bg-[#FF693B] text-white"
                                    : "bg-indigo-100 text-indigo-800 hover:bg-[#FF693B] hover:text-white"
                                    }`}
                            >
                                {tag.name}
                            </span>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default BlogTags;