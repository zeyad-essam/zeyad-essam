import React from "react";
import PageHeader from "@/components/UI/PageHeader";
import Section from "@/components/UI/Section";
import SectionHeader from "@/components/UI/Section/SectionHeader";

import dbConnect from "@/lib/dbConnect";
import { BlogData } from "@/types";
import Post from "@/models/posts";
import BlogPosts from "@/components/UI/BlogPosts";

export const metadata = {
  title: "Blog",
  description: "Zeyad's Blog",
};

const BlogPage = async () => {
  await dbConnect();

  const blogData: BlogData[] = JSON.parse(
    JSON.stringify(await Post.find({}).sort({ date: -1 }).limit(4))
  );

  return (
    <>
      <PageHeader
        links={[{ text: "Home", href: "/" }]}
        activeLink="Blog"
        pageTitle="Blog Posts"
      />
      <Section>
        <SectionHeader title="Explore All Blog Posts." />
        <BlogPosts blogData={blogData} />
      </Section>
    </>
  );
};

export default BlogPage;
