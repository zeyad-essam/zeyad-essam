import React from "react";

import styles from "./BlogPosts.module.css";
import { BlogData } from "@/types";
import BlogCard from "./BlogCard";

const BlogPosts = ({ blogData }: { blogData: BlogData[] }) => {
  return (
    <div className={styles.blog_posts}>
      {blogData.map((blog) => (
        <BlogCard key={blog.slug} blog={blog} />
      ))}
    </div>
  );
};

export default BlogPosts;
