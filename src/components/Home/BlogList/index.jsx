import React from "react";
import Blog from "../../../Pages/Blog";
import BlogItem from "./BlogItem";
import "./style.css";

const BlogList = ({ blogs }) => {
  return (
    <div className="blogList-wrap">
      {blogs.map((blog) => (
        <BlogItem blog={blog} key={blog.id} />
      ))}
    </div>
  );
};

export default BlogList;
