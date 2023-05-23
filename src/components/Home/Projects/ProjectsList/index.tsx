import React from "react";

import { ProjectData } from "@/types";

import styles from "./ProjectsList.module.css";
import ProjectCard from "@/components/UI/ProjectCard";

const ProjectsList = ({ projectsData }: { projectsData: ProjectData[] }) => {
  return (
    <div className={styles.projects_list}>
      {projectsData.map((project) => (
        <div>
          <ProjectCard key={project.slug} project={project} />
        </div>
      ))}
    </div>
  );
};

export default ProjectsList;
