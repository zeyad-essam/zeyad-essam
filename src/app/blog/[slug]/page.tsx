import React from "react";

import dbConnect from "@/lib/dbConnect";
import Post from "@/models/posts";
import { BlogData } from "@/types";

import { getMarkdownFileContent } from "@/lib/markdown";

import { notFound } from "next/navigation";
import PostDetails from "@/components/PostDetails";

export async function generateStaticParams() {
  await dbConnect();
  const posts: BlogData[] = await Post.find({});

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  return {
    title: params.slug,
  };
};

const BlogPostPage = async ({ params }: { params: { slug: string } }) => {
  let postData: BlogData | null;
  let markDownFileContent: string;
  try {
    await dbConnect();

    postData = JSON.parse(
      JSON.stringify(await Post.findOne({ slug: params.slug }))
    );

    markDownFileContent = getMarkdownFileContent({
      folder: "blog",
      slug: params.slug,
    });

    if (postData == null) {
      throw new Error("Blog post not found");
    }
  } catch (error) {
    notFound();
  }
  return (
    <>
      <PostDetails postData={postData} markdownContent={markDownFileContent} />
    </>
  );
};

export default BlogPostPage;
