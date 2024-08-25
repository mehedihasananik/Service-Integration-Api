import React from 'react';
import Image from 'next/image';
import RecentBlogs from '../RecentBlogs/RecentBlogs';
import RecommendedBlogs from '../RecommendedBlogs/RecommendedBlogs';

const BlogSideBar = ({ selectedCategory }) => {

  return (
    <div>
      <div className="">
        {/* Categories */}
        <div className="mb-8 bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">
            Categories
          </h3>
          <div className="flex flex-wrap gap-y-3 gap-x-2">
            {[
              "All",
              "Doors",
              "Shutters",
              "Windows",
              "Marketing",
              "Sales",
              "Video Tips",
            ].map((category) => (
              <button
                key={category}

                className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${selectedCategory === category ||
                  (category === "All" && !selectedCategory)
                  ? "bg-[#FF693B] text-white"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Recommended Posts */}
        <RecommendedBlogs />

        {/* Recent Posts */}
        <RecentBlogs />
      </div>
    </div>
  );
};

export default BlogSideBar;