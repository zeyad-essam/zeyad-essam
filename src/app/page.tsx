import Hero from "@/components/Home/Hero";
import Services from "@/components/Home/Services";
import Skills from "@/components/Home/Skills";
import Projects from "@/components/Home/Projects";
import Blog from "@/components/Home/Blog";

import { getMarkdownFilesData } from "@/lib/markdown";
import dbConnect from "@/lib/dbConnect";
import Post from "@/models/posts";

import { BlogData, ProjectData } from "@/types";

export default async function Home() {
  const projectsData = getMarkdownFilesData<ProjectData>({
    folder: "projects",
  });

  await dbConnect();

  const blogData: BlogData[] = JSON.parse(
    JSON.stringify(await Post.find({}).sort({ date: -1 }).limit(4))
  );

  return (
    <>
      <Hero />
      <Services />
      <Skills />
      <Projects projectsData={projectsData} />
      <Blog blogData={blogData} />
    </>
  );
}
