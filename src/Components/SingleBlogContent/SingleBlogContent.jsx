"use client";

import Container from "../Container/Container";
import BlogSideBar from "../Utilites/BlogSection/BlogSideBar/BlogSideBar";
import Image from "next/image";
import Global_PageHtml from "../Utilites/Global_PageHtml/Global_PageHtml";
import BlogContact from "../Utilites/BlogSection/BlogContact/BlogContact";
import BlogComments from "../Utilites/BlogSection/BlogComments/BlogComments";


const SingleBlogContent = ({ singleBlog, categories, recommended, popular, tags }) => {



  return (
    <div className="">
      <div className="bg-gradient-to-b from-gray-100 to-white pt-16 pb-10 mt-4">
        <Container>
          <div className="flex flex-col lg:flex-row gap-12">
            <div className=" w-[73%]">
              {/* Header Section */}
              <header className="mb-8">
                <h1 className="text-4xl font-bold mb-2">
                  {singleBlog.title}
                </h1>
                <p className="text-xl text-gray-600">
                  And yes, Google made me do it.
                </p>
              </header>

              {/* Author Section */}
              <section className="flex items-center mb-8">
                <Image
                  src="/assets/person.png" // Replace with actual image path
                  alt="Author Avatar"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div className="ml-4">
                  <p className="font-semibold">{singleBlog?.user?.author}</p>
                  <p className="text-gray-500">
                    Published in {singleBlog?.created_at}
                  </p>
                </div>
              </section>
              {/* image & description */}
              <div>
                <div>
                  <Image src={singleBlog.featured_image} height={1000} width={1000} alt="" />
                </div>
                <div className="servicePage_content">
                  <Global_PageHtml serviceDetails={singleBlog.content} />
                </div>

              </div>

              <div className="space-y-10">
                {/* comments */}
                <BlogComments id={singleBlog.id} />

                {/* <BlogContact /> */}
                <BlogContact />
              </div>

            </div>
            <div className="w-[27%]">
              <BlogSideBar recommended={recommended} popular={popular} singleBlogTags={singleBlog?.tags} />
            </div>

          </div>
        </Container>
      </div>

    </div>
  );
};

export default SingleBlogContent;