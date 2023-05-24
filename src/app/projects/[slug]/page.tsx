import React from "react";

import dbConnect from "@/lib/dbConnect";
import Project from "@/models/projects";
import { ProjectData } from "@/types";

import { getMarkdownFileContent } from "@/lib/markdown";

import { notFound } from "next/navigation";

import ProjectDetails from "@/components/ProjectDetails";

export async function generateStaticParams() {
  await dbConnect();
  const projects = await Project.find({});

  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  return {
    title: params.slug,
  };
};

const ProjectPage = async ({ params }: { params: { slug: string } }) => {
  let projectData: ProjectData | null;
  let markDownFileContent: string;
  try {
    await dbConnect();

    projectData = await Project.findOne({ slug: params.slug });

    markDownFileContent = getMarkdownFileContent({
      folder: "projects",
      slug: params.slug,
    });

    if (projectData == null) {
      throw new Error("Project Is Not Found");
    }
  } catch (error) {
    notFound();
  }

  return (
    <ProjectDetails
      projectData={projectData}
      markdownContent={markDownFileContent}
    />
  );
};

export default ProjectPage;
