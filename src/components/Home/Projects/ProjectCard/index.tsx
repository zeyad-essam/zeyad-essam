import React from "react";
import Link from "next/link";

import { FileData, ProjectData } from "@/lib/markdown";

import styles from "./ProjectCard.module.css";

const ProjectCard = ({ project }: { project: FileData<ProjectData> }) => {
  return (
    <div className={styles.project_card}>
      <Link
        className={styles.image_box}
        href={`/projects/${project.data.slug}`}
      >
        <div className={styles.background_overlay}></div>
        <div className={styles.background_image}>
          <img src={project.data.thumbnail} alt="project thumbnail" />
        </div>
        <div className={styles.project_image}>
          <img src={project.data.thumbnail} alt="project_thumbnail" />
        </div>
      </Link>
      <div className={styles.content}>
        <h4>
          <Link href={`/projects/${project.data.slug}`}>
            {project.data.title}
          </Link>
        </h4>
        <p>
          {new Date(project.data.date).toLocaleDateString("en-US", {
            year: "2-digit",
            month: "2-digit",
            day: "2-digit",
          })}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
