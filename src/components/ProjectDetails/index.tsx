import React from "react";

import { ProjectData } from "@/types";
import ImageCarousel from "./ImageCarousel";

import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

import styles from "./ProjectDetails.module.css";

const ProjectDetails = ({
  projectData,
  markdownContent,
}: {
  projectData: ProjectData;
  markdownContent: string;
}) => {
  return (
    <section className={styles.project_details}>
      <div className="container">
        <ImageCarousel images={projectData.projectImages} />
        <div className={styles.content_wrapper}>
          <div className="markdown-wrapper">
            <ReactMarkdown
              rehypePlugins={[rehypeRaw]}
              children={markdownContent}
            />
          </div>
          <div className={styles.project_information}>
            <h3>Information</h3>
            <ul>
              <li>
                <h4>Tech Stack</h4>
                <span>{projectData.techStack}</span>
              </li>
              <li>
                <h4>Duration</h4>
                <span>{projectData.duration}</span>
              </li>
              <li>
                <h4>Date</h4>
                <span>
                  {new Date(projectData.date).toISOString().split("T")[0]}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
