"use client";

import React from "react";

import Section from "@/components/UI/Section";
import SectionHeader from "@/components/UI/Section/SectionHeader";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "./swiperStyles.css";

import { ProjectData, FileData } from "@/lib/markdown";

import styles from "./Projects.module.css";
import Link from "next/link";

const Projects = ({
  projectsData,
}: {
  projectsData: FileData<ProjectData>[];
}) => {
  const swiperOptions: any = {
    slidesPerView: 1,
    spaceBetween: 30,
    freeMode: true,
    modules: [FreeMode, Pagination],
    pagination: {
      dynamicBullets: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 1.5,
      },
      992: {
        slidesPerView: 2,
      },
    },
  };

  return (
    <Section>
      <SectionHeader tag="Portfolio" title="My Complete Projects" />
      <div className={styles.swiper_wrapper}>
        <Swiper className="projects_swiper" {...swiperOptions}>
          {projectsData.map((project) => (
            <SwiperSlide>
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
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Section>
  );
};

export default Projects;
