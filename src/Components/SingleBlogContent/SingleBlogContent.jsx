import Image from "next/image";
import { Eye } from "lucide-react";

import Container from "../Container/Container";
import BlogSideBar from "../Utilites/BlogSection/BlogSideBar/BlogSideBar";
import Global_PageHtml from "../Utilites/Global_PageHtml/Global_PageHtml";
import BlogContact from "../Utilites/BlogSection/BlogContact/BlogContact";
import BlogComments from "../Utilites/BlogSection/BlogComments/BlogComments";
import BlogSocialShare from '../Utilites/BlogSection/BlogSocialShare/BlogSocialShare';

const SingleBlogContent = ({ singleBlog, categories, recommended, popular, tags }) => {

  return (
    <div className="relative">
      {/* Sticky Social Share Buttons */}
      <BlogSocialShare />

      <div className="bg-gradient-to-b from-gray-100 to-white pt-16 pb-10 mt-4">
        <Container>
          <header className="mb-8">
            <h1 className="text-[30px] lg:text-[48px] text-[#0F172A] font-bold font-Raleway text-center lg:text-left mb-2">
              {singleBlog.title}
            </h1>
          </header>
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="w-full lg:w-[73%]">
              {/* Header Section */}


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
                    <div className="flex items-center text-gray-500 ">
                      <Eye size={16} className="mr-0" />
                      <span className="text-sm">100 views</span>
                    </div>
                  </div>
                </div>
              </section>

              {/* Image & Description */}
              <div>
                <div>
                  <Image src={singleBlog?.featured_image} height={1000} width={1000} alt="" />
                </div>
                <div className="servicePage_content">
                  <Global_PageHtml serviceDetails={singleBlog.content} />
                </div>
              </div>

              <div className="space-y-10">
                <BlogComments id={singleBlog.id} />
                <BlogContact />
              </div>
            </div>
            <div className="w-full lg:w-[27%] pt-[6%]">
              <BlogSideBar recommended={recommended} popular={popular} singleBlogTags={singleBlog?.tags} />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default SingleBlogContent;