import React from "react";
import Link from "next/link";

import { BlogData } from "@/lib/markdown";
import LinkButton from "../../LinkButton";

import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

import styles from "./BlogCard.module.css";

const BlogCard = ({ blog }: { blog: BlogData }) => {
  return (
    <div className={styles.blog_card}>
      <div className={styles.image_wrapper}>
        <Link href={`/blog/${blog.slug}`}>
          <img src={blog.thumbnail} alt="blog post thumbnail" />
        </Link>
      </div>
      <div className={styles.content_wrapper}>
        <div className={styles.information}>
          <div className={styles.post_meta}>
            <span>{blog.category}</span> -{" "}
            <span className={styles.blog_date}>
              {new Date(blog.date).toISOString().split("T")[0]}
            </span>
          </div>
          <h4>
            <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
          </h4>
        </div>
        <div>
          <LinkButton size="medium" href={`/blog/${blog.slug}`}>
            Read More <KeyboardDoubleArrowRightIcon style={{ fontSize: 24 }} />
          </LinkButton>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
