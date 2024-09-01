"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import RelevantBlogCard from "./RelevantBlogCard";
import Link from "next/link";



const RelevantBlogs = ({ singleBlog }) => {
  const relevantItems = singleBlog?.relevant_posts;

  const breakpoints = {
    320: { slidesPerView: 1, spaceBetween: 10 },
    768: { slidesPerView: 2.2, spaceBetween: 20 },
    1024: { slidesPerView: 3, spaceBetween: 30 },
    1280: { slidesPerView: 2.2, spaceBetween: 30 },
    1336: { slidesPerView: 2.3, spaceBetween: 30 },
    1440: { slidesPerView: 2.4, spaceBetween: 30 },
    1680: { slidesPerView: 2.8, spaceBetween: 30 },
    1700: { slidesPerView: 2.8, spaceBetween: 30 },
    1920: { slidesPerView: 2.7, spaceBetween: 30 },
  };
  return (
    <div>

      {relevantItems.length > 0 && <>
        <h3 className="text-[32px] font-bold md:text-[48px] pb-6 text-center">Relevant Blogs</h3>

        <Swiper
          breakpoints={breakpoints}
          className="mySwiper mySwiper_serviceSlider"
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
        >
          {relevantItems.map((item, index) => (
            <SwiperSlide
              key={item.id}

            >
              <Link href={`/blogs/${item?.slug}`} key={item.id}>
                <RelevantBlogCard item={item} />
              </Link>

            </SwiperSlide>
          ))}
        </Swiper>
      </>}


    </div>
  )
}

export default RelevantBlogs