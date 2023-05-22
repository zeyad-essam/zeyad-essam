"use client";

import React from "react";
import LinkButton from "@/components/UI/LinkButton";

import FileDownloadRoundedIcon from "@mui/icons-material/FileDownloadRounded";

import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import UpworkIcon from "../../../../public/ui/upwork.svg";

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
            <div className={styles.social_links}>
              <ul>
                <li>
                  <a target="_blank" href="mailto:zeyadessam162@gmail.com">
                    <EmailIcon />
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://github.com/ziadessam162">
                    <GitHubIcon />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/zeyadessam/"
                  >
                    <LinkedInIcon />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://www.upwork.com/freelancers/~016c139fa3effee5af"
                  >
                    <UpworkIcon />
                  </a>
                </li>
              </ul>
            </div>
            <LinkButton size="large" href="/api/get-resume" standard>
              Get Resume <FileDownloadRoundedIcon />
            </LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
