"use client";

import React from "react";
import LinkButton from "@/components/UI/LinkButton";

import FileDownloadRoundedIcon from "@mui/icons-material/FileDownloadRounded";

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
        </div>
      </div>
      <div className={styles.background}>
        <div className={styles.overlay}></div>
        <div className={styles.image}>
          <img
            src="https://res.cloudinary.com/drru4lsys/image/upload/v1684694996/hero-background.jpg"
            alt="hero background"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
