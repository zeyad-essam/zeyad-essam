"use client";

import React from "react";

import { BlogData } from "@/types";

import Section from "../UI/Section";

import PersonIcon from "@mui/icons-material/Person";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

import styles from "./PostDetails.module.css";

const PostDetails = ({
  postData,
  markdownContent,
}: {
  postData: BlogData;
  markdownContent: string;
}) => {
  return (
    <Section>
      <div className={styles.post_info}>
        <span className={styles.read_time}>{postData.readTime} Read</span>
        <div className={styles.author_and_date}>
          <span>
            <PersonIcon style={{ fontSize: 24 }} />
            By {postData.author}
          </span>
          <span>
            <CalendarMonthIcon style={{ fontSize: 24 }} />
            {new Date(postData.date).toISOString().split("T")[0]}
          </span>
        </div>
      </div>
      <div className="markdown-wrapper">
        <ReactMarkdown rehypePlugins={[rehypeRaw]} children={markdownContent} />
      </div>
    </Section>
  );
};

export default PostDetails;
