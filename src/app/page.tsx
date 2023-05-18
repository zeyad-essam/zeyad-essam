import Hero from "@/components/Home/Hero";
import Services from "@/components/Home/Services";
import Skills from "@/components/Home/Skills";
import Projects from "@/components/Home/Projects";

import { getMarkdownFilesData, ProjectData } from "@/lib/markdown";

export default async function Home() {
  const projectsData = getMarkdownFilesData<ProjectData>("projects");

  return (
    <>
      <Hero />
      <Services />
      <Skills />
      <Projects projectsData={projectsData} />
    </>
  );
}
