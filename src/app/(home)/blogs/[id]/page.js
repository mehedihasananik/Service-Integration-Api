import SingleBlogContent from "@/Components/SingleBlogContent/SingleBlogContent";
import React from "react";

const SingleBlog = ({ params }) => {
  return (
    <div>
      <SingleBlogContent params={params} />
    </div>
  );
};

export default SingleBlog;
