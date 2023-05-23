import React from "react";
import PageHeader from "@/components/UI/PageHeader";
import Section from "@/components/UI/Section";
import SectionHeader from "@/components/UI/Section/SectionHeader";

import dbConnect from "@/lib/dbConnect";
import { ProjectData } from "@/types";
import Project from "@/models/projects";

import ProjectsList from "@/components/Home/Projects/ProjectsList";

export const metadata = {
  title: "Projects",
  description: "Zeyad's portfolio projects",
};

const ProjectsPage = async () => {
  await dbConnect();

  const projectsData: ProjectData[] = JSON.parse(
    JSON.stringify(await Project.find({}).sort({ date: -1 }))
  );

  return (
    <>
      <PageHeader
        links={[{ text: "Home", href: "/" }]}
        activeLink="Projects"
        pageTitle="Projects"
      />
      <Section>
        <SectionHeader tag="Portfolio" title="Portfolio Projects" />
        <ProjectsList projectsData={projectsData} />
      </Section>
    </>
  );
};

export default ProjectsPage;
