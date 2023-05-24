import React from "react";

import { ProjectData } from "@/types";
import ImageCarousel from "./ImageCarousel";

import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

import styles from "./ProjectDetails.module.css";
import ProjectInformation from "./ProjectInformation";

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
          <ProjectInformation projectData={projectData} />
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
