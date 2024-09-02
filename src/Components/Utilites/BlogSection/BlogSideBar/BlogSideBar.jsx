import React from "react";
import RecommendedBlogs from "../RecommendedBlogs/RecommendedBlogs";
import BlogTags from "../BlogTags/BlogTags";
import PopularBlogs from "../PopularBlogs/PopularBlogs";
import { Search } from "lucide-react";

const BlogSideBar = ({
  selectedCategory,
  selectedTag,
  categories,
  recommended,
  popular,
  tags,
  singleBlogTags,
  onCategorySelect,
  onTagSelect,
  searchTerm,
  handleSearch
}) => {
  return (
    <div>
      <div className="">
        {/* search */}
        <div className="hidden lg:block">
          {handleSearch && (
            <div className="mb-5 bg-white rounded-lg shadow-lg p-4">
              <div className="w-full md:w-[80%] lg:w-[100%]">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search blogs..."
                    className="w-full py-4 text-gray-800 bg-gray-100 border border-gray-300 rounded-lg focus:border-gray-300 focus:outline-none transition-all duration-300"
                    value={searchTerm}
                    onChange={handleSearch}
                  />
                  <button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#FF693B] p-2 rounded-md shadow-md hover:bg-[#e55931] transition-colors duration-300">
                    <Search size={20} className="text-white" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        {/* for lg device */}
        <div className="hidden lg:block">
          {/* Categories */}
          {categories?.length > 0 ? (
            <div className="mb-8 bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Categories
              </h3>
              <div className="flex flex-wrap gap-y-3 gap-x-2">
                <button
                  onClick={() => onCategorySelect(null)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${selectedCategory === null
                      ? "bg-[#FF693B] text-white"
                      : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                    }`}
                >
                  All
                </button>
                {categories?.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => onCategorySelect(category)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${selectedCategory?.slug === category.slug
                        ? "bg-[#FF693B] text-white"
                        : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                      }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            ""
          )}
          <div className="space-y-8">
            {/* PopularBlogs Posts */}
            <PopularBlogs popular={popular} />
            {/* Recommended Posts */}
            <RecommendedBlogs recommended={recommended} />
            <BlogTags
              tags={tags}
              selectedTag={selectedTag}
              onTagSelect={onTagSelect}
              singleBlogTags={singleBlogTags}
            />
          </div>
        </div>
        {/* for small device */}
        <div className="block lg:hidden">
          {/* Categories */}
          {categories?.length > 0 ? (
            <div className="mb-8 bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Categories
              </h3>
              <div className="flex flex-wrap gap-y-3 gap-x-2">
                <button
                  onClick={() => onCategorySelect(null)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${selectedCategory === null
                      ? "bg-[#FF693B] text-white"
                      : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                    }`}
                >
                  All
                </button>
                {categories?.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => onCategorySelect(category)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${selectedCategory?.slug === category.slug
                        ? "bg-[#FF693B] text-white"
                        : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                      }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            ""
          )}
          <div className="space-y-8">
            {/* PopularBlogs Posts */}
            <PopularBlogs popular={popular} />
            {/* Recommended Posts */}
            <RecommendedBlogs recommended={recommended} />
            <BlogTags
              tags={tags}
              selectedTag={selectedTag}
              onTagSelect={onTagSelect}
              singleBlogTags={singleBlogTags}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSideBar;
