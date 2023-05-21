"use client";

import React from "react";

import SectionHeader from "@/components/UI/Section/SectionHeader";

import { BlogData } from "@/types";

import BlogPosts from "@/components/UI/BlogPosts";
import LinkButton from "@/components/UI/LinkButton";

import styles from "./Blog.module.css";

const Blog = ({ blogData }: { blogData: BlogData[] }) => {
  return (
    <section className={styles.blog}>
      <div className="container">
        <SectionHeader tag="Blog Posts" title="Latest Blog Posts" center />
        <BlogPosts blogData={blogData} />
        <div className={styles.view_all}>
          <LinkButton href="/blog" size="medium">
            View All Posts
          </LinkButton>
        </div>
      </div>
    </section>
  );
};

export default Blog;
