import React from "react";

import styles from "./BlogPosts.module.css";
import { BlogData, FileData } from "@/lib/markdown";
import BlogCard from "./BlogCard";

const BlogPosts = ({ blogData }: { blogData: FileData<BlogData>[] }) => {
  return (
    <div className={styles.blog_posts}>
      {blogData.map((blog) => (
        <BlogCard key={blog.data.slug} blog={blog} />
      ))}
    </div>
  );
};

export default BlogPosts;
