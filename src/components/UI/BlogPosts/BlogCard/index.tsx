"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";

import { BlogData } from "@/types";
import LinkButton from "../../LinkButton";

import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

import styles from "./BlogCard.module.css";

import { motion, useInView, useAnimation } from "framer-motion";

const cardVariants = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, type: "tween" } },
  hidden: { opacity: 0, y: 100 },
};

const BlogCard = ({ blog }: { blog: BlogData }) => {
  const controls = useAnimation();
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <motion.div
      ref={cardRef}
      animate={isInView ? "visible" : ""}
      initial="hidden"
      variants={cardVariants}
      className={styles.blog_card}
    >
      <div className={styles.image_wrapper}>
        <Link href={`/blog/${blog.slug}`}>
          <img src={blog.thumbnail} alt="blog post thumbnail" />
        </Link>
      </div>
      <div className={styles.content_wrapper}>
        <div className={styles.information}>
          <div className={styles.post_meta}>
            <span>{new Date(blog.date).toISOString().split("T")[0]}</span> -{" "}
            <span className={styles.read_time}>{blog.readTime} read</span>
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
    </motion.div>
  );
};

export default BlogCard;
