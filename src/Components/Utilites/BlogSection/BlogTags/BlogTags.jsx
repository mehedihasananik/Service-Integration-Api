import React from 'react';

const BlogTags = ({ tags, selectedTag, onTagSelect, singleBlogTags }) => {

    const transformedTags = Object.entries(singleBlogTags || {}).map(([id, name]) => ({
        id,
        name
    }));


    return (
        <div>
            {
                tags?.length > 0 && <div className="p-6 bg-white border border-gray-200 rounded-lg">
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
                        {tags?.map((tag) => (
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
                </div>
            }
            {
                transformedTags.length > 0 && <div className="p-6 bg-white border border-gray-200 rounded-lg">
                    <h2 className="text-lg font-semibold mb-4">Tags</h2>
                    <div className="flex flex-wrap gap-2">

                        {transformedTags.map((tag) => (
                            <button
                                key={tag.id}

                                className={`px-4 py-2 rounded-md text-sm font-medium transition-all delay-75 ${selectedTag?.id === tag.id
                                    ? "bg-[#FF693B] text-white"
                                    : "bg-indigo-100 text-indigo-800 hover:bg-[#FF693B] hover:text-white"
                                    }`}
                            >
                                {tag.name}
                            </button>
                        ))}
                    </div>
                </div>
            }

        </div>
    );
};

export default BlogTags;