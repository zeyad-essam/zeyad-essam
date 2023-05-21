import React from "react";
import Link from "next/link";

import { ProjectData } from "@/types";

import styles from "./ProjectCard.module.css";

const ProjectCard = ({ project }: { project: ProjectData }) => {
  return (
    <div className={styles.project_card}>
      <Link className={styles.image_box} href={`/projects/${project.slug}`}>
        <div className={styles.background_overlay}></div>
        <div className={styles.background_image}>
          <img src={project.thumbnail} alt="project thumbnail" />
        </div>
        <div className={styles.project_image}>
          <img src={project.thumbnail} alt="project_thumbnail" />
        </div>
      </Link>
      <div className={styles.content}>
        <h4>
          <Link href={`/projects/${project.slug}`}>{project.title}</Link>
        </h4>
        <p>{new Date(project.date).toISOString().split("T")[0]}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
