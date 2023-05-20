"use client";

import React from "react";
import LinkButton from "@/components/UI/LinkButton";

import FileDownloadRoundedIcon from "@mui/icons-material/FileDownloadRounded";
import HeroVector from "../../../../public/hero-vector.svg";

import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.hero_inner}>
          <div className={styles.hero_text}>
            <div className={styles.hero_name}>
              <h3>Hello! I'm</h3>
              <h2>
                Zeyad <span>Essam</span>
              </h2>
            </div>
            <p>Full Stack Web Developer specializing in MERN Stack & Next.js</p>
            <LinkButton size="large" href="/api/get-resume" standard>
              Get Resume <FileDownloadRoundedIcon />
            </LinkButton>
          </div>
          <div className={styles.hero_image}>
            <div className={styles.image_wrapper}>
              <HeroVector />
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.hero_shape} ${styles.hero_shape_top}`}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={`${styles.hero_shape} ${styles.hero_shape_bottom}`}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </section>
  );
};

export default Hero;
