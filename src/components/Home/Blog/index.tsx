import React from "react";

import SectionHeader from "@/components/UI/Section/SectionHeader";

import styles from "./Blog.module.css";

const Blog = () => {
  return (
    <section className={styles.blog}>
      <SectionHeader tag="Blog Posts" title="Latest Blog Posts" center />
    </section>
  );
};

export default Blog;
