"use client";
import Image from "next/image";
import { Eye } from "lucide-react";
import { TbCategoryPlus } from "react-icons/tb";
import { useState, useCallback } from "react";
import BlogSideBar from "../Utilites/BlogSection/BlogSideBar/BlogSideBar";
import Global_PageHtml from "../Utilites/Global_PageHtml/Global_PageHtml";
import BlogContact from "../Utilites/BlogSection/BlogContact/BlogContact";
import BlogComments from "../Utilites/BlogSection/BlogComments/BlogComments";
import BlogSocialShare from "../Utilites/BlogSection/BlogSocialShare/BlogSocialShare";
import BlogViewCount from "../Utilites/BlogSection/BlogViewCount/BlogViewCount";
import RelevantBlogs from "../Utilites/BlogSection/RelevantBlogs/RelevantBlogs";
import BlogBreadCrumb from "../Utilites/BlogSection/BlogBreadCrumb/BlogBreadCrumb";
import { useRouter } from "next/navigation";
import BlogTags from "../Utilites/BlogSection/BlogTags/BlogTags";
import ElegantSubscribeModal from "../Utilites/BlogSection/ElegantSubscribeModal/ElegantSubscribeModal";
import BlogFixedModal from "../Utilites/BlogSection/BlogFixedModal/BlogFixedModal";

const SingleBlogContent = ({
  singleBlog,
  categories,
  recommended,
  popular,
  tags,
  params,
  comments,
}) => {
  const [openModal, setOpenModal] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const router = useRouter();

  const handleCategoryClick = (category) => {
    router.push(`/blogs?category=${category.slug}`);
  };

  const handleImageLoad = useCallback(() => {
    setImageLoaded(true);
  }, []);

  return (
    <div className="relative">
      {/* Sticky Social Share Buttons */}
      <div className="hidden xl:block">
        <BlogSocialShare />
      </div>

      <div className="bg-gradient-to-b from-gray-100 to-white md:pt-10 pt-4 md:pb-10 md:mt-4">
        <div className="max-w-[1520px] mx-auto px-[6%] md:px-[4%] xl:px-[3.5%] xxl:px-[5%] 4xl:px-[4%]">
          <BlogBreadCrumb />
          <header className="pt-2 pb-2">
            <h1 className="text-[25px] lg:text-[48px] text-[#0F172A] font-bold font-Raleway text-center lg:text-left mb-2">
              {singleBlog.title}
            </h1>
          </header>
          <div className="flex items-center gap-x-3 pb-6">
            <div className="flex items-center bg-gradient-to-r from-blue-50 to-indigo-50 rounded-md px-2 py-2 shadow-sm">
              <TbCategoryPlus className="w-5 h-5 text-indigo-500 mr-2" />
              <span className="font-medium text-gray-700">Category:</span>
              <button
                className="ml-2 font-semibold text-indigo-600"
                onClick={() => handleCategoryClick(singleBlog?.category)}
              >
                {singleBlog?.category?.name}
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-0 xl:flex-row xl:gap-12">
            <div className="w-full xl:w-[73%]">
              {/* Author Section */}
              <section className="flex items-center mb-8">
                <Image
                  src={singleBlog?.user?.avatar || ""}
                  alt="Author Avatar"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div className="ml-4">
                  <p className="font-semibold">{singleBlog?.user?.author}</p>
                  <div className="flex items-center gap-x-3">
                    <p className="text-gray-500">
                      Published in {singleBlog?.created_at}
                    </p>
                    <div className="flex flex-wrap justify-center items-center text-gray-500 gap-x-1 ">
                      <Eye size={16} className="mr-0" />
                      <span className="text-sm">{singleBlog?.views} views</span>
                    </div>
                  </div>
                </div>
              </section>

              {/* Image & Description */}
              <div>
                <div className="relative w-full aspect-[3/2] mt-4">
                  <div
                    className={`absolute inset-0 bg-gray-200 animate-pulse ${
                      imageLoaded ? "hidden" : "block"
                    }`}
                  ></div>
                  <Image
                    src={singleBlog?.featured_image}
                    alt={singleBlog?.title || "Blog featured image"}
                    layout="fill"
                    objectFit="cover"
                    className={`transition-opacity duration-300 ${
                      imageLoaded ? "opacity-100" : "opacity-0"
                    }`}
                    onLoad={handleImageLoad}
                  />
                </div>
                <div className="servicePage_content">
                  <Global_PageHtml serviceDetails={singleBlog.content} />
                </div>
                <div className="block xl:hidden pt-2">
                  <BlogSocialShare />
                </div>
              </div>
            </div>
            <div className="w-full xl:w-[27%] md:pt-[6%]">
              <BlogSideBar recommended={recommended} popular={popular} />
              <BlogFixedModal />
            </div>
          </div>
          <div>
            <BlogTags singleBlogTags={singleBlog?.tags} />
          </div>
          <div className="">
            <RelevantBlogs singleBlog={singleBlog} />
            <div className="space-y-10 pt-5">
              <BlogComments id={singleBlog?.id} comments={comments} />
              <BlogContact id={singleBlog?.id} />
            </div>
          </div>
        </div>
        <BlogViewCount params={params} />
        <ElegantSubscribeModal isOpen={openModal} setOpenModal={setOpenModal} />
      </div>
    </div>
  );
};

export default SingleBlogContent;
