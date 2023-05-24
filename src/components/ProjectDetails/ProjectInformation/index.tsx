"use client";

import React from "react";

import { ProjectData } from "@/types";

import OpenInNewIcon from "@mui/icons-material/OpenInNew";

import styles from "./ProjectInformation.module.css";

const ProjectInformation = ({ projectData }: { projectData: ProjectData }) => {
  return (
    <div className={styles.project_information}>
      <h3>Information</h3>
      <ul>
        <li>
          <h4>Tech Stack:</h4>
          <span>{projectData.techStack}</span>
        </li>
        <li>
          <h4>Duration:</h4>
          <span>{projectData.duration}</span>
        </li>
        <li>
          <h4>Date:</h4>
          <span>{new Date(projectData.date).toISOString().split("T")[0]}</span>
        </li>
        <li>
          <h4>URL:</h4>
          <span>
            <a href={projectData.url} target="_blank">
              Visit Site
              <OpenInNewIcon style={{ fontSize: 18 }} />
            </a>
          </span>
        </li>
      </ul>
    </div>
  );
};

export default ProjectInformation;
