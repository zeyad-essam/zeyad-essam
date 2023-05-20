import React from "react";
import Link from "next/link";

import { FileData, BlogData } from "@/lib/markdown";
import LinkButton from "../../LinkButton";

import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

import styles from "./BlogCard.module.css";

const BlogCard = ({ blog }: { blog: FileData<BlogData> }) => {
  return (
    <div className={styles.blog_card}>
      <div className={styles.image_wrapper}>
        <Link href={`/blog/${blog.data.slug}`}>
          <img src={blog.data.thumbnail} alt="blog post thumbnail" />
        </Link>
      </div>
      <div className={styles.content_wrapper}>
        <div className={styles.information}>
          <div className={styles.post_meta}>
            <span>{blog.data.category}</span> -{" "}
            <span className={styles.blog_date}>
              {new Date(blog.data.date).toISOString().split("T")[0]}
            </span>
          </div>
          <h4>
            <Link href={`/blog/${blog.data.slug}`}>{blog.data.title}</Link>
          </h4>
        </div>
        <div>
          <LinkButton size="medium" href={`/blog/${blog.data.slug}`}>
            Read More <KeyboardDoubleArrowRightIcon style={{ fontSize: 24 }} />
          </LinkButton>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
